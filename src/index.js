import './styles.css';

const btnTodo = document.querySelector('#btnTodo');
const formContainer = document.querySelector('#formContainer');
const closeForm = document.querySelector('#closeForm');
const addBtn = document.querySelector('#addBtn');
const todo = document.querySelector('.todo');

const todoArray = [];

const todoFactory = (title, due, priority) => {
    const sayHello = () => console.log('this is todo Factory test');

    return{title, due, priority};
}

const addFunction = () => {
    todoArray.push(todoFactory(title.value, due.value, priority.value + " priority"));

    const taskHolder = document.createElement('div');
    taskHolder.setAttribute('id', 'taskHolder');

    console.log(todoArray);
    for(let data in todoArray[todoArray.length-1]) {
        console.log(todoArray[todoArray.length-1]);

        const childHolder = document.createElement('div');
        childHolder.textContent = todoArray[todoArray.length-1][data];
        todo.appendChild(taskHolder)
        taskHolder.appendChild(childHolder);
    }

    formContainer.classList.add('formHide')
}


const todo1 = todoFactory('eat', 'now', 'normal');
console.log(todo1);

closeForm.addEventListener('click', () => {
    formContainer.classList.add('formHide');
})

btnTodo.addEventListener('click', () =>{
    formContainer.removeAttribute('class');
})

addBtn.addEventListener('click', () =>{
    event.preventDefault();
    addFunction();
    //should run todoFactory
    //appendChild of tasks  to the DOM
})