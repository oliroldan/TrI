let ApiKey = "3df94698eaca4ce878e2c557de004fb2";
const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('idSerie');
let detalleSerie = `https://api.themoviedb.org/3/tv/${id_serie}?api_key=${ApiKey}`

fetch(detalleSerie)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data.results)
    let series = data.results;
    let seccion = document.querySelector(".detallemovie");
    let todasPelis = "";

    for (let i = 0; i < series.length ; i++) {
       todasPelis += `<article class="detallemovie">
       <h2><a href="./detail-movie.html?idPelicula=${series[i].id}">${series[i].title}</a></h2>
       <img class="foto" src="https://image.tmdb.org/t/p/original${series[i].poster_path}"></a>
       <ul>
            <li>Detalle: https://api.themoviedb.org/3/tv/{series_id}?api_key=${ApiKey}</li>
            <li><p class="singularcuadrado-texto"><a href="favorite.html?idPelicula=${series[i].id}"> ✩ </a> Fecha de estreno: ${series[i].release_date}</p></li>
       </ul>
       </article>`;
    }

   seccion.innerHTML = todasPelis;
})
.catch(function(error){
    console.log(`El error es: ${error}`)
});