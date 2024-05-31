//Agrego los encabezados
//Reconocer el index segun lo que aprieta

// var peliculaSeccion=document.querySelector('#Peliculas');
// console.log(peliculaSeccion);
index=0;

//cambiar el tamanio de la imagen segun corresponda 

//Armar la pagina segun el index
const cortosContenedor=document.getElementById("cortosContenedor");
var contenidoCortos=`<div id="cortosId" class="flex-item">                
<img src=${dataCortos[index].imagen} alt=${dataCortos[index].Titulo}>

</div>
<div id="peliculaSinopsis" class="flex-item">
<h2>${dataCortos[index].Titulo}</h2>
<p>${dataCortos[index].anio} </p>
<div> <br><br><br><br></div>
<h3>Sinopsis</h3>
<p><br>${dataCortos[index].Sinopsis}</p>
</div>`;

cortosContenedor.innerHTML=contenidoCortos;

const cortosContenedor2=document.getElementById("cortosContenedor2");
var contenidoCortos2=`<div>
${dataCortos[index].link_video}
</div>`
cortosContenedor2.innerHTML=contenidoCortos2;