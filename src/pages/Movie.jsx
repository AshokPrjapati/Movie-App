import { useQuery } from "@tanstack/react-query";
import MovieCard from "../components/MovieCard";
import { fetchMovieData } from "../api";
import Searchbar from "../components/Searchbar";
import { useState } from "react";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination.jsx";

const Movie = () => {

    const [query, setQuery] = useState("random");
    const [page, setPage] = useState(1)

    const { isLoading, error, data } = useQuery({
        queryKey: ["movies", query, page],
        queryFn: () => fetchMovieData(query, page),
        // Enable the query only when query is not empty and page is greater than 0
        enabled: query !== "" && page > 0,
        // Disable automatic refetch when the window regains focus
        refetchOnWindowFocus: false,
    });

    // set query from input box
    const handleQuery = (text) => setQuery(currentText => currentText = text);

    // update the page with current page value
    const handlePage = (value) => {
        setPage(value);
    }

    return (
        <>
            {/* Searchbar */}
            <Searchbar handleQuery={handleQuery} />
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
            {data?.totalResults && <Pagination currentPage={page} handlePage={handlePage} total={data.totalResults} />}
        </>
    )
}

export default Movie