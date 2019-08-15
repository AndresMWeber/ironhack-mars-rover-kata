
const directionLUT = {
    'N': [-1, 0],
    'E': [0, 1],
    'S': [1, 0],
    'W': [0, -1],
}

const compass = {
    0: 'N',
    1: 'E',
    2: 'S',
    3: 'W'
}

const commandsLUT = {
    'f': 'moveForward',
    'r': 'turnRight',
    'l': 'turnLeft',
    'b': 'moveBackward'
}

module.exports = {
    COLORS: colors,
    commandsLUT,
    directionLUT,
    compass,
    gridSpriteRenderer,
    roverSpriteRenderer,
    playerSpriteRenderer,
    GRID_SPRITE_TEMPLATE,
    SPRITE
}