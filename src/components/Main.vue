<template>
  <main class="main">
    <div class="container">
      <Search />
      <h2 v-if="error" class="error">{{ error }}</h2>
      <User />
      <Repos />
    </div>
  </main>
</template>

<script>
import Search from "@/components/Search.vue";
import User from "@/components/User.vue";
import Repos from "@/components/Repos.vue";
import { mapState } from "vuex";
export default {
  components: {
    Search,
    User,
    Repos,
  },

  methods: {},

  computed: {
    ...mapState(["error"]),
  },
};
</script>

<style>
</style>