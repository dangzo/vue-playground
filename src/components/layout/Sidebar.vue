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
import type { Movie } from '@/types/movies'

const moviesStore = useMoviesStore();

function handleAddMovie(movie: Movie) {
  moviesStore.addMovie(movie);
}
</script>

<style lang="css" scoped>
.sidebar {
  padding: 1rem;
  width: 100%;
}
</style>