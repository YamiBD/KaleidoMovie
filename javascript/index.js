
//Agregar encabezado y pie de pagina
//Agrego los encabezados

const header=document.getElementById('idHeader');
var contenidoHeader=`<!-- Logo en inteligencia artificial, Ale-->
<!-- Div con generos peliculas cortos y inicio de sesion, barra de seleccion -->
<div id="Barra_de_seccion">
    <article class="flex_item_b"> <a href="../KaleidoMovie/pages/peliculasPopulares.html">Peliculas</a></article>
    <article class="flex_item_b"><a href="#Cortos">Cortos</a></article>
    <article class="flex_item_b"><a href="../KaleidoMovie/pages/registrarse.html">Registrarse</a></article>
    <article class="flex_item_b"><a href="../KaleidoMovie/pages/sesion.html">Inicio de sesion</a></article>    
    
</div>
<!-- Titulo arriba a la derecha , dentro de la imagen con un logo-->
<div id="Titulo" >            
    <article class="animate__animated animate__bounce">       
       <img src="../KaleidoMovie/img/Logos para la web/logo_faro_negro_blanco.png" alt="KaleidoMovie" >
    </article>
    
</div>`;

header.innerHTML=contenidoHeader;

//Agrego el pie de pagina
const foot=document.getElementById("Cambiar_pag_y_contactos");

var contenidoFoot=`             
<div id="siguiente">
</div>
<!-- Contactos/Redes -->
<div id="redes">
    <p>Redes</p>
    <article><a href="https://www.instagram.com/?hl=es"><i class="fa-brands fa-instagram fa-lg" style="color: #8066cc;"></i></a></article>
    <article><a href="https://twitter.com/"><i class="fa-brands fa-twitter" style="color: #398e75;"></i></a></article>
    <article><a href="https://es-la.facebook.com/"><i class="fa-brands fa-facebook"></i></a></article>
    <article><a href="https://mail.google.com/"><i class="fa-regular fa-envelope fa-bounce"></i></a></td></article>
    <article><a href="https://web.whatsapp.com/"><i class="fa-brands fa-whatsapp fa-beat" style="color: #3dc29a;"></i></a></article>  
</div>`;

foot.innerHTML=contenidoFoot;


//Agregar Peliculas
var cad=`<h2>Peliculas</h2>
<div class="grid-container">`
for(var i=0; i<dataPelicula.length;i++){
    cad+= 
    `
<div class="grid-item">
    <a href='../KaleidoMovie/pages/pelicula.html'> <img src='../KaleidoMovie${dataPelicula[i].imagen}' alt=${dataPelicula[i].titulo} onclick="guardarDato(${dataPelicula[i].id})"></a>
    <div class="start"><i class="fa-regular fa-star" style="color: #FFD43B;"></i> ${dataPelicula[i].start} </div>
    <h4>${dataPelicula[i].titulo}</h4>
    <p>${dataPelicula[i].anio}</p>
</div> 
`

}
cad+=`</div>`;

var peliculaSeccion=document.querySelector('#Peliculas');
peliculaSeccion.innerHTML=cad;

function guardarDato(id) {
    // Guardar el dato en LocalStorage
    localStorage.setItem('IdSeleccionada', id);
    // Redirigir a la otra página
    window.location.href = '../KaleidoMovie/javascript/pelicula.js';
}


//Agregar Corto
var cadena=`<h2>Cortos</h2>
<div id="Cortos-flexbox">`;

for(var i=0;i<dataCortos.length;i++){
    cadena+=`<article class=${dataCortos[i].clase}>
    <a href='../KaleidoMovie/pages/corto.html'><img src='../KaleidoMovie${dataCortos[i].imagen}' alt=${dataCortos[i].Titulo} onclick="guardarDatoCorto(${dataCortos[i].id})"></a>
    <div class="start"><i class="fa-regular fa-star" style="color: #FFD43B;"></i> ${dataCortos[i].start} </div>
    <h4>${dataCortos[i].Titulo}</h4>
    <p>${dataCortos[i].anio}</p>                
</article>`
        
}

cadena+=`</div>`;
var cortosSeccion=document.getElementById("Cortos");
cortosSeccion.innerHTML=cadena;

function guardarDatoCorto(id) {
    // Guardar el dato en LocalStorage
    localStorage.setItem('IdSeleccionada', id);
    // Redirigir a la otra página
    window.location.href = '../KaleidoMovie/javascript/cortos.js';
}
