import getPokemonOptions ,{getPokemons, getPokemonNames} from "@/helpers/getPokemonOptions";

describe('getPokemonsOptions helpers', () => {
    test('debe de regresar un arreglo de numeros' , () => {
        const pokemons = getPokemons();
        expect(pokemons.length).toBe(650)
        expect(pokemons[0]).toBe(1)
    })

    test('debe retornar arreglo con nombres de pokemons', async () => {
        const pokemons = await getPokemonNames([1,2,3,4])
        expect(pokemons).toHaveLength(4)
    })

    test('getPokemonOptions debe de retornar un arreglo mezclaod', async () => {
        const pokemons = await getPokemonOptions()
        expect(pokemons.length).toBe(4)
        expect(pokemons).toEqual([
            {
                name: expect.any(String),
                id:expect.any(Number)
            },
            {
                name:expect.any(String),
                id:expect.any(Number)
            },
            {
                name:expect.any(String),
                id:expect.any(Number)
            },
            {
                name:expect.any(String),
                id:expect.any(Number)
            }
        ])
    })
})