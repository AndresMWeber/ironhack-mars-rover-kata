const { roverRender } = require('./config')
const { UserInterface } = require('./ui')


class ViewableBoard {
    constructor(consoleOutput, messageHandler) {
        this.ui = new UserInterface()
        this.consoleOutput = consoleOutput
        this.messageHandler = messageHandler
        this.grid = this.generateBoardGrid()
        this.timer = null
    }

    generateBoardGrid() {
        const grid = new Array(this.width).fill('[   ]');
        for (var i = 0; i < grid.length; i++) {
            grid[i] = new Array(this.width).fill('[   ]');
        }
        return grid
    }

    printToScreen(message) {
        if (this.consoleOutput && message) this.messageHandler(message)
    }

    updateGridWithRoverTravelLog(rover) {
        rover = (rover === undefined) ? this.player : rover
        rover = (typeof (rover) === 'Number') ? this.rovers[rover] : rover
        let grid = this.generateBoardGrid()
        rover.travel_log.forEach(position => grid[position[1]][position[0]] = `[ ${rover.name[0]} ]`)
        this.grid = grid
    }

    displayGrid(grid) {
        grid.forEach(row => this.printToScreen(row.join(' ')))
    }

    displayTurnStart() {
        this.printToScreen(`TURN ${this.turn + 1}    -    NUM PLAYERS: ${this.rovers.length + 1}`)
    }

    display() {
        let grid = this.generateBoardGrid()
        this.rovers.forEach(rover => grid[rover.position[1]][rover.position[0]] = `[ ${rover.name[0]} ]`)
        this.obstacles.forEach(obstacle => grid[obstacle[1]][obstacle[0]] = `[ @ ]`)
        grid[this.player.position[1]][this.player.position[0]] = `[ ${roverRender[this.player.direction]} ]`
        this.displayGrid(grid)
        this.ui.renderGrid(grid)
    }

    displayTurnEnd() {
        this.printToScreen('----------------------------\n')
    }
}

module.exports = {
    ViewableBoard
}