let ApiKey = "3df94698eaca4ce878e2c557de004fb2";
const urlParams = new URLSearchParams(window.location.search);
const idSerie = urlParams.get('idSerie');
let detalleSerie = `https://api.themoviedb.org/3/tv/${idSerie}}?api_key=${ApiKey}`

fetch(detalleSerie)
 .then(function(response){
    return response.json();
 })
 .then(function(data){
    console.log(data.results)
    let series = data.results;
    let seccion = document.querySelector(".detalleserie");
    let todasPelis = "";

    for (let i = 0; i < series.length ; i++) {
       todasPelis += 
       `<article class="detalleserie">
       <h2>${series[i].title}</a></h2>
       <img class="foto" src="https://image.tmdb.org/t/p/original${series[i].poster_path}"></a>
       <ul> 
            <li>Calificacion :${series.vote_average}</li>
            <li>Fecha de estreno: ${series[i].release_date}</p></li>
            <li>Sinopsis: ${series.overview}</li>
            <li>Generos: ${obtenerGeneros(series.genre_ids)}</li>
       </ul>
       </article>`;
    }

   seccion.innerHTML = todasPelis;
 })
 .catch(function(error){
    console.log(`El error es: ${error}`)
 });

 function obtenerGeneros(generos) {
    let enlacesGeneros = '';
  
    for (let i = 0; i < generos.length; i++) {
      let genero = generos[i];
      let enlace = `<a href="./detalle-genero.html?idGenero=${genero.id}">${genero.name}</a>`;
  
    
      enlacesGeneros += enlace;
  
      if (i < generos.length - 1) {
        enlacesGeneros += ', ';
      }
    }
  
    return enlacesGeneros;
  }

