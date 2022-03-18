import pokemonApi from "../api/pokemonApi";

const getPokemons = () => {
    const pokemonsArr = Array.from(Array(650))
    return pokemonsArr.map((_, index) => index + 1)
}

const getPokemonOptions = async () => {
    const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5)
    const pokemons = await getPokemonNames(mixedPokemons.splice(0,4))

    return pokemons
}

const getPokemonNames = async ([a,b,c,d] = []) => {
    const arrPromises = [
       pokemonApi.get(`/${a}`),
        pokemonApi.get(`/${b}`),
        pokemonApi.get(`/${c}`),
        pokemonApi.get(`/${d}`),
    ]

   const [pokeA,pokeB,pokeC,pokeD] = await Promise.all(arrPromises)

    return [
        {name: pokeA.data.name, id: pokeA.data.id},
        {name: pokeB.data.name, id: pokeB.data.id},
        {name: pokeC.data.name, id: pokeC.data.id},
        {name: pokeD.data.name, id: pokeD.data.id}
    ]
}

export default getPokemonOptions;