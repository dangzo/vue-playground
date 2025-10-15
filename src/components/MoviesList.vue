<template>
  <div class="p-4 w-full">
    <ul class="space-y-2 grid grid-cols-4">
      <li
        v-for="movie in movies"
        :key="movie.uuid"
        class="p-4 min-h-[300px] flex flex-col justify-between"
      >
        <div>
          <h3 class="text-xl font-semibold mb-4">
            {{ movie.title }}
          </h3>

          <!-- TODO: display placeholder if there's no image -->
          <img v-if="movie.posterURL" :src="movie.posterURL" class="mx-auto" />
        </div>

        <RemoveMovieBtn :uuid="movie.uuid" class="" />
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