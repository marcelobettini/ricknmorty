<template>
  <div>
    <pre-loader></pre-loader>
    <b-card
      class="b-card overflow-hidden my-3"
      style="width: 360px; height: 550px;"
    >
      <b-card-img-lazy
        :src="character.image"
        alt="character image"
      ></b-card-img-lazy>

      <b-card-body class="text-warning" :title="character.name">
        <b-card-text class="text-white">
          <ul>
            <li>Species: {{ character.species }}</li>
            <li>Gender: {{ character.gender }}</li>
            <li>Status: {{ character.status }}</li>
            <li>Location: {{ character.location.name }}</li>
          </ul>
        </b-card-text>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import PreLoader from "./PreLoader.vue";
export default {
  components: { PreLoader },
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.b-card {
  background-color: rgb(48, 47, 49);
}
ul {
  list-style-type: none;
}
</style>
