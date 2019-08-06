const { directionLUT, compass } = require('./config')
const { arraySum } = require('./utilities')


// Rover Object Goes Here
// ======================
class Rover {
    constructor(name, start_pos, direction, board) {
        this.name = name
        this.position = start_pos
        this.travel_log = [start_pos]
        this._direction = direction
        this.board = board
    }

    get direction() {
        return compass[this._direction]
    }

    report(message) {
        this.board.pushMessage(`${this.name}: ${message}`)
    }

    makeTurn(direction) {
        this._direction = this._remapDirectionLookup(this._direction + direction)
        this.report(`Made a turn: new direction is ${this.direction} with position ${this.position}`)
    }

    turnLeft() {
        this.report('Turning left!')
        this.makeTurn(-1)
    }

    turnRight() {
        this.report('Turning right!')
        this.makeTurn(1)
    }

    moveForward() {
        this.report('Moving forward!')
        this.move(this.direction)
    }

    moveBackward() {
        this.report('Moving backward!')
        this.move(compass[this._remapDirectionLookup(this._direction + 2)])
    }

    move(direction) {
        this.report(`Moving in direction ${directionLUT[direction]} while facing ${this.direction} from ${this.position}`)
        try {
            let future_position = arraySum(this.position, directionLUT[direction])
            this.position = this.board.validMove(future_position)
        } catch (error) {
            this.report(`Illegal move attempted, staying put: ${error.message}`)
        } finally {
            this.report(`Final position is ${this.position}`)
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


module.exports = {
    Rover
}
