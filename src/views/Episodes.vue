<template>
  <div>
    <h2 class="m-5">All show episodes, from first to last</h2>    

    <div class="container d-flex justify-content-center">
      <table class="table table-striped">
        <thead class="bg-dark text-warning">
          <tr>
            <td>Episode</td>
            <td>Title</td>
            <td>Aired on</td>
          </tr>
        </thead>

        <tbody>
          <tr v-for="episode in data" :key="episode.id">            
            <td>{{ episode.episode }}</td>            
            <td>{{ episode.name }}</td>
            <td>{{ episode.air_date }}</td>
          </tr>
        </tbody>
      </table>
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
import { mapState, mapActions, mapMutations } from "vuex";
export default {  
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
        this.getData(`episode?page=${this.page}`);
      }
    },
    prevPage() {
      if (this.page > 1) {
        this.pageDown();
        this.getData(`episode?page=${this.page}`);
      }
    },
  },
};
</script>

},

<style scoped></style>