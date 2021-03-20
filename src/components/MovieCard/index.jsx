import React from 'react';
import styles from './styles/MovieCard.module.scss';
import PropTypes from 'prop-types';

const MovieCard = ({movies}) => {

    const makeMovieCard = (movie) => {
        return (
            <div className={styles.card} key={movie.id}>
                <img 
                className={styles.card__image}
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title + ' poster'}/>
                <div className={styles.card__content}>
                    <h3 className={styles.card__title}> {movie.title} </h3>
                    <p className={styles.card__info}>Release Date: {movie.release_date} </p>
                    <p className={styles.card__info}>Rating: {movie.vote_average} </p>
                    <p className={styles.card__info}>Synopsis: {movie.overview} </p>
                </div>
            </div>
        );
    };
    return (
        <div className={styles.cardList}>
           {movies.filter(movie => movie.poster_path).map(makeMovieCard)}
        </div>
    );
};

MovieCard.propTypes = {
    /**
     * The list of movies being passed in
     */
    movies: PropTypes.array
};

MovieCard.defaultProps = {
    movies: []
}

export default MovieCard;