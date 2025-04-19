import React from 'react'
import Row from '../Row/Row'
import requests from '../../../utils/requests'

function RowList() {
  return (
    <>
        <Row 
            title='NETFLIX ORIGINALS'
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow={true}
        />
         <Row title="Trending Now" fetchUrl={requests.fetchHorrorMovies } />
         <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
         <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
         <Row title="Tv Shows" fetchUrl={requests.fetchTvshow}/>
         <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
         <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies}/>
         <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>

    </>
  )
}

export default RowList