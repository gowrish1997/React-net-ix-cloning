import React,{useState,useEffect} from 'react'
import './Nav.css'
function Nav() {
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
    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <div className="nav_contents">
            <img 
            className="nav_logo"
            src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt="hello"/>
            <img
            className="nav_avatar"
            src="https://icon-library.com/images/netflix-icon-transparent/netflix-icon-transparent-29.jpg" alt="hello"/>

            
            </div>
  </div>
    )
}

export default Nav
