// async function fetchCharacterWithMovies() {
//   // Your code
// }
async function fetchCharacterWithMovies(characterId:number) {
  try {
    const response = await fetch(`https://swapi.dev/api/films/${characterId}`);

    if (!response.ok) {
      // Handle non-2xx responses
      return Promise.reject (new Error("smth went wrong"));
    }
    

    const data = await response.json();
    const filmsResponse = await Promise.all(data.films.map((url:string) => fetch(url)));
    
    const filmsData = await Promise.all(filmsResponse.map(response => response.json()));
    
    const films = filmsData.map(film => film.title);
    
    return {
      name: data.name,
      films: films,
    };
  } catch (error) {
    // Handle fetch or other errors
    return Promise.reject(new Error("smth went wrong"));
  }
}

// Example usage:
fetchCharacterWithMovies(1)
  .then(result => console.log(result))
  .catch(error => console.error(error));

fetchCharacterWithMovies(150)
  .then(result => console.log(result))
  .catch(error => console.error(error));


export default fetchCharacterWithMovies;
