import React, { useState } from 'react'
import {BottomNavigation, BottomNavigationAction} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PersonIcon from '@mui/icons-material/Person'
export const MuiBottomNav = () => {
    const [value,setValue] = useState(2);
  return (
      <BottomNavigation 
        sx={{width:"100%",position:"absolute",bottom:0}} 
        value={value} 
        onChange={(event,newValue)=>setValue(newValue)}
        showLabels
        >
        <BottomNavigationAction label='Home' icon={<HomeIcon/>}/>
        <BottomNavigationAction label='Favorites' icon={<FavoriteIcon/>}/>
        <BottomNavigationAction label='Profile' icon={<PersonIcon/>}/>
      </BottomNavigation>
    )
}
