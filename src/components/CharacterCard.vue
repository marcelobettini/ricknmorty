<template>
  <div>
    <b-card class="overflow-hidden" style="width: 400px;">
     
          <b-card-img-lazy
            :src="character.image"
            alt="Image"
            class="rounded"
          ></b-card-img-lazy>
     
          <b-card-body :title="character.name">
            <b-card-text>              
              <p>Species: {{character.species}}</p>
              <p>Gender: {{character.gender}}</p>
              <p>Status: {{character.status}}</p>              
            </b-card-text>
          </b-card-body>
     
    </b-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState(["characters"]),
  },
};
</script>

<style scoped></style>
