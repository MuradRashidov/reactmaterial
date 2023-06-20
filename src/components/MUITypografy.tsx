import { Typography } from '@mui/material'
import React from 'react'

const MUITypografy = () => {
  return (
    <div>
        <Typography variant='h1'>h1 Heading</Typography>
        <Typography variant='h2'>h2 Heading</Typography>
        <Typography variant='h3'>h3 Heading</Typography>
        <Typography variant='h4' component="h1" gutterBottom>h4 Heading</Typography>
        <Typography variant='h5'>h5 Heading</Typography>
        <Typography variant='h6'>h6 Heading</Typography>
        <Typography variant='subtitle1'>h6 Heading</Typography>
        <Typography variant='subtitle2'>h6 Heading</Typography>
        <Typography variant='body1'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Praesentium dolorum consectetur architecto repellat officiis 
            facere error quod, illum quia perspiciatis similique rerum ducimus 
            placeat reprehenderit beatae, amet magnam nihil laborum!
        </Typography>
        <Typography variant='body2'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Natus, officia quo assumenda nostrum eligendi temporibus ab aliquid 
            consectetur quos ipsam. Nemo tenetur, maxime eveniet ea saepe repudiandae voluptatibus ad laborum!
        </Typography>

    </div>
  )
}

export default MUITypografy