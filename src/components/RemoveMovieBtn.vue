<template>
  <button
    class="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 transition text-xs mt-4"
    @click="removeMovie(uuid)"
  >
    Remove
  </button>
</template>

<script setup lang="ts">
import type { Movie } from '@/stores/movies.type';
import { defineProps } from 'vue';
import { useMoviesStore } from '@/stores/movies'; 

defineProps<{
  uuid: Movie['uuid'];
}>();

const { removeMovie } = useMoviesStore();
</script>