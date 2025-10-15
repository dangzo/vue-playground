<template>
  <div class="p-4 w-full">
    <h2 class="text-2xl font-bold mb-4">Movies List</h2>
    <ul class="space-y-2">
      <li v-for="movie in movies" :key="movie.uuid" class="p-4 border rounded shadow-sm hover:shadow-md transition">
        <h3 class="text-xl font-semibold">
          {{ movie.title }}
        </h3>

        <p class="text-gray-600">
          Director: {{ movie.director }}
        </p>

        <p class="text-gray-600">
          Year: {{ movie.year }}
        </p>

        <RemoveMovieBtn :uuid="movie.uuid" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useMoviesStore } from '@/stores/movies';

import RemoveMovieBtn from './RemoveMovieBtn.vue';

const moviesStore = useMoviesStore();
const { movies } = storeToRefs(moviesStore);
</script>