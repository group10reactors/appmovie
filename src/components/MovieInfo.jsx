import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import './MovieInfo.css';

export default function MoviesItem() {

    const [movies, setMovies] = useState();
    const { moviesId } = useParams();

    useEffect(() => {
        let url = `http://localhost:3100/movies/${moviesId}`;
        axios.get(url)
            .then((response) => {
                setMovies(response.data);
                console.log(response.data);
            })
    }, []);

    return (
        movies ? (
            <>
            
                <div className="container">
                    <img src={movies.Poster_Link} alt="movies_img" />
                    <h4 className="title">{movies.Series_Title}</h4>
                    <p className="overview">{movies.Overview}</p>
                    <h6 className="genre">{movies.Genre}</h6>
                    <h6 className="runtime">{movies.Runtime}</h6>
                    <h6 className="year">{movies.Released_Year}</h6>
                    <h6 className="certificate">{movies.Certificate}</h6>
                    <h6 className="imdb">{movies.IMDB_Rating}</h6>
                    <h6 className="score">{movies.Meta_Score}</h6>
                    <h6 className="director">{movies.Director}</h6>
                    <h6 className="stars">{movies.Star1}</h6>
                    <h6 className="stars">{movies.Star2}</h6>
                    <h6 className="stars">{movies.Star3}</h6>
                    <h6 className="stars">{movies.Star4}</h6>
                    <h6 className="votes">{movies.No_of_Votes}</h6>
                    <h6 className="gross">{movies.Gross + " " + "USD"}</h6>
                </div>
                <form action="http://localhost:3000/movies">
                    <input type="submit" value="Back" />
                </form>
            </>) : (<div>Loading...</div>)
    );
}   