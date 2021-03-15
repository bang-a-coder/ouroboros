import "./styles.scss";
import {Task} from './task.js'

const conntent = document.querySelector('.content')
const mainDisplayArea = conntent.querySelector('.main')
const createProjectBtn = conntent.querySelector('#createProject')
const projectsDir = conntent.querySelector('.projects-dir')

let viewID = 0

createProjectBtn.addEventListener('click',() => {createProject()})

function createProject(){
    viewID++
    const newProjectSide = document.createElement('div')
        newProjectSide.classList.add('project')
        newProjectSide.innerHTML = 'New Project'
        newProjectSide.dataset.index = viewID
        newProjectSide.addEventListener('click', ()=> {
            
        })
    projectsDir.appendChild(newProjectSide)
    
    
    

    //conntent.querySelector('#home-task').appendChild(newProjectInst)


    
}

let index = 0


let homeTask = new Task(mainDisplayArea, 'HOME', index)
homeTask.taskito.setAttribute('style', 'border: none')
homeTask.taskito.querySelector('.dltButton').remove()
homeTask.taskito.querySelector('.save-button').remove()
homeTask.taskito.querySelector('.due-date').remove()
homeTask.taskito.querySelector('.textarea').remove()

eventFire(homeTask.taskito, 'click')

function eventFire(el, etype){
    if (el.fireEvent) {
      el.fireEvent('on' + etype);
    } else {
      var evObj = document.createEvent('Events');
      evObj.initEvent(etype, true, false);
      el.dispatchEvent(evObj);
    }
  }



// let taskCreator = mainDisplayArea.querySelector('.create-task')
//     let newTaskTitle = taskCreator.querySelector('.textarea-new')
//     let createTaskBtn = taskCreator.querySelector(`#add-button`)


// createTaskBtn.addEventListener('click', function() {
//     console.log('creating')
//     console.log(newTaskTitle.innerHTML)
//     let newTask = new Task(mainDisplayArea, newTaskTitle.innerHTML, index)
//     newTaskTitle.innerHTML = ''
// })


//let homeTask = new Task(conntent,'Oroborousss',index )


console.log('working')
