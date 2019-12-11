import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AccountSettings from './components/AccountSettings';
import Provider from './components/Provider';
import MyDevices from './components/MyDevices';
import Community from './components/Community';
import MyPreferences from './components/MyPreferences';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Route exact path="/" component={Community} />
        <Route exact path="/settings" component={AccountSettings} />
        <Route exact path="/provider" component={Provider} />
        <Route exact path="/mydevices" component={MyDevices} />
        <Route exact path="/preferences" component={MyPreferences} />
      </div>
    </Router>

  );
}

export default App;
