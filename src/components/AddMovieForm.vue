<template>
  <form class="flex flex-col mt-10 w-[400px]" @submit.prevent="addMovie">
    <label for="title">Movie title:</label>
    <input id="title" v-model="movie.title" :class="{ '!border-red-600': isError }" @input="isError = false" />

    <label for="director">Director:</label>
    <input id="director" v-model="movie.director" />

    <label for="year">Year:</label>
    <input id="year" v-model="movie.year" type="number" />

    <button
      class="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
      type="submit"
    >
      Add Movie
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import type { Movie } from '@/stores/movies.type';

const isError = ref<boolean>(false);

const movie = reactive<Movie>({
  uuid: crypto.randomUUID(),
  title: '',
});

function validateMovie(m: Movie): boolean {
  return !!m.title;
}

function addMovie() {
  if (!validateMovie(movie)) {
    isError.value = true;
    return;
  }

  // Logic to add the movie
  console.log('Adding movie:', movie);
}

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
