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

const { addMovie } = useMoviesStore();
const { fetchMovies } = useFetch();

onMounted(async () => {
  // Fetch initial movies from an external API
  try {
    const data = await fetchMovies();
    
    if (data && Array.isArray(data)) {
      data.forEach((movie) => addMovie(movie));
    }
  } catch (e) {
    console.error('Failed to fetch movies: ', e);
  }
});
</script>
