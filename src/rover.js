var _ = require('underscore');

// Rover Object Goes Here
// ======================
const board_width = 10
const start_pos = [0, 0]

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

const rover = {
    _direction: 0,
    position: start_pos,
    travel_log: [start_pos],

    get direction() {
        return compass[this._direction]
    },

    runCommands(commands) {
        commands.trim().split('').forEach((command) => {
            let valid_command = commandsLUT[command]
            if (valid_command) {
                this[valid_command]()
            } else {
                console.log(`Invalid command entered: ${command}`)
            }
        })
    },

    makeTurn(direction) {
        this._direction = this._remapDirectionLookup(this._direction + direction)
        console.log(`Made a turn: new direction is ${this.direction}`)
    },

    turnLeft() {
        this.makeTurn(-1)
    },

    turnRight() {
        this.makeTurn(1)
    },

    moveForward() {
        console.log('Moving forward!')
        this.move(this.direction)
    },

    moveBackward() {
        console.log('Moving backward!')
        this.move(compass[this._remapDirectionLookup(this._direction + 2)])
    },

    move(direction) {
        console.log(`Moving in direction ${directionLUT[direction]} while facing ${this.direction}`)
        try {
            let array = arraySum(this.position, directionLUT[direction])
            this.position = board.inBounds(array)
        } catch (error) {
            console.log('Illegal move attempted, staying put.')
        } finally {
            console.log(`Final position is ${this.position}`)
            this.travel_log.push(this.position)
        }
    },

    _remapDirectionLookup(directionIndex) {
        var modifier = 0
        if (directionIndex < 0) {
            modifier = 4
        } else if (directionIndex > 3) {
            modifier = -4
        }
        return directionIndex + modifier
    },

}

function arraySum(array1, array2, array_size = 2) {
    var array_result = Array()
    for (i = 0; i < array_size; i++) {
        array_result.push(array1[i] + array2[i])
    }
    return array_result
}

const board = {
    roverRender: {
        'N': '^',
        'E': '>',
        'S': 'v',
        'W': '<',
    },
    turn: 0,
    rovers: [],

    inBounds(pos) {
        pos.forEach((coordinate) => {
            if (board_width / 2 > coordinate && coordinate < 0) {
                throw new Error('Out of bounds move.')
            }
        })
        return pos
    },

    printRoverTravelLog(rover_index) {
        this.printBoard(this.rovers[rover_index])
    },

    printBoard(roverLogs = []) {
        if (roverLogs.length) console.log('\n\nPrinting travel log:\n')

        for (i = 0; i < board_width; i++) {
            let row = []
            for (j = 0; j < board_width; j++) {
                if (roverLogs.length) {
                    row[j] = '[   ]'
                    roverLogs.forEach((roverLog) => {
                        if (roverLog[1] === i && roverLog[0] === j) {
                            row[j] = `[ ${roverLogs.indexOf(roverLog)} ]`
                        }
                    })
                } else {
                    row.push((rover.position[1] === i && rover.position[0] === j) ? `[ ${this.roverRender[rover.direction]} ]` : '[   ]')
                }
            }
            console.log(row.join(' '))
        }
    },

    sendCommands(commands, roverIndex) {
        this.rovers[roverIndex].runCommands(commands)
    }
}



// rover.runCommands('ffzzy ')
rover.runCommands('rffrfflbbbfrff')
printBoard(rover.travel_log)