import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchUpcomingMovies();
  }, []);

  const fetchUpcomingMovies = async () => {    
    const response = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", options);
    const data = await response.json();    
    dispatch(addUpcomingMovies(data?.results));
  };
};

export default useUpcomingMovies;