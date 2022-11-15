document.querySelector('button').addEventListener('click', getPokemon);

function getPokemon() {

    let choice = document.querySelector('input').value.toLowerCase();
    let url = `https://pokeapi.co/api/v2/pokemon/${choice}`;

    fetch(url)

        .then(res => res.json())
        .then(data => {

            console.log(data);
            document.querySelector('h2').innerText = data.name;
            document.querySelector('img').src = data.sprites.front_default;
            document.querySelector('#pokemonType1').innerText = data.types[0].type.name;
            document.querySelector('#pokemonType2').innerText = data.types[1].type.name;
            document.querySelector('#pokemonHeight').innerText = data.height;
            document.querySelector('#pokemonWeight').innerText = data.weight;

        })
        .then(err => {

            console.log(`error ${err}`);

        });

}
