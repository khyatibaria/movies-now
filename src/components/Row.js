import { useEffect, useState } from "react";
import "./Row.css";
import instance from "../services";
const Row = (props) => {
  const { title, api, isPosterLarge = false } = props;
  const [allPosters, setAllPosters] = useState([]);

  useEffect(() => {
    async function getPosters(api) {
      const response = await instance.get(api);
      const result = response.data.results;
      setAllPosters(result);
    }
    getPosters(api);
  }, []);
  return (
    <div className="row">
      <div className="row_title">{title}</div>
      <div className="row_poster_container">
        {allPosters?.map((poster) => {
          return (
            <img
              key={poster.id}
              src={`http://image.tmdb.org/t/p/original/${
                isPosterLarge ? poster.poster_path : poster.backdrop_path
              }`}
              className={isPosterLarge ? "row_largeposter" : "row_poster"}
              alt={poster.name}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Row;
