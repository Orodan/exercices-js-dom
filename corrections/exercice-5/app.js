const cancelBtn = document.querySelector('#cancel')
const addBtn = document.querySelector('#add')
const firstNameInput = document.querySelector('#first-name')
const lastNameInput = document.querySelector('#last-name')
const userListDiv = document.querySelector('#user-list')

function reset() {
  firstNameInput.value = ""
  lastNameInput.value = ""
}

cancelBtn.addEventListener('click', reset)

addBtn.addEventListener('click', () => {
  const user = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
  }

  reset()

  const div = document.createElement('div')
  div.innerText = user.lastName + ' ' + user.firstName;

  userListDiv.appendChild(div)
})