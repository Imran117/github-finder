<template>
  <div class="repos">
    <ReposItem 
        v-for="repos in getReposSort"
        :key="repos.id"
        :repos="repos"
    />
  </div>
</template>

<script>
import ReposItem from "@/components/ReposItem.vue";
import { mapGetters } from 'vuex'
export default {
  components: {
    ReposItem,
  },
  computed: {
    ...mapGetters(['getReposSort'])
  }
};
</script>

<style>
</style>