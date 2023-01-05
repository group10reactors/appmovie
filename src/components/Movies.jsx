import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import "./Movies.css";
export default function Movies() {
    const [Movies, fetchMovies] = useState([])
    useEffect(() => {
        fetch('http://localhost:3100/movies')
        .then((res) => res.json())
        .then((res) => {
            fetchMovies(res)
            console.log(res);
        })
    }, []);
    return (
        <>
        <div><h1 className='welcome'>Welcome to the Movies page!&#127871;</h1></div>
        {Movies.map((movies) => ( 
        <div className='container'>
                <img className='movimg' src={movies.Poster_Link} />
                <NavLink className="actualmovies" to={"/movies/" + movies.id}>
                <h1 className='title'>{movies.Series_Title}</h1>
                </NavLink>
                <h2 className='rating'>&#11088;&nbsp;{movies.IMDB_Rating}</h2>
                <h3 className='genre'>{movies.Genre}</h3>
                <h3 className='runtime'>&#128336;&nbsp;{movies.Runtime}</h3>
                <p className='overview'>{movies.Overview}</p>
            </div>
        ))}
        </>
    );
}






  
