const { Rover } = require('./rover')
const { commandsLUT, GRID_SPRITE_TEMPLATE, SPRITE } = require('./config')
const { compareNDArrays, generatePositionInGrid, generateRandomInt, generatePseudoRandomName } = require('./utilities')

class Board {
    constructor(tiles = 10) {
        this.width = tiles + (tiles % 2)
        this.grid = this.generateEmptyGrid()
        this.gameOver = false
        this.turn = 0

        this.player = undefined
        this.playerCommands = undefined
        this.rovers = []
        this.roverCommands = []
        this.obstacles = []
        this.messageObservers = []
        this.initialize()
    }

    generateEmptyGrid() {
        return Array.from({ length: this.width }, () => Array.from({ length: this.width }, () => undefined))
    }

    generateTravelLogBoard() {
        let board = this.generateEmptyGrid()
        let rovers = this.rovers.concat([this.player])
        rovers.map((rover) => {
            rover.ascii_override = GRID_SPRITE_TEMPLATE.replace(SPRITE, rover.name[0])
            rover.travel_log.map((position) => board[position[0]][position[1]] = rover)
        })
        return board
    }

    initializeCommands(playerCommands) {
        this.playerCommands = this._parseCommands(playerCommands)
        this.roverCommands = Array.from({ length: this.rovers.length }, () => this._generateRandomCommandList())
    }

    occupiedPositions() {
        return this.obstacles.concat(this.rovers.map(rover => rover.position)).concat([this.player.position])
    }

    initialize(roverCount = 3, obstacleCount = 5) {
        this.player = new Rover('Starlord', [this.width / 2, this.width / 2], 0, this)
        this.rovers = Array.from({ length: roverCount }, () => new Rover(generatePseudoRandomName(), this._generateRandomValidSpawnPoint(), generateRandomInt(3), this))
        this.obstacles = Array.from({ length: obstacleCount }, () => this._generateRandomValidSpawnPoint())

        this.obstacles.map(position => this.updateGridPosition(position))
        this.rovers.map(rover => this.updateGridPosition(rover.position, rover))
    }

    tick() {
        this.takeRoverTurn(this.player, this.playerCommands)
        this.rovers.map((rover, index) => this.takeRoverTurn(rover, this.roverCommands[index]))
        this.turn++;
        this.gameOver = (this.turn >= this.playerCommands.length)
    }

    takeRoverTurn(rover, commandsList) {
        this.clearGridPosition(rover.position)
        rover[commandsList[this.turn]]()
        this.updateGridPosition(rover.position, rover)
    }

    updateGridPosition(position, object = 'obstacle') {
        this.grid[position[0]][position[1]] = object
    }

    clearGridPosition(position) {
        this.grid[position[0]][position[1]] = undefined
    }

    validMove(pos) {
        pos.forEach((coordinate) => {
            if (this.width <= coordinate || coordinate < 0) {
                throw new Error('Out of bounds move.')
            }
        })

        if (this.grid[pos[0]][pos[1]] !== undefined) throw new Error('Space is occupied.')

        return pos
    }

    addObserver(observer) {
        this.messageObservers.push(observer)
    }

    pushMessage(message) {
        this.messageObservers.map(observer => observer.notify(message))
    }

    _parseCommands(commands) {
        return commands.trim().split('').map((command) => commandsLUT[command]).filter(element => element !== undefined)
    }

    _generateRandomValidSpawnPoint() {
        let position = generatePositionInGrid(this.width, this.player.position[0], this.player.position[1])
        let occupiedPositions = this.occupiedPositions()
        while (occupiedPositions.some(occupied => compareNDArrays(occupied, position))) {
            return this._generateRandomValidSpawnPoint()
        }
        return position
    }

    _generateRandomCommandList() {
        return Array.from({ length: this.playerCommands.length }, () => Object.values(commandsLUT)[generateRandomInt(3)])
    }

}

module.exports = { Board }