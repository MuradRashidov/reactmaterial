import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@mui/material'
import React, { useState } from 'react';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'

const MuiCheckBox = () => {
    const [acceptTnC,setAcceptTnC] = useState(false);
    const [skills,setSkills] = useState<string[]>([])
    console.log(skills);
    
    const handleChange = (
        event:React.ChangeEvent<HTMLInputElement>
    ) => {
        //console.log(event.target);
        
         setAcceptTnC(!acceptTnC)
    }
    const handleSkillChange = (
        event:React.ChangeEvent<HTMLInputElement>
    ) => {
       let index = skills.indexOf(event.target.value);
       index === -1 ? setSkills([...skills,event.target.value]):setSkills(skills.filter(skill=>skill!==event.target.value))
    }

  return (
    <Box>
        <Box>
            <FormControlLabel control={<Checkbox checked={acceptTnC}  onChange={handleChange} />} label="I accept terms and conditions"></FormControlLabel>
        </Box>
        <Box>
             <Checkbox
               icon={<BookmarkBorderIcon/>}
               checkedIcon={<BookmarkIcon/>}
               checked={acceptTnC}
               onChange={handleChange}
             />
        </Box>
        <Box>
            <FormControl>
                <FormLabel>Skills</FormLabel>
                <FormGroup>
                <FormControlLabel
                 control={<Checkbox checked={skills.includes("HTML")}onChange={handleSkillChange} />}
                 label="HTML"
                 value="html"
                 />
                 <FormControlLabel
                 control={<Checkbox checked={skills.includes("CSS")}
                 onChange={handleSkillChange}/> }
                 value="css"
                 label="CSS"/>
                 <FormControlLabel
                 control={<Checkbox checked={skills.includes("JavaScript")}onChange={handleSkillChange} />}
                 label="JavaScript"
                 value="javascript"
                 />
                

                </FormGroup>
            </FormControl>
        </Box>
    </Box>
  )
}

export default MuiCheckBox