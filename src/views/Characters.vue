<template>
  <div class="container-fluid d-flex flex-wrap justify-content-around">
    <CharacterCard
      v-for="character in data"
      :key="character.id"
      :character="character"
    ></CharacterCard>
  </div>
</template>
<script>
import CharacterCard from "../components/CharacterCard";
import { mapState, mapActions } from "vuex";
export default {
  components: { CharacterCard },
  computed: {
    ...mapState(["data", "pagination", "page"]),
  },
  methods: {
    ...mapActions(["getData"]),
  },
  mounted() {
    this.getData(`character?page=${this.page}`);
  },
};
</script>
