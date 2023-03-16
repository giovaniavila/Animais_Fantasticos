//foreach é a melhor forma de selecionar itens no dom
//const imgs = document.querySelectorAll('img');

//imgs.forEach(function(item){
  //console.log(item);
//})

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item){
  console.log(item);
})

//arrow function é somente uma forma de encurtar o código, mascarando a function
const imgs = document.querySelectorAll('img');
imgs.forEach((item) => {
  console.log(item)
})


//retorne cada parágrafo do site
const parag = document.querySelectorAll('p');
parag.forEach((item) => {console.log(item);})

//mostre o texto dos parágrafos no console
parag.forEach((item) => {console.log(item.innerText);})

//como corrigir os erros abaixo
const imgz = document.querySelectorAll('img');
imgz.forEach((item, index) => {console.log(item, index);})

let i = 0;
imgz.forEach(() => {console.log(i++);})

imgz.forEach(() => i++)