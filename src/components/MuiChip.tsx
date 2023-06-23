import React, { useState } from 'react'
import {Stack,Chip,Avatar} from '@mui/material';
import FaceIcon  from '@mui/icons-material/Face'
export const MuiChip = () => {
    const [chips,setChips] = useState(['Chip 1','chip 2','chip 3']);
    const handleDelete = (chipToDel:string) => {
           setChips(chips.filter(chip => chip !== chipToDel))
    }
  return (
    <Stack direction='row' spacing={1}>
        <Chip label='Chip' color='primary' size='small' icon={<FaceIcon/>}/>
        <Chip label='Chip outlined' color='secondary' size='small' variant='outlined' avatar={<Avatar>V</Avatar>}/>
        <Chip label='click' color='success' onClick={()=>alert('clicked')}/>
        <Chip label='delete' color='error' onClick={()=>alert('clicked')} onDelete={()=>alert('deleted')}/>
        {chips.map(chip=>(
            <Chip key={chip} label={chip} onDelete={() =>  handleDelete(chip)}/>
        ))}
    </Stack>
  )
}
