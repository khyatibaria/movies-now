import { useDispatch, useSelector } from "react-redux";
import "./MyList.css";
const MyList = () => {
  const myList = useSelector((state) => state.user.list);
  return (
    <div className="mylist">
      {myList?.map((item) => {
        return (
          <div className="mylist_movie">
            <h2>{item.name}</h2>
            <img
              src={`http://image.tmdb.org/t/p/original/${item.poster_path}`}
            />
          </div>
        );
      })}
    </div>
  );
};
export default MyList;
