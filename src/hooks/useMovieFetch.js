import { useState, useEffect } from "react";
// API
import API from '../API'
// Helpers
import { isPersistedState } from '../helpers';

export const useMovieFetch = (movieId) => {

    const [state, setState] = useState({});
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

        const sessionState = isPersistedState(movieId)
        
        if(sessionState) {
            setState(sessionState);
            setLoading(false);
            return;
        }

        fetchMovie();

    }, [movieId])

    // write to sessionStorage
    useEffect(() => {
        sessionStorage.setItem(movieId, JSON.stringify(state))
    }, [movieId, state])

    return { state, loading, error };
};