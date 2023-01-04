import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";

export default function Movies() {
    const [Movies, fetchMovies] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3100/movies`)
        .then((res) => res.json())
        .then((res) => {
            fetchMovies(res)
            console.log(res);
        })
    }, []);
    return (
        <>
        {Movies.map((movies) => ( 
        <div>
                <img src={movies.Poster_Link} alt= "movies_img" />
                <NavLink className="actualmovies" to={"/movies/" + movies.Id}>
                <h5>{movies.Series_Title}</h5>
                </NavLink>
                <p className="overview">{movies.Overview}</p>
                <h6>{movies.Genre}</h6>
                <h6>{movies.Runtime}</h6>
            </div>
        ))}
        </>
    );
}



