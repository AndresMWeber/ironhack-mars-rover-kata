const blessed = require('blessed');

class UserInterface {
    constructor() {
        this.screen = blessed.screen({ smartCSR: true });
        this.screen.title = 'Mars Rover Kata'
        this.gameBox = this.createGameBox()
        this.messageBox = this.createMessageBox()

        this.messageContainer = blessed.log(this.messageBox)
        this.gameContainer = blessed.box(this.gameBox)

        this.bindGameBoxKeys()
        this.bindScreenKeys()
        this.gameContainer.focus();
        this.render()
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
                fg: 'white',
                bg: 'grey',
                border: {
                    fg: '#f0f0f0'
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
            height: '50%',
            content: '{center}Starting simulation...{/center}',
            tags: true,
            border: {
                type: 'line'
            },
            style: {
                fg: 'white',
                bg: 'darkGrey',
                border: {
                    fg: '#f0f0f0'
                }
            }
        }
    }

    notice(message) {
        this.messageContainer.pushLine(message);
    }

    clearScreen() {
        this.gameContainer.detach()
        this.gameContainer = blessed.box(this.gameBox)
    }

    drawGrid(grid) {
        for (let i = 0; i < grid.length; i++) {
            this.gameContainer.setLine(i, `{center} ${grid[i].join(' ')} {/center}`)
        }
    }

    bindScreenKeys() {
        // Quit on Escape, q, or Control-C.
        this.screen.key(['escape', 'q', 'C-c'], function (ch, key) {
            return process.exit(0);
        });
    }

    bindGameBoxKeys() {
        this.gameContainer.key('enter', function (ch, key) {
            this.gameContainer.setContent('{right}Even different {black-fg}content{/black-fg}.{/right}\n');
            this.gameContainer.setLine(1, 'bar');
            this.gameContainer.insertLine(1, 'foo');
        });
    }

    render() {
        this.screen.render()
    }
}

module.exports = { UserInterface }