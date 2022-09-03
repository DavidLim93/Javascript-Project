const api = `https://pokeapi.co/api/v2/pokemon/`
const search = document.getElementById('search')
const form = document.getElementById('pokemon-search')



function fetchPokemon() {



const name = document.getElementById('search').value

    fetch(api + name)
    .then (response => response.json())
    .then ( id => {

        if (id) {
          
            pokemonCard (id)
        }
        else {
            
            const pokeEle= document.createElement('div');

            pokeEle.classList.add('pokemon');

            pokeInnerHTML = `
                <h3>Pokemon not found</h3>
            `
            pokeEle.innerHTML = pokeInnerHTML;
    form.appendChild(pokeEle);
        }
    }
    )
    .catch ( error => console.log(error))

}

// fetchPokemon("charmander") 

function pokemonCard (pokemon) {


    const pokeEle = document.createElement('div');

    pokeEle.classList.add('pokemon');

    const {id, name, sprites, types} = pokemon;

    const type = pokemon.types[0].type.name;



    const pokeInnerHTML = `
    <div class="img-container">
    <img src="${sprites.front_default}" alt="${name}" />
  </div>
  <div class="info">
    <span class="number"><strong>${id}</strong></span>
    <h3 class="name">${name}</h3>
    <p class="type">Type: <span>${type}</span></p>
  </div>

    `


    pokeEle.innerHTML = pokeInnerHTML;
    form.appendChild(pokeEle);

  

}

function reset () {
    document.getElementById('pokemon-search').reset
}


form.addEventListener("submit", function (e) {
    e.preventDefault()


    const pokemon = search.value;
    if (pokemon) {
        fetchPokemon(pokemon);
 
     search.value="";
         }

    })