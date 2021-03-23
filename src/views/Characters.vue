<template>
  <div class="container">  
    <CharacterCard v-for="character in characters" :key="character.id" :character="character"></CharacterCard>    
    
  </div>
</template>
<script>
import CharacterCard from '../components/CharacterCard'
import {mapState, mapActions} from 'vuex'
export default { 
  components: { CharacterCard},
  computed:{
    ...mapState(['characters', 'pagination', 'page'])
  },
  methods: {
    ...mapActions(['getCharacters'])
  },
  mounted(){

    this.getCharacters(`character?page=${this.page}`)
  }
};
</script>
