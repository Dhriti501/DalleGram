import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';


const Home = () => {

  //all posts is now persisted to mongodb 
  const [allPosts, setAllPosts] = useState([])

  useEffect(()=>{
    fetch("http://localhost:4000/mongodb/getImage")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setAllPosts(data)
      })
      .catch(error => {
        console.log(error)
      });
  },[])
  

  return (
    <Box>
      {/* heading  */}
      <Box align="center" m={3}>
        <h1> ✨ Creative Space ✨ </h1>
        <br/>
        <p>Browse through collection of innovative and unique AI generated images from user-suggested keywords!</p>
        <br/>
        <br/>
        
        {/* rendering all post images  */}
        <ImageList sx={{ width: 500, height: 500 }}>
      
      {allPosts.map((item) => (
        <ImageListItem key={item.img}>
          <img src={item.imgUrl} alt={item.prompt} />
          <ImageListItemBar
            title={item.username}
            subtitle={item.prompt}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
    </Box>
    </Box>
  );

}

export default Home