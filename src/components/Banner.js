import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { movieBanner, movieDetails } from "../features/userSlice";
import { getMovies } from "../services/getMovies";
import instance from "../services/index";
import "./Banner.css";

const Banner = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const banner = useSelector((state) => state.user.banner);
  const image_key = "http://image.tmdb.org/t/p/";

  async function movieTrailer(api) {
    const response = await instance.get(api);
    dispatch(movieDetails(response.data));
  }

  useEffect(() => {
    async function getBanner(api) {
      const response = await instance.get(api);
      const result = response.data.results;
      const randomBanner = Math.ceil(Math.random() * result.length);
      dispatch(movieBanner(result[randomBanner]));
    }
    getBanner(getMovies.trending);
  }, []);

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(http://image.tmdb.org/t/p/original/${banner?.backdrop_path})`,
        backgroundSize: "cover",
      }}
    >
      <div className="banner_contents">
        <div className="banner_title">
          {banner?.title || banner?.original_title}
        </div>
        <div className="banner_buttons">
          <button
            className="banner_button"
            onClick={() => {
              navigate("/movie");
              movieTrailer(
                `/movie/${banner.id}?api_key=1824961edc062d8424ef9ee0d68162a1&append_to_response=videos`
              );
            }}
          >
            Play
          </button>
          <button
            className="banner_button"
            onClick={() => {
              navigate("/list");
            }}
          >
            My List
          </button>
        </div>
        <div className="banner_discription">{banner?.overview}</div>
      </div>
    </div>
  );
};
export default Banner;
