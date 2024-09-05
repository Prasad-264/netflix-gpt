import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getMovieVideos();
  }, []);

  const getMovieVideos = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      options
    );
    const data = await response.json();
    const filteredVideos = data.results?.filter(
      (movie) => movie.type === "Trailer"
    );
    const trailer = filteredVideos.length ? filteredVideos[0] : data.results[0];
    dispatch(addTrailerVideo(trailer));
  };
};

export default useMovieTrailer;
