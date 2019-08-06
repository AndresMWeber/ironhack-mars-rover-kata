const { Rover } = require('./rover')
const { commandsLUT } = require('./config')
const { compareNDArrays, generatePositionInGrid, generateRandomInt, generatePseudoRandomName } = require('./utilities')

class Board {
    constructor(tiles = 10) {
        this.width = tiles
        this.gameOver = false
        this.turn = 0
        this.player = undefined
        this.rovers = []
        this.roverCommands = []
        this.playerCommands = undefined
        this.obstacles = []
        this.initialize()
        this.silenceRovers = false
        this.messageHistory = []
        this.messageObservers = []
    }

    addObserver(observer) {
        this.messageObservers.push(observer)
    }

    pushMessage(message) {
        this.messageObservers.forEach(observer => observer.notify(message))
        this.messageHistory.push(message)
    }

    initializeCommands(playerCommands) {
        this.playerCommands = this._parseCommands(playerCommands)
        this.roverCommands = Array.from({ length: this.rovers.length }, () => this._randomCommandsList())
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

    takeTurn() {
        if (this.turn >= this.playerCommands.length) {
            this.gameOver = true
        } else {
            this.player[this.playerCommands[this.turn]]()

            for (let i = 0; i < this.rovers.length; i++) {
                this.rovers[i][this.roverCommands[i][this.turn]]()
            }
            this.turn++;
        }
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