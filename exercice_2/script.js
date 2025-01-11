let changetext = document.getElementById('titre');

changetext.textContent = 'Bonsoir';

// changer la couleur du text lorsqu'on click sur le bouton
let description = document.getElementById('description');
let changeStyle = document.getElementById('changeStyle');

changeStyle.addEventListener('click', () =>{
    description.style.color = 'red'

 });

 //  ajout un nouvel element dans le dom

let ajouteparagraph = document.getElementById('ajouteparagraph');
let div = document.getElementById('conteneur');
let newItem = document.createElement('p');
ajouteparagraph.addEventListener('click', () =>{
    
    newItem.textContent = 'Nouveau paragraphe ajouté';
    div.appendChild(newItem);
});

//  supprimer un nouvel element dans le dom
let conteneur_2 = document.getElementById("conteneur_2")
let delateparagraph = document.getElementById("delateparagraph");

delateparagraph.addEventListener('click', () =>{
    conteneur_2.remove()
        
});






