import axios from 'axios'
import React,{useState,useEffect} from 'react'
import instance from './axios'
import './row.css'
function Row({title,fetchurl,islargerow=false}) {
const[movie,setMovie]=useState([])
const[shown,setShown]=useState(false)
useEffect(()=>{
    async function movies(){
        const data=await axios.get(`${instance}${fetchurl}`)
     
        setMovie(data.data.results)
        console.log(data.data.results)
       
        return movies;
    }
movies();
},[fetchurl])
    return (
        <div className="row">
            <h1>{title}</h1>
            <div className='row_posters'>
            {
             movie.map((values)=>{
             return(<div className="row_return_poster"> { ((islargerow && values.poster_path && values.name ) ||(!islargerow && values.backdrop_path && values.title)) && <img
                onMouseOver={()=>setShown(true)}
                onMouseOut={()=>setShown(false)}  
                className={`row_poster ${islargerow && "row_posterlarge"}`}
              key={values.id} src={`https://image.tmdb.org/t/p/original${islargerow?values.poster_path:values.backdrop_path}`}
               alt={values.name}/> }
               {
                   ((islargerow && values.name && values.poster_path) ||(!islargerow && values.title && values.backdrop_path)) && <div className="row_name">{ islargerow?values.name:values.title}</div>
               }
               {
                    <div className="row_return_hideposter">
                   <h1> Name: {values.title || values.name}</h1>
                   <h1 >Language: {values.original_language}</h1>
                   <h1>IMDB Review: <button>{values.vote_average}</button></h1>
                   <h1 > Release Date:<button>{values.release_date}</button></h1>
                  
                    </div>
             }
              
             </div>)
               })
               }
              </div>
           
        </div>
    )
}

export default Row
