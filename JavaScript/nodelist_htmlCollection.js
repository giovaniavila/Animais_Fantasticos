// Selciona os elementos pelo ID
const animais = document.getElementById('animais');
console.log(animais);

// Seleciona os elementos pela Classe e retorna html collection
const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection[0]);

//Seleciona os elementos de forma análaga ao css (mais utilizado)
const primeiraLi = document.querySelector('li');
console.log(primeiraLi);
const linksInternos = document.querySelector('[href^="#"]');
console.log(linksInternos);

//Seleciona todos os elementos que estiverem dentro de outras classes, tags, etc e retorna nodelist
const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg[0])

//htmlcollection: é ao vivo
//nodeList: é estático
// ao adicionar o grid-section na primeira li, o htmlcollection atualiza em tempo real
const gridSectionHtml = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

primeiraLi.classList.add('grid-section');

console.log(gridSectionHtml);
console.log(gridSectionNode);

//array-like: htmlcollection e nodelist são array-like, parecem array, mas não são
//o método foreach(), existe somente apenas no NodeList.
gridSectionNode.forEach(function(item, index){
  console.log(item);
})

//para transformar uma array like em array:
const arrayGrid = Array.from(gridSectionHtml);
arrayGrid.forEach(function(item){
  console.log(item);
})

//exercícios
//retorne no console todas as imagens do site
const todasImgs = document.querySelectorAll('img');
console.log(todasImgs);

//retorne no console todas as imagens que começaram com a palavra imagem
const comecaImg = document.querySelectorAll('[src ^= "img/imagem"]');
console.log(comecaImg);

//selecione todos os links internos (onde o href começa com #)
const todosLinks = document.querySelectorAll('[href ^= "#"]');
console.log(todosLinks);

//selecione o primeiro h2 dentro de .animais-descricao
const h2Animais = document.querySelector('.animais-descricao h2');
console.log(h2Animais);

//Selecione o último p do site
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[paragrafos.length - 1]);