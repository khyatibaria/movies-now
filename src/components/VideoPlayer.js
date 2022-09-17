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
        <video width="100%" height="100%" controls>
          <source
            src={`https://www.youtube.com/watch?v=${movie?.videos.results[0].key}`}
            type="video/mp4"
          />
        </video>
      )}
    </div>
  );
};
export default VideoPlayer;
