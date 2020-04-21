import React from 'react';
import './App.css';
import Form from './components/Form';
import FriendsList from './components/FriendsList';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


function App() {




  return (

    <Router>
        <div className="App">
          <Form/>
          <FriendsList/>
        </div>
    </Router>
  );
}

export default App;
