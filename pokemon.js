// This function loads pokemon data from the Pokemon API
function fetchPokemonJSON() {
    // Feel free to download this HTML and edit it, to use another Pokemon ID
    
    const url = `https://api.chucknorris.io/jokes/random`;
    axios.get(url)
      .then(function(response) {
        return response.data; // SUBTLE difference with Fetch: response.data instead of response.json()
      })
      .then(function(pokemon) {
        console.log('data decoded from JSON:', pokemon);
  
        // Build a block of HTML
        const pokemonHtml = `
          <p><strong>${pokemon.value}</strong></p>
          <img src="${pokemon.icon_url}" />
        `;
        document.querySelector('#pokemon').innerHTML = pokemonHtml;
      });
  }
  
  fetchPokemonJSON();