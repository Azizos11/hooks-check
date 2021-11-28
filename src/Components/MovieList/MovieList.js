//  importing React
import React from "react";
//  importing MovieCard
import MovieCard from "../MovieCard/MovieCard";

const MovieList = ({ filterName, movieList, filterRating }) => {
  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {movieList
          .filter(
            (el) =>
              el.MovieName.toUpperCase().includes(filterName.toUpperCase()) &&
              el.MovieRating >= filterRating
          )
          .map((el) => (
            <MovieCard
              key={el.MovieId}
              MoviePosterSrc={el.MoviePosterSrc}
              MovieName={el.MovieName}
              MovieDescription={el.MovieDescription}
              MovieRating={el.MovieRating}
            />
          ))}
      </div>
    </>
  );
};

export default MovieList;
