<template>
  <b-navbar toggleable="lg" type="dark" variant="dark" style="width: 100vw;">
    <b-navbar-brand class="nav-link active" to="/"
      ><img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/256px-Rick_and_Morty.svg.png"
        alt="Rick and Morty logo"
    /></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item @click="showRandom">random-character</b-nav-item>
        <b-nav-item-dropdown text="get" right>
          <b-dropdown-item
            v-for="item in dropdown"
            :key="item"
            :active="item === activeItem"
            @click="selectItemDropdown(item)"
            >{{ item }}</b-dropdown-item
          >
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
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
    showRandom() {
      if (this.$route.path != "/randomcharacter") {
        this.$router.push({ name: "RandomCharacter" });
      } else {
        this.getData(`character?page=${Math.round(Math.random() * 35)}`);
      }
    },
    selectItemDropdown(item) {
      let compass = null;
      this.activeItem = item;
      this.resetPage();
      switch (item) {
        case "Characters":
          compass = "c";
          this.payload = `character?page=${this.page}`;
          break;
        case "Episodes":
          compass = "e";
          this.payload = `episode?page=${this.page}`;
          break;
        case "Locations":
          compass = "l";
          this.payload = `location?page=${this.page}`;
          break;
        default:
      }
      this.getData(this.payload);
      switch (compass) {
        case "c":
          if (this.$route.path != "/characters") {
            this.$router.push({ name: "Characters" });
          }
          break;
        case "e":
          if (this.$route.path != "/episodes") {
            this.$router.push({ name: "Episodes" });
          }
          break;
        case "l":
          if (this.$route.path != "/locations") {
            this.$router.push({ name: "Locations" });
          }
          break;
        default:
      }
    },
    ...mapActions(["getData"]),
    ...mapMutations(["resetPage"]),
  },
};
</script>
