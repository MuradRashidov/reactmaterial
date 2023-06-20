import React, { useState } from 'react'
import {Button, ButtonGroup, IconButton, Stack, ToggleButton, ToggleButtonGroup} from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'
const MUIButtons = () => {
    const [formats,setFormats] = useState<string | null>(null);
    console.log({formats});
    
    const handleChange = (
        _event:React.MouseEvent<HTMLElement>,
        updatesFormat:string|null
    ) => {
         setFormats(updatesFormat)
    }
  return (
    <Stack spacing={4}>
       <Stack direction="row" spacing={2}>
           <Button variant='text'>Text</Button>
           <Button variant='contained'>Contained</Button>
           <Button variant='text'>Outlined</Button>
       </Stack>
       <Stack direction="row" spacing={2}>
            <Button variant='contained' color='primary'>Primary</Button>
            <Button variant='contained' color='secondary'>Secondary</Button>
            <Button variant='contained' color='warning'>Warning</Button>
            <Button variant='contained' color='error'>Error</Button>
            <Button variant='contained' color='info'>Info</Button>
            <Button variant='contained' color='success'>Success</Button>
       </Stack>
       <Stack display="block" direction="row" spacing={2}>
            <Button variant='contained' color='primary' size='small'>Small</Button>
            <Button variant='contained' color='secondary' size='medium' >Medium</Button>
            <Button variant='contained' color='warning' size='large'>Large</Button>
           
       </Stack>
       <Stack display="block" direction="row" spacing={2}>
            <Button variant='contained' color='primary' size='small' onClick={()=>alert("clicked")} disableRipple disableElevation  startIcon={<SendIcon/>}>Send</Button>
            <Button variant='contained' color='primary' size='small'  endIcon={<SendIcon/>}>Send</Button>
             <IconButton area-lebel="send" color='success' size='small'><SendIcon/></IconButton>
       </Stack>
       <Stack direction="row">
          <ButtonGroup aria-label='alignment button group' orientation='vertical' size='small' color='secondary'  variant='contained'>
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
          </ButtonGroup>
       </Stack>
       <Stack direction="row">
             <ToggleButtonGroup size='small' color='info' orientation='vertical' exclusive value={formats} onChange={handleChange} aria-label='text-formatting'>
                <ToggleButton value="bold" aria-label='bold'><FormatBoldIcon></FormatBoldIcon></ToggleButton>
                <ToggleButton value="italic" aria-label='italic'><FormatItalicIcon/></ToggleButton>
                <ToggleButton value="underlined" aria-label='underlined'><FormatUnderlinedIcon/></ToggleButton>
             </ToggleButtonGroup>
       </Stack>
    
    </Stack>
  )
}

export default MUIButtons