const { GameController } = require('./src/controller')
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var boardSize = undefined
var commandsList = undefined

const question1 = () => {
    return new Promise((resolve, reject) => {
        rl.question('Please enter your rover commands (default: flrblff):\n  Must be\n    r    Right\n    f    Forward\n    l    Left\n    b    Backward\n', (answer) => {
            commandsList = answer || 'flrblff'
            resolve()
        })
    })
}

const question2 = () => {
    return new Promise((resolve, reject) => {
        rl.question('Now enter the board size between 8-20 (default: 10): ', (answer) => {
            boardSize = (answer > 8 && answer < 20) ? answer : 10
            resolve()
        })
    })
}

const main = async () => {
    await question1()
    await question2()
    rl.close()
    new GameController(parseInt(boardSize)).play(commandsList)
}

main()