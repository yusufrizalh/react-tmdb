import { Modal, Image } from 'react-bootstrap';

const MovieModal = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Image
            thumbnail
            fluid
            src={`https://image.tmdb.org/t/p/original${props.movie.backdrop_path}`}
            alt={props.movie.title}
          />
        </Modal.Header>
        <Modal.Body>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.movie.title}{" "}
            <span>
              {new Date(props.movie.release_date).toLocaleDateString()}
            </span>
          </Modal.Title>
          <p>{props.movie.overview}</p>
          <p>{props.movie.popular}</p>
          <p>{props.movie.vote_average}</p>
        </Modal.Body>
      </Modal>
    );
}
 
export default MovieModal;