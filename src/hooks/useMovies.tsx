import React, { useState } from "react";
import { useEffect } from "react";

import movieAPI from "../api/movieAPI";
import { MovieNowPlaying, Movie } from '../interfaces/movieInterface';

export const useMovies = () => {

    const[IsLoading, setIsLoading] = useState(true);
    const [MoviesNow, setMoviesNow] = useState<Movie[]>([]);

    const getMovies = async () =>{
        const resp = await movieAPI.get<MovieNowPlaying>('/now_playing');
        setMoviesNow(resp.data.results);

        setIsLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, [])
    
    return {
        MoviesNow,
        IsLoading
    }
}
