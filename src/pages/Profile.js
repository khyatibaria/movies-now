import Nav from "../components/Nav";
import "./Profile.css";
import { images } from "../asset/index";
import { useSelector } from "react-redux";
import { login, logout, selectUser } from "../features/userSlice";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const { DarkAvatar, LightAvatar } = images;
  const user = useSelector(selectUser);
  return (
    <div>
      <Nav />
      <div className="profile">
        <div className="profile_body">
          <h1>Profile</h1>
          <div className="profile_head">
            <img src={LightAvatar} />
            <h3 className="profile_user_email">{user?.email}</h3>
          </div>
          <div className="profile_subscription">
            <div className="profile_subscription_plan">
              <h3>Basic</h3>
              <button className="profile_subscription_button">Subscribe</button>
            </div>
            <div className="profile_subscription_plan">
              <h3>Standard</h3>
              <button className="profile_subscription_button">Subscribe</button>
            </div>
            <div className="profile_subscription_plan">
              <h3>Premiumn</h3>
              <button className="profile_subscription_button">Subscribe</button>
            </div>
          </div>
          <button
            className="profile_signout_button"
            onClick={() => {
              auth.signOut();
            }}
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};
export default Profile;
