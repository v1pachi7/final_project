import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import "./App.css";
import  SearchIcon  from './search.svg';
import MovieCard from './MovieCard';

const API_URL = 'http://omdbapi.com?apikey=b917fd8d'


const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  

  useEffect(() => {
    searchMovies('');
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s={title}`);
    const data = await response.json();
    console.log(data)
    setMovies(data.Search);
  }

  return (
    <div className="app">
      <h1>Movie Deck</h1>

      <div className='search'>
        <input 
          value={searchTerm}
          onChange= {(e) => setSearchTerm(e.target.value)}
          placeholder='Search for Movie'
        />
        <img 
          src={ SearchIcon }
          alt='search'
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 
        ? (
          <div className='container'>
            {movies.map((movie,)=>(
              <MovieCard movie={movie}
              key={movies.imdbID}/>
            ))}
          </div>
        ):(
          <div className="empty">
            <h2>No movies Found</h2>
          </div>
        )
      }
    </div>
  );
}

export default App;
