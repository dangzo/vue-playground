export const useFetch = () => {
  const fetchData = async (url: string, options?: RequestInit) => {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  };

  const fetchMovies = async () => {
    return fetchData(process.env.MOVIES_ENDPOINT || '');
  };

  return {
    fetchMovies,
  };
}