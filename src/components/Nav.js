import "./Nav.css";
import { images } from "../asset/index";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Nav = (props) => {
  const { DarkLogo, DarkAvatar, LightLogo, LightAvatar } = images;
  const [navDark, setNavDark] = useState(false);
  let navigate = useNavigate();
  const scrollEventHandler = () => {
    if (window.scrollY > 100) {
      setNavDark(true);
    } else {
      setNavDark(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollEventHandler);
    return () => {
      window.removeEventListener("scroll", scrollEventHandler);
    };
  }, []);
  return (
    <div className={`nav ${navDark && "nav_dark"}`}>
      <div className="nav_contents">
        <div className="nav_logo_container">
          <img
            className="nav_logo"
            src={navDark ? LightLogo : DarkLogo}
            alt="logo"
            style={{ color: "white" }}
            onClick={() => {
              navigate("/");
            }}
          />
          <h1 className={navDark ? "brand_light" : "brand_dark"}>Movies Now</h1>
        </div>
        <div className="nav_avatar_container">
          <img
            className="nav_avatar"
            src={navDark ? LightAvatar : DarkAvatar}
            alt="avatar"
            onClick={() => {
              navigate("/profile");
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default Nav;
