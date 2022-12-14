const image = document.querySelector('img')
image.src = 'assets/rick.webp'
image.alt = 'rick'

const h1 = document.querySelector('h1')
console.log(h1.className)
console.log(h1.classList)

h1.classList.add('small-title')

const div = document.createElement('div')
// div.innerText = 'Toto'
div.innerHTML = '<span>Test</span>'
const body = document.querySelector('body')

body.appendChild(div)