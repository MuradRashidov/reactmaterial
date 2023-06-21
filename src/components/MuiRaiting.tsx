import React, { useState } from 'react'
import {Stack,Rating} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

const MuiRaiting = () => {
  const [value,setValue] = useState<number|null>(1);
  console.log(value);
  
  const handleChange = 
  (
     _event:React.SyntheticEvent<Element, Event>,
     newValue:number|null
  ) => {
     setValue(newValue)
  }
  return (
    <Stack spacing={2}>
        <Rating readOnly highlightSelectedOnly value={value} onChange={handleChange} icon={<FavoriteIcon/>} emptyIcon={<FavoriteBorderIcon/>} size='large' precision={0.5}/>
    </Stack>
  )
}

export default MuiRaiting