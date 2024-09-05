import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addTopratedMovies } from "../utils/movieSlice";

const useTopratedMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchTopratedMovies();
  }, []);

  const fetchTopratedMovies = async () => {    
    const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", options);
    const data = await response.json();    
    dispatch(addTopratedMovies(data?.results));
  };
};

export default useTopratedMovies;