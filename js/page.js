function textotitulo(resumomodulo){
    localStorage.setItem('resumo-modulo', resumomodulo);


    let moduloresumo = localStorage.getItem('resumo-modulo');
    document.getElementById('bloco-quadrante').innerText = moduloresumo;


    
}


function curso(video, lista1,lista2,lista3,lista4){


    localStorage.setItem('video-envio', video);
    localStorage.setItem('listaum',lista1);
    localStorage.setItem('listadois',lista2);
    localStorage.setItem('listatres',lista3);
    localStorage.setItem('listaquatro',lista4);





    window.location.href = 'video.html';

}



let enviovideo = localStorage.getItem('video-envio')
let dicaum = localStorage.getItem('listaum');
let dicadois = localStorage.getItem('listadois');
let dicatres = localStorage.getItem('listatres');
let dicaquatro = localStorage.getItem('listaquatro');



document.getElementById('video').src = enviovideo;
document.querySelector('.lista1').innerText = dicaum;
document.querySelector('.lista2').innerText = dicadois;
document.querySelector('.lista3').innerText = dicatres;
document.querySelector('.lista4').innerText = dicaquatro;