import { Box, Button, Card, CardActionArea, CardMedia, InputBase, TextField } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import PreviewImage from './PreviewImage'
import '../App.css';

const FormField = () => {
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
        ></TextField>
        <TextField
          variant='outlined'
          label="Search Text"
          placeholder='Type search text...'
          name="searchText"
        ></TextField>
      </Box>

      {/* box containing buttons  */}
      <Box classname="createBtnBox" >
        <Button
          variant='contained'
          sx={{marginRight:"2rem"}}
        >
          Surprise Me
        </Button>
        <Button
          variant='contained'
        >
          Generate
        </Button>
      </Box>

      {/* preview image box  */}
      <Box>
        <Card sx={{ maxWidth: 440 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="220"
              image={require("../assets/preview.png")}
              alt="preview-img"
            />
          </CardActionArea>
        </Card>
      </Box>

      {/* share image button */}
      <Box>
        <Button
            variant='contained'
          >
            Share Image
        </Button>
      </Box>

    </Box>
  )
}

export default FormField