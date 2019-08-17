export class UserInterface {
    constructor(gameController) {
        this.gameController = gameController
        this.paused = false
        this.timer = null
        this.fps = 30
        this.updateInterval = 1000
        this.gameController.addObserver(this.drawMessage.bind(this))
    }

    start() {
        this.setTimer()
    }

    setTimer() {
        if (!this.timer) {
            this.timer = setInterval(this.update.bind(this), this.updateInterval / this.fps)
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

    onGameOver() {
        throw new Error('You have to implement the method gameOver!')
    }

    isGameOver() {
        if (this.gameController.gameOver) {
            clearInterval(this.timer)
            this.timer = null
            this.onGameOver()
            this.gameController.addLogLine('TRAVEL MAP FOR ALL ROVERS:')
            this.renderGrid(this.gameController.board.generateTravelLogBoard())
            this.gameController.onGameOver()
            return
        }
    }

    render() {
        this.ui.drawGrid()
    }

    drawGrid(grid) {
        throw new Error('You have to implement the method drawGrid!')
    }

    drawMessage(message) {
        throw new Error('You have to implement the method notify!')
    }

    preDraw() {
        this.gameController.update()
    }

    postDraw() {
        this.gameController.notifyTurnEnd()
    }

    clearScreen() {
        return null
    }

    bindScreenKeys() {
        throw new Error('You have to implement the method bindScreenKeys!')
    }
}