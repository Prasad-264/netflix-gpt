import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const fetchPopularMovies = async () => {    
    const response = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", options);
    const data = await response.json();
    console.log(data);
    
    dispatch(addPopularMovies(data?.results));
  };
};

export default usePopularMovies;