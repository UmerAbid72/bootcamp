import React, { useEffect, useState } from "react";
import "./Home.scss";
import axios from "axios";
import picture from "../controlz.jpg"
import Header from "./Header/Header";


const apiKey = "67fb0261e257cdab727f31d1a7779641";
const url = "https://api.themoviedb.org/3";
const imgUrl = "http://image.tmdb.org/t/p/original";
const upcoming = "upcoming";
const nowPlaying="now_playing"
const popular="popular"
const topRated="top_rated"

const Card = ({ img , item }) => <img className="card" src={img} alt="cover" onClick={()=>{ return(console.log("onclick called",item))}}  />;

const Row = ({ title, arr = [] }) => (

<div className="row">
    <h2>{title}</h2>
    <div>
      {arr.map((item, index) => (
       <Card key={index} img={`${imgUrl}${item.poster_path}`} item={item} />
      ))}
    </div>
  </div>
);

const Home = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    const fetchUpcoming = async () => {
      try {
        const response = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`);
        const { results } = response.data;
        setUpcomingMovies(results); 
  
      } catch (error) {
        console.error("Error fetching upcoming movies:", error);
      }
    };
    const fetchnowPlaying = async () => {
      try {
        const response = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`);
        const { results } = response.data;
        setNowPlayingMovies(results); 
      } catch (error) {
        console.error("Error fetching nowplaying movies:", error);
      }
    };
    const fetchpopular = async () => {
      try {
        const response = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`);
        const { results } = response.data;
        setPopularMovies(results); 
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    };
    const fetchtopRated = async () => {
      try {
        const response = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`);
        const { results } = response.data;
        setTopRatedMovies(results);
      } catch (error) {
        console.error("Error fetching topRated movies:", error);
      }
    };


    fetchUpcoming();
    fetchnowPlaying();
    fetchpopular();
    fetchtopRated();

  }, []);

  return (

    <>
    <Header/>
    
    <section className="home">
      <div className="banner">
      <img src={picture} alt=""/>
      <img src={picture} alt=""/>
      
    
  

      </div>
      <Row title={"Upcoming"} arr={upcomingMovies}/>
      <Row title={"Now Playing"} arr={nowPlayingMovies} />
      <Row title={"Popular"} arr={popularMovies} />
      <Row title={"Top Rated"} arr={topRatedMovies} />
    
   
    </section>
    </>
  );
};
export default Home;
