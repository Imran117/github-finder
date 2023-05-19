<template>
  <div class="user" v-if="user">
    <div class="user__left">
      <img :src="user.avatar_url" alt="" />
      <a :href="user.html_url" target="_blank" class="user__left-btn">Посетить</a>
    </div>
    <div class="user__right">
      <p>{{ user.login }}</p>
      <p>Репоситориев: <span>{{ user.public_repos }}</span></p>
      <p>Создан: <span>{{ user.created_at }}</span></p>
      <p>Подписщиков: <span>{{ user.followers }}</span></p>
      <p>Подписок: <span>{{ user.following }}</span></p>
    </div>
  </div>
  <div class="sort">
    <h2 class="sort__title">Сортировка</h2>
    <div class="sort__box">
        <button 
        class="sort__box-btn"
        v-for="(btn, index) in btns"
        :key="btn.name"
        :class='{active: isActive == index}'
        @click="sortRepos(index, btn.sortType)"
        >
            {{ btn.name }}
        </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
        isActive: 0,
        btns: [
            {name: 'Имя', sortType: 'name'},
            {name: 'Звезды', sortType: 'stargazers_count'},
            {name: 'дата', sortType: 'created_at'},
        ]
    };
  },
  methods: {
    ...mapMutations(['sort']),
    sortRepos(indexBtn, sortType) {
        this.isActive = indexBtn
        this.sort(sortType)
    }
  },
  computed: {
    ...mapState(['user'])
  }
};
</script>

<style>
</style>