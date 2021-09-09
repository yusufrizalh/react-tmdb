import { useState } from 'react';
import { Table, NavLink } from 'react-bootstrap';
import MovieModal from './MovieModal';

const MovieTable = (props) => {
    const { movies } = props;
    let keys = ['popularity', 'title', 'release_date', 'overview'];
    const [modalShow, setModalShow] = useState(false);

    return (
      <div style={{ width: "90%", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", margin: "20px auto auto" }}>
            Popular Movies for {new Date(Date.now()).toLocaleDateString()}
        </h2>
        <Table
          striped
          bordered
          hover
          responsive
          variant="default"
          style={{ width: "100%", margin: "20px auto" }}
        >
          <thead>
            <tr>
              {keys.map((heading) => {
                return <td key={heading}>{heading}</td>;
              })}
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => {
              return (
                <tr key={movie.id}>
                  <td>{movie.popularity}</td>
                  <td>{movie.title}</td>
                  <td>{movie.release_date}</td>
                  <td>
                    <NavLink
                      value={movie.id}
                      onClick={() => {
                        setModalShow(movie.id);
                      }}
                    >
                      Details
                    </NavLink>
                    <MovieModal
                      movie={movie}
                      show={modalShow === movie.id}
                      onHide={() => setModalShow(false)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
}
 
export default MovieTable;