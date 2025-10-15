<template>
  <form class="flex flex-col mt-10 w-[400px]">
    <label for="title">Movie title:</label>
    <input id="title" v-model="movie.title" />

    <label for="director">Director:</label>
    <input id="director" v-model="movie.director" />

    <label for="year">Year:</label>
    <input id="year" v-model="movie.year" type="number" />
  </form>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import type { Movie } from '@/stores/movies.type';

const movie = reactive<Movie>({
  uuid: crypto.randomUUID(),
  title: '',
});
</script>

<style scoped>
input {
  border: solid 1px #d1d5db;
  border-radius: 0.375rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
}

label {
  text-align: left;
}
</style>
