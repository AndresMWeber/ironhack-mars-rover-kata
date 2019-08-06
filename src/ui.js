const blessed = require('blessed');

class UserInterface {
    constructor() {
        this.screen = blessed.screen({ smartCSR: true });
        this.gameBox = this.createGameBox()
        this.bindGameBoxKeys()
        this.bindScreenKeys()
        this.gameBox.focus();
        this.render()
    }

    createGameBox() {
        return blessed.box({
            parent: this.screen,
            top: 'center',
            left: 'center',
            width: '100%',
            height: '100%',
            content: '{center}Press Enter to play...{/center}',
            tags: true,
            border: {
                type: 'line'
            },
            style: {
                fg: 'white',
                bg: 'darkGrey',
                border: {
                    fg: '#f0f0f0'
                },
                hover: {
                    bg: 'green'
                }
            }
        })
    }

    renderGrid(grid) {
        for (let i = 0; i < grid.length; i++) {
            this.gameBox.setLine(i, grid[i].join(' '))
        }
    }

    bindScreenKeys() {
        // Quit on Escape, q, or Control-C.
        this.screen.key(['escape', 'q', 'C-c'], function (ch, key) {
            return process.exit(0);
        });
    }

    bindGameBoxKeys() {
        this.gameBox.key('enter', function (ch, key) {
            // this.gameBox.setContent('{right}Even different {black-fg}content{/black-fg}.{/right}\n');
            // this.gameBox.setLine(1, 'bar');
            // this.gameBox.insertLine(1, 'foo');
        });
    }

    render() {
        this.screen.render()
    }
}

module.exports = { UserInterface }