import "./styles.scss";
import {Task} from './task.js'

const conntent = document.querySelector('.content')
const mainDisplayArea = conntent.querySelector('.main')

let index = 0


let taskCreator = document.querySelector('.create-task')
    let newTaskTitle = taskCreator.querySelector('.textarea-new')
    let createTaskBtn = taskCreator.querySelector(`#add-button`)


createTaskBtn.addEventListener('click', function() {
    console.log('creating')
    console.log(newTaskTitle.innerHTML)
    let newTask = new Task(mainDisplayArea, newTaskTitle.innerHTML, index)
    newTaskTitle.innerHTML = ''
})


//let homeTask = new Task(conntent,'Oroborousss',index )


console.log('working')
