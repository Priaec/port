import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes
import Home from './components/Home';
import LandingPage from './components/LandingPage';

class App extends React.Component{
  render(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
  );
  }
}

export default App;
