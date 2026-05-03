<template>
  <button
    class="remove-btn"
    @click="removeMovie(uuid)"
  >
    Remove
  </button>
</template>

<script setup lang="ts">
import type { Movie } from '@/stores/movies.type';
import { useMoviesStore } from '@/stores/movies'; 

defineProps<{
  uuid: Movie['uuid'];
}>();

const { removeMovie } = useMoviesStore();
</script>

<style scoped>
.remove-btn {
  margin-top: 1rem;
  border: none;
  border-radius: 0.375rem;
  background-color: #ef4444;
  color: #ffffff;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.remove-btn:hover {
  background-color: #dc2626;
}
</style>