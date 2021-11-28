//  importing react
import React, { useState } from "react";
//  importing MovieList component
import MovieList from "./Components/MovieList/MovieList";
//  importing NavBar component
import NavBar from "./Components/NavBar/NavBar";
//  importing css
import "./App.css";

const App = () => {
  const [movieList, setmovieList] = useState([
    {
      MovieId: Math.random(),
      MoviePosterSrc:
        "https://img6.cdn.cinoche.com/images/ce0a60bc9701d2f6a9900227b86c0b0c.jpg",
      MovieName: "CharmCityKings",
      MovieDescription:
        "Fourteen-year-old Mouse desperately wants to join the Midnight Clique, an infamous group of Baltimore dirt-bike riders who rule the summertime streets",
      MovieRating: 3,
    },
    {
      MovieId: Math.random(),
      MoviePosterSrc:
        "https://m.media-amazon.com/images/M/MV5BYzFmOGFjMjEtNDI4Mi00YTNiLThiNzQtMDU2MWMyOGUxZGY5XkEyXkFqcGdeQXVyMzU5OTE2NTI@._V1_.jpg",
      MovieName: "BurnOut",
      MovieDescription:
        "Parents need to know that Burn Out is a 2018 French film (with English subtitles) about a motorcycle racer trying to turn pro while also, unwillingly, running drug money for a Paris dealer threatening his ex-girlfriend and young child",
      MovieRating: 4,
    },
    {
      MovieId: Math.random(),
      MoviePosterSrc:
        "https://m.media-amazon.com/images/M/MV5BYmEyNWZhM2YtZDAyNi00ZjYzLWI2ZWMtOWM4ZmI1MDE0OWNmXkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_.jpg",
      MovieName: "Creed2",
      MovieDescription:
        "The film follows a fight over 33 years in the making, as Donnie Creed meets a new adversary in the ring: Viktor Drago, son of Ivan Drago, the powerful athlete who took the life of Donnie's father Apollo Creed in 1985's Rocky IV",
      MovieRating: 5,
    },
    {
      MovieId: Math.random(),
      MoviePosterSrc:
        "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/1f72e0a3a05b4e459233ab355c6a759bd3fba8a0e3985cf287ada1752fa51f77._UR1920,1080_RI_.jpg",
      MovieName: "Don't Breathe 2",
      MovieDescription:
        "Don't Breathe 2 opens to a young girl emerging out of a burning house and passing out on the road. Eight years after the fatal fire, we meet her as Phoenix. She is being trained in fighting and survival skills by our anti-hero Norman. He is overprotective, she is rebellious",
      MovieRating: 4,
    },
    {
      MovieId: Math.random(),
      MoviePosterSrc:
        "https://m.media-amazon.com/images/M/MV5BNzE2ZjQxNjEtNmI2ZS00ZmU0LTg4M2YtYzVhYmRiYWU0YzI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
      MovieName: "6 Underground",
      MovieDescription:
        "6 Underground is about an eclectic billionaire (Ryan Reynolds)—it's implied he invented the vibration you feel when you get a text or call—who has faked his own death to go underground and lead a team of similar mercenaries, people who are able to go off the grid to do the jobs that world governments refuse to do.",
      MovieRating: 5,
    },
    {
      MovieId: Math.random(),
      MoviePosterSrc:
        "https://m.media-amazon.com/images/I/714dsIq4FXL._AC_SL1500_.jpg",
      MovieName: "50 Shades Of Grey",
      MovieDescription:
        "For all the trappings of success—his multinational businesses, his vast wealth, his loving family—Grey is a man tormented by demons and consumed by the need to control. When the couple embarks on a daring, passionately physical affair, Ana discovers Christian Grey's secrets and explores her own dark desires.",
      MovieRating: 4,
    },
    {
      MovieId: Math.random(),
      MoviePosterSrc:
        "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      MovieName: "Spenser",
      MovieDescription:
        "Pablo Larraín's Spencer is a haunting reimagining of a tense Christmas holiday in the life of Princess Diana. Now reunited with her boys William (Jack Nielen) and Harry (Freddie Spry), Diana tries to put on a brave face even if she knows her husband Prince Charles (Jack Farthing) is having an affair.",
      MovieRating: 5,
    },
    {
      MovieId: Math.random(),
      MoviePosterSrc:
        "https://m.media-amazon.com/images/M/MV5BZmRjODgyMzEtMzIxYS00OWY2LTk4YjUtMGMzZjMzMTZiN2Q0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
      MovieName: "Red Notice",
      MovieDescription:
        "Red Notice is a 2021 American action comedy film written and directed by Rawson Marshall Thurber. It stars Dwayne Johnson as an FBI agent who reluctantly teams up with a renowned art thief (Ryan Reynolds) in order to catch an even more notorious criminal (Gal Gadot).",
      MovieRating: 4,
    },
  ]);
  const [filterRating, setfilterRating] = useState(0);
  const [filterName, setfilterName] = useState("");
  const [movie, setMovie] = useState({});
  const pickMovie = (x) => {
    setMovie(x);
  };
  return (
    <>
      <NavBar
        setfilterRating={setfilterRating}
        setfilterName={setfilterName}
        pickMovie={pickMovie}
        setmovieList={setmovieList}
        movieList={movieList}
      />
      <MovieList
        filterRating={filterRating}
        filterName={filterName}
        movieList={movieList}
        movie={movie}
      />
    </>
  );
};

export default App;
