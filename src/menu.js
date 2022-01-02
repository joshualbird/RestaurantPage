import './style.css';
import Steak1 from './steak1.jpeg';
import Steak2 from './steak2.jpg';

let writeMenu = function() {
    const content = document.getElementById("content");

    let menuItemFirst = document.createElement("p");
    menuItemFirst.textContent = "Filet Mignon";
    content.appendChild(menuItemFirst);

    let steak = new Image();
    steak.src = Steak1;
    content.appendChild(steak);

    let menuItemSecond = document.createElement("p");
    menuItemSecond.textContent = "New York Strip";
    content.appendChild(menuItemSecond);

    let steakAgain = new Image();
    steakAgain.src = Steak2;
    content.appendChild(steakAgain);
}

export default writeMenu;
