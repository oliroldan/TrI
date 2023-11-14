let ApiKey = "3df94698eaca4ce878e2c557de004fb2";
let mejorCalificada =`https://api.themoviedb.org/3/movie/top_rated?api_key=${ApiKey}`;
let mejor = document.querySelector("#mejorcalificacion")

fetch(mejorCalificada)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data.results)
    let peliculas = data.results;
    let seccion = document.querySelector(".cuadros-grupos");
    let peliAgregada = document.querySelector("#mejorcalificacion"); 
    let todasPelis = "";

    for (let i = 0; i < 6; i++) {
       todasPelis += ` <article class="pelis">
                           <a href="./detail-movie.html?idPelicula=${peliculas[i].id}">
                           <img class="foto" src="https://image.tmdb.org/t/p/original${peliculas[i].poster_path}"></a>
                           <h2>Película: <a href="./detail-movie.html?idPelicula=${peliculas[i].id}">${peliculas[i].title}</a></h2>
                       </article>`;
    }
   
   seccion.innerHTML = todasPelis;
})
.catch(function(error){
    console.log(`El error es: ${error}`)
});


let populares = `https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}`;
let popular = document.querySelector("#populares");


fetch(populares)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data.results);
    let peliculas = data.results;
    let seccion = document.querySelector("#populares");
    let contenido = "";

    for (let i = 0; i < 6; i++) {
        contenido += `<article class="pelis">
                           <a href="./detail-movie.html?idPelicula=${peliculas[i].id}">
                           <img class="foto" src="https://image.tmdb.org/t/p/original${peliculas[i].poster_path}"></a>
                           <h3> <a href="./detail-movie.html?idPelicula=${peliculas[i].id}">${peliculas[i].title}</a></h3>
                       </article>`;
    }
   
   seccion.innerHTML = contenido;
})
.catch(function(error){
    console.log(`El error es: ${error}`)
});

let seriesTop = `https://api.themoviedb.org/3/tv/top_rated?api_key=${ApiKey}`;
let serieTop = document.querySelector("#series");

fetch(seriesTop)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data.results);
    let seriesMejor = data.results;
    let seccion = document.querySelector("#series");
    let bloque = "";

    for (let i = 0; i < 6; i++) {
        bloque += `  <section class="cuadros-grupos">
                      <article class="pelis">
                           <a href="./detail-serie.html?idPelicula=${seriesMejor[i].id}">
                           <img class="foto" src="https://image.tmdb.org/t/p/original${seriesMejor[i].poster_path}"></a>
                           <h2>Serie: <a href="./detail-serie.html?idPelicula=${seriesMejor[i].id}">${seriesMejor[i].name}</a></h2>
                       </article>
                       </section>`;
                     
    }
   
   seccion.innerHTML = bloque;
})
.catch(function(error){
    console.log(`El error es: ${error}`)
});