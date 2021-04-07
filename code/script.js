

function fetchPokemon(name){
  fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
  .then(response => response.json())
  .then(data => displayPokemon(data))  
}

// fetchPokemon("pikachu")

document.querySelector(".form-search").addEventListener("submit", (event) => {
  event.preventDefault()
  const name = event.target.search.value
  console.log(name)
  fetchPokemon(name)
})

function displayPokemon(pokemon){

  // set the name 
  document.querySelector("#name").innerText = pokemon.name

  // set the image 
  document.querySelector("#pokemon-img").src = pokemon.sprites.front_shiny
}
