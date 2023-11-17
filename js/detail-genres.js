let ApiKey = "3df94698eaca4ce878e2c557de004fb2";
let urlParams = new URLSearchParams(window.location.search);
let detailGenreSerieId = urlParams.get('detailGenreSerieId');
let detailGenremovieId = urlParams.get('detailGenremovieId');

let detailGenreMovie = `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&with_genres=${detailGenremovieId}`;
let detailGenreSeries = `https://api.themoviedb.org/3/discover/tv?api_key=${ApiKey}&with_genres=${detailGenreSerieId}`;


//let detailGenreMovie = `https://api.themoviedb.org/3/discover/${detailGenremovieId}?api_key=${ApiKey}movie`;
//let detailGenreSeries = `https://api.themoviedb.org/3/discover/${detailGenreSerieId}?api_key=${ApiKey}tv`;


fetch(detailGenreMovie)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data.results);
    let peliculas = data.results;
    let seccion = document.querySelector(".detalleGenerosPelis");
    let detalleGenerosHtml = "";

    for(let i =0; i < 5; i++){
        detalleGenerosHtml += `
        
        <h2>${peliculas.title}</h2>
        <article class="pelis">
         <h3><a href="./detail-movie.html?idPelicula=${peliculas[i].id}">${peliculas[i].title}</a></h3>
         <a href="./detail-movie.html?idPelicula=${peliculas[i].id}">
         <img class="foto" src="https://image.tmdb.org/t/p/original${peliculas[i].poster_path}"></a>
        </article>`
    }

    seccion.innerHTML = detalleGenerosHtml;

})
.catch(function(error){
    console.log(`El error es: ${error}`)
});


