import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMovie } from "../features/userSlice";
import instance from "../services/index";
import "./Movie.css";
import Nav from "../components/Nav";
import VideoPlayer from "../components/VideoPlayer";

const Movie = () => {
  const movie = useSelector(selectMovie);
  const dispatch = useDispatch();

  return (
    <div>
      <Nav />
      <VideoPlayer />
      <div className="movie">
        <div className="movie_name_container">
          <h1 className="movie_name">{movie?.title}</h1>
          <button className="movie_add">Add to List</button>
        </div>
        <h5 className="movie_tagline">{movie?.tagline}</h5>
        <p className="movie_overview">{movie?.overview}</p>
        <h4 className="movie_ratings">Ratings:- {movie?.vote_average}</h4>
      </div>
    </div>
  );
};
export default Movie;
