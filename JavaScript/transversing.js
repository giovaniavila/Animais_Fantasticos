//** Transversing é navegaçaõ pelo DOM */

const lista  = document.querySelector('.animais-lista');
console.log(lista.children)

lista.parentElement; //elemento pai
lista.parentElement.parentElement; //elemento pai do elemento pai
lista.previousElementSibling; //elemento acima ou anterior (no html)
lista.nextElementSibling; //elemento abaixo ou posterior (no html)

lista.children; //HTML collection dos elementos dentro do objeto
lista.children[0]; //primeiro elemento do objeto
lista.children[lista.children.length - 1] // último elemento do objeto

lista.querySelectorAll('li'); // todas as LI's
lista.querySelectorAll('li:last-child'); //último elemento

// ** Element vs Node
//elements representam uma tag html, Node representa um nó, que pode ser qualquer caractere, seja um espaço, comentário, etc...


//** Manipulando elementos */
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo'); 
const animais = document.querySelector('.animais');

contato.appendChild(lista); //move a lista para o final de contato
contato.insertBefore(lista, titulo); // insere lista em contato (pai), porém antes de título
contato.removeChild(titulo); //remove o titulo de contato
contato.replaceChild(lista, titulo); //substitui o titulo por lista

