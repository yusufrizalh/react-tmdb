import { Container } from 'react-bootstrap';
import axios from 'axios';
import { useState, useEffect } from 'react';
import MovieTable from './MovieTable';

function App() {
  const [movies, setMovies] = useState([]); // inisialisasi nilai awal kosong
  const [err, setErr] = useState("");
  const [errBool, setErrBool] = useState(false);
  const [loading, setLoading] = useState(true);
  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${"aabc82a08bdb769cd6a2daa3e6b37897"}&page=1`;

  const fetchMovies = (url) => {
    axios.get(url)
    .then((response) => {
      setMovies(response.data.results);
      setLoading(false);
      console.log(response.data.results);
    })
    .catch((err) => {
      setErr(err.message);
      setErrBool(true);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchMovies(URL);
  }, [URL]);

  return (
    <Container>
      <MovieTable movies={movies} />
    </Container>
  );
}

export default App;
