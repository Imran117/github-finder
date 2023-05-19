<template>
  <div class="search">
    <div class="search__box">
      <input
        type="text"
        class="search__box-input"
        placeholder="Введите имя пользователя"
        v-model="search"
        @keydown.enter="getUserInfo"
      />
      
      <img
        src="@/assets/images/close-square.svg"
        alt=""
        class="search__box-close"
        v-if="search"
        @click="clearSearch()"
      />
    </div>
    <button @click="getUserInfo" class="search__btn">Найти</button>
  </div>
</template>

<script>
import {mapActions, mapMutations} from 'vuex'
export default {
  data() {
    return {
        search: ''
    };
  },
  methods: {
    ...mapActions(['userInfo']),
    ...mapMutations(['resetUser']),
    getUserInfo() {
        this.userInfo(this.search)
    },
    clearSearch() {
        this.search = ''
        this.resetUser()
    }
  },
};
</script>

<style>
</style>