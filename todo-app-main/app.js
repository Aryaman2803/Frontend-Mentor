const todoInput = document.querySelector('#todo-input')
const todoList = document.querySelector('.todo-list')
const completeBtnList = document.getElementsByClassName('incomplete')
const crossBtnList = document.getElementsByClassName('delete-cross')
const alertText = document.querySelector('.alert')
const getTheme = document.getElementsByTagName('body')[0]
const themeSwitch = document
  .querySelector('#theme-switcher')
  .addEventListener('click', () => {
    document.body.classList.toggle('dark-theme')
  })

//Event Listeners
todoInput.addEventListener('keydown', addToDo)

const focusInput = () => {
  newTodoInput.focus()
}

function addToDo(e) {
  if (e.keyCode == 13) {
    let text = e.target.value

    if (text.length == 0) {
      alertText.classList.add('empty-alert')
      alertText.innerText = 'Write A Task First'
      alertText.style.display = 'block'
      setTimeout(() => {
        alertText.style.display = 'none'
      }, 2000)
      return
    }
    const todoLi = document.createElement('li')
    const liDiv = document.createElement('div')

    liDiv.classList.add('task')

    const liDivBtn = document.createElement('button')
    liDivBtn.classList.add('incomplete')
    
    const liDivP = document.createElement('p')
    liDivP.classList.add('task-content')

    const img = document.createElement('img')
    img.src = './images/icon-cross.svg'
    img.alt = 'delete cross button'

    img.classList.add('delete-cross')

    liDivP.innerText = text
    todoInput.value = ''
    liDiv.appendChild(img)
    liDiv.appendChild(liDivBtn)
    liDiv.appendChild(liDivP)
    todoList.appendChild(liDiv)

    updateNodeList()
    deleteTask()
  }
}
updateNodeList()
// Complete Task
function updateNodeList() {
  for (let i = 0; i < completeBtnList.length; i++) {
    completeBtnList[i].addEventListener('click', completeTask)
  }
}
function completeTask() {
  if (this.innerHTML === '') {
    this.innerHTML = '<img src="./images/icon-check.svg" alt="">'
  } else {
    this.innerHTML = ''
  }
  this.nextElementSibling.classList.toggle('completed')
  this.classList.toggle('checkbox-bg')
}

deleteTask()
function deleteTask() {
  for (let i = 0; i < crossBtnList.length; i++) {
    crossBtnList[i].addEventListener('click', deleteThatTask)
  }
}

function deleteThatTask() {
  const parent = this.parentNode.parentNode.removeChild(this.parentNode)
}
