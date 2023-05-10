<template>
  <div class="repos__item">
    <div class="respos__left">
      <h3>{{repos.name}}</h3>
      <p>Кол-во: {{ repos.stargazers_count }} ⭐</p>
      <p>Дата добавление: {{new Date(repos.created_at).toLocaleDateString()}}</p>
    </div>
    <a :href="repos.html_url" target="_blank" class="repos__link">ПОСЕТИТЬ</a>
  </div>
</template>

<script>
export default {
    props: {
        repos: Object
    }
};
</script>

<style>
</style>