import './style.css';
import Building from './building.jpeg';

let writeContact = function() {
    const content = document.getElementById("content");

    let address = document.createElement("p");
    address.textContent = "123 Cardboard Box\nColumbus, OH 43202";
    content.appendChild(address);

    let building = new Image();
    building.src = Building;
    content.appendChild(building);

    let phone = document.createElement("p");
    phone.textContent = "555-867-5309";
    content.appendChild(phone);
}

export default writeContact;