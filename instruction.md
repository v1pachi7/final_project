# Final Project 

1. create react app `npx create-react-app final_project`
2. open the project in VS code and in terminal type `cd final_project`
3. delete everything in src folder expect `index.js`, `App.js`, `App.css`
4. go to the omdb api and get the api
5. get the mail and activate the key and ready to work with it
6. create a const API_URL and pass the value to fetch the movies from the OMDB api 

# work on App.js
1. import useEffect from react 
2. create const `API_URL` & add `http://omdbapi.com?apikey={API_KEY}`
3. create a function called `seacrhMovies` 
    ```jsx
    const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s={title}`); //fetch the api
    const data = await response.json() // fetch the data from api   
    console.log(data.Search); // print the data
    }    
    ```
4. call useEffect and pass a value for fetching data 
    ```jsx 
      useEffect(() => {
    searchMovies('Spiderman');
    }, []);
    ```

5. App.js will look like this 

```jsx
//App.js

import { useEffect } from 'react';

const API_URL = 'http://omdbapi.com?apikey=b917fd8d'

const App = () => {

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s={title}`);
    const data = await response.json()
    
    console.log(data.Search);
  }

  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

  return (
    <div className="App">

    </div>
  );
}

export default App;
```

6. check the console in browser and see the data 

# Styling 
- add create App.css and add given styling to App.css

```css
/* App.css */

@import url("https://fonts.googleapis.com/css?family=Roboto+Slab:100,300,400,700");
@import url("https://fonts.googleapis.com/css?family=Raleway:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i");

* {
  margin: 0;
  border: 0;
  box-sizing: border-box;
}

:root {
  --font-roboto: "Roboto Slab", serif;
  --font-raleway: "Raleway", sans-serif;
}

body {
  font-family: var(--font-roboto);
  background-color: #212426;
}

.app {
  padding: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

h1 {
  font-size: 3rem;
  letter-spacing: 0.9px;
  background: linear-gradient(
    90deg,
    rgba(249, 211, 180, 1) 0%,
    rgba(249, 211, 180, 0) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: fit-content;
}

.search {
  width: 71%;
  margin: 4rem 0 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1.5rem 1.75rem;
  border-radius: 3rem;
  background: #1f2123;
  -webkit-box-shadow: 5px 5px 7px #1c1d1f, -5px -5px 7px #222527;
  box-shadow: 5px 5px 7px #1c1d1f, -5px -5px 7px #222527;
}

.search input {
  flex: 1;
  border: none;
  font-size: 1.5rem;
  font-family: var(--font-raleway);
  font-weight: 500;
  padding-right: 1rem;

  outline: none;
  color: #a1a1a1;
  background: #1f2123;
}

.search img {
  width: 35px;
  height: 35px;
  cursor: pointer;
}

/* .search button {
  padding: 20px 40px;
  border-radius: 0.5rem;
  margin-left: 15px;
  color: #a1a1a1;
  font-family: var(--font-raleway);
  font-weight: 900;
  letter-spacing: 0.75px;
  font-size: 1.25rem;
  cursor: pointer;

  background: #1f2123;
  -webkit-box-shadow: 5px 5px 7px #1c1d1f, -5px -5px 7px #222527;
  box-shadow: 5px 5px 7px #1c1d1f, -5px -5px 7px #222527;
} */

.empty {
  width: 100%;
  margin-top: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;
}

.empty h2 {
  font-size: 1.25rem;
  color: #f9d3b4;
  font-family: var(--font-raleway);
}

.container {
  width: 100%;
  margin-top: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.movie {
  width: 310px;
  height: 460px;
  margin: 1.5rem;

  position: relative;
  border-radius: 12px;
  overflow: hidden;
  border: none;

  transition: all 0.4s cubic-bezier(0.175, 0.885, 0, 1);
  box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);
}

.movie div:nth-of-type(1) {
  position: absolute;
  padding: 16px;
  width: 100%;
  opacity: 0;
  top: 0;
  color: #f9d3b4;
}

.movie:hover {
  box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);
  transform: scale(1.05, 1.05);
}

.movie div:nth-of-type(2) {
  width: 100%;
  height: 100%;
}

.movie div:nth-of-type(2) img {
  height: 100%;
  width: 100%;
}

.movie div:nth-of-type(3) {
  z-index: 2;
  background-color: #343739;
  padding: 16px 24px 24px 24px;

  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
}

.movie div:nth-of-type(3) span {
  font-family: "Raleway", sans-serif;
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 2px;
  font-weight: 500;
  color: #f0f0f0;
}

.movie div:nth-of-type(3) h3 {
  margin-top: 5px;
  font-family: "Roboto Slab", serif;
  color: #f9d3b4;
}

.movie:hover div:nth-of-type(2) {
  height: 100%;
  opacity: 0.3;
}

.movie:hover div:nth-of-type(3) {
  background-color: transparent;
}

.movie:hover div:nth-of-type(1) {
  opacity: 1;
}

@media screen and (max-width: 600px) {
  .app {
    padding: 4rem 2rem;
  }

  .search {
    padding: 1rem 1.75rem;
    width: 100%;
  }

  .search input {
    font-size: 1rem;
  }

  .search img {
    width: 20px;
    height: 20px;
  }
}

@media screen and (max-width: 400px) {
  .app {
    padding: 4rem 1rem;
  }

  h1 {
    font-size: 2rem;
  }

  .container {
    margin-top: 2rem;
  }

  .movie {
    width: "100%";
    margin: 1rem;
  }
}
```

-  create a `search.svg` and paste the below svg code
```svg
<!-- search.svg -->
<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.8594 29.8594L39.4219 39.4219" stroke="#D88769" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.9062 33.0469C26.2682 33.0469 33.0469 26.2682 33.0469 17.9062C33.0469 9.54431 26.2682 2.76562 17.9062 2.76562C9.54431 2.76562 2.76562 9.54431 2.76562 17.9062C2.76562 26.2682 9.54431 33.0469 17.9062 33.0469Z" stroke="#D88769" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

- Import `App.css` to the `App.js`
- `Import SearchIcon from './seacrh.svg'` to `App.js`

# Working on App.js JSX
1. create a div with className app
2. inside div create `h1` 
3. create another `div` with `className='search'`
4. inside it create input with 
    placeholder='search for movie"
    value='Batman'
    onChange={()=>{}}
5. create img with src={ SearchIcon}, alt="search" and onClick={()=>{}} 

```jsx
//App.js
//inside return 
return (
    <div className="app"> 
      <h1>Movie Deck</h1>

      <div className='search'>
        <input 
          placeholder='Search for Movie'
          value="Batman"
          onChange={()=>{}}
        />
        <img 
          src={ SearchIcon }
          alt='search'
          onClick={()=>{}}
        />
      </div>
    </div>
)
```

6. try the app with static data 
    - go to console and copy the object and paste in `App.js` above the main arrow function
    - create a jsx for the single static element inside `return` 
```jsx
//App.js
const movie = {
    "Title": "Spider-Man Title Reveal",
    "Year": "2021",
    "imdbID": "tt14122734",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjRjMmQ2NDQtNmI5NC00N2EwLTkwYWQtOTM2OGZjMmI5YmRjXkEyXkFqcGdeQXVyMTI0NTA1MDI3._V1_SX300.jpg"
}

return (
    ...

    <div className='conatiner'>
        <div className='movie'>
          <div>
            <p>{movie.Year}</p>
          </div>
            // small logic to check if movie poster availabe if not then fecth value from the given site
          <div> 
            <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title}/>
          </div>

          <div> 
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
          </div>
        </div>
    </div>

)
```

7. create a new component `Moviecard.jsx` and paste the div className="movie inside it
```jsx
//MovieCard.jsx

import React from 'react'

const MovieCard = ({ movie }) => {
  return (
    <div className='movie'>
        <div>
            <p>{movie.Year}</p>
        </div>

        <div>
            <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title}/>
        </div>

        <div> 
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
        </div>
    </div>
  )
}

export default MovieCard
```

- import the `MovieCard.jsx` to `App.js` 
- Add the <MovieCard/> with prop movie={movie}

8. create a useState to fetch the movie we will type in search input 

```jsx
import { useState } from 'react';

//inside the App function
//define the useState
const [movies, setMovies] = useState([]); 
//chnage the console.log to setMovies
setMovie(data.Search);

//create the logic to render the movie card inside the return
// {movies?.length > 0
//     ? (
//         <div className="container">
//             <MovieCard movie={movie}/>
//         <div/>
//     ) : (
//         <div className="empty">
//             <h2>No Movies Found</h2>
//         </div>
//     )
// }

// now dynamically fetch the movie using map function

    {movies?.length > 0 
    ? (
        <div className='container'>
        {movies.map((movie)=>(
            <MovieCard movie={movie}/>
        ))}
        </div>
    ):(
        <div className="empty">
        <h2>No movies Found</h2>
        </div>
    )
    }
```

9. Lets work on input search functionality
- create new useState hook for search term 
```jsx

const [searchTerm, setSearchTerm] = useState('');

//chnage the value in input onChnage
onChange= {(e) => setSearchTerm(e.target.value)}
// chnage the value of img onClick
onClick={()=> searchMovies(searchTerm)}
```
10. Once done add the props value to MovieCard.jsx and remove movie. from JSX