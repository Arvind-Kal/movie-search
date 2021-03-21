import { render, waitFor, screen } from '@testing-library/react';
import SearchMovie from '../lib';

describe('SearchMovie', () => {
    it('Should render the form', async () => {
        const { asFragment } = render(<SearchMovie></SearchMovie>);
        expect(asFragment()).toMatchSnapshot();
        const searchMovieContainer = await waitFor(() => screen.findByTestId('SearchMovie__Container'));
        expect(searchMovieContainer).toBeInTheDocument();
        expect(searchMovieContainer).toMatchSnapshot();
    });
});