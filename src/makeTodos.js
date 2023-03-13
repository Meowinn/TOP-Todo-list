let todoArray = [];

const todoFactory = (title, due, priority) => {
    title = title.value;
    due = due.value;
    priority = priority.value;

    return { title, due, priority };
};


function addTodo() {
    const todo = document.querySelector('.newTodoContainer');

    event.preventDefault();
    todoArray.push(todoFactory(title, due, priority));
    render(todo);
};

function render(to) {
    //call todo
    const multiTaskHolder = document.querySelectorAll('.taskHolder');
    multiTaskHolder.forEach(taskHolder => to.removeChild(taskHolder));

    for (let i = 0; i < todoArray.length; i++) {
        createTodo(todoArray[i], to);
    }

}

function createTodo(item, to) {

    //call todo = #library-container

    const taskHolder = document.createElement('div'); //= bookDiv
    const checkBox = document.createElement('input');
    const titleDiv = document.createElement('div');
    const dueDiv = document.createElement('div');
    const prioDiv = document.createElement('div');
    const editBtn = document.createElement('button');
    const removeBtn = document.createElement('button');

    taskHolder.classList.add('taskHolder');
    taskHolder.setAttribute('id', todoArray.indexOf(item));

    checkBox.setAttribute('type', 'checkbox');
    taskHolder.appendChild(checkBox);

    titleDiv.textContent = item.title;
    titleDiv.classList.add('text');
    taskHolder.appendChild(titleDiv);

    dueDiv.textContent = item.due;
    dueDiv.classList.add('text');
    taskHolder.appendChild(dueDiv);

    prioDiv.textContent = item.priority + ' priority';
    prioDiv.classList.add('text');
    taskHolder.appendChild(prioDiv);

    editBtn.classList.add('editBtn');
    editBtn.innerText = "Edit";
    taskHolder.appendChild(editBtn);

    removeBtn.classList.add('removeBtn');
    removeBtn.innerText = 'Remove';
    taskHolder.appendChild(removeBtn);

    to.appendChild(taskHolder);

    checkBox.addEventListener('change', (e) => {

        if (e.target.checked) {
            taskHolder.style.backgroundColor = 'rgb(65, 64, 64)';
            taskHolder.style.color = 'gray';
            titleDiv.classList.add('lineThrough');
            dueDiv.classList.add('lineThrough');
            prioDiv.classList.add('lineThrough');
        }
        else if (e.target.checked == false) {
            taskHolder.style.removeProperty('color');
            titleDiv.classList.remove('lineThrough');
            dueDiv.classList.remove('lineThrough');
            prioDiv.classList.remove('lineThrough');
            taskHolder.style.backgroundColor = "";
        };
    })

    // edit function!

    editBtn.addEventListener('click', () => {
        let inputTitle = document.createElement('input');
        let inputDate = document.createElement('input');
        let inputPrio = document.createElement('select');
        let opt1 = document.createElement('option');
        let opt2 = document.createElement('option');
        let opt3 = document.createElement('option');

        inputTitle.setAttribute('type', 'text');
        inputTitle.classList.add('inputTitle');
        inputTitle.value = item.title;

        inputDate.setAttribute('type', 'date');
        inputDate.classList.add('inputDate');
        inputDate.value = item.due;

        inputPrio.classList.add('inputPrio');
        opt2.defaultSelected = true;

        opt1.setAttribute('value', 'Low');
        let low = document.createTextNode('Low');
        opt1.appendChild(low);
        inputPrio.appendChild(opt1);

        opt2.setAttribute('value', 'Normal');
        let normal = document.createTextNode('Normal');
        opt2.appendChild(normal);
        inputPrio.appendChild(opt2);

        opt3.setAttribute('value', 'Urgent');
        let urgent = document.createTextNode('Urgent');
        opt3.appendChild(urgent);
        inputPrio.appendChild(opt3);


        titleDiv.parentNode.replaceChild(inputTitle, titleDiv);
        dueDiv.parentNode.replaceChild(inputDate, dueDiv);
        prioDiv.parentNode.replaceChild(inputPrio, prioDiv);
        // end edit button

        // button to accept changes
        const okBtn = document.createElement('button');
        okBtn.setAttribute('id', 'okBtn');
        okBtn.innerText = 'Ok';
        // taskHolder.appendChild(okBtn);

        editBtn.parentNode.replaceChild(okBtn, editBtn);

        okBtn.addEventListener('click', () => {
            console.log(inputTitle.value);

            item.title = inputTitle.value;
            item.due = inputDate.value;
            item.priority = inputPrio.value;

            titleDiv.textContent = item.title;
            dueDiv.textContent = item.due;
            prioDiv.textContent = item.priority + " priority";

            inputTitle.parentNode.replaceChild(titleDiv, inputTitle);
            inputDate.parentNode.replaceChild(dueDiv, inputDate);
            inputPrio.parentNode.replaceChild(prioDiv, inputPrio);

            okBtn.parentNode.replaceChild(editBtn, okBtn);

            okBtn.remove();
        })
        // end button
    })
    // end edit
    removeBtn.addEventListener('click', () => {
        todoArray.splice(todoArray.indexOf(item), 1);
        render(to);
        console.log(todoArray);
    })
}

export { addTodo, todoArray };