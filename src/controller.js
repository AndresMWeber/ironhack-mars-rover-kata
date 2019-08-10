var fs = require("fs")
const { getFileTimestamp } = require('./utilities')
const { gridSpriteRenderer } = require('./config')
const { UserInterface } = require('./ui')
const { Board } = require('./board')


class GameController {
    constructor(boardSize) {
        this.timer = null
        this.paused = false
        this.pause_delta = new Date()
        this.messageHistory = []
        this.board = new Board(boardSize)
        this.board.addObserver(this)
        this.ui = new UserInterface(this)
    }

    notify(message) {
        this.messageHistory.push(message)
        this.ui.notice(message)
    }

    play(playerCommands) {
        if (!this.timer) {
            this.reset()
            this.timer = setInterval(this.update.bind(this), 2000)
        }
        this.board.initializeCommands(playerCommands)
        this.notify('Player Commands list:')
        this.board.playerCommands.map((command) => this.notify('    ' + command))
        this.renderTurnEnd
    }

    pause() {
        if (new Date() - this.pause_delta > 1000) {
            this.paused = !this.paused
            this.notify((this.paused) ? 'GAME PAUSED' : 'GAME UN-PAUSED')
            this.pause_delta = new Date()
        }
    }

    reset() {
        this.board.initialize()
    }

    update() {
        if (!this.paused) {
            this.ui.clearScreen()
            this.renderTurnStart()
            this.board.tick()
            this.ui.drawGrid(this.renderGrid(this.board.grid))
            this.renderTurnEnd()
            this.ui.render()
            this.checkGameOver()
        }
    }

    checkGameOver() {
        if (this.board.gameOver) {
            clearInterval(this.timer)
            this.timer = null
            this.ui.gameOver()
            this.messageHistory.push('TRAVEL MAP FOR ALL ROVERS:')
            this.renderGrid(this.board.generateTravelLogBoard())
            this.writeLogFile()
            return
        }
    }

    renderGrid(grid) {
        let renderedGrid = grid.map((row) => row.map((entry) => this.renderGridSpace(entry)))
        this.messageHistory.push(renderedGrid.map((row) => this.sanitizeLine(row.join(' '), ['{/}', '{#5f5f00-fg}', '{#98e85a-fg}'])))
        return renderedGrid
    }

    sanitizeLine(line, deleteList) {
        deleteList.map((deletion) => line = line.split(deletion).join(''))
        return line
    }

    renderGridSpace(entry) {
        return gridSpriteRenderer[typeof (entry)] || entry.ascii_override || entry.ascii_sprite
    }

    renderTurnStart() {
        this.notify(`TURN ${this.board.turn + 1}    -    NUM CHARACTERS: ${this.board.rovers.length + 1}`)
    }

    renderTurnEnd() {
        this.notify(`${'-'.repeat(this.board.width * 6)}`)
    }

    writeLogFile() {
        var filePath = `roverLog_${getFileTimestamp()}.log`
        var logger = fs.createWriteStream(filePath, { flags: 'a' })

        this.messageHistory.map((message) => {
            if (!Array.isArray(message)) {
                message = [message]
            }
            message.map((line) => logger.write(JSON.stringify(line) + '\r\n'))
        })

        logger.end()
        this.notify(`Successfully wrote history to file: ${filePath}`);
    }
}

module.exports = {
    GameController
}