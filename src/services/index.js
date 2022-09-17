import axios from "axios";

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    // "Access-Control-Allow-Methods": "GET",
    "Access-Control-Allow-Headers": "application/json",
    "Cross-Origin-Resource-Policy": "cross-site",
    "Access-Control-Allow-Headers": "X-Requested-With",
    "Content-Type": "application/json",
    "X-Content-Type-Options": "nosniff",
  },
};
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  //https: config,
});

export default instance;
