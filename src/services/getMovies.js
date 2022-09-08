const api_key = "1824961edc062d8424ef9ee0d68162a1";

export const getMovies = {
  trending: `/trending/movie/day?api_key=${api_key}`,
  comedy: `/discover/movie?api_key=api_key=${api_key}&with_genres=35`,
  action: `/discover/movie?api_key=api_key=${api_key}&with_genres=28`,
  drama: `/discover/movie?api_key=api_key=${api_key}&with_genres=18`,
  horror: `/discover/movie?api_key=api_key=${api_key}&with_genres=27`,
  romance: `/discover/movie?api_key=api_key=${api_key}&with_genres=10749`,
};
