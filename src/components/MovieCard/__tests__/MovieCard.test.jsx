import { render } from '@testing-library/react';
import MovieCard from '../lib';

describe('MovieCard', () => {
    it('should render Movie Card with no movies passed in.', () => {
        const { asFragment } = render(<MovieCard></MovieCard>);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render Movie Card with a list of movies passed in.', () => {
        const testMovies = [
            {
                title: 'test movie',
                release_date: 'test release date',
                vote_average: 'test review',
                overview: 'test synopsis',
                poster_path: 'test poster path'
            }
        ];
        const { asFragment } = render(<MovieCard movies={testMovies}></MovieCard>);
        expect(asFragment()).toMatchSnapshot();
    });
});