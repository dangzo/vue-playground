<template>
  <div class="movies-list-wrapper">
    <ul class="movies-grid">
      <li
        v-for="movie in movies"
        :key="movie.uuid"
        class="movie-card"
      >
        <div>
          <h3 class="movie-title">
            {{ movie.title }}
          </h3>

          <!-- TODO: display placeholder if there's no image -->
          <img v-if="movie.posterURL" :src="movie.posterURL" class="movie-poster" />
        </div>

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

<style scoped>
.movies-list-wrapper {
  width: 100%;
  padding: 1rem;
}

.movies-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.75rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.movie-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 300px;
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
}

.movie-title {
  margin: 0 0 1rem;
  font-size: 1.25rem;
  font-weight: 600;
}

.movie-poster {
  display: block;
  max-width: 100%;
  margin: 0 auto;
}

@media (max-width: 1200px) {
  .movies-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 900px) {
  .movies-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .movies-grid {
    grid-template-columns: 1fr;
  }
}
</style>