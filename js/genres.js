let ApiKey = "3df94698eaca4ce878e2c557de004fb2";
let generosPeliURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${ApiKey}`;
let generosSerieURL = `https://api.themoviedb.org/3/genre/tv/list?api_key=${ApiKey}`;

fetch(generosPeliURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data.genres);
        let generos = data.genres;
        let seccion = document.querySelector(".generosApiPeli");
        let contenido = " ";
        for (let i = 0; i < generos.length; i++) {
            contenido += `
        <article>
          <a href="./detail-genres.html?idGenero=${generos[i].id}">
            <h2>${generos[i].name}</h2>
          </a>
        </article>`;
        }

        seccion.innerHTML = contenido;
    })
    .catch(function (error) {
        console.log(`El error es: ${error}`);
    });

fetch(generosSerieURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data.genres);
        let generos2 = data.genres;
        let seccion = document.querySelector(".generosApiSeries");
        let contenido = " ";
        for (let i = 0; i < generos2.length; i++) {
            contenido += `
        <article>
          <a href="./detail-genres.html?idGenero=${generos2[i].id}">
            <h2>${generos2[i].name}</h2>
          </a>
        </article>`;
        }

        seccion.innerHTML = contenido;
    })
    .catch(function (error) {
        console.log(`El error es: ${error}`);
    });
