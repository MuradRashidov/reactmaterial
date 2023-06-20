import React, { useState } from 'react'
import {InputAdornment, Stack,TextField} from "@mui/material"
const MUITextField = () => {
    const [value,setValue] = useState("")
  return (
    <Stack spacing={4}>
        <Stack direction='row' spacing={2}>
             <TextField label="Name" variant='outlined'/>
             <TextField label="Name" variant='filled'/>
             <TextField label="Name" variant='standard'/>
        </Stack>
        <Stack direction='row' spacing={2}>
             <TextField label="Small Secondary" size='small' color='secondary' variant='outlined'/>
             
        </Stack>
        <Stack direction='row' spacing={2}>
             <TextField error={!value} helperText={!value?"required":"don't share your password"} label="Form Input" value={value} onChange={(e)=>setValue(e.target.value)} required/>
             <TextField helperText="Dont share your password" label="Password" type='password' disabled required/>
             <TextField label="Read Only" InputProps={{readOnly:true}}/>
        </Stack>
        <Stack direction='row' spacing={2}>
            <TextField label="Amount"  InputProps={{
                startAdornment:<InputAdornment position='start'>$</InputAdornment>
            }}/>
             <TextField error label="Weight"  InputProps={{
                endAdornment:<InputAdornment position='end'>kg</InputAdornment>
            }}/>
        </Stack>
    </Stack>
  )
}

export default MUITextField