async function fetchPokemon(pokemonName: string) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      
      if (!response.ok) {
        throw new Error("smth went wrong"); // Adjusted error message
      }
      
      const data = await response.json();
      
      const pokemon = {
        id: data.id,
        name: data.name,
        height: data.height,
        weight: data.weight,
        image: data.sprites.front_default,
      };
  
      return pokemon;
    } catch (error) {
      return Promise.reject(new Error("smth went wrong"));
    }
  }
  
  // Usage
  fetchPokemon("clefairy")
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error.message); // Log the error message
    });
  
  fetchPokemon("no exist")
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error.message); // Log the error message
    });
  


export default fetchPokemon;
