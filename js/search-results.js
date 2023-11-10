let qs =  location.search;
let qsObj = new URLSearchParams(qs);
let search = qsObj.get("Search");
let apiKey = "3df94698eaca4ce878e2c557de004fb2";
let urlSearch = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}`;

fetch(urlSearch)
    .then(function(response){
        return response.json();
    })

    .then(function(data){
        console.log(data)
        let peliculas = data.results;
        let seccion = document.querySelector(".cuadros-grupos");
        let peliAgregada = document.querySelector(".pelisearch"); 
        let todasPelis = "";
        
      



    })
    .catch(function(error){
        console.log(`El error es: ${error}`)
    })



