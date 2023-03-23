import { Box, Button, Card, CardActionArea, CardMedia, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../App.css';

const CreatePost = ({handlePosts}) => {

  const navigate = useNavigate();

  //loading and preview image urls
  const previewImgUrl = "https://icons.iconarchive.com/icons/praveen/minimal-outline/512/gallery-icon.png";
  const loadingUrl = "https://media.tenor.com/7NX24XoJX0MAAAAC/loading-fast.gif"

  const [username,setUsername] = useState('');
  const [prompt,setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [imgUrl, setImgUrl] = useState(previewImgUrl)


  // tracking username change 
  const handleUsername = (e)=>{
    setUsername(e.target.value);
  }

  // tracking prompt change 
  const handlePrompt = (e)=>{
    setPrompt(e.target.value);
  }

  // generate button clicked
  const generatePreview = async()=>{

    if(username && prompt){
      setLoading(true)

      const response = await fetch("http://localhost:4000/openai/generateimage", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({prompt})
      });
    
      const result = await response.json();
      setLoading(false)
      setImgUrl(result.data)
      
    }else{
      alert("Enter proper data")
    }
  }

  // handle share photo 
  const shareImage = () =>{

    // if(imgUrl != previewImgUrl){
    //   const currentImageData = {
    //     id : Math.floor(Math.random()*21739438424),
    //     username,
    //     prompt,
    //     imgUrl,
    //   }
    //   // console.log(currentImageData)
    //   handlePosts(currentImageData);
    //   navigate("/")
    // }else{
    //   alert("Generate an image first!!")
    // }
    const currentImageData = {
      id : Math.floor(Math.random()*21739438424),
      username,
      prompt,
      imgUrl,
    }
    // console.log(currentImageData)
    handlePosts(currentImageData);
    navigate("/")
  }

  return (
    <Box mt={2} p={2}
      sx={{
        display:"flex",
        flexDirection:"column",
        width:"50vw",
        backgroundColor:"#eee",
        alignItems:"center",
        marginLeft:"25%",
        gap:"1.5rem",
      }}
    >

      {/* heading  */}
      <Box align="center" mt={3}>
        <h1>CREATE</h1>
        <p>Type a string of creative keywords to generate an unique image!</p>
      </Box>

      {/* input texts */}
      <Box align="center"
        sx={{
          display:"flex",
          flexDirection:"column",
          gap:"1rem",
          width:"80%"
        }}
      >
        <TextField
          variant='outlined'
          label="Username"
          placeholder='Type your Username...'
          name="username"
          onChange={handleUsername}
          // onChange={(newValue) => setUsername(newValue.target.value)}
        ></TextField>
        <TextField
          variant='outlined'
          label="Search Text"
          placeholder='Type search text...'
          name="searchText"
          onChange={handlePrompt}
        ></TextField>
      </Box>

      {/* box containing buttons  */}
      <Box className="createBtnBox" >
        <Button
          variant='contained'
          sx={{marginRight:"2rem"}}
        >
          Surprise Me
        </Button>
        <Button
          variant='contained'
          onClick={generatePreview}
        >
          {imgUrl===previewImgUrl ? "Generate" : "Try Again"}
        </Button>
      </Box>

      {/* preview image box  */}
      <Box>
        <Card sx={{ maxWidth: 440 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="220"
              image={loading?loadingUrl:imgUrl}
              alt="preview-img"
            />
          </CardActionArea>
        </Card>
      </Box>

      {/* share image button */}
      <Box>
        <Button
            variant='contained'
            onClick={shareImage}
          >
            Share Image
        </Button>
      </Box>

    </Box>
  )
}

export default CreatePost