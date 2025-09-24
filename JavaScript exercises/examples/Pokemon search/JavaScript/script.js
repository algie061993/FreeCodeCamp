const pokemonAPI = "https://pokeapi.co/api/v2/pokemon/";
const search = document.getElementById("search");
const result = document.getElementById("result");

const getPokemon = async (pokemon) => {
  try {
    const response = await fetch(pokemonAPI + pokemon);
    if (response.status === 200) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

const createPokemonCard = (pokemon) => {
  result.classList.add("pokemon-card");
  result.innerHTML = `
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <h2>${pokemon.name}</h2>
        <p>Height: ${pokemon.height}</p>
        <p>Weight: ${pokemon.weight}</p>
        <p>Abilities: ${pokemon.abilities
          .map((ability) => ability.ability.name)
          .join(", ")}</p>
        <p>Types: ${pokemon.types.map((type) => type.type.name).join(", ")}</p>
          <p>Stats: ${pokemon.stats
            .map((stat) => `${stat.stat.name}: ${stat.base_stat}`)
            .join(", ")}</p>
    `;
  result.appendChild(result);
};

search.addEventListener("input", async () => {
  result.innerHTML = "";
  const pokemonName = search.value.toLowerCase();
  const pokemon = await getPokemon(pokemonName);
  if (pokemon) {
    createPokemonCard(pokemon);
  }
});
