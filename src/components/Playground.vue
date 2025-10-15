<template>
  <div class="flex flex-row h-screen gap-x-6">
    <MoviesList />
    <AddMovieForm />
  </div>
</template>

<script setup lang="ts">
import AddMovieForm from './AddMovieForm.vue';
import MoviesList from './MoviesList.vue';
</script>
