const firstHeading = document.querySelector('.first h1')
const first = document.querySelector('.first')
const second = document.querySelector('.second')
const third = document.querySelector('.third')
const screens = [first, second, third]
let ranOnce = 0

document.querySelector('#homeButton').addEventListener('click', function() {
  show(first)
})
document
  .querySelector('#portfolioButton')
  .addEventListener('click', function() {
    show(second)
  })
document.querySelector('#resumeButton').addEventListener('click', function() {
  show(third)
})
typeFirstHeading()

function typeFirstHeading() {
  let letters = splitString("Hello, I'm Brandon", 'letters')
  let display = []
  let i = 0
  let type = setInterval(function() {
    display.push(letters[i])
    i++
    firstHeading.innerHTML = display.join('')
    if (i > letters.length - 1) {
      setTimeout(displayStatement, 800)
      clearInterval(type)
    }
  }, 100)
}

function splitString(stringToSplit, wordsOrLetters) {
  let words = stringToSplit
  if (wordsOrLetters === 'letters') {
    return words.split('')
  } else {
    return words.split(' ')
  }
}

function typeFirstParagraph() {
  let statement = document.querySelector('.statement')
  let letters = splitString(statement.innerHTML, 'words')
  statement.innerHTML = ''
  let display = []
  let i = 0
  let type = setInterval(function() {
    display.push(letters[i])
    i++
    statement.innerHTML = display.join(' ')
    if (i > letters.length - 1) {
      clearInterval(type)
    }
  }, 40)
}

function displayStatement() {
  if (ranOnce < 1) {
    let p = document.querySelector('.statement')
    p.style.display = 'inline'
    p.classList.add('show')
    typeFirstParagraph()
    ranOnce = 1
  }
}

setHiddens()
function setHiddens() {
  let a = document.querySelectorAll('.hidden')
  for (i = 0; i < a.length; i++) {
    a[i].addEventListener('click', function() {
      this.classList.toggle('show')
      this.childNodes[5].classList.toggle('inline')
      this.childNodes[9].classList.toggle('inline')
    })
  }
}

function show(screen) {
  let hiddenScreens = []
  // get position of 'screen'
  let indexOfScreen = screens.indexOf(screen)
  // add the ones that arent the 'screen' to hidden array
  hiddenScreens = screens.filter(word => screens.indexOf(word) != indexOfScreen)
  // hide the hiddenScreens
  for (i = 0; i < hiddenScreens.length; i++) {
    hiddenScreens[i].style.display = 'none'
  }
  // show this one
  if (screen === first) {
    screens[indexOfScreen].style.display = 'block'
    typeFirstHeading()
  } else {
    screens[indexOfScreen].style.display = 'flex'
  }
}
