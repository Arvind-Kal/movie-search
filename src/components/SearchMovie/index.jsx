import React, {useState} from 'react';
import styles from './styles/SearchMovie.module.scss';
import MovieCard from '../MovieCard';

const SearchMovie = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const searchMovie = async (e) => {
        e.preventDefault();

        if (query) {
            const url = `https://api.themoviedb.org/3/search/movie?api_key=421c89b0d7ac0a1e5d5daa5067038be9&language=en-US&query=${query}&page=1&include_adult=false`;

            try {
                const res = await fetch(url);
                const data  = await res.json();
                setMovies(data.results);
            } catch(err) {
                console.error(err);
            }
        }
    };

    return (
        <div className='movieContainer'>
            <form className={styles.form} onSubmit={searchMovie}>
                <label className={styles.label} htmlFor='query'>Movie's Name</label>
                <input 
                    className={styles.input} 
                    type='text' 
                    name='query' 
                    placeholder='i.e. Star Wars'
                    value={query}
                    onChange={(e) => {setQuery(e.target.value)}}></input>
                <button className={styles.button}>Search</button>
            </form>
            <MovieCard movies={movies}></MovieCard>
        </div>
    );
};

export default SearchMovie;
