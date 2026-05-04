<template>
  <div class="main-container">
    <div class="content-container">
      <Header v-bind:genre="genresStore.activeGenre()" />
      <Main />
    </div>
    <div class="sidebar-container">
      <Sidebar />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/layout/Header.vue'
import Main from '@/components/layout/Main.vue'
import Sidebar from '@/components/layout/Sidebar.vue';

import useGenresStore from './stores/genres';

const genresStore = useGenresStore();
</script>

<style lang="css" scoped>
.main-container {
  display: flex;
  flex-direction: row;
}

.content-container {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.sidebar-container {
  display: flex;
  min-width: 500px;
}
</style>