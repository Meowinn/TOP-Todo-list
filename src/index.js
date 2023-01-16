import './styles.css';
import { addTodo, todoArray } from './makeTodos.js';
import { addFolder } from './makeFolder.js';


const btnTodo = document.querySelector('#btnTodo');
const formContainer = document.querySelector('#formContainer');
const closeForm = document.querySelector('#closeForm');
const addBtn = document.querySelector('#addBtn');

const todo = document.querySelector('.todoContainer');

const mainContainer = document.querySelector('#mainContainer');
const todoDiv = document.querySelector('#todoDiv');

// create project
const btnProject = document.querySelector('#btnProject');
btnProject.addEventListener('click', () => {
    addFolder();
})

const defaultFolder = document.querySelector('.defaultFolder');
defaultFolder.addEventListener('click', () =>{
    document.querySelector('#mainContainer').removeChild(document.querySelector('#mainContainer').lastElementChild);
    mainContainer.appendChild(todoDiv);
})

// end project


btnTodo.addEventListener('click', () =>{
    formContainer.removeAttribute('class');
})

closeForm.addEventListener('click', () => {
    formContainer.classList.add('formHide');
})

addBtn.addEventListener('click', () =>{
    addTodo();
    console.log(todoArray);
    formContainer.classList.add('formHide');
})
//for folders functionality create a new module everytime then run old  module again when user click on that folder?