<template>
  <div class="genre-switch">
    <button
      v-for="(genre, index) of genres"
      :key="index"
      :class="['genre', { 'genre--active': index === activeGenreIndex }]"
      @click="setActiveGenre(index)"
    >
      {{ genre }}
    </button>
  </div>
</template>

<script setup lang="ts">
import useGenresStore from '@/stores/genres';
import { storeToRefs } from 'pinia';

const genresStore = useGenresStore();

const { genres, activeGenreIndex } = storeToRefs(genresStore);
const { setActiveGenre } = genresStore;
</script>

<style scoped lang="css">
.genre-switch {
  display: flex;
}

.genre {
  flex: 1;

  &[class*='--active'] {
    background-color:#444;
    border: solid 1px white;
  }

  &:not(:first-of-type) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  &:not(:last-of-type) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
}
</style>