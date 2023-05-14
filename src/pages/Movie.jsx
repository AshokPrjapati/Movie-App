import { useQuery } from "@tanstack/react-query";
import MovieCard from "../components/MovieCard";
import { fetchMovieData } from "../api";
import Searchbar from "../components/Searchbar";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination.jsx";
import { useStore } from "zustand";
import { movieStore } from '../store';


const Movie = () => {

    const { query, page } = useStore(movieStore);

    const { isLoading, error, data } = useQuery({
        queryKey: ["movies", query, page],
        queryFn: () => fetchMovieData(query, page),
        // Enable the query only when query is not empty and page is greater than 0
        enabled: query !== "" && page > 0,
        // Disable automatic refetch when the window regains focus
        refetchOnWindowFocus: false,
    });

    return (
        <>
            {/* Searchbar */}
            <Searchbar />
            {/* Loading Indicator */}
            {isLoading && <Loader />}
            {/* Error Message */}
            {error ? <pre>{JSON.stringify(error)}</pre> :
                // Movie container
                <div className="movie_container">
                    {data?.Search?.map(movie => <MovieCard key={movie.imdbID} {...movie} />)}
                </div>}
            {data?.Error && <h1 style={{ textAlign: "center" }}>{data?.Error}</h1>}
            {/* Pagination */}
            {data?.totalResults && <Pagination total={data.totalResults} />}
        </>
    )
}

export default Movie