import {todoBar} from './todoBar.js';
import { todoArray } from './makeTodos.js';

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
    item.addEventListener('click', () => {
        document.querySelector('#btnFormWrapper').remove();
        todoArray.splice(0, todoArray.length);
        console.log('folder clicked')
        todoBar();

    })
}

export {addFolder};


