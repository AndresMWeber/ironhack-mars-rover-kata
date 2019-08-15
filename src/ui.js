
class UserInterface {
    constructor(gameController) {
        this.gameController = gameController
        this.paused = false
        this.timer = null
        this.updateInterval = 2000
    }

    start() {
        if (!this.timer) {
            this.reset()
            this.timer = setInterval(this.update.bind(this), 2000)
        }
    }

    update() {
        if (!this.paused) {
            this.clearScreen()
            this.preDraw()
            this.drawGrid()
            this.postDraw()
            this.render()
            this.isGameOver()
        }
    }

    pause() {
        this.paused = !this.paused
    }

    notice(message) {
        throw new Error('You have to implement the method notice!')
    }

    isGameOver() {
        throw new Error('You have to implement the method isGameOver!')
    }

    gameOver() {
        throw new Error('You have to implement the method gameOver!')
    }

    preDraw() {
        this.gameController.update()
    }

    postDraw() {
        this.gameController.notifyTurnEnd()
    }

    render() {
        this.ui.drawGrid()
    }

    clearScreen() {
        return null
    }

    drawGrid(grid) {
        throw new Error('You have to implement the method drawGrid!')
    }

    bindScreenKeys() {
        throw new Error('You have to implement the method bindScreenKeys!')
    }
}

module.exports = { UserInterface }