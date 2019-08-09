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
        rl.question('Please enter your rover commands:\n\tMust be\n\t\t"r"-Right "f"-Forward "l"-Left "b"-Backward)\n', (answer) => {
            commandsList = answer
            resolve()
        })
    })
}

const question2 = () => {
    return new Promise((resolve, reject) => {
        rl.question('Now enter the board size:\n', (answer) => {
            boardSize = answer
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