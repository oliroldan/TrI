let ApiKey = "3df94698eaca4ce878e2c557de004fb2";
let mejorCalificada =`https://api.themoviedb.org/3/movie/top_rated?api_key=${ApiKey}`;
let mejor = document.querySelector("#mejorcalificacion")

fetch(mejorCalificada)
.then(function(response){
    return response.json();

})
.then (function(data){
    console.log(data.results);
    let content= "";
    for (let i =0; i < 6; i++){
        let pelicula = data.results[i];
        let poster = `https://image.tmdb.org/t/p/original/${pelicula.poster_path}`
        content += `<article>

        </article>`

    }
    
    
})
.catch


