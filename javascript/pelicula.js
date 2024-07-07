// Recuperar el dato del LocalStorage
const id = localStorage.getItem('IdSeleccionada');
console.log(id);
var peliculaSeccion=document.querySelector('#Peliculas')


function hacerPagPelicula(index){
    var contenidoPelicula=`<div id="peliculaId" class="flex-item">                
    <img src='..${dataPelicula[index].imagen}' alt=${dataPelicula[index].titulo}>

    </div>
    <div id="peliculaSinopsis" class="flex-item">
        <h2>${dataPelicula[index].titulo}</h2>
        <p>${dataPelicula[index].anio} </p>
    <div> <br><br><br><br></div>
    <h3>Sinopsis</h3>
    <p><br>${dataPelicula[index].descripcion}</p>
    </div>`;
    return contenidoPelicula;
}

//en pag pelicula
var contenidoPelicula = hacerPagPelicula(id) ;
console.log(contenidoPelicula) ;
peliculaContenedor=document.getElementById("peliculaContenedor") ;
console.log(peliculaContenedor) ;
peliculaContenedor.innerHTML=contenidoPelicula;

