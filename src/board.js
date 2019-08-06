const { Rover } = require('./rover')
const { ViewableBoard } = require('./view')
const { commandsLUT } = require('./config')
const { compareNDArrays, generatePositionInGrid, generateRandomInt, generatePseudoRandomName } = require('./utilities')

class Board extends ViewableBoard {
    constructor(tiles = 10) {
        super()
        this.width = tiles
        this.turn = 0
        this.player = undefined
        this.rovers = []
        this.roverCommands = []
        this.playerCommands = undefined
        this.obstacles = []
        this.initialize()
        this.silenceRovers = false
    }

    occupiedPositions() {
        return this.obstacles.concat(this.rovers.map(rover => rover.position)).concat([this.player.position])
    }

    _randomValidSpawnPoint() {
        let position = generatePositionInGrid(this.width, 5, 5)
        let occupiedPositions = this.occupiedPositions()
        while (occupiedPositions.some(occupied => compareNDArrays(occupied, position))) {
            return this._randomValidSpawnPoint()
        }
        return position
    }

    _randomCommandsList() {
        return Array.from({ length: this.playerCommands.length }, () => Object.values(commandsLUT)[generateRandomInt(3)])
    }

    initialize(roverCount = 3, obstacleCount = 5) {
        this.player = new Rover('Mega Star', [this.width / 2, this.width / 2], 0, this)
        this.rovers = []
        this.obstacles = []

        for (let i = 0; i < roverCount; i++) {
            this.rovers.push(new Rover(generatePseudoRandomName(), this._randomValidSpawnPoint(), generateRandomInt(3), this))
        }

        for (let i = 0; i < obstacleCount; i++) {
            this.obstacles.push(this._randomValidSpawnPoint())
        }
    }

    play(playerCommands) {
        this.playerCommands = this._parseCommands(playerCommands)
        this.roverCommands = Array.from({ length: this.rovers.length }, () => this._randomCommandsList())
        this.timer = setInterval(this.update.bind(this), 5000)

        for (let i = 0; i < this.playerCommands.length; i++) {
            this.update()
        }
    }

    update() {
        this.displayTurnStart()
        this.display()
        this.player[this.playerCommands[this.turn]]()

        for (let i = 0; i < this.rovers.length; i++) {
            this.rovers[i][this.roverCommands[i][this.turn]]()
        }

        this.display()
        this.displayTurnEnd()
        this.turn++;
    }

    validMove(pos) {
        // Not out of Bounds
        pos.forEach((coordinate) => {
            if (this.width <= coordinate || coordinate < 0) {
                throw new Error('Out of bounds move.')
            }
        })

        // Collides with any rovers
        this.rovers.concat([this.player]).forEach(rover => {
            if (rover.position[0] === pos[0] && rover.position[1] === pos[1]) {
                throw new Error('Space is occupied by another rover.')
            }
        })

        // Collides with any obstacles
        this.obstacles.forEach(obstacle => {
            if (obstacle[0] === pos[0] && obstacle[1] === pos[1]) {
                throw new Error('Space is occupied by an obstacle!')
            }
        })

        return pos
    }

    _parseCommands(commands) {
        return commands.trim().split('').map((command) => commandsLUT[command]).filter(element => element !== undefined)
    }
}

module.exports = { Board }