import React from 'react'
import Nav from './Nav'
import { useSelector } from 'react-redux'
import './ProfileScreen.css'
import { auth } from './firebase'

function Profilescreen() {
    
    const use=useSelector((state)=>state.user.user)
          
    return (
        <div className='profilescreen'>
            <Nav/>
            <div className="profilescreen_body">
                <h1>Edit Profile</h1>
                <div className="profilesceen_info">
                    <img style={{height:100,width:100}} src="https://icon-library.com/images/netflix-icon-transparent/netflix-icon-transparent-29.jpg" alt="hello"
                    />
                    <div className='profilescreen_detail'>
                      <h2>{use.email}</h2>
                      <div className="profilescreen_plans">
                          <button
                          onClick={()=>{
                              auth.signOut()
                          }}
                           className="profilescreen_signout">Sign out</button>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profilescreen
