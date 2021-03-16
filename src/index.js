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

    

    //conntent.querySelector('#home-task').appendChild(newProjectInst)


    
}

createProject('HOME')




// let homeTask = new Task(mainDisplayArea, 'HOME', viewID)
// console.log(homeTask.taskitoIndex)
// homeTask.taskito.setAttribute('style', 'border: none')
// homeTask.taskito.querySelector('.dltButton').remove()
// homeTask.taskito.querySelector('.save-button').remove()
// homeTask.taskito.querySelector('.due-date').remove()
// homeTask.taskito.querySelector('.textarea').remove()
// viewID++
// data.push(homeTask)

// console.log(data)

// eventFire(homeTask.taskito, 'click')

// visibleDiv = homeTask.taskito

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
