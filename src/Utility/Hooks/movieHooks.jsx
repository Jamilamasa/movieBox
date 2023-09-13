import React from "react";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useEffect } from "react";

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;

//  GET TOP RATED MOVIES
export const useTopRatedMovies = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch top movies
  const getTopMovies = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${baseUrl}/3/movie/top_rated`, {
        params: {
          api_key: apiKey,
        },
      });
      if (response) {
        setLoading(false);
        setTopMovies(response.data.results);
      }
    } catch (error) {
      setLoading(false);
      toast.error("An Error Occured");
    }
  };
  useEffect(() => {
    getTopMovies();
  }, []);
  return [topMovies, loading];
};

// Get Genre
export const useGenreNames = (idArray) => {
  const [genreNames, setGenreNames] = useState([]);
  const [idToNameMap, setidToNameMap] = useState([]);

  // Get Genre/ID array
  const getGenre = async () => {
    try {
      const response = await axios.get(`${baseUrl}/3/genre/movie/list`, {
        params: {
          api_key: apiKey,
        },
      });
      if (response) {
        setidToNameMap(response.data.genres);
      }
    } catch (error) {
      toast.error("An Error Occured");
    }
  };

  useEffect(() => {
    getGenre();
  }, []);

  useEffect(() => {
    const names = idArray.map((id) => {
      const genre = idToNameMap.find((item) => item.id === id);
      return genre ? genre.name : null;
    });

    setGenreNames(names.filter(Boolean));
  }, [idArray, idToNameMap]);

  return genreNames;
};

export const useSearchMovies = (movie) => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const searchMovies = async (movie) => {
    setLoading(true);
    try {
      const response = await axios.get(`${baseUrl}/3/search/movie`, {
        params: {
          api_key: apiKey,
          query: movie,
        },
      });
      if (response) {
        setLoading(false);
        setResults(response.data.results);
        if (response.data.total_results === 0) {
          toast.error(`Couldn't Find ${movie}`);
        }
      }
    } catch (error) {
      if (error) {
        setLoading(false);
        toast.error("An Error Occured");
      }
    }
  };
  useEffect(() => {
    searchMovies(movie);
  }, []);
  return [results, loading];
};

export const useMovieDetails = (id) => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState({});

  const getMovieDetails = async (id) => {
    setLoading(true);
    try {
      const response = await axios.get(`${baseUrl}/3/movie/${id}`, {
        params: {
          api_key: apiKey,
        },
      });

      if (response) {
        // console.log(response.data);
        setResults(response.data);
      }
    } catch (error) {
      if (error) {
        toast.error("An Error Occured");
        console.log(error)
      }
    }
  };
  useEffect(() => {
    getMovieDetails(id);
  }, []);
  return [results, loading];
};
