import React from 'react'
import { BrowserRouter as Router ,Switch,Route } from 'react-router-dom';
import './App.css';
import HomeScreen from './screen/Homescreen';
import LoginScreen from './screen/LoginScreen';
function App() {
const user=null
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
