import "./styles.scss";
import {Task} from './task.js'

const conntent = document.querySelector('.content')
const mainDisplayArea = conntent.querySelector('.main')
const createProjectBtn = conntent.querySelector('#createProject')
const projectsDir = conntent.querySelector('.projects-dir')

let viewID = 0
let visibleDiv 

let data = []

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
  
  let newTask = new Task(mainDisplayArea, name, viewID)
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
createProject('HOME')

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
