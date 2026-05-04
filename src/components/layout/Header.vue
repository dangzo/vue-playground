<template>
  <header>
    <h1>{{ activeGenre }} movies</h1>
  </header>
</template>

<script setup lang="ts">
import type { Genre } from '@/types/genres';
import { computed } from 'vue';

const props = defineProps<{
  genre: Genre
}>()

const activeGenre = computed(() => `${props.genre[0]?.toUpperCase()}${props.genre.slice(1)}` );
</script>