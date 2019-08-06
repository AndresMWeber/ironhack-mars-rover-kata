
const roverRender = {
    'N': '^',
    'E': '>',
    'S': 'v',
    'W': '<',
}

const directionLUT = {
    'N': [0, -1],
    'E': [1, 0],
    'S': [0, 1],
    'W': [-1, 0],
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
    commandsLUT,
    directionLUT,
    roverRender,
    compass
}