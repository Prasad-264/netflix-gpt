import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addNowPlayingMovie } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchNowPlayingMovies();
  }, []);

  const fetchNowPlayingMovies = async () => {    
    const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", options);
    const data = await response.json();
    dispatch(addNowPlayingMovie(data?.results));
  };
};

export default useNowPlayingMovies;