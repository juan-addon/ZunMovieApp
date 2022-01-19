import React, { useState } from 'react'
import movieAPI from '../api/movieAPI';
import { MovieFullDetail } from '../interfaces/movieInterface';
import { useEffect } from 'react';
import { CreditResponse, Cast } from '../interfaces/creditsInterfaces';

interface MovieDetail{
    isLoading: boolean;
    movieFull?: MovieFullDetail;
    cast: Cast[];
}

export const useMoviesDetails = (movieId: number) => {

    const [state, setState] = useState<MovieDetail>({
        isLoading: true,
        movieFull: undefined,
        cast: []
    })
    
    const getMovieDetail = async() => {

        const movieDetailPromise = movieAPI.get<MovieFullDetail>(`/${movieId}`);
        const castMoviePromise = movieAPI.get<CreditResponse>(`/${movieId}/credits`);

        const [movieDetailResp, castPromiseResp] =await Promise.all([movieDetailPromise, castMoviePromise]);

        setState({
            isLoading:false,
            movieFull: movieDetailResp.data,
            cast: castPromiseResp.data.cast
        })
    }

    useEffect(() => {
        getMovieDetail();
    }, []);

    return{
        ...state,
    }
}
