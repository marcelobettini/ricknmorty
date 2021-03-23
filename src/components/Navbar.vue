<template>
  
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand class="nav-link active" to="/"
        ><img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/256px-Rick_and_Morty.svg.png"
          alt="Rick and Morty logo"
      /></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!-- <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form> -->

          <b-nav-item-dropdown text="get" right>
            <b-dropdown-item
              v-for="item in dropdown"
              :key="item"
              :active="item === activeItem"
              @click="selectItemDropdown(item)"
              >{{ item }}</b-dropdown-item
            >
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      activeItem: "", //Could be Characters, Episodes or Locations
      dropdown: ["Characters", "Episodes", "Locations"],
      payload: null,
    };
  },
  computed: {
    toggleShow: function() {
      return this.pagination.pages > 0;
    },
    n() {
      return this.$store.state.number + 1;
    },
    ...mapState(["page", "pagination"]),
  },
  methods: {
    selectItemDropdown(item) {
      this.activeItem = item;
      switch (item) {
        case "Characters":
          this.payload = `character?page=${this.page}`;
          break;
        case "Episodes":
          this.payload = `episode?page=${this.page}`;
          break;
        case "Locations":
          this.payload = `location?page=${this.page}`;
          break;
        default:
      }
      this.getCharacters(this.payload);
      if (this.$route.name != "Characters") {
        this.$router.push({ name: "Characters" });
      } else {
        console.error("Pará de remar que ya llegaste al muelle");
      }
    },
    ...mapActions(["getCharacters"]),
  },
};
</script>
