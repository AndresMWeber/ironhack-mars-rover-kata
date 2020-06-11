import './styles/style.scss'

const { GameController } = require('./controllers/controller')
const { runtimes } = require('./config')

const controller = new GameController(10, runtimes[1])
controller.start()
