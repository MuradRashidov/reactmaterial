import React, { useState } from 'react';
import { Autocomplete, Stack, TextField } from '@mui/material';
type Skill = {
    id:Number,
    label:string
}
const skills = ['HTML', 'CSS', 'JS', 'REACT'];

const skillsOptions = skills.map((skill,index)=>({
    id:index+1,
    label:skill
}))
const MuiAutoComplete = () => {
  const [value,setValue] = useState<string|null>(null);
  const [skill,setSkill] = useState<Skill|null>(null)
  console.log(skill);
  
  const handleChange = (
    event:React.SyntheticEvent<Element, Event>,
    newValue:string|null
  ) => {
      setValue(newValue)
  }
  return (
    <Stack spacing={2} width='250px'>
      <Autocomplete
        renderInput={(params) => <TextField {...params} label="Skills" />}
        options={skills}
        value={value}
        onChange={handleChange}
        freeSolo
      />
      <Autocomplete
        renderInput={(params) => <TextField {...params} label="Skills" />}
        options={skillsOptions}
        value={skill}
        onChange={(event:any,newValue:Skill|null)=>setSkill(newValue)}
        
      />
    </Stack>
  );
};

export default MuiAutoComplete;
 