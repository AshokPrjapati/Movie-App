import { useQuery } from "@tanstack/react-query";
import MovieCard from "../components/MovieCard";
import { fetchMovieData } from "../api";

const Movie = () => {
    const movieQuery = useQuery({
        queryKey: ["movies"],
        queryFn: () => fetchMovieData(),
    })

    if (movieQuery.isLoading) return <h1>...Loading</h1>
    if (movieQuery.error) return <pre>{JSON.stringify(movieQuery.error)}</pre>

    return (
        <div>
            {movieQuery.data.Search.map(movie => <MovieCard key={movie.imdbID} {...movie} />)}
        </div>
    )
}

export default Movie