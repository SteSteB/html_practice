const movies = [
    {"title": "Jaws", "director": "Steven Spielberg", "year": "1975"},
    {"title": "Star Wars", "director": "George Lucas", "year": "1977"},
    {"title": "Avengers: Infinity War", "director": "Anthony and Joe Russo", "year": "2018"},
    {"title": "Top Gun", "director": "Tony Scott", "year": "1986"},
    {"title": "Justice League", "director": "Zack Snyder", "year": "2017"}
  ];
  
  // Part 1
//   function findMovie(movieTitle) {
//     for (const movie of movies) {
//       if (movie.title === movieTitle) {
//         console.log(`Movie Title: ${movie.title}`);
//         console.log(`Director: ${movie.director}`);
//         console.log(`Year: ${movie.year}`);
//       }
      
//        console.log("Value of movie inside loop:", movie);
//     }
   
//     // console.log("Value of movie outside loop:", movie);
//   }
  
//   // Call the findMovie function with an argument of "Star Wars".
//   findMovie("Star Wars");
  

//    console.log("Value of movie:", movie);
  

// var movie = "Thor: Ragnarok";

// console.log("Value of movies:", movies);
// console.log("Value of movie:", movie);

// findMovie(movie);..


// Part 2 = Create a function to return a movie object

function returnMovie(movieTitle) {
    for (const movie of movies) {
      if (movie.title === movieTitle) {
        console.log(`Movie Title: ${movie.title}`);
        console.log(`Director: ${movie.director}`);
        console.log(`Year: ${movie.year}`);
        return movie; // Step 2a ii
      }
      console.log("Current value of movie:", movie);
    }
    // Step 2b - Commented out "Any text, any text at all"
    // console.log("Any text, any text at all");
  }
  
  // Step 3
  const myMovie = returnMovie("Avengers: Infinity War");
  
  // Step 4
  console.log(myMovie);
  
  // Step 5
  if (myMovie) {
    const movieString = `${myMovie.title} directed by ${myMovie.director} in ${myMovie.year}.`;
    console.log(movieString);
  }
  
  // Step 6
  const myOtherMovie = returnMovie("Thor: Ragnorok");
  
  // Step 7
  console.log(myOtherMovie);
  
  // Step 8
  function returnMovie(movieTitle) {
    for (const movie of movies) {
      if (movie.title === movieTitle) {
        console.log(`Movie Title: ${movie.title}`);
        console.log(`Director: ${movie.director}`);
        console.log(`Year: ${movie.year}`);
        return movie;
      }
      console.log("Current value of movie:", movie);
    }
    return "Movie not found"; // Step 8
  }
  
  function myMovieDetails(anyMovie) {
    if (typeof anyMovie === "object") {
      return `${anyMovie.title} directed by ${anyMovie.director} in ${anyMovie.year}.`;
    }
    return anyMovie;
  }

  console.log(myMovieDetails(myOtherMovie));

  console.log(myMovieDetails(returnMovie("Jaws")));