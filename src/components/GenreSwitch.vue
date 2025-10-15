<template>
  <form @submit.prevent>
    <input type="radio" id="sci-fi" name="genre" value="sci-fi" v-model="selectedGenre" />
    <label for="sci-fi">Sci-Fi</label>

    <input type="radio" id="horror" name="genre" value="horror" v-model="selectedGenre" />
    <label for="horror">Horror</label>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

type Genre = 'sci-fi' | 'horror';

const selectedGenre = ref<Genre>('sci-fi');
</script>