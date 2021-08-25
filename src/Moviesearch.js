import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { useSelector } from 'react-redux';

import requests from './request'
import './moviesearch.css'


function Moviesearch() {
    const user2=useSelector(state=>state.user.movie_name)
    const instance="https://api.themoviedb.org/3"
    const[movie,setMovie]=useState([])
    useEffect(() => {
        axios.get(`${instance}${requests.fetchNetflixOriginals}`)
    .then((values)=>{
        setMovie(values.data.results)
        
})
        },[])
        return(
        <div className="Movie_search">
            <div className="movie_row_poster">
              {
                   movie.map((value)=>{
               return(
                        ((value.name).toLowerCase().indexOf(user2)!==-1)?
                           <div className="movie_posters">
                           <img src={`https://image.tmdb.org/t/p/original${value.backdrop_path}`} key={value.id} className="movie_poster" alt="hello"/>
                           <div className="movie_name">{ value.name || value.title}</div>
                           </div>:""
                       )
              
                   })
                 }
          </div>
           <div className="movie_bottom">

           </div>
        </div>
    )
}

export default Moviesearch
