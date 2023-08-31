import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header/Header';

const apiKey = "67fb0261e257cdab727f31d1a7779641";
const url = "https://api.themoviedb.org/3";
const imgUrl = "http://image.tmdb.org/t/p/original";
const nowPlaying="now_playing"

const Card = ({ img }) => <img className="card" src={img} alt="cover" />;

const Row = ({ title, arr = [] }) => (
  <div className="row">
    <h2>{title}</h2>
    <div>
      {arr.map((item, index) => (
        <Card key={index} img={`${imgUrl}${item.poster_path}`} />
      ))}
    </div>
  </div>
);

const Movies = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const response = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`);
        const { results } = response.data;
        setNowPlayingMovies(results);
      } catch (error) {
        console.error("Error fetching now playing movies:", error);
      }
    };
    
    fetchNowPlaying(); 
  }, []); 

  return (
    <>
      <Header/>
    
    <section className="banner">
      <div className="banner">
        <Row title={"Movies"} arr={nowPlayingMovies} />
      </div>
    </section>
    </>
  );
};

export default Movies;
