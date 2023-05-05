const links = document.querySelectorAll('.menu a[href^="#"]');
console.log(links);


function initScrollSuave(){
function scrollToSection(event){
    event.preventDefault(); //barra a ação
    const href = event.currentTarget.getAttribute('href'); // consegue o # id
    const section = document.querySelector(href); //seleciona o href para 
    const topo = section.offsetTop;
    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });


    //*forma alternativa do scroll
    /* window.scrollTo({
        top: topo,
        behavior: 'smooth',
    }) */
}


links.forEach((item) => {
    item.addEventListener('click', scrollToSection)
})
}
