import "./styles.scss";
import {Task} from './task.js'

const conntent = document.querySelector('.content')
const mainDisplayArea = conntent.querySelector('.main')
const createProjectBtn = conntent.querySelector('#createProject')
const projectsDir = conntent.querySelector('.projects-dir')

let viewID = 0
let visibleDiv 

let data = []

window.addEventListener('beforeunload', ()=> {
    
    if (data.length !== 0) {
      console.log('STORING')
      localStorage.setItem('memoir',JSON.stringify(data))}
  }
)

if (localStorage.getItem('memoir')) {
  console.log('FROM MEMORY')
  console.log(localStorage.getItem('memoir'))

  let zombies = JSON.parse(localStorage.getItem('memoir')).map(e => {
   return Task.fromObj(e, mainDisplayArea)
  })
  
  data = zombies
  console.log(zombies)

} else {createProject('HOME')}

console.log('DATA', data)

createProjectBtn.addEventListener('click',() => {createProject()})

function createProject(name){
  viewID++

  const newProjectSide = document.createElement('div')
  newProjectSide.classList.add('project')
  newProjectSide.innerHTML = name
  newProjectSide.dataset.index = viewID
  newProjectSide.addEventListener('click', ()=> {
    visibleDiv.classList.add('displayN')

    newTask.taskito.classList.remove('displayN')

    visibleDiv = newTask.taskito
      
  })
  
  projectsDir.appendChild(newProjectSide)
  
  let newTask = new Task(mainDisplayArea, name, viewID, mainDisplayArea)
  newTask.createTaskVisual(mainDisplayArea)

  if (name === 'HOME'){
    visibleDiv = newTask.taskito
  } else {
    newTask.taskito.classList.add('displayN')
  }
  newTask.taskito.setAttribute('style', 'border: none')
  newTask.taskito.querySelector('.dltButton').remove()
  newTask.taskito.querySelector('.save-button').remove()
  newTask.taskito.querySelector('.due-date').remove()
  newTask.taskito.querySelector('.textarea').remove()
  eventFire(newTask.taskito, 'click')

  data.push(newTask)
  console.log(data)
}

//HELPERS

function eventFire(el, etype){
    if (el.fireEvent) {
      el.fireEvent('on' + etype);
    } else {
      var evObj = document.createEvent('Events');
      evObj.initEvent(etype, true, false);
      el.dispatchEvent(evObj);
    }
  }

console.log('working')
