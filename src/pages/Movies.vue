<template>
  <div class="flex flex-row h-screen gap-x-6">
    <MoviesList />
    <AddMovieForm @addMovie="addMovie" />
  </div>
</template>

<script setup lang="ts">
import AddMovieForm from '@/components/AddMovieForm.vue';
import MoviesList from '@/components/MoviesList.vue';

import { useMoviesStore } from '@/stores/moviesStore';

const { addMovie } = useMoviesStore();
</script>
