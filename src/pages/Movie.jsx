import { useQuery } from "@tanstack/react-query";
import MovieCard from "../components/MovieCard";
import { fetchMovieData } from "../api";
import Searchbar from "../components/Searchbar";
import { useState } from "react";

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

    const handleQuery = (text) => setQuery(currentText => currentText = text);

    return (
        <>
            <Searchbar handleQuery={handleQuery} />
            {isLoading ? <h1>...Loading</h1> : error ? <pre>{JSON.stringify(error)}</pre> : <div className="movie_container">
                {data?.Search?.map(movie => <MovieCard key={movie.imdbID} {...movie} />)}
            </div>}
            {data?.Error && <h1 style={{ textAlign: "center" }}>{data?.Error}</h1>}
        </>
    )
}

export default Movie