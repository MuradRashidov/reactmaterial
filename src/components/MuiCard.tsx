import React from 'react'
import {Box, Button, Card, CardActions, CardContent, CardMedia, Typography} from '@mui/material'
const MuiCard = () => {
  return (
    <Box width="300px">
        <Card>
            <CardMedia component='img' height='240' src='https://shorturl.at/ijuBF' alt='asdfg'/>
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>Asdfg</Typography>
                <Typography variant='body2' color='text.secondary'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa esse vitae,
                    minima voluptatum repellat perspiciatis.Reiciendis impedit dolores eaque et.
                </Typography>
            </CardContent>
            <CardActions>
                <Button>Share</Button>
                <Button>Learn More...</Button>
            </CardActions>
        </Card>
    </Box>
  )
}

export default MuiCard