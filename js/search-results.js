let qs =  location.search;
let qsObj = new URLSearchParams(qs);
let buscar = qsObj.get("buscar");
let apiKey = "3df94698eaca4ce878e2c557de004fb2";
let urlSearch = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${buscar}`;

fetch(urlSearch)
.then(function(response){
     return response.json();
    })

.then(function(data){
    console.log(data.results)
     let peliculas = data.results;
     let seccion = document.querySelector(".cuadros-grupos");
     let peliAgregada = document.querySelector(".pelisearch"); 
     let todasPelis = "";

     for (let i = 0; i < peliculas.length; i++) {
        todasPelis += `<article class="portada">
                            <a href="./detail-movie.html?idPelicula=${peliculas[i].id}"> <img class="foto" src="https://image.tmdb.org/t/p/original${peliculas[i].poster_path}"></a>
                            <h2>Película: <a href="./detail-movie.html?idPelicula=${peliculas[i].id}">${peliculas[i].title}</a></h2>
                        </article>`;
    }
    seccion.innerHTML = todasPelis;
    peliAgregada.innerText = buscar;

})
        
      
.catch(function(error){
    console.log(`El error es: ${error}`)
})



