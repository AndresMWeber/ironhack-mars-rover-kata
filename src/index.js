import { GameController } from './controllers/controller'
import { runtimes } from './config'

var controller = new GameController(10, runtimes[1])
controller.start()