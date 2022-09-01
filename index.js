const api = `https://pokeapi.co/api/v2/pokemon/`
const search = document.getElementById('search')
const form = document.getElementById('pokemon-search')



function fetchPokemon() {

const name = document.getElementById('search').value

    fetch(api + name)
    .then (response => response.json())
    .then ( data => {

        if (data) {
            form.innerHTML = `
                <h3>Pokemon not found</h3>
            `
        }
        else {
            form.innerHTML = `
            <h2>${data.name}</h2>
            `
        }
    }
    )
    .catch ( error => console.log(error))

}

// fetchPokemon("charmander") 

form.addEventListener("submit", function (e) {
    e.preventDefault()

    const pokemon = search.value;
    if (pokemon) {
        fetchPokemon(pokemon);
 
     search.value="";
         }

    })