import { ref } from "vue";
import { defineStore } from "pinia";
import type { Movie } from "./movies.type";

export const useMoviesStore = defineStore("movies", () => {
  const movies = ref<Array<Movie>>([]);

  function addMovie(movie: Movie) {
    movies.value.push(movie);
  }

  function addMovies(moviesToAdd: Array<Movie>) {
    movies.value = [
      ...movies.value,
      ...moviesToAdd.map(m => ({
        uuid: crypto.randomUUID(),
        title: m.title,
        posterURL: m.posterURL,
      })),
    ];
  }

  function removeMovie(uuid: Movie["uuid"]) {
    movies.value = movies.value.filter(m => m.uuid !== uuid);
  }

  return {
    // state
    movies,

    // actions
    addMovie,
    addMovies,
    removeMovie
  };
});