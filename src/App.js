import React,{useEffect} from 'react'

import { BrowserRouter as Router ,Switch,Route } from 'react-router-dom';
import './App.css';
import { auth } from './firebase';
import { useDispatch,useSelector } from 'react-redux';
import HomeScreen from './screen/Homescreen';
import Profilescreen from './Profilescreen';
import LoginScreen from './screen/LoginScreen';
import Moviesearch from './Moviesearch';
import Nav from './Nav';
import {login,logout} from './features/userSlice'
export  const userContext1=React.createContext();
export  const userContext2=React.createContext();
export  const userContext3=React.createContext();
function App() {
  
const user=useSelector(state=>state.user.user)
const user1=useSelector(state=>state.user.movie_name)

const dispatch=useDispatch()
useEffect(()=>{
  const unsubscribe=auth.onAuthStateChanged(userAuth=>{
    if(userAuth){
      dispatch(login({
        uid:userAuth.uid,
        email:userAuth.email
      }))
    }else{
     dispatch(logout())
    }
  })

  return unsubscribe
},[dispatch])
  return (
    <div className="app">
      {
        user===null?<LoginScreen/>:
        <Router>
        <div>
         <Nav/>
         {
           (user1.length)?<Moviesearch/>:
       
        <Switch>
        <Route path='/profile'>
        <Profilescreen/>
      </Route>
     <Route exact path="/">
         <HomeScreen/>
       </Route>
    </Switch>
       
    
         }</div>
          </Router>
      }
     
     </div>
  );
}

export default App;
