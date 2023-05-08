var P = new Pokedex.Pokedex({protocol: 'https'});

P.getPokemonByName("pikachu") // with Promise
.then(function(response) {
  console.log(response);
})
.catch(function(err) {
  console.log(err)
});