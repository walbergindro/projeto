const menuheader = document.querySelector('.menuheader');
function ativarscroll(){
    menuheader.classList.toggle('ativarrolagem', scrollY > 0);
}

    window.addEventListener('scroll', ativarscroll);








function irhtml(){
    window.location.href = 'pagehtml.html'
}

function ircss(){
    window.location.href = 'pagecss.html'
}
function irjs(){
    window.location.href = 'pagejs.html'
}

function irpro(){
    window.location.href = 'pagejs.html'
}


let menu = document.getElementById('icone-menumob');

menu.addEventListener('click', function(){
    const abrirmenu = document.getElementById('abrir-menu');

    abrirmenu.classList.add('ativar');
})

let fecharmenu = document.getElementById('closeheader-menu');

fecharmenu.addEventListener('click', function(){
    const menufechar = document.getElementById('abrir-menu');
    menufechar.classList.remove('ativar')
})