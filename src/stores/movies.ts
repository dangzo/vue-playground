import { ref } from "vue";
import { defineStore } from "pinia";
import type { Movie } from "./movies.type";

const defaultMovies: Array<Movie> = [{
  uuid: "1",
  title: "The Shawshank Redemption",
  director: "Frank Darabont",
  year: 1994
}]

export const useMoviesStore = defineStore("movies", () => {
  const movies = ref<Array<Movie>>([...defaultMovies]);

  function addMovie(movie: Movie) {
    movies.value.push(movie);
  }

  function removeMovie(uuid: Movie["uuid"]) {
    movies.value = movies.value.filter(m => m.uuid !== uuid);
  }

  return {
    // state
    movies,

    // actions
    addMovie,
    removeMovie
  };
});