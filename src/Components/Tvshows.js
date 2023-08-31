import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header/Header';

const apiKey = "67fb0261e257cdab727f31d1a7779641";
const url = "https://api.themoviedb.org/3";
const imgUrl = "http://image.tmdb.org/t/p/original";
const topRated = "top_rated";

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

const Tvshows = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  
  useEffect(() => {
    const fetchtopRated = async () => {
      try {
        const response = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`);
        const { results } = response.data;
        setTopRatedMovies(results);
      } catch (error) {
        console.error("Error fetching toprated movies:", error);
      }
    };

    fetchtopRated();
  }, []); // Add an empty dependency array to run the effect only once

  return (

    <>
      <Header/>
    

    <section className='banner'>
      
      <div className='banner'>
        <Row title={"TV Shows"} arr={topRatedMovies} />
      </div>
    </section>
    </>
  );
}

export default Tvshows;
