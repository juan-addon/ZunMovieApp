import axios from "axios";

const movieAPI = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params:{
        api_key: 'b521c2fb95f3430cea3f57e1f0961dbe',
        language: 'es-ES'
    }
});

export default movieAPI;