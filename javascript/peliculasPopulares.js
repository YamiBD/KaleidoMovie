function llamarAPI(nro){
    fetch(`${API_URL}/movie/popular?language=en-US&page=${nro}`, {
        headers: {
            Authorization: `Bearer ${API_KEY}`, },

    })
        .then(response => response.json())
        .then(data => dibujarDatos(data));};



function dibujarDatos(json){
    const filas=json.results.map(obj=>Pelicula(obj));
    document.querySelector('#Peliculas .grid-container').innerHTML=filas.join('');

}
function transformarNro(n){
    return Math.round(n)
}

function quedarmeAnio(fecha){
    var fechaArray = fecha.split('-')
    return fechaArray[0]
}

function Pelicula(obj){
    return `
    <div class="grid-item">
                    <a href='pelicula.html'><img src="https://image.tmdb.org/t/p/w500/${obj.poster_path}" alt="${obj.title}"></a>
                    <div class="start"><i class="fa-regular fa-star" style="color: #FFD43B;">${transformarNro(obj.vote_average)}</i>  </div>
                        <h4>${obj.title}</h4>
                        <p>${quedarmeAnio(obj.release_date)}</p>
                    </div> 
                </div>      `;
}

function cargarPagSig(){
    nroPag++;
    llamarAPI(nroPag);
}

function cargarPagAnterior(){
    if(nroPag>1){ 
        nroPag--;
        llamarAPI(nroPag);}
}

function seleccionarPag(nro){
    nroPag = nro
    llamarAPI(nroPag)
}

function elegirElNroPag(){
    var a = document.querySelectorAll('#siguiente > article')
}

const API_KEY='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjA5NTI5NjcxYTBlNjU0NmU2ZmNmODA4M2U4MGM3MCIsInN1YiI6IjY2NTg5ZGEyOWNkNDFiMjg3YTkzZTViNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZqdmkjpPoB9q4grhM_ivh-L8BPzbRTccJGKJ4wg3G78';

const API_URL='https://api.themoviedb.org/3';

let nroPag =1;

llamarAPI(1)



//Agregar los eventos en los botones siguientes y anterior
document.querySelector('#sig').addEventListener('click', cargarPagAnterior);

document.querySelector('#ant').addEventListener('click', cargarPagSig)
var a = document.querySelectorAll('#siguiente > article')
console.log(a[2].innerHTML)
//hacer un switch con los nros