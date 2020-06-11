const { UserInterface } = require('./ui')
const { removeFromString } = require('../utilities')
const { sprite, sprites, directionLUT } = require('../sprite-config')
const { gridSpriteRenderer } = require('../ascii-config')
const { Rover } = require('../models/rover')

const BIND_MAPPING = new Map([
  ['w', 'f'],
  ['a', 'l'],
  ['s', 'b'],
  ['d', 'r'],
])

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
    Object.entries(sprites).forEach(([spriteName, spriteData]) => {
      const image = new Image()
      image.src = spriteData.src
      image.onload = this.resourcesLoaded.bind(this)
      this.images.push([spriteName, spriteData, image])
    })
  }

  resourcesLoaded() {
    this.loadedResources += 1
    if (this.loadedResources === this.spriteSourcesNum) {
      this.images.forEach(imageData => {
        const [spriteName, spriteData, image] = imageData
        this.sprites[spriteName] = sprite({
          context: this.context,
          width: spriteData.width,
          height: spriteData.height,
          x: 0,
          y: 0,
          image,
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
    if (this.lastTurn !== this.gameController.turn) {
      this.renderGrid(this.gameController.board.grid)
    }
    Object.keys(this.sprites).forEach(each => {
      this.sprites[each].update()
    })
  }

  renderGrid(grid) {
    const renderedGrid = grid.map(row => row.map(entry => this.renderGridSpace(entry)))
    this.gameController.addLogLine(
      renderedGrid.map(row =>
        removeFromString(row.join(' '), ['{/}', '{#5f5f00-fg}', '{#98e85a-fg}'])
      )
    )
    return renderedGrid
  }

  renderGridSpace(entry) {
    return gridSpriteRenderer[typeof entry] || entry.ascii_override || entry.ascii_sprite
  }

  drawMessage(message) {
    const p = document.createElement('P')
    const t = document.createTextNode(message)
    p.appendChild(t)
    this.messageLog.appendChild(p)
    this.messageLog.scrollBy({ y: 12 })
  }

  drawGrid() {
    const { grid } = this.gameController.board
    for (let i = 0; i < grid.length; i += 1) {
      for (let j = 0; j < grid.length; j += 1) {
        const gridSpace = grid[j][i]
        const newPosition = [i * 32, j * 32]
        this.firstRun && this.sprites.sand.render(newPosition)
        if (gridSpace?.constructor?.name) {
          if (gridSpace instanceof Rover) {
            this.drawRover(gridSpace, newPosition)
          } else {
            this.firstRun && this.sprites.obstacle.render(newPosition)
          }
        }
      }
    }
  }

  drawRover(rover, newPosition) {
    let lastPosition = rover.travel_log[rover.travel_log.length - 2] || newPosition
    lastPosition = lastPosition.map(e => e * 32).reverse()
    this.context.clearRect(lastPosition[0], lastPosition[1], 32, 32)
    this.context.clearRect(newPosition[0], newPosition[1], 32, 32)
    this.sprites.sand.render(lastPosition)
    this.sprites.sand.render(newPosition)
    this.sprites[
      `rover-${rover.name === 'Starlord' ? 'player-' : ''}${directionLUT[rover.direction]}`
    ].render(newPosition)
  }

  clearScreen() {
    return null
  }

  bindScreenKeys(ui) {
    document.addEventListener('keydown', ({ key }) => {
      if (key === ' ' || key === 'p') ui.pause()
      const boundEvent = BIND_MAPPING.get(key)
      if (boundEvent) {
        this.gameController.update(boundEvent)
      }
    })
  }
}

module.exports = {
  HtmlUI,
}
