import axios from "axios";
axios.defaults.baseURL = `http://www.omdbapi.com`;
const API_KEY = '5005d6bc';


// fetch movie data from imdb api with search query and page number
export const fetchMovieData = async (query = "ashok", page = 1) => {
    try {
        const response = await axios.get(`/?apikey=${API_KEY}&s=${query}&page=${page}`);
        console.log(response);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};