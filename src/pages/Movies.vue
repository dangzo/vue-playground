<template>
  <div class="flex flex-row h-screen gap-x-6">
    <MoviesList />
    <AddMovieForm @addMovie="addMovie" />
  </div>
</template>

<script setup lang="ts">
import AddMovieForm from '@/components/AddMovieForm.vue';
import MoviesList from '@/components/MoviesList.vue';

import { useMoviesStore } from '@/stores/movies';
import { useFetch } from '@/api/fetch';
import { onMounted } from 'vue';

const { addMovie, addMovies } = useMoviesStore();
const { fetchMovies } = useFetch();

onMounted(async () => {
  // Fetch initial movies from an external API
  try {
    const data = await fetchMovies();
    
    if (data && Array.isArray(data)) {
      addMovies(data);
    }
  } catch (e) {
    console.error('Failed to fetch movies: ', e);
  }
});
</script>
