import React, { useEffect } from 'react'
import Header from './Header';
import { options } from '../utils/constants';

const Browse = () => {
  useEffect(() => {
    fetchNowPlayingMovies();
  }, []);

  const fetchNowPlayingMovies = async () => {    
    const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", options);
    const data = await response.json();
    console.log(data?.results);    
  };

  return (
    <div>
			<Header />
		</div>
  )
}

export default Browse;