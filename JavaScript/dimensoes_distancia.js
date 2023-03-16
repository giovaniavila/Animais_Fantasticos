const listaAnimais = document.querySelector('.animais-lista');
const height = listaAnimais.clientHeight;
console.log(height);

/* 
section.height = height + border
section.offsetHeight = height + padding + border
section.scrollHeight = height total, mesmo dentro de scroll 
*/


//window serve para tomar determinadas ações dependendo do tamanho da janela do usuário
/* 
window.innerWidth; = tamanho da janela
window.outerWidth; = soma devtools
window.innerHeight; = height da janela
window.outerHeight; = soma a barra de endereço

window.pageYOffset; = distância total do scroll horizontal
window.pageXOffset = distância total do scroll vertical 
 */


//matchmedia serve para verificar o tamanho da tela do usuário
const small = window.matchMedia('(max-width: 700px)').matches;
if(small){
  console.log('usuário mobile');
} else{
  console.log('usuário desktop');
}


//adicione uma nova classe a animais lista se a tela for menor que 700px
const tela = window.matchMedia('(max-width: 700px)').matches
const animaisDescricao = document.querySelector('.animais-descricao');

if(tela){
  const classeNova = animaisDescricao.classList.add('sac')
  console.log(animaisDescricao);
} else{
  console.log('a tela é maior que 700px')
}


//selecione o último p
const ultimoP = document.querySelectorAll('p');
console.log(ultimoP[ultimoP.length - 1]);
