import './App.css';
import React, { useState } from 'react';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import {BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {

  //allPosts state
  const [allPosts, setAllPosts] = useState([]);

  //handling and adding new data to all posts 
  const handlePosts = (imageData)=>{

       setAllPosts([...allPosts,imageData]);
  }

  console.log("all posts data : ",allPosts)
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route  path="/" exact element={<Home allPosts={allPosts} />}></Route>
        <Route  path="/create-post" element={<CreatePost handlePosts={handlePosts}/>}></Route>
        <Route  path="*" element={<h1>Oops! Page not found! </h1>}></Route>
      </Routes>
    </Router>
    
  );
}

export default App;
