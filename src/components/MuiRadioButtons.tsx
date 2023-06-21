import React, { useState } from 'react'
import { Box, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from '@mui/material'
const MuiRadioButtons = () => {
    let [value,setValue] = useState('');
    const handleChange = (
         event:React.ChangeEvent<HTMLInputElement>
    ) => {
          setValue(event.target.value)
    }
    console.log(value);
    
  return (
    <Box>
        <FormControl error>
            <FormLabel  id='jop-experience-group-label'>
                Years of experience
            </FormLabel>
            <RadioGroup row value={value} onChange={handleChange} name='jop-experience-group' aria-labelledby='jop-experience-group-label'>
            <FormControlLabel control={<Radio size='small' color='secondary'/>} label='0-2' value='0-2'/>
            <FormControlLabel control={<Radio />} label='3-5' value='3-5'/>
            <FormControlLabel control={<Radio/>} label='6-10' value='6-10'/>
            </RadioGroup>
            <FormHelperText>Invalid selection</FormHelperText>
        </FormControl>
    </Box>
  )
}

export default MuiRadioButtons