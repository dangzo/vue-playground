import { defineStore } from "pinia";

type Movie = {
  uuid: string,
  director?: string,
  title: string,
  year: number
}

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