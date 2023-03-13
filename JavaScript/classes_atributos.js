//Classlist retorna uma lista com todas as classes daquele elemento, permite adicionar, remover e verificar
// só funciona no query selector (html collection)
const menu = document.querySelector('.menu');
console.log(menu.className);
console.log(menu.classList);
console.log(menu.classList.add('ativo'))
console.log(menu.classList.remove('ativo'))
console.log(menu.classList.toggle('ativo')) //adiciona / remove classe
console.log(menu.classList.contains('ativo')) //true or false
console.log(menu.classList.replace('ativo','inativo'))



//attributes
const animais = document.querySelector('.animais'); //a class deve-se por dentro de aspas simples
console.log(animais.attributes[1]); 


//getAtributte e setAtributte
const img = document.querySelector('img');

img.getAttribute('src'); //valor do src
img.setAttribute('alt', 'Texto alternativo'); //muda o alt
img.hasAttribute('id'); //true or false
img.removeAttribute('alt'); //remove o alt

img.hasAttributes(); //true or false, se tem algum atributo



//Read only vs Writable 
// há propriedades que não podem ser alteradas em seus valores, são consideradsa read only
const bicho = document.querySelector('.animais');

bicho.className; //string com nome da classe
bicho.classname = 'azul'; //sobrescreve a string
bicho.classname += ' vermelho' //adiciona vermelho a string

const text = bicho.classname += ' vermelho' 
console.log(text);

bicho.attributes = 'class-ativo'; // read only


//adicione a classe ativo a todos os itens do menu
const addAt = document.querySelectorAll('.menu a');
addAt.forEach(function(item){
  item.classList.add('ativo')
})

//remova todas a classe ativo de todos os itens do menu, com excessão do primeiro
addAt.forEach(function(item){
  item.classList.remove('ativo')
})
addAt[0].classList.add('ativo');

//verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');

imgs.forEach(function(item){
  const possuiAtri = item.hasAttribute('alt')
  console.log(possuiAtri);
})