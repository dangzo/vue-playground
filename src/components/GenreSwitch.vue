<template>
  <form @submit.prevent class="genre-switch">
    <input type="radio" id="horror" name="genre" value="horror" v-model="selectedGenre" />
    <label class="genre-label" for="horror">Horror</label>

    <input type="radio" id="sci-fi" name="genre" value="sci-fi" v-model="selectedGenre" />
    <label class="genre-label" for="sci-fi">Sci-Fi</label>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

type Genre = 'sci-fi' | 'horror';

const selectedGenre = ref<Genre>('horror');
</script>

<style scoped>
.genre-switch {
  text-align: left;
}

.genre-label {
  margin-left: 0.25rem;
  margin-right: 1rem;
}
</style>