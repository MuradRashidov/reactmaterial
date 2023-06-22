import React from 'react';
import {Box,Divider,Grid,Paper,Stack} from '@mui/material';
const MuiLayout = () => {
  return (
    <Paper elevation={4} sx={{padding:"32px"}}>
  <Stack spacing={2} direction="row" divider={<Divider orientation='vertical' flexItem/>} sx={{border:"1px solid red",}}>
    <Box sx={{backgroundColor:'primary.main',color:'white',width:"100px",height:"100px",padding:"16px",':hover':{
        backgroundColor:"primary.light"
    }}}>MuiLayout</Box>
    <Box display='flex' height="100px" width="100px" bgcolor="success.light">

    </Box>
    </Stack>
    <Grid container my={4}   rowSpacing={2} columnSpacing={1}>
      <Grid xs={6}  item><Box p={2} bgcolor="primary.light">Item 1</Box></Grid>
      <Grid xs={6}  item><Box p={2} bgcolor="primary.light">Item 2</Box></Grid>
      <Grid xs={6}  item><Box p={2} bgcolor="primary.light">Item 3</Box></Grid>
      <Grid xs={6}  item><Box p={2} bgcolor="primary.light">Item 4</Box></Grid>
    </Grid>
    </Paper>

  )
}

export default MuiLayout