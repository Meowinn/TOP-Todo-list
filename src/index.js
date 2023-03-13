import './styles.css';
import { addFolder } from './makeFolder.js';
import {todoBar} from './todoBar.js';

todoBar();

const mainContainer = document.querySelector('#mainContainer');

// create project
const btnProject = document.querySelector('#btnProject');
btnProject.addEventListener('click', () => {
    addFolder();
})

const defaultFolder = document.querySelector('.defaultFolder');
defaultFolder.addEventListener('click', () =>{
    console.log('default clicked')
})

// end project


