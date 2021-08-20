import React,{useRef} from 'react'
import { auth } from '../firebase'
import './signinscreen.css'
function SignInScreen() {
    const emailref=useRef(null)
const passwordref=useRef(null)
    const signin=(e)=>{
      e.preventDefault()
      auth.signInWithEmailAndPassword(
          emailref.current.value,
          passwordref.current.value
      ).then((users)=>{
        console.log(users)
    }).catch((error)=>{
        console.log(error)
    })
    }
    const register=(e)=>{
        e.preventDefault()
        auth.createUserWithEmailAndPassword(
            emailref.current.value,
            passwordref.current.value
        ).then((users)=>{
            console.log(users)
        }).catch((error)=>{
            console.log(error)
        })
    }
    return (
        <div className="signinscreen">
       <form>
           <h1>Sign In</h1>
           <input placeholder="Email" type="email" ref={emailref}/>
           <input type="password" placeholder="Password" ref={passwordref}></input>
           <button type="submit" onClick={signin}>Sign In</button>
           <h4>
               <span className="signinscreen_grey">New to Netflix?</span>
               <span className="signinscreen_link" onClick={register} > Sign Up now</span> </h4>
       </form>
       </div>
    )
}

export default SignInScreen
