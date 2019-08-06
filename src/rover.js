function arraySum(array1, array2, array_size = 2) {
    var array_result = Array()
    for (i = 0; i < array_size; i++) {
        array_result.push(array1[i] + array2[i])
    }
    return array_result
}

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

// Rover Object Goes Here
// ======================
class Rover {
    constructor(name, start_pos, direction) {
        this.name = name
        this.position = start_pos
        this.travel_log = [start_pos]
        this._direction = direction;
    }

    get direction() {
        return compass[this._direction]
    }

    makeTurn(direction) {
        this._direction = this._remapDirectionLookup(this._direction + direction)
        console.log(`Made a turn: new direction is ${this.direction}`)
    }

    turnLeft() {
        this.makeTurn(-1)
    }

    turnRight() {
        this.makeTurn(1)
    }

    moveForward() {
        console.log('Moving forward!')
        this.move(this.direction)
    }

    moveBackward() {
        console.log('Moving backward!')
        this.move(compass[this._remapDirectionLookup(this._direction + 2)])
    }

    move(direction) {
        console.log(`Moving in direction ${directionLUT[direction]} while facing ${this.direction}`)
        try {
            let array = arraySum(this.position, directionLUT[direction])
            this.position = board.validMove(array)
        } catch (error) {
            console.log(`Illegal move attempted, staying put: ${error.message}`)
        } finally {
            console.log(`Final position is ${this.position}`)
            this.travel_log.push(this.position)
        }
    }

    _remapDirectionLookup(directionIndex) {
        var modifier = 0
        if (directionIndex < 0) {
            modifier = 4
        } else if (directionIndex > 3) {
            modifier = -4
        }
        return directionIndex + modifier
    }
}


class Board {
    constructor(tiles = 10) {
        this.board_width = tiles,
            this.turn = 0
        this.player = new Rover('Player', [board_width / 2, board_width / 2], 0),
            this.rovers = self.populate_rovers()
    }

    validMove(pos) {
        pos.forEach((coordinate) => {
            if (this.board_width / 2 > coordinate && coordinate < 0) {
                throw new Error('Out of bounds move.')
            }
        })
        this.rovers.forEach(rover => {
            if (rover.position[0] === pos[0] && rover.position[1] === pos[0]) {
                throw new Error('Space is occupied by another rover.')
            }
        })
        this.obstacles.forEach(obstacle => {
            if (obstacle[0] === pos[0] && obstacle[1] === pos[0]) {
                throw new Error('Space is occupied by an obstacle!')
            }
        })
        return pos
    }

    _parseCommands(commands) {
        return commands.trim().split('').filter((command) => commandsLUT[command] !== undefined)
    }

    runTurn(commands) {
        this._parseCommands(commands).forEach((command) => {
            this[valid_command]()
        })
    }

    displayRoverTravelLog(rover_index) {
        this.printBoard(this.rovers[rover_index])
    }

    displayBoard(roverLogs = []) {
        if (roverLogs.length) console.log('\n\nPrinting travel log:\n')

        for (i = 0; i < this.board_width; i++) {
            let row = []
            for (j = 0; j < this.board_width; j++) {
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
    }
}



// rover.runCommands('ffzzy ')
rover.runCommands('rffrfflbbbfrff')
printBoard(rover.travel_log)