<template>
  <aside class="sidebar">
    <GenreSwitch />
    <AddMovieForm @add-movie="handleAddMovie" />
  </aside>
</template>

<script setup lang="ts">
import GenreSwitch from '@/components/GenreSwitch.vue'
import AddMovieForm from '@/components/AddMovieForm.vue';
import useMoviesStore from '@/stores/movies';
import { useNotification } from '@/composables/useNotification';

import type { Movie } from '@/types/movies'

const moviesStore = useMoviesStore();
const { showNotification } = useNotification();

function handleAddMovie(movie: Movie) {
  moviesStore.addMovie(movie);
  showNotification({
    message: `Movie "${movie.title}" added successfully!`,
    type: 'success'
  });
}
</script>

<style lang="css" scoped>
.sidebar {
  padding: 1rem;
  width: 100%;
}
</style>