<template>
  <div>
    <b-card no-body class="overflow-hidden" style="max-width: 540px;">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img
            :src="character.image"
            alt="Image"
            class="rounded-0"
          ></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body title="Horizontal Card">
            <b-card-text>
              {{character.name}}
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
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
