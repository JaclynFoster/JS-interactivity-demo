const minusButton = document.getElementById('minus-btn')
const resetButton = document.getElementById('reset-btn')
const plusButton = document.getElementById('plus-btn')
const counterElement = document.getElementById('counter')
const buttonList = document.querySelectorAll('.theme-buttons') // this wil give you an array of buttons rather than writing out seperate variables and seperate event handlers

let count = 0

plusButton.addEventListener('click', () => {
  count++
  counterElement.textContent = count
})

minusButton.addEventListener('click', () => {
  count--
  counterElement.textContent = count
})

resetButton.addEventListener('click', () => {
  count = 0
  counterElement.textContent = count
})
// event.target will target which theme button is selected while using 1 function
const themeButtonClickHandler = event => {
  let themeButton = event.target // reference to button
  let themeText = themeButton.textContent // string what the button is
  let body = document.querySelector('body')
  let main = document.querySelector('main')
  let allButtons = document.querySelectorAll('button')
  body.classList = '' // removes class list previously selected rather than refreshing the page
  body.classList.add(themeText) // creating classes for all buttons within this function
  main.classList.add(themeText)

  for (let i = 0; i < allButtons.length; i++) {
    let buttonClass = allButtons[i]
    buttonClass.classList = ''
    buttonClass.classList.add(themeText)
  }
}
for (let i = 0; i < buttonList.length; i++) {
  let theme = buttonList[i]
  theme.addEventListener('click', themeButtonClickHandler)
}
