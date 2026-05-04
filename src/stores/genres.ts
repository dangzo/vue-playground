import { defineStore } from "pinia";
import { ref } from 'vue';
import type { Genre } from "@/types/genres";

const useGenresStore = defineStore('genres', () => {
  const genres = ref<Genre[]>(['horror', 'sci-fi']);
  const activeGenreIndex = ref<number>(0);

  function setActiveGenre(genreIndex: number) {
    if (genreIndex >= 0 && genreIndex < genres.value.length) {
      activeGenreIndex.value = genreIndex;
    } else {
      console.error('setActiveGenre(): Genre index out of range');
    }
  }

  function activeGenre(): Genre {
    return genres.value[activeGenreIndex.value]!;
  }

  return {
    // state
    genres,
    activeGenreIndex,

    // actions
    setActiveGenre,

    // computed
    activeGenre,
  }
});

export default useGenresStore;