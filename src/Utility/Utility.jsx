export const getMovieUrl = (posterPath) => {
  const imgBaseUrl = import.meta.env.VITE_IMGBASE_URL;
  return `${imgBaseUrl}/${posterPath}`;
};

export const getUTCDate = (date) => {
  const jsDate = new Date(date);

  return `${jsDate.getUTCDate()}-${jsDate.getUTCMonth()}-${jsDate.getUTCFullYear()}`;
};
