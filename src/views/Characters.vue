<template>
  <div>
    <div class="container-fluid d-flex flex-wrap justify-content-around">
      <CharacterCard
        v-for="character in data"
        :key="character.id"
        :character="character"
      ></CharacterCard>
    </div>
    <div class="container d-flex flex-wrap justify-content-center ">
      <nav aria-label="Page navigation example">
        <ul class="pagination ">
          <li class="page-item">
            <button
              type="button"
              class="btn btn-primary rounded"
              :disabled="prevDisabled"
              aria-label="Previous"
              @click="prevPage"
            >
              <span aria-hidden="true">&laquo; prev</span>
              <span class="sr-only">Previous</span>
            </button>
          </li>
          <li class="actualPage align-self-center p-2 mx-2 btn-primary rounded">
            {{ `${this.page} / ${pagination.pages}` }}
          </li>
          <li class="page-item">
            <button
              type="button"
              class="btn btn-primary rounded"
              :disabled="nextDisabled"
              aria-label="Next"
              @click="nextPage"
            >
              <span aria-hidden="true">next &raquo;</span>
              <span class="sr-only">Next</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
import CharacterCard from "../components/CharacterCard";
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  components: { CharacterCard },
  computed: {
    ...mapState(["data", "pagination", "page"]),
     prevDisabled() {
      return this.page == 1;
    },
    nextDisabled() {
      return this.page == this.pagination.pages;
    },
  },
  methods: {
    ...mapActions(["getData"]),
    ...mapMutations(["pageUp", "pageDown"]),
    nextPage() {
      if (this.page < this.pagination.pages) {
        this.pageUp();
        this.getData(`character?page=${this.page}`);
      }
    },
    prevPage() {
      if (this.page > 1) {
        this.pageDown();
        this.getData(`character?page=${this.page}`);
      }
    },
  },
  mounted() {
    this.getData(`character?page=${this.page}`);
  },
};
</script>
