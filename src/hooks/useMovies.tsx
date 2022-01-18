import React, { useState } from "react";
import { useEffect } from "react";

import movieAPI from "../api/movieAPI";
import { MovieResponse, Movie } from '../interfaces/movieInterface';

interface MoviesState{
    nowPlaying: Movie[];
    popular: Movie[];
    topRated: Movie[];
    upcoming: Movie[];
}

export const useMovies = () => {

    // now_playing movies
    // popular movies
    // top_rated movies
    // upcoming movies

    const[IsLoading, setIsLoading] = useState(true);
    const [moviesState, setMoviesStates] = useState<MoviesState>();

    const getMovies = async () =>{
        const nowPlayingPromise = movieAPI.get<MovieResponse>('/now_playing');
        const popularPromise = movieAPI.get<MovieResponse>('/popular');
        const topRatedPromise = movieAPI.get<MovieResponse>('/top_rated');
        const upcomingPromise = movieAPI.get<MovieResponse>('/upcoming');

        const response = await Promise.all([
            nowPlayingPromise, 
            popularPromise,  
            topRatedPromise, 
            upcomingPromise
        ]);

        setMoviesStates({
            nowPlaying: response[0].data.results,
            popular: response[1].data.results,
            topRated: response[2].data.results,
            upcoming: response[3].data.results
        })


        setIsLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, [])
    
    return {
        ...moviesState,
        IsLoading
    }
}
