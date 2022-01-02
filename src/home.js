import './style.css';
import Kreb from './kreb.jpg';

let writeHome = function() {
    const content = document.getElementById("content");
    //create food porn
    let kreb = new Image();
    kreb.src = Kreb;
    content.appendChild(kreb);

    let restDescription = document.createElement('p');
    restDescription.textContent = "We believe that great food starts with the quality of the ingredients, finished with the flair of a professional culinarian. Take a closer look at our menus, and you'll find our menu doesn't begin and end with a New York strip steak or a filet mignon. \n\n Our chefs are experts in preparing the best available aged steaks in a variety of classic and noveau styles, including Steak ala Oscar, Steak au Poivre, and Tournedos au Bleu.  There's nothing like a great steak. For those of you who like a nice piece of fish, we've got the best of that too! Our award-winning menus are more extensive, more creative, with a broader appeal than the typical steakhouses - check it out.";
    content.appendChild(restDescription);
}

export default writeHome;





