var fs = require("fs")
const { gridSpriteRenderer } = require('./config')
const { UserInterface } = require('./ui')
const { Board } = require('./board')


class GameController {
    constructor(boardSize) {
        this.timer = null
        this.paused = false
        this.pause_delta = new Date()
        this.board = new Board(boardSize)
        this.board.addObserver(this)
        this.ui = new UserInterface(this)
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

    pause() {
        if (new Date() - this.pause_delta > 1000) {
            this.paused = !this.paused
            this.notify((this.paused) ? 'GAME PAUSED' : 'GAME UNPAUSED')
            this.pause_delta = new Date()
        }
    }

    reset() {
        this.board.initialize()
    }

    update() {
        if (!this.paused) {
            this.checkGameOver()
            this.ui.clearScreen()
            this.renderTurnStart()
            this.board.tick()
            this.checkGameOver()
            this.ui.drawGrid(this.renderGrid())
            this.renderTurnEnd()
            this.ui.render()
        }
    }

    checkGameOver() {
        if (this.board.gameOver) {
            clearInterval(this.timer)
            this.timer = null
            this.writeLogFile()
            this.ui.gameOver()
            return
        }
    }
    renderGrid() {
        return this.board.grid.map((row) => row.map((entry) => this.renderGridSpace(entry)))
    }

    renderGridSpace(entry) {
        return gridSpriteRenderer[typeof (entry)] || entry.ascii_sprite
    }

    renderTurnStart() {
        this.notify(`TURN ${this.board.turn + 1}    -    NUM ENEMIES: ${this.board.rovers.length + 1}`)
    }

    renderTurnEnd() {
        this.notify('----------------------------\n')
    }

    writeLogFile() {
        var data = JSON.stringify()
        fs.writeFile("~/roverlog.txt", data, (err) => {
            if (err) console.log(err);
            this.notify(`Successfully wrote history to file: ${file}`);
        });
    }
}

module.exports = {
    GameController
}