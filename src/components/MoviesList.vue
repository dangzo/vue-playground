<template>
  <div class="p-4">
    <h2 class="text-2xl font-bold mb-4">Movies List</h2>
    <ul class="space-y-2">
      <li v-for="movie in movies" :key="movie.uuid" class="p-4 border rounded shadow-sm hover:shadow-md transition">
        <h3 class="text-xl font-semibold">{{ movie.title }}</h3>
        <p class="text-gray-600">Director: {{ movie.director }}</p>
        <p class="text-gray-600">Year: {{ movie.year }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useMoviesStore } from '@/stores/moviesStore';


const moviesStore = useMoviesStore();
const movies = moviesStore.movies;

</script>