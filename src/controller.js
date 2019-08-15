var fs = require("fs")
const { getFileTimestamp, Observable } = require('./utilities')
const { HtmlUI } = require('./ui-html')
const { TerminalUI } = require('./ui-terminal')
const { Board } = require('./board')


class GameController extends Observable {
    constructor(boardSize, runtime) {
        super()
        this.board = new Board(boardSize)
        this.ui = (runtime == "terminal") ? new TerminalUI(this) : new HtmlUI(this)
        this.addObserver(this.ui.notice)
    }

    start(playerCommands) {
        this.ui.start()
        this.board.initializeCommands(playerCommands)
        this.notifyObservers('Player Commands list:')
        this.board.playerCommands.map((command) => this.notifyObservers('    ' + command))
    }

    reset() {
        this.board.initialize()
    }

    update() {
        this.notifyTurnStart()
        this.board.tick()
    }

    notifyTurnStart() {
        this.notifyObservers(`TURN ${this.board.turn + 1}    -    NUM CHARACTERS: ${this.board.rovers.length + 1}`)
    }

    notifyTurnEnd() {
        this.notifyObservers(`${'-'.repeat(this.board.width * 6)}`)
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
        this.notifyObservers(`Successfully wrote history to file: ${filePath}`);
    }
}

module.exports = {
    GameController
}