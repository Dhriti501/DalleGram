import { Box } from '@mui/system';
import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';


const Home = ({allPosts}) => {

  return (
    <Box>
      {/* heading  */}
      <Box align="center" m={3}>
        <h1>Creative Space of </h1>
        <br/>
        <p>Browse through collection of innovative and unique AI generated images from user-suggested keywords!</p>
        
        {/* rendering all post images  */}
        <ImageList sx={{ width: 500, height: 500 }}>
      
      {allPosts.map((item) => (
        <ImageListItem key={item.img}>
          {/* <img
            src={`${item.imgUrl}?w=248&fit=crop&auto=format`}
            srcSet={`${item.imgUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.username}
            loading="lazy"
          /> */}
          <img src={item.imgUrl} alt="image" />
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