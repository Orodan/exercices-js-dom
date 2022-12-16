const body = document.querySelector('body')

const p = document.createElement('p')
p.innerText = 'Hello world'
p.classList.add('blue')

body.appendChild(p)

const img = document.createElement('img')
img.src = 'assets/rick.webp'
img.alt = 'Rick'

body.appendChild(img)

const div = document.createElement('div')
div.innerHTML = '<p>Je suis un paragraphe p dans une div</p>'

body.appendChild(div)