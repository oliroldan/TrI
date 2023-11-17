let ApiKey = "3df94698eaca4ce878e2c557de004fb2";
let urlParams = new URLSearchParams(window.location.search);
let movieId = urlParams.get('idPelicula');
let detallePelicula = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${ApiKey}&language=es`;
let recomendaciones = ` `
let recomendacion = "Ver recomendaciones"

fetch(detallePelicula)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    console.log(data);
    let pelicula = data
    let seccion = document.querySelector(".detallemovie");
    let detallePeliculaHTML = `
      <article class="detallemovie">
        <h2>${pelicula.title}</h2>
        <img class="foto" src="https://image.tmdb.org/t/p/original${pelicula.poster_path}">
        <ul>
          <li>Calificación: ${pelicula.vote_average}</li>
          <li>Fecha de estreno: ${pelicula.release_date}</li>
          <li>Duración: ${pelicula.runtime} minutos</li>
          <li>Sinopsis: ${pelicula.overview}</li>
          <li>Géneros: ${obtenerGeneros(pelicula.genres)}</li>
          <li class="boton"> ${recomendacion} </li>
        </ul>
      </article>`;

    
    seccion.innerHTML = detallePeliculaHTML;

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
    };

  let boton = document.querySelector('boton');				
  boton.addEventListener('click', function(){  //PROBLEMA !!!!

      			
fetch(recomendaciones)
.then(function(response){
  return response.json();
})

.then(function(data){
  console.log(data.results)
  let recomendacion = data.results
  let seccion1 = document.querySelector(".oculta")
  let recomendaciones = ""

  for(let i = 0; i < recomendacion.length; i++){
    recomendaciones +=
    `<article>
      <h3>Recomendaciones</h3>
      <img class="foto" src="https://image.tmdb.org/t/p/original${recomendacion.poster_path}
      <a href = https://api.themoviedb.org/3/movie/${pelicula[i].id}/recommendations></a>
    </article>
    `
  }
  seccion1.innerHTML = recomendaciones
})
 
.catch(function(error){
  console.log(`El error es: ${error}`);
}) }); 

  })
.catch(function(error){
  console.log(`El error es: ${error}`);
});




 