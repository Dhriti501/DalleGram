import React from 'react'
import {Link} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CameraIcon from '@mui/icons-material/Camera';

const Navbar = () => {
  return (
    <div>
      <AppBar position="static" sx={{backgroundColor:"#900C3F"}}>
        <Toolbar>         

          {/* icon */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
          >
            <CameraIcon />
          {/* <img src="../assets/logo.png" alt="openAI-logo"/> */}

          </IconButton>

          {/* title */}
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            DalleGram
          </Typography>

          {/* links */}
          <Link to="/" className="linkBtn">
            <Button className="linkBtn" >Home</Button>
          </Link>

          <Link to="/create-post" className="linkBtn">
            <Button className="linkBtn" >Create</Button>
          </Link>

        </Toolbar>
      </AppBar>
    </div>
    
  )
}

export default Navbar