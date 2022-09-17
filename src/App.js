import { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Movie from "./pages/Movie";
import NoMatch from "./pages/NoMatch";
import MyList from "./pages/MyList";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          login({
            uid: user.uid,
            email: user.email,
          })
        );
        navigate("/");
      } else {
        dispatch(logout());
        navigate("/login");
      }
    });
    return unsubscribe;
  }, [dispatch]);
  return (
    <>
      {!user && (
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      )}
      {user && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/movie" element={<Movie />} />
          {/* <Route path="*" element={<NoMatch />} /> */}
          <Route path="/list" element={<MyList />} />
        </Routes>
      )}
    </>
  );
}

export default App;
