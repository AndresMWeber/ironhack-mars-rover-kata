const colors = {
    BG_WIN: '#617B30',
    FG_WIN: '#84A140',
    HIGHLIGHT: '#D2E190',
    BORDER_WIN: '#B5CF49',
    INACTIVE: '#74923A',
    DARK_WIN: '#00af5f',
    PLAYER: '#98e85a',
    ENEMY: '#5f5f00',
}

const SPRITE = 'sprite'
const GRID_SPRITE_TEMPLATE = `[ ${SPRITE} ]`
const SPRITE_OBSTACLE = '#'
const SPRITE_EMPTY = ' '
const SPRITE_ROVER_UP = '^'
const SPRITE_ROVER_RIGHT = '>'
const SPRITE_ROVER_DOWN = 'v'
const SPRITE_ROVER_LEFT = '<'

const SPRITE_PLAYER_UP = `{${colors.PLAYER}-fg}${SPRITE_ROVER_UP}{/}`
const SPRITE_PLAYER_RIGHT = `{${colors.PLAYER}-fg}${SPRITE_ROVER_RIGHT}{/}`
const SPRITE_PLAYER_DOWN = `{${colors.PLAYER}-fg}${SPRITE_ROVER_DOWN}{/}`
const SPRITE_PLAYER_LEFT = `{${colors.PLAYER}-fg}${SPRITE_ROVER_LEFT}{/}`

const SPRITE_ENEMY_UP = `{${colors.ENEMY}-fg}${SPRITE_ROVER_UP}{/}`
const SPRITE_ENEMY_RIGHT = `{${colors.ENEMY}-fg}${SPRITE_ROVER_RIGHT}{/}`
const SPRITE_ENEMY_DOWN = `{${colors.ENEMY}-fg}${SPRITE_ROVER_DOWN}{/}`
const SPRITE_ENEMY_LEFT = `{${colors.ENEMY}-fg}${SPRITE_ROVER_LEFT}{/}`

const roverSpriteRenderer = {
    0: GRID_SPRITE_TEMPLATE.replace(SPRITE, SPRITE_ENEMY_UP),
    1: GRID_SPRITE_TEMPLATE.replace(SPRITE, SPRITE_ENEMY_RIGHT),
    2: GRID_SPRITE_TEMPLATE.replace(SPRITE, SPRITE_ENEMY_DOWN),
    3: GRID_SPRITE_TEMPLATE.replace(SPRITE, SPRITE_ENEMY_LEFT),
}

const playerSpriteRenderer = {
    0: GRID_SPRITE_TEMPLATE.replace(SPRITE, SPRITE_PLAYER_UP),
    1: GRID_SPRITE_TEMPLATE.replace(SPRITE, SPRITE_PLAYER_RIGHT),
    2: GRID_SPRITE_TEMPLATE.replace(SPRITE, SPRITE_PLAYER_DOWN),
    3: GRID_SPRITE_TEMPLATE.replace(SPRITE, SPRITE_PLAYER_LEFT),
}

const gridSpriteRenderer = {
    'string': GRID_SPRITE_TEMPLATE.replace(SPRITE, SPRITE_OBSTACLE),
    'undefined': GRID_SPRITE_TEMPLATE.replace(SPRITE, SPRITE_EMPTY)
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
    playerSpriteRenderer
}