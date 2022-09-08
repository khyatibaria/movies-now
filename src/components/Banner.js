import { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../services/index";
import { getMovies } from "../services/getMovies";

const Banner = (props) => {
  const [banner, setBanner] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      const result = await axios.get(getMovies.action);
      setBanner();
      console.log(result);
      return result;
    }
    fetchMovies();
  }, []);
  //   fetch()
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${"https://i.pinimg.com/474x/a7/6d/db/a76ddb0c7760bc31c36aae3206876676.jpg"})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="banner_contents">
        <div className="banner_title">movie</div>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <div className="banner_discription">discription</div>
      </div>
    </div>
  );
};
export default Banner;
