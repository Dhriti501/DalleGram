import { Box, ImageList, ImageListItem } from '@mui/material'
import React from 'react'


const imageCard = () => {

  return (
    <Box>
      <ImageList sx={{ width: 500, height: 500 }}>
        <ImageListItem key="Subheader" cols={5}>
          
        </ImageListItem>
      </ImageList>
    </Box>
  )
}

export default imageCard