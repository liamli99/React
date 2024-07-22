import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Axios from 'axios';
import './ListView.css';

function ListView() {
    const [movieList, setMovieList] = useState([]);
    const [filteredMovieList, setFilteredMovieList] = useState([]);

    const fetchData = () => {
        const api_key = "0331ef010e79aff6318f6c5cc0adf740";
        Axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`).then((res) => {
            setMovieList(res.data.results);
            setFilteredMovieList(res.data.results);
            console.log(res.data.results)
        }).catch((error) => {
            console.error('Error fetching movie details', error);
            alert('Error fetching movie details');
          });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSearchChange = (event) => {
        const filtered = movieList.filter(movie => {
            return (
                movie.title.toLowerCase().includes(event.target.value.toLowerCase())
            )
        });

        setFilteredMovieList(filtered);
    };
    
    return (
        <>  
            <div className="search-container">
                <div className="search">
                    Search: <input onChange={handleSearchChange} />
                </div>
                
                <div className="sort-by">
                    Sort By:  
                    <select>
                        <option>Rating</option>
                        <option>Popularity</option>
                    </select>
                </div>
                
                <div className="order">
                    <input type="radio" name="option" checked />ascending
                    <input type="radio" name="option" />descending
                </div>
            </div>


            <div className="movie-container">
                {filteredMovieList.map(movie => {
                    return (
                        <div className="movie-item">
                            <Link to={`/movie/${movie.id}`}>
                                <img className="movie-image" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                            </Link>
                            <div className="movie-title">{movie.title}</div>
                            <div className="movie-rating">{movie.vote_average} / 10</div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default ListView;
