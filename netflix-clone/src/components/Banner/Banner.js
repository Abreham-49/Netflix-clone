import React from 'react'
import './banner.css';
import axios from '../../utils/axios';
import requests from '../../utils/request'
import { useEffect } from 'react';
function Banner() {
    const [movie, setMovie] = React.useState({});
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            console.log(request)
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length)
                ]
            );
            return request;
           
        }
        
        fetchData();
    }, []);
    function truncate(str, n = 150) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="playbutton">Play</button>
          <button>My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview)}</h1>
      </div>
      <div className="banner_fadeBottom"></div>
    </div>
  );
}

export default Banner;