import { addTodo, todoArray } from "./makeTodos.js";
const mainContain = document.getElementById('mainContainer');
const folderContainer = document.querySelector('.folderContainer');

let folderArray = [];

function addFolder() {
    let newFolder = document.createElement('div');
    newFolder.innerText = prompt('Enter Folder name:');
    newFolder.classList.add('folder');

    folderArray.push(newFolder);
    folderContainer.appendChild(newFolder);
    
    renderFolder();
}

function renderFolder() {
    for(let i = 0; i<folderArray.length; i++) {
        // createTodo(todoArray[i]);
        createFolderFunc(folderArray[i]);
    }
}

function createFolderFunc(item) {
    //taskHolder.setAttribute('id', todoArray.indexOf(item));
    item.addEventListener('click', () => {
        let newDoc = document.createElement('div');
        newDoc.setAttribute('id', folderArray.indexOf(item));
       
        document.querySelector('#mainContainer').removeChild(document.querySelector('#mainContainer').lastElementChild);
        // todoDiv.appendChild(todo);
        mainContain.appendChild(newDoc); // = todoDiv 

    //     let btnContainerFolder = document.createElement('div');
    //     btnContainerFolder.classList.add('btnContainer');
    //     newDoc.appendChild(btnContainerFolder);
        
    //     let btnTodoFolder = document.createElement('button'); //+new to do
    //     btnTodoFolder.setAttribute('id', 'btnTodo');
    //     btnTodoFolder.innerText = '+ New To Do';
    //     btnContainerFolder.appendChild(btnTodoFolder);

    //     btnTodoFolder.addEventListener('click', () => {
    //         formContainer.removeAttribute('class');
    //     })

    //     let formContainer = document.createElement('div'); //formContainer
    //     formContainer.setAttribute('id', 'formContainer');
    //     formContainer.classList.add('formHide');
    //     newDoc.appendChild(formContainer);

    //     let formFolder = document.createElement('form');
    //     formFolder.action = "index.js";
    //     formContainer.appendChild(formFolder);
        
    //     let closeFormFolder = document.createElement('button');
    //     closeFormFolder.setAttribute('id', 'closeForm');
    //     closeFormFolder.innerText = "X";
    //     formFolder.appendChild(closeFormFolder);

    //     let inputWrapFolder = document.createElement('div');
    //     inputWrapFolder.setAttribute('id', 'input_wrap');
    //     formFolder.appendChild(inputWrapFolder);

    //     let labelTitle = document.createElement('label');
    //     labelTitle.htmlFor = 'Title';
    //     labelTitle.innerText = "Title: ";
    //     inputWrapFolder.appendChild(labelTitle);

    //     let inputTitle = document.createElement('input');
    //     inputTitle.setAttribute('type', 'text');
    //     inputTitle.setAttribute('id', 'title');;
    //     inputTitle.placeholder = "Your task:"
    //     inputTitle.value = "task1";
    //     inputWrapFolder.appendChild(inputTitle);

    //     let inputWrapFolder2 = document.createElement('div');
    //     inputWrapFolder2.setAttribute('id', 'input_wrap');
    //     formFolder.appendChild(inputWrapFolder2);

    //     let labelDue = document.createElement('label');
    //     labelDue.htmlFor = "due";
    //     labelDue.innerText = "Due: ";
    //     inputWrapFolder2.appendChild(labelDue);

    //     let inputDue = document.createElement('input');
    //     inputDue.setAttribute('type', 'date');
    //     inputDue.setAttribute('id', 'due');
    //     inputWrapFolder2.appendChild(inputDue);

    //     let inputWrapFolder3 = document.createElement('div');
    //     inputWrapFolder3.setAttribute('id', 'input_wrap');
    //     formFolder.appendChild(inputWrapFolder3);

    //     let labelPrio = document.createElement('label');
    //     labelPrio.htmlFor = "Priority";
    //     labelPrio.innerText = "Priority: ";
    //     inputWrapFolder3.appendChild(labelPrio);

    //     let inputPriority = document.createElement('select');
    //     inputPriority.setAttribute('id', 'priority');
    //     let opt1F = document.createElement('option');
    //     let opt2F = document.createElement('option');
    //     let opt3F = document.createElement('option');
    //     opt2F.defaultSelected = true;

    //     opt1F.setAttribute('value', 'Low');
    //     let lowF = document.createTextNode('Low');
    //     opt1F.appendChild(lowF);
    //     inputPriority.appendChild(opt1F);

    //     opt2F.setAttribute('value', 'Normal');
    //     let normalF = document.createTextNode('Normal');
    //     opt2F.appendChild(normalF);
    //     inputPriority.appendChild(opt2F);

    //     opt3F.setAttribute('value', 'Urgent');
    //     let urgentF = document.createTextNode('Urgent');
    //     opt3F.appendChild(urgentF);
    //     inputPriority.appendChild(opt3F);

    //     inputWrapFolder3.appendChild(inputPriority);
    //     // item.disabled = true;

    //     let addBtnFolder = document.createElement('button'); //addBtn
    //     addBtnFolder.setAttribute('type', 'submit');
    //     addBtnFolder.setAttribute('id', 'addBtn');
    //     addBtnFolder.innerText = "Add";
    //     formFolder.appendChild(addBtnFolder);

    //     addBtnFolder.addEventListener('click', () => {
    //         addTodo();
    //         console.log(todoArray);
    //         formContainer.classList.add('formHide');
    //     })

    //     let todoContainerFolder = document.createElement('div');
    //     todoContainerFolder.classList.add('todoContainer');
    //     newDoc.appendChild(todoContainerFolder);

    })



}

export {addFolder};


