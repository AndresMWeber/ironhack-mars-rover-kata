class Observable {
  constructor() {
    this.observers = []
    this.messageHistory = []
  }

  addObserver(observer) {
    this.observers.push(observer)
  }

  emit(message) {
    this.messageHistory.push(message)
    this.observers.map((observer) => observer(message))
  }
}

function arraySum(array1, array2, array_size = 2) {
  var array_result = Array()
  for (i = 0; i < array_size; i++) {
    array_result.push(array1[i] + array2[i])
  }
  return array_result
}

function generateRandomNotInRange(min, max, avoidMin, avoidMax) {
  return [
    Math.floor(Math.random() * (avoidMin - min + 1)) + min,
    Math.floor(Math.random() * (avoidMax - max + 1)) + max,
  ][Math.random() < 0.5 ? 0 : 1]
}

function generateRandomInt(max) {
  return Math.floor(Math.random() * (max + 1))
}

function removeFromString(line, deleteList) {
  deleteList.map((deletion) => (line = line.split(deletion).join('')))
  return line
}

function getFileTimestamp() {
  var d = new Date()
  return (
    [d.getMonth() + 1, d.getDate(), d.getFullYear()].join('-') +
    '_' +
    [d.getHours(), d.getMinutes(), d.getSeconds()].join('-')
  )
}

function generatePositionInGrid(grid_max, not_over, not_below) {
  return [
    generateRandomNotInRange(0, grid_max, not_over, not_below),
    generateRandomNotInRange(0, grid_max, not_over, not_below),
  ]
}

function compareNDArrays(arr1, arr2) {
  let result

  arr1.forEach((e1, _) =>
    arr2.forEach((e2) => {
      if (e1 !== e2) {
        result = false
      } else {
        result = true
      }
    })
  )

  return result
}

function generatePseudoRandomName() {
  let names = [
    'Edward',
    'Craig',
    'Brian',
    'Logan',
    'Mable',
    'Willard',
    'Copeland',
    'Marcus',
    'Alvarado',
    'Clara',
    'Moreno',
    'Ronald',
    'Gonzales',
    'Veronica',
    'Richards',
    'Hattie',
    'Glover',
    'Roxanne',
    'Henry',
  ]
  return names[generateRandomInt(names.length - 1)]
}

module.exports = {
  Observable,
  arraySum,
  generateRandomNotInRange,
  generateRandomInt,
  removeFromString,
  generatePositionInGrid,
  getFileTimestamp,
  compareNDArrays,
  generatePseudoRandomName,
}
