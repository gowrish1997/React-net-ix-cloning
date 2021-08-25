import React from 'react'
import './Homescreen.css'
import requests from '../request'
import Row from '../Row'
import Nav from '../Nav'
import Banner from '../Banner'

function HomeScreen() {
    return (
        <div className="homescreen">
         
           <Banner/> 
           <Row title="netflix originals" fetchurl={requests.fetchNetflixOriginals} islargerow/>
         <Row title="trending now " fetchurl={requests.fetchTrending}/>
         {/*   <Row title="top rated" fetchurl={requests.fetchTopRated} /> */}
           <Row title="action moveis" fetchurl={requests.fetchActionMovies} />
           <Row title="comedy movies" fetchurl={ requests.fetchComedyMovies}/>
           <Row title="horror movies" fetchurl={requests.fetchHorrorMovies}/>
           <Row title="romance movies" fetchurl={requests.fetchRomanticMovies}/>
        <Row title="documentaries" fetchurl={requests.fetchDocumentaries}/>
          
        </div>
    )
}

export default HomeScreen

