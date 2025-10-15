export const useFetch = () => {
  const fetchData = async (url: string, options?: RequestInit) => {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  };

  const fetchMovies = async () => {
    console.log(import.meta.env)
    return fetchData(import.meta.env.VITE_MOVIES_ENDPOINT || '');
  };

  return {
    fetchMovies,
  };
}