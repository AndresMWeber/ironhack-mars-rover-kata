const { UserInterface } = require('./ui')
const { removeFromString } = require('../utilities')
const { directionLUT } = require('../sprite-config')
const { gridSpriteRenderer } = require('../ascii-config')
const PIXI = require('pixi-shim')
const { Smoothie } = require('./smoothie')


var Sprite = PIXI.Sprite,
    AnimatedSprite = PIXI.AnimatedSprite

const labelData = {
    fontFamily: 'Press Start 2P',
    fontSize: 6,
    fill: 'purple',
    align: 'right',
}


class HtmlUI extends UserInterface {
    constructor(gameController) {
        super(gameController)
        this.pause_delta = new Date()

        this.rovers = []
        this.player = undefined
        this.obstacles = []
        this.spacing = 32

        this.firstRun = true
        this.pixiSprites = {}


        this.app = new PIXI.Application({
            width: this.spacing * 10, // default: 800
            height: this.spacing * 10, // default: 600
            antialias: true, // default: false
            transparent: true, // default: false
            resolution: 1 // default: 1
        })
        this.smoothie = new Smoothie({
            engine: this.app,
            renderer: this.app.renderer,
            root: this.app.stage,
            fps: 10,
            update: this.update.bind(this)
        });

        document.getElementById('gameBoard').appendChild(this.app.view)
        this.messageLog = document.getElementById('messageLog')
        this.bindScreenKeys(this)
    }

    initializeImages() {
        PIXI.loader
            .add("../../media/images/mars.json")
            .load(this.resourcesLoaded.bind(this))
    }

    resourcesLoaded() {
        let id = PIXI.loader.resources["../../media/images/mars.json"].textures;

        this.app.stage.addChild(new PIXI.TilingSprite(id['Sand.png'], this.app.screen.width, this.app.screen.height))


        let player = this.gameController.board.player
        this.player = { 'object': player, 'sprites': {} }
        Object.values(directionLUT).map(direction => {
            let playerSprite = new AnimatedSprite([0, 1, 2, 3].map(i => id[`rover.player.${direction}.${i}.png`]))
            let [y, x] = player.position
            playerSprite.x = x * this.spacing
            playerSprite.y = y * this.spacing
            playerSprite.animationSpeed = .2
            playerSprite.play()
            this.app.stage.addChild(playerSprite)
            this.player.sprites[direction] = playerSprite
        })
        this.player.label = new PIXI.Text(this.player.object.name, labelData)
        this.player.label.anchor.set(0.5, 0.5);
        this.app.stage.addChild(this.player.label)

        this.gameController.board.obstacles.map(obstacle => {
            let obstacleSprite = new Sprite(id["Obstacle.png"]);
            let [y, x] = obstacle
            obstacleSprite.x = x * this.spacing
            obstacleSprite.y = y * this.spacing
            this.app.stage.addChild(obstacleSprite)
            this.obstacles.push({ 'object': obstacle, 'sprite': obstacleSprite })
        })

        this.gameController.board.rovers.map(rover => {
            let roverData = { 'object': rover, 'sprites': {} }
            Object.values(directionLUT).map(direction => {
                let roverSprite = new AnimatedSprite([0, 1, 2, 3].map(i => id[`rover.${direction}.${i}.png`]))
                let [y, x] = rover.position
                roverSprite.x = x * this.spacing
                roverSprite.y = y * this.spacing
                this.app.stage.addChild(roverSprite)
                roverData.sprites[direction] = roverSprite
                roverSprite.animationSpeed = .2
                roverSprite.play()
            })

            roverData.label = new PIXI.Text(roverData.object.name, Object.assign(labelData, { 'fill': 'darkRed' }))
            roverData.label.anchor.set(0.5, 0.5)
            this.app.stage.addChild(roverData.label)
            this.rovers.push(roverData)
        })
        this.smoothie.start()
    }

    start() {
        document.addEventListener('DOMContentLoaded', () => this.initializeImages())
    }

    update() {
        if (!this.paused) {
            this.preDraw()
            this.drawGrid()
            this.render()
            this.postDraw()
            this.isGameOver()
            this.lastTurn = this.gameController.turn
        }
        this.firstRun = false
    }

    onGameOver() {
        return null
    }

    render() {
        this.lastTurn !== this.gameController.turn && this.renderGrid(this.gameController.board.grid)
    }

    renderGrid(grid) {
        let renderedGrid = grid.map((row) => row.map((entry) => this.renderGridSpace(entry)))
        this.gameController.addLogLine(renderedGrid.map((row) => removeFromString(row.join(' '), ['{/}', '{#5f5f00-fg}', '{#98e85a-fg}'])))
        return renderedGrid
    }

    renderGridSpace(entry) {
        return gridSpriteRenderer[typeof(entry)] || entry.ascii_override || entry.ascii_sprite
    }

    drawMessage(message) {
        let p = document.createElement("P")
        let t = document.createTextNode(message)
        p.appendChild(t)
        this.messageLog.appendChild(p)
        this.messageLog.scrollTop = p.offsetTop
    }

    drawGrid() {
        this.rovers.concat([this.player]).map(roverData => {
            Object.values(directionLUT).map(direction => {
                let rover = roverData.object
                let sprite = roverData.sprites[direction]
                let label = roverData.label
                directionLUT[rover.direction] === direction ? sprite.visible = true : sprite.visible = false
                sprite.x = rover.x * this.spacing
                sprite.y = rover.y * this.spacing
                label.x = sprite.x + this.spacing / 2
                label.y = sprite.y + this.spacing
            })
        })
    }

    bindScreenKeys(ui) {
        document.addEventListener('keydown', (e) => {
            if (e.key == ' ' || e.key == 'p') ui.pause()
            if (e.key == 'w') this.gameController.update('f')
            if (e.key == 'a') this.gameController.update('l')
            if (e.key == 's') this.gameController.update('b')
            if (e.key == 'd') this.gameController.update('r')
        });
    }
}

module.exports = {
    HtmlUI
}