import './home.js';
import './contact.js';
import './menu.js';
import './style.css';
import writeHome from './home.js';
import writeContact from './contact';
import writeMenu from './menu.js';
writeHome();

const content = document.getElementById("content");
const heading = document.getElementById("heading");
const footing = document.getElementById("footer");

//create header
let header = document.createElement('h1');
header.textContent = 'kreb';
heading.appendChild(header);

//create footer
let footer = document.createElement('p');
footer.textContent = 'created by Joshua Bird - The Odin Project 2022';
footing.appendChild(footer);


let tabs = document.createElement('ul');
let tabHome = document.createElement('li');
tabHome.textContent = 'Home';
let tabContact = document.createElement('li');
tabContact.textContent = 'Contact';
let tabMenu = document.createElement('li');
tabMenu.textContent = 'Menu';

header.addEventListener('click', function (){
    clearContents();
    writeHome();
})

tabHome.addEventListener('click', function (){
    clearContents();
    writeHome();
})

tabContact.addEventListener('click', function (){
    clearContents();
    writeContact();
})

tabMenu.addEventListener('click', function (){
    clearContents();
    writeMenu();
})


tabs.appendChild(tabHome);
tabs.appendChild(tabContact);
tabs.appendChild(tabMenu);

heading.appendChild(tabs);

let clearContents = function() {
    document.getElementById("content").innerHTML = "";
}

