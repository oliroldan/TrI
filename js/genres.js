let ApiKey = "3df94698eaca4ce878e2c557de004fb2";
let generosPeli = `https://api.themoviedb.org/3/genre/movie/list?api_key=${ApiKey}`;
let generosSerie = `https://api.themoviedb.org/3/genre/tv/list?api_key=${ApiKey}`;

fetch(generosPeli)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data.results)
    let generos = data.results
    let seccion = document.querySelector(".generosApiPeli")
    let contenido = " "
    for (let i = 0; i < generos.length ; i++){
        contenido += `<article>
                            <a href="./detail-genre.html?idPelicula=${generos[i].id}"></a>
                            <h2><a href="./detail-genre.html?idPelicula=${generos[i].id}">${generos[i].title}</a></h2>
                      </article>`;
    }
    
    seccion.innerHTML = contenido;
})
.catch(function(error){
    console.log(`El error es: ${error}`)
});


fetch(generosSerie)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data.results)
    let generos2 = data.results
    let seccion = document.querySelector(".generosApiSeries")
    let contenido = " "
    for (let i = 0; i < generos2.length; i++){
        contenido += `<article>
                            <a href="./detail-genre.html?idPelicula=${generos2[i].id}"></a>
                            <h2><a href="./detail-genre.html?idPelicula=${generos2[i].id}">${generos2[i].title}</a></h2>
                      </article>`;
    }
    
    seccion.innerHTML = contenido;
    
})
.catch(function(error){
    console.log(`El error es: ${error}`)
});