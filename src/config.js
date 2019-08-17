const runtimes = {
    0: 'terminal',
    1: 'html'
}

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

const validCommands = ['moveForward', 'turnRight', 'turnLeft', 'moveBackward']
const commandsLUT = {
    'f': validCommands[0],
    'r': validCommands[1],
    'l': validCommands[2],
    'b': validCommands[3]
}

module.exports = {
    commandsLUT,
    runtimes,
    directionLUT,
    compass,
    validCommands
}