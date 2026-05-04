<template>
  <div class="movies-wrapper">
    <MoviesList />
  </div>
</template>

<script setup lang="ts">
import MoviesList from '@/components/MoviesList.vue';

import { useMoviesStore } from '@/stores/movies';
import { useFetch } from '@/api/fetch';
import { onMounted } from 'vue';

const { addMovies } = useMoviesStore();
const { fetchMovies } = useFetch();

onMounted(async () => {
  // Fetch initial movies from an external API
  try {
    const data = await fetchMovies();
    
    if (data && Array.isArray(data)) {
      addMovies(data.slice(0, 20)); // Add only the first 20 movies
    }
  } catch (e) {
    console.error('Failed to fetch movies: ', e);
  }
});
</script>

<style scoped>
.movies-wrapper {
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  gap: 1.5rem;
}

@media (max-width: 1024px) {
  .movies-wrapper {
    flex-direction: column;
    min-height: auto;
  }
}
</style>
