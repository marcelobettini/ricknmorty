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
          <tr v-for="location in data" :key="location.id">
            <td>{{ location.name }}</td>
            <td>{{ location.type }}</td>
            <td>{{ location.dimension }}</td>
          </tr>
        </tbody>
      </table>
    </div>    
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["data", "pagination", "page"]),
  },  
};
</script>

<style scoped></style>
