var fs = require("fs")
const { Board } = require('../models/board')
const { HtmlUI } = require('../views/ui-html')
const { TerminalUI } = require('../views/ui-terminal')
const { runtimes, commandsLUT } = require('../config')
const { getFileTimestamp, Observable, generateRandomInt } = require('../utilities')


class GameController extends Observable {
    constructor(boardSize, runtime) {
        super()
        this.runtime = runtime
        this.ui = (this.runtime == runtimes[0]) ? new TerminalUI(this) : new HtmlUI(this)
        this.simulation = this.runtime === runtimes[0]

        this.gameOver = false
        this.turn = 0
        this.playerCommands = undefined
        this.roverCommands = []

        this.board = new Board(boardSize)
        this.board.addObserver(this.emit.bind(this))
    }

    start(playerCommands) {
        this.ui.start()
        if (this.simulation) {
            this.initializeCommands(playerCommands)
            this.emit('Player Commands list:')
            this.playerCommands.map((command) => this.emit('    ' + command))
        }
    }

    reset() {
        this.board.initialize()
    }

    update(playerCommand = undefined) {
        this.notifyTurnStart()
        this.board.tick(this.simulation && this.playerCommands[this.turn] || playerCommand, this._generateRandomCommandList(this.board.rovers.length))
        this.turn++
        this.gameOver = (this.turn >= this.playerCommands.length && this.simulation)
    }

    notifyTurnStart() {
        this.emit(`TURN ${this.turn + 1}    -    NUM CHARACTERS: ${this.board.rovers.length + 1}`)
    }

    notifyTurnEnd() {
        this.emit(`${'-'.repeat(this.board.width * 6)}`)
    }

    onGameOver() {
        this.writeLogFile()
    }

    addLogLine(line) {
        this.messageHistory.push(line)
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
        this.emit(`Successfully wrote history to file: ${filePath}`);
    }

    initializeCommands(playerCommands) {
        this.playerCommands = this._parseCommands(playerCommands)
    }

    _parseCommands(commands) {
        return commands.trim().split('').map((command) => commandsLUT[command]).filter(element => element !== undefined)
    }

    _generateRandomCommandList(length) {
        return Array.from({ length: length }, () => Object.values(commandsLUT)[generateRandomInt(3)])
    }
}

module.exports = {
    GameController
}