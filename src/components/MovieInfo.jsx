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
            
                <div className="containerinfo">
                    <img src={movies.Poster_Link} alt="movies_img" />
                    <h4 className="title">{movies.Series_Title}</h4>
                    <p className="overview">{movies.Overview}</p>
                    <h6 className="genre">Genre: {movies.Genre}</h6>
                    <h6 className="runtime">&#128336;&nbsp;{movies.Runtime}</h6>
                    <h6 className="year">Released Year: {movies.Released_Year}</h6>
                    <h6 className="certificate">Certificate: {movies.Certificate}</h6>
                    <h6 className="imdb">&#11088;&nbsp;{movies.IMDB_Rating}</h6>
                    <h6 className="score">{movies.Meta_Score}</h6>
                    <h6 className="director">Movie Director: {movies.Director}</h6>
                    <h6 className="stars">Star 1: {movies.Star1}</h6>
                    <h6 className="stars">Star 2: {movies.Star2}</h6>
                    <h6 className="stars">Star 3: {movies.Star3}</h6>
                    <h6 className="stars">Star 4: {movies.Star4}</h6>
                    <h6 className="votes">Number of Votes: {movies.No_of_Votes}</h6>
                    <h6 className="gross">Total Gross: {movies.Gross + " " + "$"}</h6>
                </div>
                <form action="http://localhost:3000/movies">
                    <input class="back" type="submit" value="Back" />
                </form>
            </>) : (<div>Movie is Loading...</div>)
    );
}   