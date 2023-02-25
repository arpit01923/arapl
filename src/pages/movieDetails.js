import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { changeSelectedMovie } from "../redux/slices/common";

const MovieDetails = () => {
  const { selectedMovie } = useSelector((state) => state.Common);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${pathname}?api_key=b56058299cbea0093f5ccfb9e43c52a4&language=en-US`
        );
        dispatch(changeSelectedMovie(res?.data));
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);
  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-600 min-h-screen">
      <div className="flex gap-5 p-5">
        <div className="w-1/4">
          {selectedMovie?.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/original/${selectedMovie?.poster_path}`}
              alt="movie-poster"
              className="h-[400px] w-full object-cover"
            />
          ) : (
            <div className="h-[400px] bg-white flex justify-center items-center">
              No preview available
            </div>
          )}
        </div>
        <div className="w-3/4 text-white">
          <p className="text-2xl font-bold">{selectedMovie?.title}</p>
          <p>{selectedMovie?.release_date.split("-")[0]}</p>
          <p className="my-1">Rating : {selectedMovie?.vote_average}</p>
          <p className="line-clamp-2 my-2">{selectedMovie?.overview}</p>
          <button
            className="w-full mt-24  text-center line-clamp-1 text-white py-1 bg-black/50"
            onClick={() => navigate("/")}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
