let ApiKey = "3df94698eaca4ce878e2c557de004fb2";
let urlParams = new URLSearchParams(window.location.search);
let detailGenreSerieId = urlParams.get('detalleGeneroSerieId');
let detailGenremovieId = urlParams.get('detalleGeneroPeliculaId');
let detailGenreMovie = `https://api.themoviedb.org/3/discover/${genero.id}?api_key=${ApiKey}movie`;
let detailGenreSeries = `https://api.themoviedb.org/3/discover/${genero.id}?api_key=${ApiKey}tv`;

fetch(detailGenreMovie)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log(`El error es: ${error}`)
});


