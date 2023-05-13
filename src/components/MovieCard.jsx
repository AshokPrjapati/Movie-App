import React from 'react'
import "../App.css"

const MovieCard = ({ ...movie }) => {
    let { Poster, Title, Type, Year } = movie;
    return (
        <div className='movie_card'>
            <img src={Poster} alt={Title} />
            <div>
                <h2 className='movie_name'>Name: <span>{Title}</span></h2>
                <p className='movie_year'>Year : <span>{Year}</span></p>
            </div>

        </div>
    )
}

export default MovieCard