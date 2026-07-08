<template>
  <form ref="addMovieForm" class="add-movie-form" @submit.prevent="addMovie">
    <label class="form-label" for="title">(*) Movie title:</label>
    <input
      id="title"
      v-model="movie.title"
      :class="{ 'is-error': isError }"
      @input="isError = false"
    />
    <p class="is-error" v-if="isError">Movie title is required.</p>

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
import { ref, useTemplateRef } from 'vue';
import type { Movie } from '@/types/movies'

const movie = ref<Omit<Movie, 'uuid'>>({
  title: '',
});
const isError = ref<boolean>(false)

const emit = defineEmits<{
  (e: 'add-movie', movie: Movie): void
}>();

const addMovieFormRef = useTemplateRef('addMovieForm');

function addMovie() {
  if (!movie.value.title.length) {
    isError.value = true;
    return;
  }

  // emit movie
  emit('add-movie', {
    uuid: crypto.randomUUID(),
    ...movie.value
  })

  // reset movie form
  addMovieFormRef.value?.reset()
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
p.is-error {
  color: #dc2626;
  margin-top: -0.75rem;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  text-align: left;
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
