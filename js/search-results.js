let qs =  location.search;
let qsObj = new URLSearchParams(qs);
let buscar = qsObj.get("buscar");
let apiKey = "1173214cf5e2ac8f2c0ac1c242d0ec8a"
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
                            <a href="detail-movie.html?idPelicula=${peliculas[i].id}">
                            <img class="foto" src="https://image.tmdb.org/t/p/original${peliculas[i].poster_path}"></a>
                            <h2>Película: <a href="detail-movie.html?idPelicula=${peliculas[i].id}">${peliculas[i].title}</a></h2>
                        </article>`;
    }
    seccion.innerHTML = todasPelis;
    peliAgregada.innerText = buscar;

})
.catch(function(error){
    console.log(`El error es: ${error}`)
})

fetch(urlSearch)
.then(function(response){
    return response.json();
   })

.then(function(data){
    console.log(data.results)
     let series = data.results;
     let seccion = document.querySelector(".cuadros-grupos");
     let SerieAgregada = document.querySelector(".pelisearch"); 
     let todasSeries = "";

     for (let i = 0; i < series.length; i++) {
        todasSeries += `<article class="portada">
                            <a href="detail-serie.html?idPelicula=${series[i].id}">
                            <img class="foto" src="https://image.tmdb.org/t/p/original${series[i].poster_path}"></a>
                            <h2>Serie: <a href="detail-serie.html?idPelicula=${series[i].id}">${series[i].title}</a></h2>
                        </article>`;
    }
    seccion.innerHTML = todasSeries;
    SerieAgregada.innerText = buscar;

})
.catch(function(error){
    console.log(`El error es: ${error}`)
})

