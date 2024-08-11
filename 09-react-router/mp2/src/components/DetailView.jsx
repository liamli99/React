import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import './DetailView.css';

function DetailView() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState({});
    const navigate = useNavigate();

    const fetchData = () => {
        const api_key = "0331ef010e79aff6318f6c5cc0adf740";
        Axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}`).then((res) => {
            setMovie(res.data);
            console.log(res.data)
        }).catch((error) => {
            console.error('Movie Not Found!', error);
            alert("Movie Not Found!")
          });
    };

    useEffect(() => {
        fetchData();
    });

    const handleLeftClick = () => {
        navigate(`/movie/${movie.id - 1}`);
    }

    const handleRightClick = () => {
        navigate(`/movie/${movie.id + 1}`);
    }

    return (
        <div className="card">
            <img className="card-image" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div>
                <div className="card-button-area">
                    <button onClick={handleLeftClick} className="card-button">&lt;</button>
                    <button onClick={handleRightClick} className="card-button">&gt;</button>
                </div>
                <p>Title: {movie.title}</p>
                <p>Rating: {movie.vote_average}</p>
                <p>Overview: {movie.overview}</p>
            </div>
        </div>
    )

}

export default DetailView;