const body = document.querySelector("body");
const p = document.querySelector("p");

const poke = fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
.then(response => {

    if(!response.ok) {
        throw new Error("Could not fetch resource");
    }
    return response.json();
})
.then(data => {
    console.log(data)
    p.textContent = data.name;
})
.catch(error => console.error(error));
