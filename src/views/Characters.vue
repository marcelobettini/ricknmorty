<template>
  <div class="container">    
    {{characters}}
    
  </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'
export default { 
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
