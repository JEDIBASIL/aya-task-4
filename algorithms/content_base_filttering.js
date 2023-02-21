import { movies } from "../data/movie.js";
import { userViewingHistory } from "../data/userHistory.js";
const movieFeatures = {};
  movies.forEach((movie) => {
    movieFeatures[movie.id] = movie.genre;
  });

  
  const recommendMovies = (userViewingHistory) =>{
    const userGenres = {};
    userViewingHistory.forEach((movie) => {
      if (userGenres[movie.genre]) {
        userGenres[movie.genre]++;
      } else {
        userGenres[movie.genre] = 1;
      }
    });


  
    const recommendedMovies = [];
    movies.forEach((movie) => {
      if (userGenres[movie.genre] >= 2) {
        recommendedMovies.push(movie);
      }
    });
  
    return recommendedMovies;
  }
  

  
  const recommendedMovies = recommendMovies(userViewingHistory);
  
  console.log(recommendedMovies);
  