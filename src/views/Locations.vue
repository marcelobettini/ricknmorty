<template>
  <div>
    <h2 class="m-5">All Rick and Morty's universe locations</h2>

    <div class="container d-flex justify-content-center">
      <table class="table table-striped">
        <thead class="bg-dark text-warning">
          <tr>
            <td>Name</td>
            <td>Type</td>
            <td>Dimension</td>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="location in data"
            :key="location.id"
            @click="rowclick(location.residents)"
          >
            <td>{{ location.name }}</td>
            <td>{{ location.type }}</td>
            <td>{{ location.dimension }}</td>
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
  data() {
    return {
      residents: []
    }
  },
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
    rowclick(data) {
      this.residents = []
      data.forEach(el => {
        fetch(el)
        .then(res => res.json())
        .then(char => this.residents.push(char))
      })
      console.log(this.residents)
    },
    ...mapActions(["getData"]),
    ...mapMutations(["pageUp", "pageDown"]),
    nextPage() {
      if (this.page < this.pagination.pages) {
        this.pageUp();
        this.getData(`location?page=${this.page}`);
      }
    },
    prevPage() {
      if (this.page > 1) {
        this.pageDown();
        this.getData(`location?page=${this.page}`);
      }
    },
  },
};
</script>

},

<style scoped></style>
