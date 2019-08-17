import { UserInterface } from './ui'
import { removeFromString } from '../utilities'
import { sprite } from './sprite'

export class HtmlUI extends UserInterface {
    constructor(gameController) {
        super(gameController)
        this.pause_delta = new Date()
        this.canvas = document.getElementById('canvas')
        this.context = this.canvas.getContext('2d')
        this.canvas.height = 10 * 32
        this.canvas.width = 10 * 32

        this.loadedResources = 0
        this.images = []
        this.spriteSourcesNum = 5
        this.sprites = []
        this.bindScreenKeys(this)
    }

    initializeImages(sources) {
        sources.map(source => {
            let image = new Image()
            image.src = source
            image.onload = this.resourcesLoaded.bind(this)
            this.images.push(image)
        })
    }

    resourcesLoaded() {
        this.loadedResources++;
        if (this.loadedResources === this.spriteSourcesNum) {
            this.images.map(image => {
                this.sprites.push(sprite({
                    context: this.context,
                    width: 128,
                    height: 32,
                    x: 0,
                    y: 0,
                    image: image,
                    numberOfFrames: image.src.includes('Rover') ? 4 : 1,
                    ticksPerFrame: 50
                }))
            })
            this.setTimer()
        }
    }

    start() {
        this.initializeImages([
            [4, '../../media/images/Rover-Down.png'],
            [4, '../../media/images/Rover-Up.png'],
            [4, '../../media/images/Rover-Right.png'],
            [4, '../../media/images/Rover-Left.png'],
            [1, '../../media/images/Obstacle.png'],
            [1, '../../media/images/Sand.png']
        ])
    }

    update() {
        if (!this.paused) {
            this.clearScreen()
            this.preDraw()
            this.drawGrid()
            this.postDraw()
            this.render()
            this.isGameOver()
        }
        requestAnimationFrame(this.update.bind(this))
    }

    onGameOver() {
        return null
    }

    render() {
        this.sprites.map((sprite, i) => {
            sprite.x = i * 32
            sprite.y = i * 32

            sprite.update();
            sprite.render();
        })
        this.sprites[0].render()
    }

    renderGrid(grid) {
        let renderedGrid = grid.map((row) => row.map((entry) => this.renderGridSpace(entry)))
        this.gameController.addLogLine(renderedGrid.map((row) => removeFromString(row.join(' '), ['{/}', '{#5f5f00-fg}', '{#98e85a-fg}'])))
        return renderedGrid
    }

    renderGridSpace(entry) {
        // return gridSpriteRenderer[typeof (entry)] || entry.ascii_override || entry.ascii_sprite
        return null
    }

    drawMessage(message) {
        return null
    }

    drawGrid() {
        let grid = this.renderGrid(this.gameController.board.grid)
        for (let i = 0; i < grid.length; i++) {
            // this.gameContainer.setLine(i, `{center} ${grid[i].join(' ')} {/center}`)
        }
    }

    clearScreen() {
        return null
    }

    bindScreenKeys(ui) {
        document.addEventListener('keydown', (e) => {
            if (e.key == ' ' || e.key == 'p') ui.pause()
        });
    }
}