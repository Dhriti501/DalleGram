import './App.css';
import React from 'react';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route  path="/" exact element={<Home />}></Route>
        <Route  path="/create-post" element={<CreatePost />}></Route>
        <Route  path="*" element={<h1>Oops! Page not found! </h1>}></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
