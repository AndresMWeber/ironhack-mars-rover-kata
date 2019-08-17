/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ascii-config.js":
/*!*****************************!*\
  !*** ./src/ascii-config.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const colors = {\r\n    BG_WIN: '#617B30',\r\n    FG_WIN: '#84A140',\r\n    HIGHLIGHT: '#D2E190',\r\n    BORDER_WIN: '#B5CF49',\r\n    INACTIVE: '#74923A',\r\n    DARK_WIN: '#00af5f',\r\n    PLAYER: '#98e85a',\r\n    ENEMY: '#5f5f00',\r\n}\r\n\r\nconst SPRITE = 'sprite'\r\nconst GRID_SPRITE_TEMPLATE = `[ ${SPRITE} ]`\r\nconst SPRITE_OBSTACLE = '#'\r\nconst SPRITE_EMPTY = ' '\r\nconst SPRITE_ROVER_UP = '^'\r\nconst SPRITE_ROVER_RIGHT = '>'\r\nconst SPRITE_ROVER_DOWN = 'v'\r\nconst SPRITE_ROVER_LEFT = '<'\r\n\r\nconst SPRITE_PLAYER_UP = `{${colors.PLAYER}-fg}${SPRITE_ROVER_UP}{/}`\r\nconst SPRITE_PLAYER_RIGHT = `{${colors.PLAYER}-fg}${SPRITE_ROVER_RIGHT}{/}`\r\nconst SPRITE_PLAYER_DOWN = `{${colors.PLAYER}-fg}${SPRITE_ROVER_DOWN}{/}`\r\nconst SPRITE_PLAYER_LEFT = `{${colors.PLAYER}-fg}${SPRITE_ROVER_LEFT}{/}`\r\n\r\nconst SPRITE_ENEMY_UP = `{${colors.ENEMY}-fg}${SPRITE_ROVER_UP}{/}`\r\nconst SPRITE_ENEMY_RIGHT = `{${colors.ENEMY}-fg}${SPRITE_ROVER_RIGHT}{/}`\r\nconst SPRITE_ENEMY_DOWN = `{${colors.ENEMY}-fg}${SPRITE_ROVER_DOWN}{/}`\r\nconst SPRITE_ENEMY_LEFT = `{${colors.ENEMY}-fg}${SPRITE_ROVER_LEFT}{/}`\r\n\r\nconst roverSpriteRenderer = {\r\n    0: GRID_SPRITE_TEMPLATE.replace(SPRITE, SPRITE_ENEMY_UP),\r\n    1: GRID_SPRITE_TEMPLATE.replace(SPRITE, SPRITE_ENEMY_RIGHT),\r\n    2: GRID_SPRITE_TEMPLATE.replace(SPRITE, SPRITE_ENEMY_DOWN),\r\n    3: GRID_SPRITE_TEMPLATE.replace(SPRITE, SPRITE_ENEMY_LEFT),\r\n}\r\n\r\nconst playerSpriteRenderer = {\r\n    0: GRID_SPRITE_TEMPLATE.replace(SPRITE, SPRITE_PLAYER_UP),\r\n    1: GRID_SPRITE_TEMPLATE.replace(SPRITE, SPRITE_PLAYER_RIGHT),\r\n    2: GRID_SPRITE_TEMPLATE.replace(SPRITE, SPRITE_PLAYER_DOWN),\r\n    3: GRID_SPRITE_TEMPLATE.replace(SPRITE, SPRITE_PLAYER_LEFT),\r\n}\r\n\r\nconst gridSpriteRenderer = {\r\n    'string': GRID_SPRITE_TEMPLATE.replace(SPRITE, SPRITE_OBSTACLE),\r\n    'undefined': GRID_SPRITE_TEMPLATE.replace(SPRITE, SPRITE_EMPTY)\r\n}\r\n\r\nmodule.exports = {\r\n    colors,\r\n    gridSpriteRenderer,\r\n    roverSpriteRenderer,\r\n    playerSpriteRenderer,\r\n    GRID_SPRITE_TEMPLATE,\r\n    SPRITE\r\n}\n\n//# sourceURL=webpack:///./src/ascii-config.js?");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const runtimes = {\r\n    0: 'terminal',\r\n    1: 'html'\r\n}\r\n\r\nconst directionLUT = {\r\n    'N': [-1, 0],\r\n    'E': [0, 1],\r\n    'S': [1, 0],\r\n    'W': [0, -1],\r\n}\r\n\r\nconst compass = {\r\n    0: 'N',\r\n    1: 'E',\r\n    2: 'S',\r\n    3: 'W'\r\n}\r\n\r\nconst commandsLUT = {\r\n    'f': 'moveForward',\r\n    'r': 'turnRight',\r\n    'l': 'turnLeft',\r\n    'b': 'moveBackward'\r\n}\r\n\r\nmodule.exports = {\r\n    commandsLUT,\r\n    directionLUT,\r\n    compass,\r\n    runtimes\r\n}\n\n//# sourceURL=webpack:///./src/config.js?");

/***/ }),

/***/ "./src/controllers/controller.js":
/*!***************************************!*\
  !*** ./src/controllers/controller.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { Board } = __webpack_require__(/*! ../models/board */ \"./src/models/board.js\")\r\nconst { HtmlUI } = __webpack_require__(/*! ../views/ui-html */ \"./src/views/ui-html.js\")\r\nconst { runtimes, commandsLUT } = __webpack_require__(/*! ../config */ \"./src/config.js\")\r\nconst { getFileTimestamp, Observable, generateRandomInt } = __webpack_require__(/*! ../utilities */ \"./src/utilities.js\")\r\n\r\n\r\nclass GameController extends Observable {\r\n    constructor(boardSize, runtime) {\r\n        super()\r\n        this.runtime = runtime\r\n        this.ui = new HtmlUI(this)\r\n        this.simulation = this.runtime === runtimes[0]\r\n\r\n        this.gameOver = false\r\n        this.turn = 0\r\n        this.playerCommands = undefined\r\n        this.roverCommands = []\r\n\r\n        this.board = new Board(boardSize)\r\n        this.board.addObserver(this.emit.bind(this))\r\n    }\r\n\r\n    start(playerCommands) {\r\n        this.ui.start()\r\n        if (this.simulation) {\r\n            this.initializeCommands(playerCommands)\r\n            this.emit('Player Commands list:')\r\n            this.playerCommands.map((command) => this.emit('    ' + command))\r\n        }\r\n    }\r\n\r\n    reset() {\r\n        this.board.initialize()\r\n    }\r\n\r\n    update(playerCommand = undefined) {\r\n        this.notifyTurnStart()\r\n        try {\r\n            this.board.tick(this.simulation && this.playerCommands[this.turn] || playerCommand, this._generateRandomCommandList(this.board.rovers.length))\r\n            this.turn++;\r\n            this.gameOver = (this.turn >= this.playerCommands.length && this.simulation)\r\n        } catch (error) {\r\n            this.emit(error.message)\r\n        }\r\n    }\r\n\r\n    notifyTurnStart() {\r\n        this.emit(`TURN ${this.turn + 1}    -    NUM CHARACTERS: ${this.board.rovers.length + 1}`)\r\n    }\r\n\r\n    notifyTurnEnd() {\r\n        this.emit(`${'-'.repeat(this.board.width * 6)}`)\r\n    }\r\n\r\n    onGameOver() {\r\n        this.writeLogFile()\r\n    }\r\n\r\n    addLogLine(line) {\r\n        this.messageHistory.push(line)\r\n    }\r\n\r\n    writeLogFile() {\r\n        var filePath = `roverLog_${getFileTimestamp()}.log`\r\n\r\n        this.messageHistory.map((message) => {\r\n            if (!Array.isArray(message)) {\r\n                message = [message]\r\n            }\r\n        })\r\n\r\n        this.emit(`Successfully wrote history to file: ${filePath}`);\r\n    }\r\n\r\n    initializeCommands(playerCommands) {\r\n        this.playerCommands = this._parseCommands(playerCommands)\r\n    }\r\n\r\n    _parseCommands(commands) {\r\n        return commands.trim().split('').map((command) => commandsLUT[command]).filter(element => element !== undefined)\r\n    }\r\n\r\n    _generateRandomCommandList(length) {\r\n        return Array.from({ length: length }, () => Object.values(commandsLUT)[generateRandomInt(3)])\r\n    }\r\n}\r\n\r\nmodule.exports = {\r\n    GameController\r\n}\n\n//# sourceURL=webpack:///./src/controllers/controller.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { GameController } = __webpack_require__(/*! ./controllers/controller */ \"./src/controllers/controller.js\")\r\nconst { runtimes } = __webpack_require__(/*! ./config */ \"./src/config.js\")\r\n\r\nvar controller = new GameController(10, runtimes[1])\r\ncontroller.start()\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/models/board.js":
/*!*****************************!*\
  !*** ./src/models/board.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { Rover } = __webpack_require__(/*! ./rover */ \"./src/models/rover.js\")\r\nconst { Observable, compareNDArrays, generatePositionInGrid, generateRandomInt, generatePseudoRandomName } = __webpack_require__(/*! ../utilities */ \"./src/utilities.js\")\r\nconst { GRID_SPRITE_TEMPLATE, SPRITE } = __webpack_require__(/*! ../ascii-config */ \"./src/ascii-config.js\")\r\nconst { commandsLUT } = __webpack_require__(/*! ../config */ \"./src/config.js\")\r\n\r\n\r\nclass Board extends Observable {\r\n    constructor(tiles = 10, roverCount = 3, obstacleCount = 5) {\r\n        super()\r\n        this.width = (tiles >= 8 && tiles <= 20) ? tiles + (tiles % 2) : 10\r\n        this.grid = this.generateEmptyGrid()\r\n\r\n        this.player = undefined\r\n        this.rovers = []\r\n        this.obstacles = []\r\n\r\n        this.initialize(roverCount, obstacleCount)\r\n    }\r\n\r\n    generateEmptyGrid() {\r\n        return Array.from({ length: this.width }, () => Array.from({ length: this.width }, () => undefined))\r\n    }\r\n\r\n    generateTravelLogBoard() {\r\n        let board = this.generateEmptyGrid()\r\n        let rovers = this.rovers.concat([this.player])\r\n        rovers.map((rover) => {\r\n            rover.ascii_override = GRID_SPRITE_TEMPLATE.replace(SPRITE, rover.name[0])\r\n            rover.travel_log.map((position) => board[position[0]][position[1]] = rover)\r\n        })\r\n        return board\r\n    }\r\n\r\n    occupiedPositions() {\r\n        return this.obstacles.concat(this.rovers.map(rover => rover.position)).concat([this.player.position])\r\n    }\r\n\r\n    initialize(roverCount, obstacleCount) {\r\n        this.player = new Rover('Starlord', [this.width / 2, this.width / 2], 0, this)\r\n        this.rovers = Array.from({ length: roverCount }, () => new Rover(generatePseudoRandomName(), this._generateRandomValidSpawnPoint(), generateRandomInt(3), this))\r\n        this.obstacles = Array.from({ length: obstacleCount }, () => this._generateRandomValidSpawnPoint())\r\n\r\n        this.obstacles.map(position => this.updateGridPosition(position))\r\n        this.rovers.map(rover => this.updateGridPosition(rover.position, rover))\r\n    }\r\n\r\n    tick(playerCommand, enemyRoverCommands) {\r\n        this.takeRoverTurn(this.player, playerCommand)\r\n        this.rovers.map((rover, i) => this.takeRoverTurn(rover, enemyRoverCommands[i]))\r\n    }\r\n\r\n    takeRoverTurn(rover, command) {\r\n        if (commandsLUT[command]) {\r\n            this.clearGridPosition(rover.position)\r\n            rover[command]()\r\n            this.updateGridPosition(rover.position, rover)\r\n        } else {\r\n            throw new Error(`Invalid rover command specified ${command}`)\r\n        }\r\n    }\r\n\r\n    updateGridPosition(position, object = 'obstacle') {\r\n        this.grid[position[0]][position[1]] = object\r\n    }\r\n\r\n    clearGridPosition(position) {\r\n        this.grid[position[0]][position[1]] = undefined\r\n    }\r\n\r\n    validMove(pos) {\r\n        pos.forEach((coordinate) => {\r\n            if (this.width <= coordinate || coordinate < 0) {\r\n                throw new Error('Out of bounds move.')\r\n            }\r\n        })\r\n\r\n        if (this.grid[pos[0]][pos[1]] !== undefined) throw new Error('Space is occupied.')\r\n\r\n        return pos\r\n    }\r\n\r\n    _generateRandomValidSpawnPoint() {\r\n        //TODO: This is super badly implemented.\r\n        let position = generatePositionInGrid(this.width, this.player.position[0], this.player.position[1])\r\n        let occupiedPositions = this.occupiedPositions()\r\n        while (occupiedPositions.some(occupied => compareNDArrays(occupied, position))) {\r\n            return this._generateRandomValidSpawnPoint()\r\n        }\r\n        return position\r\n    }\r\n}\r\n\r\nmodule.exports = { Board }\n\n//# sourceURL=webpack:///./src/models/board.js?");

/***/ }),

/***/ "./src/models/rover.js":
/*!*****************************!*\
  !*** ./src/models/rover.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { directionLUT, compass } = __webpack_require__(/*! ../config */ \"./src/config.js\")\r\nconst { playerSpriteRenderer, roverSpriteRenderer } = __webpack_require__(/*! ../ascii-config */ \"./src/ascii-config.js\")\r\nconst { arraySum } = __webpack_require__(/*! ../utilities */ \"./src/utilities.js\")\r\n\r\n// Rover Object Goes Here\r\n// ======================\r\nclass Rover {\r\n    constructor(name, start_pos, direction, board) {\r\n        this.name = name\r\n        this.position = start_pos\r\n        this.travel_log = [start_pos]\r\n        this._direction = direction\r\n        this.board = board\r\n    }\r\n\r\n    get ascii_sprite() {\r\n        return (this.name === 'Starlord') ? playerSpriteRenderer[this._direction] : roverSpriteRenderer[this._direction]\r\n    }\r\n\r\n    get direction() {\r\n        return compass[this._direction]\r\n    }\r\n\r\n    report(message) {\r\n        this.board.emit(`${this.name}: ${message}`)\r\n    }\r\n\r\n    makeTurn(direction) {\r\n        this._direction = this._remapDirectionLookup(this._direction + direction)\r\n        this.report(`Made a turn: new direction is ${this.direction} with position ${this.position}`)\r\n    }\r\n\r\n    turnLeft() {\r\n        this.report('Turning left!')\r\n        this.makeTurn(-1)\r\n    }\r\n\r\n    turnRight() {\r\n        this.report('Turning right!')\r\n        this.makeTurn(1)\r\n    }\r\n\r\n    moveForward() {\r\n        this.report('Moving forward!')\r\n        this.move(this.direction)\r\n    }\r\n\r\n    moveBackward() {\r\n        this.report('Moving backward!')\r\n        this.move(compass[this._remapDirectionLookup(this._direction + 2)])\r\n    }\r\n\r\n    move(direction) {\r\n        this.report(`Moving in direction ${directionLUT[direction]} while facing ${this.direction} from ${this.position}`)\r\n        try {\r\n            let future_position = arraySum(this.position, directionLUT[direction])\r\n            this.position = this.board.validMove(future_position)\r\n        } catch (error) {\r\n            this.report(`Illegal move attempted, staying put: ${error.message}`)\r\n        } finally {\r\n            this.report(`Final position is ${this.position}`)\r\n            this.travel_log.push(this.position)\r\n        }\r\n    }\r\n\r\n    _remapDirectionLookup(directionIndex) {\r\n        var modifier = 0\r\n        if (directionIndex < 0) {\r\n            modifier = 4\r\n        } else if (directionIndex > 3) {\r\n            modifier = -4\r\n        }\r\n        return directionIndex + modifier\r\n    }\r\n}\r\n\r\n\r\nmodule.exports = {\r\n    Rover\r\n}\r\n\n\n//# sourceURL=webpack:///./src/models/rover.js?");

/***/ }),

/***/ "./src/utilities.js":
/*!**************************!*\
  !*** ./src/utilities.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Observable {\r\n    constructor() {\r\n        this.observers = []\r\n        this.messageHistory = []\r\n    }\r\n\r\n    addObserver(observer) {\r\n        this.observers.push(observer)\r\n    }\r\n\r\n    emit(message) {\r\n        this.messageHistory.push(message)\r\n        this.observers.map(observer => observer(message))\r\n    }\r\n}\r\n\r\nfunction arraySum(array1, array2, array_size = 2) {\r\n    var array_result = Array()\r\n    for (i = 0; i < array_size; i++) {\r\n        array_result.push(array1[i] + array2[i])\r\n    }\r\n    return array_result\r\n}\r\n\r\nfunction generateRandomNotInRange(min, max, avoidMin, avoidMax) {\r\n    return [Math.floor(Math.random() * (avoidMin - min + 1)) + min, Math.floor(Math.random() * (avoidMax - max + 1)) + max][Math.random() < 0.5 ? 0 : 1]\r\n}\r\n\r\nfunction generateRandomInt(max) {\r\n    return Math.floor(Math.random() * (max + 1))\r\n}\r\n\r\nfunction removeFromString(line, deleteList) {\r\n    deleteList.map((deletion) => line = line.split(deletion).join(''))\r\n    return line\r\n}\r\n\r\nfunction getFileTimestamp() {\r\n    var d = new Date\r\n    return [d.getMonth() + 1, d.getDate(), d.getFullYear()].join('-') + '_' +\r\n        [d.getHours(), d.getMinutes(), d.getSeconds()].join('-')\r\n}\r\n\r\nfunction generatePositionInGrid(grid_max, not_over, not_below) {\r\n    return [\r\n        generateRandomNotInRange(0, grid_max, not_over, not_below),\r\n        generateRandomNotInRange(0, grid_max, not_over, not_below)\r\n    ]\r\n}\r\n\r\nfunction compareNDArrays(arr1, arr2) {\r\n    let result;\r\n\r\n    arr1.forEach((e1, _) => arr2.forEach(e2 => {\r\n        if (e1 !== e2) {\r\n            result = false\r\n        } else {\r\n            result = true\r\n        }\r\n    }))\r\n\r\n    return result\r\n}\r\n\r\nfunction generatePseudoRandomName() {\r\n    let names = ['Edward', 'Craig', 'Brian', 'Logan', 'Mable', 'Willard', 'Copeland', 'Marcus', 'Alvarado', 'Clara', 'Moreno', 'Ronald', 'Gonzales', 'Veronica', 'Richards', 'Hattie', 'Glover', 'Roxanne', 'Henry']\r\n    return names[generateRandomInt(names.length - 1)]\r\n}\r\n\r\nmodule.exports = {\r\n    generateRandomInt,\r\n    generatePositionInGrid,\r\n    generateRandomNotInRange,\r\n    generatePseudoRandomName,\r\n    arraySum,\r\n    compareNDArrays,\r\n    getFileTimestamp,\r\n    removeFromString,\r\n    Observable\r\n}\n\n//# sourceURL=webpack:///./src/utilities.js?");

/***/ }),

/***/ "./src/views/sprite.js":
/*!*****************************!*\
  !*** ./src/views/sprite.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function sprite(options) {\r\n\r\n    var that = {},\r\n        frameIndex = 0,\r\n        tickCount = 0,\r\n        ticksPerFrame = options.ticksPerFrame || 0,\r\n        numberOfFrames = options.numberOfFrames || 1;\r\n\r\n    that.context = options.context;\r\n    that.width = options.width;\r\n    that.height = options.height;\r\n    that.image = options.image;\r\n    that.x = options.x;\r\n    that.y = options.y;\r\n\r\n    that.update = function() {\r\n\r\n        tickCount++;\r\n\r\n        if (tickCount > ticksPerFrame) {\r\n\r\n            tickCount = 0;\r\n\r\n            // If the current frame index is in range\r\n            if (frameIndex < numberOfFrames - 1) {\r\n                // Go to the next frame\r\n                frameIndex++;\r\n            } else {\r\n                frameIndex = 0;\r\n            }\r\n        }\r\n    };\r\n\r\n    that.render = function() {\r\n\r\n        // Clear the canvas\r\n        that.context.clearRect(0, 0, that.width, that.height);\r\n\r\n        // Draw the animation\r\n        that.context.drawImage(\r\n            that.image,\r\n            frameIndex * that.width / numberOfFrames,\r\n            0,\r\n            that.width / numberOfFrames,\r\n            that.height,\r\n            that.x,\r\n            that.y,\r\n            that.width / numberOfFrames,\r\n            that.height);\r\n    };\r\n\r\n    return that;\r\n}\r\n\r\nmodule.exports = { sprite }\n\n//# sourceURL=webpack:///./src/views/sprite.js?");

/***/ }),

/***/ "./src/views/ui-html.js":
/*!******************************!*\
  !*** ./src/views/ui-html.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { UserInterface } = __webpack_require__(/*! ./ui */ \"./src/views/ui.js\")\r\nconst { removeFromString } = __webpack_require__(/*! ../utilities */ \"./src/utilities.js\")\r\nconst { sprite } = __webpack_require__(/*! ./sprite */ \"./src/views/sprite.js\")\r\n\r\nclass HtmlUI extends UserInterface {\r\n    constructor(gameController) {\r\n        super(gameController)\r\n        this.pause_delta = new Date()\r\n        this.canvas = document.getElementById('canvas')\r\n        this.context = this.canvas.getContext('2d')\r\n        this.canvas.height = 10 * 32\r\n        this.canvas.width = 10 * 32\r\n\r\n        this.loadedResources = 0\r\n        this.images = []\r\n        this.spriteSourcesNum = 5\r\n        this.sprites = []\r\n        this.bindScreenKeys(this)\r\n    }\r\n\r\n    initializeImages(sources) {\r\n        sources.map(source => {\r\n            let image = new Image()\r\n            image.src = source\r\n            image.onload = this.resourcesLoaded.bind(this)\r\n            this.images.push(image)\r\n        })\r\n    }\r\n\r\n    resourcesLoaded() {\r\n        this.loadedResources++;\r\n        if (this.loadedResources === this.spriteSourcesNum) {\r\n            this.images.map(image => {\r\n                this.sprites.push(sprite({\r\n                    context: this.context,\r\n                    width: 128,\r\n                    height: 32,\r\n                    x: 0,\r\n                    y: 0,\r\n                    image: image,\r\n                    numberOfFrames: image.src.includes('Rover') ? 4 : 1,\r\n                    ticksPerFrame: 50\r\n                }))\r\n            })\r\n            this.setTimer()\r\n        }\r\n    }\r\n\r\n    start() {\r\n        this.initializeImages([\r\n            [4, '../../media/images/Rover-Down.png'],\r\n            [4, '../../media/images/Rover-Up.png'],\r\n            [4, '../../media/images/Rover-Right.png'],\r\n            [4, '../../media/images/Rover-Left.png'],\r\n            [1, '../../media/images/Obstacle.png'],\r\n            [1, '../../media/images/Sand.png']\r\n        ])\r\n    }\r\n\r\n    update() {\r\n        if (!this.paused) {\r\n            this.clearScreen()\r\n            this.preDraw()\r\n            this.drawGrid()\r\n            this.postDraw()\r\n            this.render()\r\n            this.isGameOver()\r\n        }\r\n        requestAnimationFrame(this.update.bind(this))\r\n    }\r\n\r\n    onGameOver() {\r\n        return null\r\n    }\r\n\r\n    render() {\r\n        this.sprites.map((sprite, i) => {\r\n            sprite.x = i * 32\r\n            sprite.y = i * 32\r\n\r\n            sprite.update();\r\n            sprite.render();\r\n        })\r\n        this.sprites[0].render()\r\n    }\r\n\r\n    renderGrid(grid) {\r\n        let renderedGrid = grid.map((row) => row.map((entry) => this.renderGridSpace(entry)))\r\n        this.gameController.addLogLine(renderedGrid.map((row) => removeFromString(row.join(' '), ['{/}', '{#5f5f00-fg}', '{#98e85a-fg}'])))\r\n        return renderedGrid\r\n    }\r\n\r\n    renderGridSpace(entry) {\r\n        // return gridSpriteRenderer[typeof (entry)] || entry.ascii_override || entry.ascii_sprite\r\n        return null\r\n    }\r\n\r\n    drawMessage(message) {\r\n        return null\r\n    }\r\n\r\n    drawGrid() {\r\n        let grid = this.renderGrid(this.gameController.board.grid)\r\n        for (let i = 0; i < grid.length; i++) {\r\n            // this.gameContainer.setLine(i, `{center} ${grid[i].join(' ')} {/center}`)\r\n        }\r\n    }\r\n\r\n    clearScreen() {\r\n        return null\r\n    }\r\n\r\n    bindScreenKeys(ui) {\r\n        document.addEventListener('keydown', (e) => {\r\n            if (e.key == ' ' || e.key == 'p') ui.pause()\r\n        });\r\n    }\r\n}\r\n\r\nmodule.exports = { HtmlUI }\n\n//# sourceURL=webpack:///./src/views/ui-html.js?");

/***/ }),

/***/ "./src/views/ui.js":
/*!*************************!*\
  !*** ./src/views/ui.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nclass UserInterface {\r\n    constructor(gameController) {\r\n        this.gameController = gameController\r\n        this.paused = false\r\n        this.timer = null\r\n        this.fps = 30\r\n        this.updateInterval = 1000\r\n        this.gameController.addObserver(this.drawMessage.bind(this))\r\n    }\r\n\r\n    start() {\r\n        this.setTimer()\r\n    }\r\n\r\n    setTimer() {\r\n        if (!this.timer) {\r\n            this.timer = setInterval(this.update.bind(this), this.updateInterval / this.fps)\r\n        }\r\n    }\r\n\r\n    update() {\r\n        if (!this.paused) {\r\n            this.clearScreen()\r\n            this.preDraw()\r\n            this.drawGrid()\r\n            this.postDraw()\r\n            this.render()\r\n            this.isGameOver()\r\n        }\r\n    }\r\n\r\n    pause() {\r\n        this.paused = !this.paused\r\n    }\r\n\r\n    onGameOver() {\r\n        throw new Error('You have to implement the method gameOver!')\r\n    }\r\n\r\n    isGameOver() {\r\n        if (this.gameController.gameOver) {\r\n            clearInterval(this.timer)\r\n            this.timer = null\r\n            this.onGameOver()\r\n            this.gameController.addLogLine('TRAVEL MAP FOR ALL ROVERS:')\r\n            this.renderGrid(this.gameController.board.generateTravelLogBoard())\r\n            this.gameController.onGameOver()\r\n            return\r\n        }\r\n    }\r\n\r\n    render() {\r\n        this.ui.drawGrid()\r\n    }\r\n\r\n    drawGrid(grid) {\r\n        throw new Error('You have to implement the method drawGrid!')\r\n    }\r\n\r\n    drawMessage(message) {\r\n        throw new Error('You have to implement the method notify!')\r\n    }\r\n\r\n    preDraw() {\r\n        this.gameController.update()\r\n    }\r\n\r\n    postDraw() {\r\n        this.gameController.notifyTurnEnd()\r\n    }\r\n\r\n    clearScreen() {\r\n        return null\r\n    }\r\n\r\n    bindScreenKeys() {\r\n        throw new Error('You have to implement the method bindScreenKeys!')\r\n    }\r\n}\r\n\r\nmodule.exports = { UserInterface }\n\n//# sourceURL=webpack:///./src/views/ui.js?");

/***/ })

/******/ });