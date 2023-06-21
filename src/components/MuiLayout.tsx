import React from 'react';
import {Box,Divider,Stack} from '@mui/material';
const MuiLayout = () => {
  return (
  <Stack spacing={2} direction="row" divider={<Divider orientation='vertical' flexItem/>} sx={{border:"1px solid red",}}>
    <Box sx={{backgroundColor:'primary.main',color:'white',width:"100px",height:"100px",padding:"16px",':hover':{
        backgroundColor:"primary.light"
    }}}>MuiLayout</Box>
    <Box display='flex' height="100px" width="100px" bgcolor="success.light" p={2}>

    </Box>
    </Stack>

  )
}

export default MuiLayout