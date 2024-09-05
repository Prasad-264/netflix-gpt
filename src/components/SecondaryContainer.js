import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);
  return (
    <div className="bg-black">
      <div className="-mt-52 relative">
        {movies?.nowPlayingMovies && (
          <MovieList title="Now Playing" movies={movies?.nowPlayingMovies} />
        )}
        {movies?.topratedMovies && (
          <MovieList title="Top Rated" movies={movies?.topratedMovies} />
        )}
        {movies?.popularMovies && (
          <MovieList title="Popular" movies={movies?.popularMovies} />
        )}        
        {movies?.upcomingMovies && (
          <MovieList title="Upcoming" movies={movies?.upcomingMovies} />
        )}
      </div>
    </div>
  );
};

export default SecondaryContainer;
