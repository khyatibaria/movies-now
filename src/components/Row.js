import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { movieDetails } from "../features/userSlice";
import "./Row.css";
import instance from "../services/index";
const Row = (props) => {
  const { title, api, isPosterLarge = false, dispatchFunction } = props;
  const [allPosters, setAllPosters] = useState([]);
  const [movieId, setMovieId] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const allMovies = useSelector((state) => state.user.dispatchFunction);

  async function movieTrailer(api) {
    const response = await instance.get(api, { crossdomain: true });
    dispatch(movieDetails(response.data));
  }

  useEffect(() => {
    async function getPosters(api) {
      const response = await instance.get(api);
      const result = response.data.results;
      setAllPosters(result);
      //dispatch(dispatchFunction({ title: result }));
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
              onClick={() => {
                navigate("/movie");
                movieTrailer(
                  `/movie/${poster.id}?api_key=1824961edc062d8424ef9ee0d68162a1&append_to_response=videos`
                );
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Row;
