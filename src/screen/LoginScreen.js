import React,{useState} from 'react'
import './LoginScreen.css'
import SignInScreen from './SignInScreen'
function LoginScreen() {
    const[log,setLogin]=useState(false)
    return (
        <div className="loginscreen">
            <div className="loginscreen_background">
           <img className="loginscreen_logo"
           src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="hello" ></img>
           <button 
           className="loginscreen_button" 
           onClick={()=>setLogin(true)}>sign in</button>
           <div className="loginscreen_gradient"></div>
            </div>
            
                
                  <div className="loginscreen_body">
                 { (log)?<SignInScreen/>:
                  <>
                <h1>Unlimited films,TV programs and 
                 more.
                 </h1>
                 <h2>Watch anywhere.Cancel at any time</h2>
                 <h3>Ready to watch? Enter your email to create or restart yout membership </h3>
                 <div className="loginscreen_input">
                     <form>
                         <input type="email" placeholder="email Address"/>
                         <button 
                         className="loginscreen_getstarted"
                         onClick={()=>setLogin(true)}> Get Started</button>
  
                     </form>
  
                 </div>
                 </>}
              </div>

            
          
        </div>
    )
}

export default LoginScreen
