let elementOver = document.getElementById("elementOver");

elementOver.addEventListener("mouseover", ()=>{ 
    elementOver.style.visibility = "hidden";
});
elementOver.addEventListener("mouseout", ()=>{ 
    elementOver.style.visibility = "visible";
    elementOver.style.color = "red";
    elementOver.style.fontSize = "24px";
});

let myName = document.getElementById("myName");
myName.textContent += "BENIE SYLVESTRE";
myName.style.color = "skyblue";

// inverser l'ordre des elements d'une liste 
let reverseElement = document.getElementById("reverseElement");
let btnInverse = document.getElementById("btnInverse");

btnInverse.addEventListener("click", () => {
    let elemetsInverse = Array.from(reverseElement.getElementsByTagName("li"));
    let elements = elemetsInverse.reverse();
    elements.forEach(item => reverseElement.appendChild(item));
});

// ajout un nouvel element dans le dom
let conteneur = document.getElementById('conteneur');
let ajouteparagraph = document.getElementById('ajouteparagraph');
let paragraph = document.createElement('p');

ajouteparagraph.addEventListener('click', () => {
    paragraph.textContent = 'Nouveau paragraphe ajouté';
    conteneur.appendChild(paragraph);
});

let conteneur_2 = document.getElementById('conteneur_2');
let delateparagraphn = document.getElementById('delateparagraph');

delateparagraphn.addEventListener('click', () => {
    conteneur_2.removeChild(conteneur_2.firstChild);
});

// afficher un element dans la boite d'alerte
let todaItems = document.querySelectorAll('.todo-item');

todaItems.forEach(item => {
    item.addEventListener('click', () => {
        alert('Element cliqué : ' + item.textContent);
    });
});





