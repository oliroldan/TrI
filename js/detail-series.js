let ApiKey = "3df94698eaca4ce878e2c557de004fb2";
const urlParams = new URLSearchParams(window.location.search);
const idSerie = urlParams.get('idSerie');
let detalleSerie = `https://api.themoviedb.org/3/tv/${idSerie}}?api_key=${ApiKey}`


fetch(detalleSerie)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    console.log(data);
    let pelicula = data;
    let seccion = document.querySelector(".detalleserie");
    let detalleSerieHTML = `
      <article class="detalleserie">
        <h2>${serie.name}</h2>
        <img class="foto" src="https://image.tmdb.org/t/p/original${serie.poster_path}">
        <ul>
          <li>Calificación: ${serie.vote_average}</li>
          <li>Fecha de estreno: ${serie.release_date}</li>
          <li>Duración: ${serie.runtime} minutos</li>
          <li>Sinopsis: ${serie.overview}</li>
          <li>Géneros: ${obtenerGeneros(serie.genres)}</li>
          <li class="boton"> <button class="verRecomendaciones">Ver Recomendaciones</button></li>
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

    
    let boton = document.querySelector('.verRecomendaciones');				
    boton.addEventListener('click', function() {
      
      fetch(recomendaciones)
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          console.log(data.results);
          let recomendacion = data.results;
          let seccion1 = document.querySelector(".oculta");
          let recomendacionesHTML = "";

          
          for (let i = 0; i < 5; i++) {
            recomendacionesHTML +=
              `<article>
                <h3>${recomendacion[i].title}</h3>
                <img class="foto" src="https://image.tmdb.org/t/p/original${recomendacion[i].poster_path}">
              </article>`;
          }
          
          seccion1.innerHTML = recomendacionesHTML;

        })
        .catch(function(error) {
          console.log(`El error es: ${error}`);
        });
    });
  })
  .catch(function(error){
    console.log(`El error es: ${error}`);
  });

  