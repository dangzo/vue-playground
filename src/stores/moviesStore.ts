import { defineStore } from "pinia";
import type { Movie } from "./movies.type";

const defaultMovies: Array<Movie> = [{
  uuid: "1",
  title: "The Shawshank Redemption",
  director: "Frank Darabont",
  year: 1994
}]

export const useMoviesStore = defineStore("movies", () => {
  const movies: Array<Movie> = [...defaultMovies];

  function addMovie(movie: Movie) {
    movies.push(movie);
  }

  function removeMovie(uuid: Movie["uuid"]) {
    movies.filter(m => m.uuid !== uuid);
  }

  return {
    // state
    movies,
    // methods
    addMovie,
    removeMovie
  };
});