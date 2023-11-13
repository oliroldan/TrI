let acaVaLaApiKey = "3df94698eaca4ce878e2c557de004fb2";
let mejorCalificada =`https://api.themoviedb.org/3/movie/top_rated?api_key=${acaVaLaAPIKey}`;
let mejor = document.querySelector("#mejorcalificadas")

fetch(mejorCalificada)
.then(function(response){
    return response.json();

})
.then (function(data){
    let content= "";
    
})
.catch
