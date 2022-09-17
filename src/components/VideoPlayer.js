import "./VideoPlayer.css";
import { useDispatch, useSelector } from "react-redux";
import { selectMovie } from "../features/userSlice";
import { useEffect, useState } from "react";
const VideoPlayer = () => {
  const [loading, setLoading] = useState(true);
  const movie = useSelector(selectMovie);
  useEffect(() => {
    if (movie !== null) setTimeout(setLoading(false), 5000);
  });
  return (
    <div className="videoplayer">
      {loading ? (
        "loading"
      ) : (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${movie?.videos.results[0].key}`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};
export default VideoPlayer;
