import React, { useEffect, useState } from 'react';
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
        {Movies.map((item) => ( 
        <div className='movies'>
                <img src={item.Poster_Link}></img>
                <h2>{item.Series_Title}</h2>
                <h2>{item.IMDB_Rating}</h2>
                <h2>{item.Overview}</h2>
                <h2>{item.Genre}</h2>
                <h2>{item.Runtime}</h2>
            </div>
        ))}
        </>
    );
}


  
