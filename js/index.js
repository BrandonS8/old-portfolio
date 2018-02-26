const firstHeading = document.querySelector('.first h1')
const first = document.querySelector('.first')
const second = document.querySelector('.second')
const third = document.querySelector('.third')
let ranOnce = 0

document.querySelector('#homeButton').addEventListener('click', showFirst)
document.querySelector('#portfolioButton').addEventListener('click', showSecond)
document.querySelector('#resumeButton').addEventListener('click', showThird)
typeFirstHeading()

function typeFirstHeading () {
  let words = "Hello, I'm Brandon"
  let letters = words.split('')
  let display = []
  let i = 0
  let type = setInterval(function () {
    display.push(letters[i])
    i++
    firstHeading.innerHTML = display.join('')
    if (i > letters.length - 1) {
      setTimeout(displayStatement, 800)
      clearInterval(type)
    }
  }, 150)
}

function typeFirstParagraph () {
  let statement = document.querySelector('.statement')
  let words = statement.innerHTML
  statement.innerHTML = ''
  let letters = words.split(' ')
  let display = []
  let i = 0
  let type = setInterval(function () {
    display.push(letters[i])
    i++
    statement.innerHTML = display.join(' ')
    if (i > letters.length - 1) {
      clearInterval(type)
    }
  }, 100)
}

function displayStatement () {
  if (ranOnce < 1) {
    let p = document.querySelector('.statement')
    p.style.display = 'inline'
    p.classList.add('show')
    typeFirstParagraph()
    ranOnce = 1
  }
}

setHiddens()
function setHiddens () {
  let a = document.querySelectorAll('.hidden')
  for (i = 0; i < a.length; i++) {
    a[i].addEventListener('click', function () {
      this.classList.toggle('show')
    })
  }
}

function showFirst () {
  typeFirstHeading()
  first.style.display = 'block'
  second.style.display = 'none'
  third.style.display = 'none'
}
function showSecond () {
  first.style.display = 'none'
  second.style.display = 'flex'
  third.style.display = 'none'
}
function showThird () {
  first.style.display = 'none'
  second.style.display = 'none'
  third.style.display = 'flex'
}
