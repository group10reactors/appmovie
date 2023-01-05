import React, { useEffect, useState } from 'react';
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
        {Movies.map((item) => ( 
        <div className='container'>
                <img className='movimg' src={item.Poster_Link}></img>
                <h1 className='title'>{item.Series_Title}</h1>
                <h2 className='rating'>&#11088;&nbsp;{item.IMDB_Rating}</h2>
                <h3 className='genre'>{item.Genre}</h3>
                <h3 className='runtime'>&#128336;&nbsp;{item.Runtime}</h3>
                <p className='overview'>{item.Overview}</p>
            </div>
        ))}
        </>
    );
}






  
