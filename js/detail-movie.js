let ApiKey = "3df94698eaca4ce878e2c557de004fb2";
let detallePelicula = `https://api.themoviedb.org/3/movie/{movie_id}?api_key=${ApiKey}`

fetch(detallePelicula)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data.results)
    let peliculas = data.results;
    let seccion = document.querySelector(".detallemovie");
    let todasPelis = "";

    for (let i = 0; i < peliculas.length ; i++) {
       todasPelis += `<article class="detallemovie">
       <h2><a href="./detail-movie.html?idPelicula=${peliculas[i].id}">${peliculas[i].title}</a></h2>
       <img class="foto" src="https://image.tmdb.org/t/p/original${peliculas[i].poster_path}"></a>
       <ul>
            <li>Detalle: </li>
            <li><p class="singularcuadrado-texto"><a href="favorite.html?idPelicula=${peliculas[i].id}"> ✩ </a> Fecha de estreno: ${peliculas[i].release_date}</p></li>
            <li>https://api.themoviedb.org/3/movie/{movie_id}?api_key=${ApiKey}</li>
       </ul>
       </article>`;
    }

   seccion.innerHTML = todasPelis;
})
.catch(function(error){
    console.log(`El error es: ${error}`)
});
