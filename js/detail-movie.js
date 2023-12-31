let ApiKey = "3df94698eaca4ce878e2c557de004fb2";
let urlParams = new URLSearchParams(window.location.search);
let movieId = urlParams.get('idPelicula');
let detallePelicula = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${ApiKey}&language=es`;
let recomendaciones = `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${ApiKey}&language=es`;
let reviews= `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${ApiKey}&language=es`;

fetch(detallePelicula)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    console.log(data);
    let pelicula = data;
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
          <li class="boton"> <button class="verRecomendaciones">Ver Recomendaciones</button></li>
          <li class = "bot"><button class = "verReviews">Ver reviews</button></li>
        </ul>
      </article>`;

    seccion.innerHTML = detallePeliculaHTML;

    function obtenerGeneros(generos) {
      let enlacesGeneros = '';
    
      for (let i = 0; i < generos.length; i++) {
        let genero = generos[i];
        let enlace = `<a href="./detail-genres.html?idGenero=${genero.id}">${genero.name}</a>`;
      
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

          
          for(let i = 0; i < 5; i++){
            recomendacionesHTML +=
            `<article>
              <h3><a href="./detail-movie.html?idPelicula=${recomendacion[i].id}">${recomendacion[i].title}</a></h3>
              <a href="./detail-movie.html?idPelicula=${recomendacion[i].id}">
              <img class="foto" src="https://image.tmdb.org/t/p/original${recomendacion[i].poster_path}"></a>
            </article>`;
          }
          seccion1.innerHTML = recomendacionesHTML;

          //for (let i = 0; i < peliculas.length; i++) {
            //todasPelis += `<article class="portada">
                               // <a href="./detail-movie.html?idPelicula=${peliculas[i].id}">
                                //<img class="foto" src="https://image.tmdb.org/t/p/original${peliculas[i].poster_path}"></a>
                               // <h2>Película: <a href="./detail-movie.html?idPelicula=${peliculas[i].id}">${peliculas[i].title}</a></h2>
                            //</article>`;
        })
        .catch(function(error) {
          console.log(`El error es: ${error}`);
        });
    });

    let bot = document.querySelector('.verReviews');				
    bot.addEventListener('click', function(){
      
      fetch(reviews)
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          console.log(data);
          let review = data;
          let seccion2 = document.querySelector(".oculta2");
          let reviewsHTML = "";

          
          for(let i = 0; i < 5; i++){
            reviewsHTML +=
            `<article>
              <h3>${review.id}</h3>
            </article>`;
          }
          seccion2.innerHTML = reviewsHTML;

        })

        .catch(function(error){
          console.log(`El error es: ${error}`)
        });
    })
  
  .catch(function(error){
    console.log(`El error es: ${error}`);
  })
})
