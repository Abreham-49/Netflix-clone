import React from 'react'
import Row from '../Row/Row'
import requests from '../../../utils/request';
function Rowlist() {
  return (
    <>
      <Row
        titles="NETFLIX ORGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
        <Row
            titles="Trending Now"
            fetchUrl={requests.fetchTrending} />
        <Row
            titles="Top Rated" 
            fetchUrl={requests.fetchTopRated} />
        <Row
            titles="Action Movies"
            fetchUrl={requests.fetchActionMovies} />
        <Row
            titles="Comedy Movies"
            fetchUrl={requests.fetchComedyMovies} />
        <Row
            titles="Horror Movies"
            fetchUrl={requests.fetchHorrorMovies} />
        <Row
            titles="Romance Movies"
            fetchUrl={requests.fetchRomanceMovies} />
        <Row
            titles="Documentaries" 
            fetchUrl={requests.fetchDocumentaries} />
     
            
    
    </>
  );
}

export default Rowlist;