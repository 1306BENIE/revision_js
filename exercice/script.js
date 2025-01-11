// let hoverparagraph = document.getElementById("hoverparagraph");
// hoverparagraph.addEventListener("mouseover", ()=> {
//     hoverparagraph.style.visibility = "hidden";
// });
// hoverparagraph.addEventListener("mouseout", ()=> {
//     hoverparagraph.style.visibility = "visible";
// });

const list = document.getElementById('ReverseElement');
const btnReverse = document.getElementById('Reversed');

btnReverse.addEventListener('click', () => {
  const listItems = Array.from(list.getElementsByTagName('li'));
  const eltReverse = listItems.reverse();
  eltReverse.forEach(item => list.appendChild(item)); 
  
});



