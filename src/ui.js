const blessed = require('blessed');
const { COLORS } = require('./config')


class UserInterface {
    constructor(gameController) {
        this.screen = blessed.screen({ smartCSR: true });
        this.screen.title = 'Mars Rover Kata'
        this.screen.gameController = gameController
        this.gameBox = this.createGameBox()
        this.messageBox = this.createMessageBox()

        this.messageContainer = blessed.log(this.messageBox)
        this.gameContainer = blessed.box(this.gameBox)

        this.bindScreenKeys()
        this.render()
    }

    createInputBox() {
        return {
            parent: this.screen,
            top: 'center',
            left: 'center',
            width: '50%',
            height: '10%',
            valign: 'middle',
            tags: true,
            border: {
                type: 'line'
            },
            style: {
                fg: COLORS.HIGHLIGHT,
                bg: COLORS.FG_WIN,
                border: {
                    fg: COLORS.BORDER_WIN
                }
            }
        }
    }

    createMessageBox() {
        return {
            parent: this.screen,
            top: 0,
            left: 'center',
            width: '100%',
            height: '30%',
            tags: true,
            border: {
                type: 'line'
            },
            style: {
                fg: COLORS.HIGHLIGHT,
                bg: COLORS.BG_WIN,
                border: {
                    fg: COLORS.BORDER_WIN
                },
                scrollbar: true
            }
        }
    }

    createGameBox() {
        return {
            parent: this.screen,
            bottom: 0,
            left: 'center',
            valign: 'middle',
            width: '100%',
            height: '70%',
            content: '{center}Starting simulation...{/center}',
            tags: true,
            border: {
                type: 'line'
            },
            style: {
                fg: COLORS.HIGHLIGHT,
                bg: COLORS.DARK_WIN,
                border: {
                    fg: COLORS.BORDER_WIN
                }
            }
        }
    }

    notice(message) {
        this.messageContainer.pushLine(message);
    }

    clearScreen() {
        this.gameContainer.detach()
        this.messageContainer.detach()
        this.gameContainer = blessed.box(this.gameBox)
        this.messageContainer = blessed.log(this.messageBox)
    }

    drawGrid(grid) {
        for (let i = 0; i < grid.length; i++) {
            this.gameContainer.setLine(i, `{center} ${grid[i].join(' ')} {/center}`)
        }
    }

    gameOver() {
        this.inputBox = this.createInputBox()
        this.inputContainer = blessed.input(this.inputBox)
        this.inputContainer.focus()
        this.inputContainer.setContent('{center}Simulation Ended.{/}')
    }

    bindScreenKeys() {
        this.screen.key(['escape', 'q', 'C-c'], function (ch, key) {
            return process.exit(0);
        })

        this.screen.on('keypress', function (key, ch) {
            if (key === ' ') {
                this.screen.gameController.pause()
            }
            console.log(key)
        });
    }

    render() {
        this.screen.render()
    }
}

module.exports = { UserInterface }