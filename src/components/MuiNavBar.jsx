import React,{useState} from 'react'
import { AppBar, IconButton, Toolbar,Typography,Stack,Button,MenuItem } from "@mui/material";
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'
import { Menu } from "@mui/icons-material";

export const MuiNavBar = () => {
    const [anchorEl,setAnchorEl] = useState<null|HTMLElement>(null);

    // const handleClick = (event:React.MouseEvent<HTMLInputElement>) => {
    //     setAnchorEl(event.currentTarget)
    // }
  return (
    <div>
        <AppBar position="static">
           <Toolbar>
              <IconButton size="large" edge='start' color="inherit" aria-label="logo">
                  <CatchingPokemonIcon></CatchingPokemonIcon>
              </IconButton>
              <Typography sx={{flexGrow:1}} variant="h6" component="div">
                Pokemoon
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button color="inherit">Features</Button>
                <Button color="inherit">Pricing</Button>
                <Button color="inherit">About</Button>
                <Button color="inherit" id="resources-button" onClick={handleClick}>Resources</Button>
                <Button color="inherit">Login</Button>
              </Stack>
              <Menu id='resources-button' anchorEl={anchorEl}>
                <MenuItem>Blog</MenuItem>
                <MenuItem>Podcast</MenuItem>
              </Menu>
           </Toolbar>
        </AppBar>
    </div>
  )
}
