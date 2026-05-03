<template>
  <form ref="addMovieForm" class="add-movie-form" @submit.prevent="addMovie">
    <label class="form-label" for="title">(*) Movie title:</label>
    <input id="title" v-model="movie.title" :class="{ 'is-error': isError }" @input="isError = false" />

    <label class="form-label" for="posterURL">Poster URL:</label>
    <input id="posterURL" v-model="movie.posterURL" />

    <button
      class="submit-btn"
      type="submit"
    >
      Add Movie
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref, reactive, useTemplateRef } from 'vue';
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

  // Reset form and local state
  addMovieForm?.value?.reset();
  movie.title = '';
  movie.posterURL = '';
}

</script>

<style scoped>
.add-movie-form {
  display: flex;
  flex-direction: column;
  width: 400px;
  margin-top: 2.5rem;
}

.form-label {
  margin-bottom: 0.25rem;
  text-align: left;
}

input {
  border: solid 1px #d1d5db;
  border-radius: 0.375rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
}

.is-error {
  border-color: #dc2626;
}

.submit-btn {
  margin-top: 1rem;
  border: none;
  border-radius: 0.375rem;
  background-color: #3b82f6;
  color: #ffffff;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.submit-btn:hover {
  background-color: #2563eb;
}

@media (max-width: 640px) {
  .add-movie-form {
    width: 100%;
  }
}
</style>
