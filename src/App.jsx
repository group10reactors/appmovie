import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Movies from "./components/Movies";
import MovieInfo from "./components/MovieInfo";
import Contact from "./components/Contact";
import PageNotFound from "./components/PageNotFound";

export default function App() {
    return (
    <>
        <Navbar />
        <Routes>
            <Route path="/" element=<Home /> />
            <Route path="/movies" element=<Movies /> />
            <Route path="/movies/:moviesId" element=<MovieInfo /> />
            <Route path="/contact" element=<Contact /> />
            <Route path="*" element=<PageNotFound /> />
        </Routes>
     </>
    );
}  
