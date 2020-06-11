const imgRoverUp = require('./images/Rover-Up.png')
const imgRoverDown = require('./images/Rover-Down.png')
const imgRoverRight = require('./images/Rover-Right.png')
const imgRoverLeft = require('./images/Rover-Left.png')
const imgRoverPUp = require('./images/Rover-Player-Up.png')
const imgRoverPDown = require('./images/Rover-Player-Down.png')
const imgRoverPRight = require('./images/Rover-Player-Right.png')
const imgRoverPLeft = require('./images/Rover-Player-Left.png')
const imgObstacle = require('./images/Obstacle.png')
const imgSand = require('./images/Sand.png')

function sprite(options) {
  const that = {}
  let frameIndex = 0
  let tickCount = 0
  const ticksPerFrame = options.ticksPerFrame || 200
  const numberOfFrames = options.numberOfFrames || 1

  that.context = options.context
  that.width = options.width
  that.height = options.height
  that.image = options.image

  that.update = () => {
    tickCount += 1
    if (tickCount > ticksPerFrame) {
      tickCount = 0
      if (frameIndex < numberOfFrames - 1) {
        frameIndex += 1
      } else {
        frameIndex = 0
      }
    }
  }

  that.render = (position = [0, 0]) => {
    const [x, y] = position
    that.context.beginPath()
    that.context.drawImage(
      that.image,
      (frameIndex * that.width) / numberOfFrames,
      0,
      that.width / numberOfFrames,
      that.height,
      x,
      y,
      that.width / numberOfFrames,
      that.height
    )
    that.context.closePath()
  }
  return that
}

const directionLUT = { N: 'u', E: 'r', S: 'd', W: 'l' }

const sprites = {
  'rover-u': { width: 128, height: 32, frames: 4, src: imgRoverUp },
  'rover-d': { width: 128, height: 32, frames: 4, src: imgRoverDown },
  'rover-r': { width: 128, height: 32, frames: 4, src: imgRoverRight },
  'rover-l': { width: 128, height: 32, frames: 4, src: imgRoverLeft },
  'rover-player-u': { width: 128, height: 32, frames: 4, src: imgRoverPUp },
  'rover-player-d': { width: 128, height: 32, frames: 4, src: imgRoverPDown },
  'rover-player-r': { width: 128, height: 32, frames: 4, src: imgRoverPRight },
  'rover-player-l': { width: 128, height: 32, frames: 4, src: imgRoverPLeft },
  obstacle: { width: 32, height: 32, frames: 1, src: imgObstacle },
  sand: { width: 32, height: 32, frames: 1, src: imgSand },
}

module.exports = {
  sprites,
  sprite,
  directionLUT,
}
