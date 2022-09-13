import "./Home.css";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import Row from "../components/Row";
import { getMovies } from "../services/getMovies";
const Home = () => {
  return (
    <div>
      <Nav />
      <Banner />
      <div style={{ minHeight: "50vh", backgroundColor: "#030d45" }}>
        <Row
          title="Trending Now"
          api={getMovies.trending}
          isPosterLarge={true}
        />
        <Row title="Drama" api={getMovies.drama} />
        <Row title="Romance" api={getMovies.romance} />
        <Row title="Comdey" api={getMovies.comedy} />
        <Row title="Action" api={getMovies.action} />
        <Row title="Horror" api={getMovies.horror} />
      </div>
    </div>
  );
};

export default Home;
