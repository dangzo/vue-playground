<template>
  <div class="movies-layout">
    <MoviesList class="movies-list-panel" />

    <div class="movies-sidebar">
      <GenreSwitch />
      <AddMovieForm @addMovie="addMovie" />
    </div>
  </div>
</template>

<script setup lang="ts">
import AddMovieForm from '@/components/AddMovieForm.vue';
import MoviesList from '@/components/MoviesList.vue';

import { useMoviesStore } from '@/stores/movies';
import { useFetch } from '@/api/fetch';
import { onMounted } from 'vue';
import GenreSwitch from '@/components/GenreSwitch.vue';

const { addMovie, addMovies } = useMoviesStore();
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
.movies-layout {
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  gap: 1.5rem;
}

.movies-list-panel {
  flex: 1;
  max-width: 60%;
}

.movies-sidebar {
  padding-top: 1.5rem;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 1024px) {
  .movies-layout {
    flex-direction: column;
    min-height: auto;
  }

  .movies-list-panel {
    max-width: 100%;
  }

  .movies-sidebar {
    width: 100%;
    padding-top: 0;
  }
}
</style>
