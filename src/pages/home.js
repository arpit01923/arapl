import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../components/cards";
import { addMovies, changeSearch } from "../redux/slices/common";

const Home = () => {
  const dispatch = useDispatch();
  const { movies, search } = useSelector((state) => state.Common);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=b56058299cbea0093f5ccfb9e43c52a4&language=en-US&query=${search}&page=1&include_adult=false`
        );
        dispatch(addMovies(res?.data?.results));
      } catch (e) {
        console.log(e);
      }
    })();
  }, [search]);
  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-600 min-h-screen">
      <div className="p-5">
        <h1 className="text-3xl font-bold text-white text-center">
          Movie Mania
        </h1>
        <div className="my-10 w-[400px] rounded-md overflow-auto mx-auto">
          <input
            value={search}
            onChange={(e) => dispatch(changeSearch(e.target.value))}
            type="search"
            placeholder="Search for a movie..."
            className="border w-full py-2 px-4"
          />
        </div>
        {movies?.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {movies?.map((item) => (
              <Cards data={item} />
            ))}
          </div>
        ) : (
          <div className="flex text-2xl justify-center items-center h-[200px] text-white">
            No movie exist
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
