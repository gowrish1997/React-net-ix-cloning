import React,{useEffect} from 'react'
import { BrowserRouter as Router ,Switch,Route } from 'react-router-dom';
import './App.css';
import { auth } from './firebase';
import HomeScreen from './screen/Homescreen';

import LoginScreen from './screen/LoginScreen';
function App() {
const user=null
useEffect(()=>{
  const unsubscribe=auth.onAuthStateChanged(userAuth=>{
    if(userAuth){
      console.log(userAuth)
    }else{

    }
  })

  return unsubscribe
},[])
  return (
    
    <div className="app">
      {
        user===null?<LoginScreen/>: <Router>
        <Switch>
      <Route exact path="/">
         <HomeScreen/>
       </Route>
      </Switch> 
        </Router>
    
      }
     
    </div>
  );
}

export default App;
