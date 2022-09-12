const api = `https://pokeapi.co/api/v2/pokemon/`
const search = document.getElementById('search')
const form = document.getElementById('pokemon-search')



function fetchPokemon() {



const name = document.getElementById('search').value

    fetch(api + name)
    .then (response => response.json())
    .then ( id => {

        pokemonCard (id)
    }
    )
    .catch ( error => alert ("Pokemon does not exist!"))

}

// fetchPokemon("charmander") 

function pokemonCard (pokemon) {


    const pokeEle = document.createElement('div');

    pokeEle.classList.add('pokemon');

    const {id, name, sprites, types} = pokemon;

   
    const type1 = pokemon.types[0].type.name;
    // const type2 = pokemon.types[1].type.name;



 const pokeInnerHTML = 
  `
        <div class="img-container">
        <img src="${sprites.front_default}" alt="${name}" />
      </div>
      <div class="info">
        <span class="number"><strong>${id}</strong></span>
        <h3 class="name">${name}</h3>
        <p class="type">Type: <span>${type1}</span></p>
        
      </div>
        `
        // <p class="type">Type: <span>${type2}</span></p>
 
 
    pokeEle.innerHTML = pokeInnerHTML;
    form.appendChild(pokeEle)
  

}




form.addEventListener("submit", function (e) {
    e.preventDefault()


    const pokemon = search.value;
     if (pokemon) {
        fetchPokemon(pokemon);
 
        search.value="";
         }
  
    })

