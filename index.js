const api = `https://pokeapi.co/api/v2/pokemon/`
const search = document.getElementById('search')
const form = document.getElementById('pokemon-search')
const pokeContainer = document.getElementById(`pokemon`)
const comment = document.getElementById('allComments')
const commentValue = document.getElementById('comment-box')
const button = document.getElementById('comment')


function fetchPokemon() {



const name = document.getElementById('search').value
// name.toLowerCase();

    fetch(api + name.toLowerCase())
    .then (response => response.json())
    .then ( id => {

     
        pokemonCard (id);
        
    }
    )
    .catch ( (error) => 
        alert (`Pokemon does not exist!`),
<<<<<<< HEAD
        // console.log(error)
=======
//         console.log(error)
>>>>>>> afda328c613d46bfe50409e633cf363efed668a8
        )

}



function pokemonCard (pokemon) {


    const pokeEle = document.createElement('div');

    pokeEle.classList.add('pokemon');

    const {id, name, sprites, types, abilities} = pokemon;

    const type1 = pokemon.types[0].type.name;
    const type2 = pokemon.types[1] == null ? "" : pokemon.types[1].type.name
    const ability1 = pokemon.abilities[0].ability.name
      const newAbility1 = ability1.replace(/[^a-zA-Z0-9 ]/g, " ");
    const ability2 = pokemon.abilities[1] == null ? "" : pokemon.abilities[1].ability.name
     const newAbility2 = ability2.replace(/[^a-zA-Z0-9 ]/g, " ");
    const ability3 = pokemon.abilities[2] == null ? "" : pokemon.abilities[2].ability.name
      const newAbility3 = ability3.replace(/[^a-zA-Z0-9 ]/g, " ");
    

 const pokeInnerHTML = 
  `
        <div class="img-container">
        <img src="${sprites.front_default}" alt="${name}" />
      </div>
      <div class="info">
        <span class="number"><strong>${id}</strong></span>
        <h3 class="name" style="text-transform:uppercase">${name}</h3>
        <p class="type" style="text-transform:capitalize"><strong>Type:</strong> <span>${type1} ${type2}</span></p>
        <p class="type" style="text-transform:capitalize"><strong>Ability:</strong> <span>${newAbility1}</span></p>
        <p class="type" style="text-transform:capitalize"><strong>Ability:</strong> <span>${newAbility2}</span></p>
        <p class="type" style="text-transform:capitalize"><strong>Ability:</strong> <span>${newAbility3}</span></p>
      </div>
        `
  

    pokeEle.innerHTML = pokeInnerHTML;
    pokeContainer.appendChild(pokeEle);


}

function resetSearch () {

    pokeContainer.innerHTML = ""
  
}


function comments () {
  
  const commentBox = commentValue.value

  const CommentEle = document.createElement("p");
  CommentEle.classList.add('commentEle')
  CommentEle.innerText = commentBox
  comment.appendChild(CommentEle)


}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    resetSearch ();

    const pokemon = search.value;

     if (pokemon) {
        fetchPokemon(pokemon);
        search.value="";
         }
 
    })



button.addEventListener ('click', function (e) {

  e.preventDefault();

  comments ()

})
