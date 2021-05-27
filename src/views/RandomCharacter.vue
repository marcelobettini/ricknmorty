<template>
  <div class="container-fluid d-flex flex-wrap justify-content-around">
    <CharacterCard
      :character="data[`${Math.round(Math.random() * 20)}`]"
    ></CharacterCard>
  </div>
</template>
<script>
import CharacterCard from "../components/CharacterCard";
import { mapState, mapActions } from "vuex";
export default {
  components: { CharacterCard },
  computed: {
    ...mapState(["data"]),
  },
  methods: {
    ...mapActions(["getData"]),
  },
  mounted() {
    this.getData(`character?page=${Math.round(Math.random() * 35)}`);
  },
};
</script>
