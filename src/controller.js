const { roverRender } = require('./config')
const { UserInterface } = require('./ui')
const { Board } = require('./board')


class GameController {
    constructor(boardSize, consoleOutput = false, messageHandler = undefined) {
        this.timer = null
        this.ui = new UserInterface()
        this.board = new Board(boardSize)
        this.board.addObserver(this)
        this.grid = this.generateBoardGrid()
        this.consoleOutput = consoleOutput
        this.messageHandler = messageHandler || this.ui.message
    }

    generateBoardGrid() {
        const grid = new Array(this.board.width).fill('[   ]');
        for (var i = 0; i < grid.length; i++) {
            grid[i] = new Array(this.board.width).fill('[   ]');
        }
        return grid
    }

    notify(message) {
        this.ui.notice(message)
    }

    play(playerCommands) {
        if (!this.timer) {
            this.reset()
            this.timer = setInterval(this.update.bind(this), 2000)
        }
        this.board.initializeCommands(playerCommands)
    }

    reset() {
        this.board.initialize()
    }

    update() {
        if (this.board.gameOver) {
            clearInterval(this.timer)
            this.timer = null
            this.notify('GAME OVER')
            return
        }
        this.ui.clearScreen()
        this.displayTurnStart()
        this.board.takeTurn()
        this.updateGrid()
        this.ui.drawGrid(this.grid)
        this.displayTurnEnd()
        this.ui.render()
    }

    displayTurnStart() {
        this.notify(`TURN ${this.board.turn + 1}    -    NUM PLAYERS: ${this.board.rovers.length + 1}`)
    }

    displayTurnEnd() {
        this.notify('----------------------------\n')
    }

    updateGrid() {
        let grid = this.generateBoardGrid()
        this.board.rovers.forEach(rover => grid[rover.position[1]][rover.position[0]] = `[ ${rover.name[0]} ]`)
        this.board.obstacles.forEach(obstacle => grid[obstacle[1]][obstacle[0]] = `[ @ ]`)
        grid[this.board.player.position[1]][this.board.player.position[0]] = `[ ${roverRender[this.board.player.direction]} ]`
        this.grid = grid
    }

    updateGridWithRoverTravelLog(rover) {
        rover = (rover === undefined) ? this.board.player : rover
        rover = (typeof (rover) === 'Number') ? this.board.rovers[rover] : rover
        let grid = this.generateBoardGrid()
        rover.travel_log.forEach(position => grid[position[1]][position[0]] = `[ ${rover.name[0]} ]`)
        this.grid = grid
    }
}

module.exports = {
    GameController
}