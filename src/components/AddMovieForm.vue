<template>
  <form ref="addMovieForm" class="flex flex-col mt-10 w-[400px]" @submit.prevent="addMovie">
    <label for="title">Movie title:</label>
    <input id="title" v-model="movie.title" :class="{ '!border-red-600': isError }" @input="isError = false" />

    <label for="posterURL">Poster URL:</label>
    <input id="posterURL" v-model="movie.posterURL" />

    <button
      class="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
      type="submit"
    >
      Add Movie
    </button>
  </form>
</template>

<script setup lang="ts">
import { defineEmits, ref, reactive, useTemplateRef } from 'vue';
import type { Movie } from '@/stores/movies.type';

const isError = ref<boolean>(false);
const addMovieForm = useTemplateRef<HTMLFormElement | null>('addMovieForm');

const emit = defineEmits<{
  (e: 'add-movie', movie: Movie): void;
}>();

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

  // Emit the movie to the parent component
  emit('add-movie', { ...movie, uuid: crypto.randomUUID() });
  
  addMovieForm?.value?.reset();
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
