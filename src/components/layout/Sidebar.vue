<template>
  <aside class="sidebar">
    <GenreSwitch />
  </aside>
</template>

<script setup lang="ts">
import GenreSwitch from '@/components/GenreSwitch.vue'
</script>

<style lang="css" scoped>
.sidebar {
  padding: 1rem;
  width: 100%;
}
</style>