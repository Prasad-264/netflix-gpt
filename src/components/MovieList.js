import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-20">
      <h1 className="font-semibold text-2xl py-5 text-white">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar space-x-5">
        {movies.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
