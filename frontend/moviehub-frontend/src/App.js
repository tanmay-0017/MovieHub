import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Register from './components/register';
import SearchMovie from './components/searchMovie';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
          <Link to="/search">Search Movies</Link>
        </nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search" element={<SearchMovie />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
