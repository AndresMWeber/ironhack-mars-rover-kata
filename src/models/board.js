const { Rover } = require('./rover')
const { Observable, compareNDArrays, generatePositionInGrid, generateRandomInt, generatePseudoRandomName } = require('../utilities')
const { GRID_SPRITE_TEMPLATE, SPRITE } = require('../ascii-config')
const { commandsLUT } = require('../config')


class Board extends Observable {
    constructor(tiles = 10, roverCount = 3, obstacleCount = 5) {
        super()
        this.width = (tiles >= 8 && tiles <= 20) ? tiles + (tiles % 2) : 10
        this.grid = this.generateEmptyGrid()

        this.player = undefined
        this.rovers = []
        this.obstacles = []

        this.initialize(roverCount, obstacleCount)
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

    occupiedPositions() {
        return this.obstacles.concat(this.rovers.map(rover => rover.position)).concat([this.player.position])
    }

    initialize(roverCount, obstacleCount) {
        this.player = new Rover('Starlord', [this.width / 2, this.width / 2], 0, this)
        this.rovers = Array.from({ length: roverCount }, () => new Rover(generatePseudoRandomName(), this._generateRandomValidSpawnPoint(), generateRandomInt(3), this))
        this.obstacles = Array.from({ length: obstacleCount }, () => this._generateRandomValidSpawnPoint())

        this.obstacles.map(position => this.updateGridPosition(position))
        this.rovers.map(rover => this.updateGridPosition(rover.position, rover))
    }

    tick(playerCommand, enemyRoverCommands) {
        this.takeRoverTurn(this.player, playerCommand)
        this.rovers.map((rover, i) => this.takeRoverTurn(rover, enemyRoverCommands[i]))
    }

    takeRoverTurn(rover, command) {
        if (commandsLUT[command]) {
            this.clearGridPosition(rover.position)
            rover[command]()
            this.updateGridPosition(rover.position, rover)
        } else {
            throw new Error(`Invalid rover command specified ${command}`)
        }
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

    _generateRandomValidSpawnPoint() {
        //TODO: This is super badly implemented.
        let position = generatePositionInGrid(this.width, this.player.position[0], this.player.position[1])
        let occupiedPositions = this.occupiedPositions()
        while (occupiedPositions.some(occupied => compareNDArrays(occupied, position))) {
            return this._generateRandomValidSpawnPoint()
        }
        return position
    }
}

module.exports = { Board }