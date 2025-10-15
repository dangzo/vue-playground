<template>
  <form @submit.prevent class="text-left">
    <input type="radio" id="horror" name="genre" value="horror" v-model="selectedGenre" />
    <label class="ml-1 mr-4" for="horror">Horror</label>

    <input type="radio" id="sci-fi" name="genre" value="sci-fi" v-model="selectedGenre" />
    <label class="ml-1 mr-4" for="sci-fi">Sci-Fi</label>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

type Genre = 'sci-fi' | 'horror';

const selectedGenre = ref<Genre>('horror');
</script>