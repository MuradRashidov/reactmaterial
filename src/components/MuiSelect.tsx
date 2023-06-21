import React,{useState} from 'react'
import {Box, MenuItem, TextField}  from "@mui/material"
const MuiSelect = () => {
    let [countries,setCountries] = useState<string []>([]);
    const handleChange =  (
        e: React.ChangeEvent<HTMLInputElement> 
    ) => {
        let value = e.target.value
        console.log(value);
        
        setCountries(typeof value === 'string'?value.split(","):value);
        //console.log(typeof value);

        
    }
    console.log({countries});  

  return (
   <Box width="250px">
    <TextField
     fullWidth
     onChange={handleChange} 
     SelectProps={{multiple:true}} 
     size='small' color='secondary' 
     value={countries} 
     label="Select Country" 
     helperText="Please Select Countries"
     select>
       <MenuItem value="AZ">AZ</MenuItem>
       <MenuItem value="EN">EN</MenuItem>
       <MenuItem value="TR">TR</MenuItem>
    </TextField>
   </Box>
   
  )
}

export default MuiSelect