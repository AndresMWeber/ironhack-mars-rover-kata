function sprite(options) {
  var that = {},
    frameIndex = 0,
    tickCount = 0,
    ticksPerFrame = options.ticksPerFrame || 200,
    numberOfFrames = options.numberOfFrames || 1

  that.context = options.context
  that.width = options.width
  that.height = options.height
  that.image = options.image

  that.update = function () {
    tickCount++
    if (tickCount > ticksPerFrame) {
      tickCount = 0
      if (frameIndex < numberOfFrames - 1) {
        frameIndex++
      } else {
        frameIndex = 0
      }
    }
  }

  that.render = function (position = [0, 0]) {
    let [x, y] = position
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

const directionLUT = {
  N: 'u',
  E: 'r',
  S: 'd',
  W: 'l',
}

const sprites = {
  'rover-u': {
    width: 128,
    height: 32,
    frames: 4,
    src: '../../media/images/Rover-Up.png',
  },
  'rover-d': {
    width: 128,
    height: 32,
    frames: 4,
    src: '../../media/images/Rover-Down.png',
  },
  'rover-r': {
    width: 128,
    height: 32,
    frames: 4,
    src: '../../media/images/Rover-Right.png',
  },
  'rover-l': {
    width: 128,
    height: 32,
    frames: 4,
    src: '../../media/images/Rover-Left.png',
  },
  'rover-player-u': {
    width: 128,
    height: 32,
    frames: 4,
    src: '../../media/images/Rover-Player-Up.png',
  },
  'rover-player-d': {
    width: 128,
    height: 32,
    frames: 4,
    src: '../../media/images/Rover-Player-Down.png',
  },
  'rover-player-r': {
    width: 128,
    height: 32,
    frames: 4,
    src: '../../media/images/Rover-Player-Right.png',
  },
  'rover-player-l': {
    width: 128,
    height: 32,
    frames: 4,
    src: '../../media/images/Rover-Player-Left.png',
  },
  obstacle: {
    width: 32,
    height: 32,
    frames: 1,
    src: '../../media/images/Obstacle.png',
  },
  sand: {
    width: 32,
    height: 32,
    frames: 1,
    src: '../../media/images/Sand.png',
  },
}

module.exports = {
  sprites,
  sprite,
  directionLUT,
}
