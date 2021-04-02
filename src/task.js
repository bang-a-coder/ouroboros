class Task{
    constructor(parentIdentifier, name, identifier, memory=[]){
        this.name = name
        this.identifier = identifier
        this.parentIdentifier = parentIdentifier
        this.taskito
       this.taskitoIndex
       this.memory = memory

        this.createTaskVisual(parentIdentifier)

    }

    completeTask(){this.taskito.remove()}

    static fromObj(jason){
        let revivedTask = new Task(jason.parentIdentifier, jason.name, jason.identifier)

        if (revivedTask.memory !== []){
            revivedTask.memory.map(e => {
                Task.fromObj(e)
            })
        }

        return revivedTask
    }

    createTaskVisual(parentIdentifier){
        let index = makeid(10)
        let that = this

        this.taskitoIndex = index


        let taskito = document.querySelector('#taskito').cloneNode(true)
            let titleDiv = taskito.querySelector('#taskito-title')
            let descriptionDiv = taskito.querySelector('.textarea')
            let saveButton = taskito.querySelector('.save-button')
            let completeButton = taskito.querySelector('#completeButton')


        taskito.classList.remove('displayN')

        titleDiv.innerHTML = this.name
        taskito.dataset.index = index



        let task = document.querySelector('#task-template').cloneNode(true)
            task.classList.add('displayN')
            task.id = index

            let mainDisplayArea = task.querySelector('.main')
                mainDisplayArea.setAttribute('style', 'margin-left: 10px; padding: 0px')
                this.mainDisplayArea = mainDisplayArea

            let taskCreator =task.querySelector('.create-task')
                let newTaskTitle = taskCreator.querySelector('.textarea-new')
                let createTaskBtn = taskCreator.querySelector(`#add-button`)
                
                createTaskBtn.addEventListener('click', function() {
                    console.log('creating')
                    let newTask = new Task(mainDisplayArea, newTaskTitle.innerHTML, index)
                    that.memory.push(newTask)
                    console.log('MEMORY' ,that.memory)
                    newTaskTitle.innerHTML = ''
                    console.log(makeid(10))
                })

        completeButton.addEventListener('click', ()=>{this.completeTask()})

        taskito.addEventListener('click', expand)

        saveButton.addEventListener('click', function() {
            console.log('clicked')
            console.log('input is ' + descriptionDiv.innerHTML)
            this.description = descriptionDiv.innerHTML
            saveButton.classList.add('displayN')
            descriptionDiv.classList.add('displayN')
            taskito.classList.remove('expand')
            task.classList.add('displayN')
    
            //dom.updateDescription(task.indexVal,  task.titleDiv.innerHTML,task.descriptionDiv.innerHTML)
            //console.log(dom.taskList)
    
        })

        function expand(e){
            if (e.target == taskito) {                      //|| e.target == topDetails
                console.log('expanding')
                taskito.classList.add(`expand`)
                descriptionDiv.classList.remove('displayN')
                saveButton.classList.remove('displayN')
                task.classList.remove('displayN')
            }

            return
        }

        function makeid(length) {
            var result           = '';
            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for ( var i = 0; i < length; i++ ) {
               result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
         }

         
        taskito.appendChild(task)
        parentIdentifier.appendChild(taskito)

        this.taskito = taskito
    }
}

export {Task}