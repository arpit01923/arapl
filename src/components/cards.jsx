import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Cards = ({ data }) => {
  const navigate = useNavigate();
  const [like, setLike] = useState(false);

  const changeLike = () => {
    setLike((prev) => !prev);
  };

  return (
    <div className="relative">
      <div className="absolute top-2 right-2">
        {like ? (
          <AiFillHeart
            fontSize={25}
            color="red"
            className="cursor-pointer"
            onClick={changeLike}
          />
        ) : (
          <AiOutlineHeart
            fontSize={25}
            className="cursor-pointer"
            onClick={changeLike}
          />
        )}
      </div>
      <div className="cursor-pointer" onClick={() => navigate(`/${data?.id}`)}>
        {data?.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`}
            alt="movie-poster"
            className="h-[400px] w-full object-cover"
          />
        ) : (
          <div className="h-[400px] bg-white flex justify-center items-center">
            No preview available
          </div>
        )}
      </div>
      <p className="w-full capitalize text-center line-clamp-1 text-white py-1 bg-black/50">
        {data?.title}
      </p>
    </div>
  );
};

export default Cards;
