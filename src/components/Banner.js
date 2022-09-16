import { useEffect, useState } from "react";
import "./Banner.css";
import instance from "../services/index";
import { getMovies } from "../services/getMovies";

const Banner = (props) => {
  const [banner, setBanner] = useState(null);
  const image_key = "http://image.tmdb.org/t/p/";

  useEffect(() => {
    async function getBanner(api) {
      const response = await instance.get(api);
      const result = response.data.results;
      const randomBanner = Math.ceil(Math.random() * result.length);
      setBanner(result[randomBanner]);
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
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <div className="banner_discription">{banner?.overview}</div>
      </div>
    </div>
  );
};
export default Banner;
