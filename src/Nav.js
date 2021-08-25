import React,{useState,useEffect} from 'react'
import {Link,useHistory} from 'react-router-dom'
import {check_movie} from './features/userSlice'
import { useDispatch,useSelector } from 'react-redux'

import './Nav.css'
function Nav() {
    const user2=useSelector(state=>state.user.movie_name)
    const dispatch=useDispatch()
 const[show,setShow]=useState(false)
    const transitionnavbar=()=>{
        if(window.scrollY>100){
            setShow(true)
        }
        else{
            setShow(false)
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll",transitionnavbar)
        return ()=>{
            window.removeEventListener("scroll",transitionnavbar)
        }
 },[])
 let history = useHistory();
           


    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <div className="nav_contents">
                
                
                <img 
            className="nav_logo"
            onClick={()=> history.push('/')}
            src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt="hello"/>
               
             <img
            className="nav_avatar"
            onClick={()=> history.push('/profile')}
            src="https://icon-library.com/images/netflix-icon-transparent/netflix-icon-transparent-29.jpg" alt="hello"/>
           
           <input type="text" 
           value={user2}
           onChange={(e)=> {
               dispatch(check_movie(e.target.value))
           }}
           name="search" placeholder="check here for movies" className="nav_search"/>
           
         
            
            </div>
  </div>
    )
}

export default Nav
