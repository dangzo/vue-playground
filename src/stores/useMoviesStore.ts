import { defineStore } from "pinia";

type Movie = {
  uuid: string,
  title: string,
  year: number
}

export const useMoviesStore = defineStore("movies", () => {
  const movies: Array<Movie> = [];

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