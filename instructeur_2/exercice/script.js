// ajouter un element dynamiquement
let writeName = document.getElementById('writeName');
writeName.textContent += "BENIE SYLVESTRE"
writeName.style.color = "red";



let addbutton = document.getElementById('addbutton');
let dynamiclist = document.getElementById('dynamiclist');

// ajout des actions des actions aux boutons
addbutton.addEventListener('click', ()=>{
    let newitem = document.createElement('li');
    newitem.textContent = 'ajouter un element';
    dynamiclist.appendChild(newitem);
});

// cacher un element au survol 
let hoverparagraph  = document.getElementById('hoverparagraph');
hoverparagraph.addEventListener('mouseover', ()=>{
    hoverparagraph.style.visibility = 'hidden';
})
hoverparagraph.addEventListener('mouseout', ()=>{
    hoverparagraph.style.visibility = 'visible';
})


