import { useState, useEffect } from "react";
// API
import API, { Movie, Cast, Crew } from '../API'
// Helpers
import { isPersistedState } from '../helpers';
// Types
export type MovieState = Movie & { actors: Cast[], directors: Crew[]}

export const useMovieFetch = (movieId: number) => {

    const [state, setState] = useState<MovieState>({} as MovieState);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // initial and search
    useEffect(() => {
        const fetchMovie = async () => {
            try {
                setLoading(true);
                setError(false);

                const movie = await API.fetchMovie(movieId);
                const credits = await API.fetchCredits(movieId);
                // Get Directors only
                const directors = credits.crew.filter(member => member.job === 'Director');
    
                setState({
                    ...movie,
                    actors: credits.cast,
                    directors
                });

                setLoading(false);

            } catch (error) {
                setError(true);
            }
            setLoading(false)
        };

        const sessionState = isPersistedState(movieId.toString())
        
        if(sessionState) {
            setState(sessionState);
            setLoading(false);
            return;
        }

        fetchMovie();

    }, [movieId])

    // write to sessionStorage
    useEffect(() => {
        sessionStorage.setItem(movieId.toString() , JSON.stringify(state))
    }, [movieId, state])

    return { state, loading, error };
};