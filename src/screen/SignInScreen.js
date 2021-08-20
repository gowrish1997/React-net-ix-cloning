import React from 'react'
import './signinscreen.css'
function SignInScreen() {
    return (
        <div className="signinscreen">
       <form>
           <h1>Sign In</h1>
           <input placeholder="Email" type="email"/>
           <input type="password" placeholder="Password"></input>
           <button type="submit" onClick={(e)=>e.preventDefault()}>Sign In</button>
           <h4>
               <span className="signinscreen_grey">New to Netflix?</span>
               <spna className="signinscreen_link" onClick={(e)=>e.preventDefault()} > Sign Up now</spna> </h4>
       </form>
       </div>
    )
}

export default SignInScreen
