<template>
  <div>
    <h1>Quien es este pokemon? </h1>
    <PokemonPicture :pokemonId="48" :showPokemon="false"/>
    <PokemonOptions :pokemons="pokemonArr"/>
  </div>
</template>

<script>
import PokemonOptions from "@/components/PokemonOptions";
import PokemonPicture from "@/components/PokemonPicture";
import getPokemonsOptions from'@/helpers/getPokemonOptions';

export default {
  components:{
    PokemonPicture,
    PokemonOptions
  },
  data(){
    return {
      pokemonArr: []
    }
  },
  methods:{
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonsOptions()
    }
  },
  mounted() {
    this.mixPokemonArray()
  }
}
</script>