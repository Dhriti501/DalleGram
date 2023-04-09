import './App.css';
import React from 'react';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import {BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route  path="/" exact element={<Home  />}></Route>
        <Route  path="/create-post" element={<CreatePost/>}></Route>
        <Route  path="*" element={<h1>Oops! Page not found! </h1>}></Route>
      </Routes>
    </Router>
    
  );
}

export default App;
