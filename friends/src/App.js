import React from 'react';
import './App.css';
import Login from './components/Login';
import FriendsList from './components/FriendsList';

import ProtectedRoute from './components/ProtectedRoute';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



function App() {




  return (

    <Router>

        <div className="App">
            
                <Route exact path="/login" component={Login}/> 
                {/* <ProtectedRoute path="/friendslist" component={AddFriend}/>  */}
                <ProtectedRoute path="/protected" component={FriendsList} />  
             
        </div>
    </Router>
  );
}

export default App;
