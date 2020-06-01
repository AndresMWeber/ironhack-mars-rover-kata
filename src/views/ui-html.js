const { UserInterface } = require('./ui')
const { removeFromString } = require('../utilities')
const { sprite, sprites, directionLUT } = require('../sprite-config')
const { gridSpriteRenderer } = require('../ascii-config')

class HtmlUI extends UserInterface {
  constructor(gameController) {
    super(gameController)
    this.pause_delta = new Date()
    this.canvas = document.getElementById('canvas')
    this.context = this.canvas.getContext('2d')
    this.canvas.height = 10 * 32
    this.canvas.width = 10 * 32

    this.firstRun = true
    this.loadedResources = 0
    this.images = []
    this.spriteSourcesNum = Object.keys(sprites).length
    this.sprites = {}

    this.messageLog = document.getElementById('messageLog')
    this.bindScreenKeys(this)
  }

  initializeImages() {
    for (const [spriteName, spriteData] of Object.entries(sprites)) {
      let image = new Image()
      image.src = spriteData.src
      image.onload = this.resourcesLoaded.bind(this)
      this.images.push([spriteName, spriteData, image])
    }
  }

  resourcesLoaded() {
    this.loadedResources++
    if (this.loadedResources === this.spriteSourcesNum) {
      this.images.map((imageData) => {
        var [spriteName, spriteData, image] = imageData
        this.sprites[spriteName] = sprite({
          context: this.context,
          width: spriteData.width,
          height: spriteData.height,
          x: 0,
          y: 0,
          image: image,
          numberOfFrames: spriteData.frames,
        })
      })
      this.setTimer()
    }
  }

  start() {
    this.initializeImages()
  }

  update() {
    if (!this.paused) {
      this.clearScreen()
      this.preDraw()
      this.drawGrid()
      this.render()
      this.postDraw()
      this.isGameOver()
      this.lastTurn = this.gameController.turn
    }
    this.firstRun = false
    requestAnimationFrame(this.update.bind(this))
  }

  onGameOver() {
    return null
  }

  render() {
    this.lastTurn !== this.gameController.turn && this.renderGrid(this.gameController.board.grid)
    Object.keys(this.sprites).map((sprite) => {
      this.sprites[sprite].update()
    })
  }

  renderGrid(grid) {
    let renderedGrid = grid.map((row) => row.map((entry) => this.renderGridSpace(entry)))
    this.gameController.addLogLine(
      renderedGrid.map((row) =>
        removeFromString(row.join(' '), ['{/}', '{#5f5f00-fg}', '{#98e85a-fg}'])
      )
    )
    return renderedGrid
  }

  renderGridSpace(entry) {
    return gridSpriteRenderer[typeof entry] || entry.ascii_override || entry.ascii_sprite
  }

  drawMessage(message) {
    let p = document.createElement('P')
    let t = document.createTextNode(message)
    p.appendChild(t)
    this.messageLog.appendChild(p)
    this.messageLog.scrollBy({ y: 12 })
  }

  drawGrid() {
    let grid = this.gameController.board.grid
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid.length; j++) {
        let gridSpace = grid[j][i]
        let newPosition = [i * 32, j * 32]
        this.firstRun && this.sprites['sand'].render(newPosition)

        switch (gridSpace === undefined ? undefined : gridSpace.constructor.name) {
          case 'Rover':
            let lastPosition = gridSpace.travel_log[gridSpace.travel_log.length - 2] || newPosition
            lastPosition = lastPosition.map((e) => e * 32).reverse()
            this.context.clearRect(lastPosition[0], lastPosition[1], 32, 32)
            this.context.clearRect(newPosition[0], newPosition[1], 32, 32)
            this.sprites['sand'].render(lastPosition)
            this.sprites['sand'].render(newPosition)
            this.sprites[
              `rover-${gridSpace.name === 'Starlord' ? 'player-' : ''}${
                directionLUT[gridSpace.direction]
              }`
            ].render(newPosition)
            break
          case 'String':
            this.firstRun && this.sprites['obstacle'].render(newPosition)
            break
        }
      }
    }
  }

  clearScreen() {
    return null
  }

  bindScreenKeys(ui) {
    document.addEventListener('keydown', (e) => {
      if (e.key == ' ' || e.key == 'p') ui.pause()
      if (e.key == 'w') this.gameController.update('f')
      if (e.key == 'a') this.gameController.update('l')
      if (e.key == 's') this.gameController.update('b')
      if (e.key == 'd') this.gameController.update('r')
    })
  }
}

module.exports = {
  HtmlUI,
}
