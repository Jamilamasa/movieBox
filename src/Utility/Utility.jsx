export const getMovieUrl = (posterPath) => {
  const imgBaseUrl = import.meta.env.VITE_IMGBASE_URL;
  return `${imgBaseUrl}/${posterPath}`;
};
