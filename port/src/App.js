import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes> {/* Use <Routes> as the top-level container */}
        <Route path="/" element={<Home/>} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
