let i = 0;

const button = document.querySelector('button')
button.addEventListener('click', (event) => {
  i = i + 1;

  button.innerText = `Click me (${i})`
})

const div = document.querySelector('#name-container')
const input = document.querySelector('input')
input.addEventListener('input', (event) => {
  const value = event.target.value

  div.innerText = value
})