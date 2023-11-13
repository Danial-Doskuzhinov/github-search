
async function fetchPokemon(name: string){
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (!response.ok) {
      throw new Error("smth went wrong");
    }
    const data = await response.json();
    return {
      id: data.id,
      name: data.name,
      height: data.height,
      weight: data.weight,
      image: data.sprites.front_default,
    };
  } catch (error) {
    return Promise.reject(new Error("smth went wrong"));
  }
}

async function fetchPokemons(pokemonNames: string[]){
  const promises = pokemonNames.map(fetchPokemon);
  return Promise.all(promises);
}
fetchPokemons(["clefairy", "ivysaur"])
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.error(error);
  });

fetchPokemons(["not exist1", "not exist2"])
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.error(error);
  });

export default fetchPokemons;
