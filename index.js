const api = `https://pokeapi.co/api/v2/pokemon/`
const search = document.getElementById('search')
const form = document.getElementById('pokemon-search')
const pokeContainer = document.getElementById(`pokemon`)



function fetchPokemon() {



const name = document.getElementById('search').value

    fetch(api + name)
    .then (response => response.json())
    .then ( id => {

        pokemonCard (id);
        
    }
    )
    .catch ( error => 
        // alert (`Pokemon does not exist!`)
        console.log(error)
        )

}



function pokemonCard (pokemon) {


    const pokeEle = document.createElement('div');

    pokeEle.classList.add('pokemon');

    const {id, name, sprites, types, abilities} = pokemon;

    const type1 = pokemon.types[0].type.name;
    const type2 = pokemon.types[1] == null ? "" : pokemon.types[1].type.name
    const ability1 = pokemon.abilities[0].ability.name
    const ability2 = pokemon.abilities[1] == null ? "" : pokemon.abilities[1].ability.name
    const ability3 = pokemon.abilities[2] == null ? "" : pokemon.abilities[2].ability.name
  


 const pokeInnerHTML = 
  `
        <div class="img-container">
        <img src="${sprites.front_default}" alt="${name}" />
      </div>
      <div class="info">
        <span class="number"><strong>${id}</strong></span>
        <h3 class="name" style="text-transform:uppercase">${name}</h3>
        <p class="type" style="text-transform:capitalize"><strong>Type:</strong> <span>${type1} ${type2}</span></p>
        <p class="type" style="text-transform:capitalize"><strong>Ability:</strong> <span>${ability1}</span></p>
        <p class="type" style="text-transform:capitalize"><strong>Ability:</strong> <span>${ability2}</span></p>
        <p class="type" style="text-transform:capitalize"><strong>Ability:</strong> <span>${ability3}</span></p>
      </div>
        `

    pokeEle.innerHTML = pokeInnerHTML;
    pokeContainer.appendChild(pokeEle);
  


}



form.addEventListener("submit", function (e) {
    e.preventDefault()


    const pokemon = search.value;
     if (pokemon) {
        fetchPokemon(pokemon);
 
        search.value="";
         }
  
  
    })

