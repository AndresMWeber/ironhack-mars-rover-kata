var _ = require('underscore');

// Rover Object Goes Here
// ======================
const board_width = 10

const direction_LUT = {
    'N': [0, 1],
    'E': [1, 0],
    'S': [0, -1],
    'W': [-1, 0],
}

const compass = {
    0: 'N',
    1: 'E',
    2: 'S',
    3: 'W'
}

const rover = {
    _direction: 0,
    position: [0, 0],
    get direction() {
        return compass[this._direction]
    },
    makeTurn(direction) {
        // should only be -1 for left +1 for right
        let tmp_direction = this._direction + direction
        var modifier = 0
        if (tmp_direction < 0) {
            modifier = 4
        } else if (direction > 3) {
            modifier = -4
        }
        this._direction = tmp_direction + modifier
        console.log(`Made a turn: new direction is ${this.direction}`)
    },

    turnLeft() {
        this.makeTurn(-1)
    },

    turnRight() {
        this.makeTurn(1)
    },

    moveForward() {
        console.log('moveForward was called!', this.direction)
        try {
            let array = arraySum(this.position, direction_LUT[this.direction])
            this.position = this._inBounds(array)
        } catch (error) {
            console.log('Illegal move attempted, staying put.')
        } finally {
            console.log(`Final position is ${this.position}`)
        }
    },

    _inBounds(pos) {
        pos.forEach((coordinate) => {
            console.log(`Checking if move is in bounds... ${coordinate} should be greater than 0 and lower than `, board_width / 2)
            if (board_width / 2 > coordinate && coordinate < 0) {
                throw new Error('Out of bounds move.')
            }
        })
        return pos
    }
}

function arraySum(array1, array2, array_size = 2) {
    var array_result = Array()
    for (i = 0; i < array_size; i++) {
        array_result.push(array1[i] + array2[i])
    }
    console.log(array_result)
    return array_result
}


rover.moveForward()
rover.moveForward()
rover.turnLeft()
rover.moveForward()
rover.moveForward()
rover.turnRight()