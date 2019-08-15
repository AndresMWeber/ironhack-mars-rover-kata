const blessed = require('blessed')
const { UserInterface } = require('./ui')
const { colors, gridSpriteRenderer } = require('../ascii-config')
const { removeFromString } = require('../utilities')


class TerminalUI extends UserInterface {
    constructor(gameController) {
        super(gameController)
        this.pause_delta = new Date()

        this.screen = blessed.screen({ smartCSR: true })
        this.screen.title = 'Mars Rover Kata'
        this.screen.gameController = gameController

        this.gameBox = this.createGameBox()
        this.messageBox = this.createMessageBox()

        this.messageContainer = blessed.log(this.messageBox)
        this.gameContainer = blessed.box(this.gameBox)

        this.bindScreenKeys(this)
        this.render()
    }

    pause() {
        if (new Date() - this.pause_delta > 1000) {
            this.paused = !this.paused
            this.pause_delta = new Date()
        }
    }

    onGameOver() {
        this.inputBox = this.createInputBox()
        this.inputContainer = blessed.input(this.inputBox)
        this.inputContainer.focus()
        this.inputContainer.setContent('{center}Simulation Ended.{/}')
    }

    render() {
        this.screen.render()
    }

    renderGrid(grid) {
        let renderedGrid = grid.map((row) => row.map((entry) => this.renderGridSpace(entry)))
        this.gameController.addLogLine(renderedGrid.map((row) => removeFromString(row.join(' '), ['{/}', '{#5f5f00-fg}', '{#98e85a-fg}'])))
        return renderedGrid
    }

    renderGridSpace(entry) {
        return gridSpriteRenderer[typeof (entry)] || entry.ascii_override || entry.ascii_sprite
    }

    drawMessage(message) {
        this.messageContainer.pushLine(message)
    }

    drawGrid() {
        let grid = this.renderGrid(this.gameController.board.grid)
        for (let i = 0; i < grid.length; i++) {
            this.gameContainer.setLine(i, `{center} ${grid[i].join(' ')} {/center}`)
        }
    }

    clearScreen() {
        this.gameContainer.detach()
        this.messageContainer.detach()
        this.gameContainer = blessed.box(this.gameBox)
        this.messageContainer = blessed.log(this.messageBox)
    }

    bindScreenKeys(ui) {
        this.screen.key(['escape', 'q', 'C-c'], function () {
            return process.exit(0)
        })

        this.screen.on('keypress', function (key) {
            if (key === ' ') {
                ui.pause()
            }
        })
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
                fg: colors.HIGHLIGHT,
                bg: colors.BG_WIN,
                border: {
                    fg: colors.BORDER_WIN
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
                fg: colors.HIGHLIGHT,
                bg: colors.BG_WIN,
                border: {
                    fg: colors.BORDER_WIN
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
                fg: colors.HIGHLIGHT,
                bg: colors.BG_WIN,
                border: {
                    fg: colors.BORDER_WIN
                }
            }
        }
    }
}

module.exports = { TerminalUI }