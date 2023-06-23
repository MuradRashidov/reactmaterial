import React from 'react'
import {Avatar, AvatarGroup, Stack} from '@mui/material'
export const MuiAvatar = () => {
  return (
      <Stack spacing={4}>
        <Stack direction='row' spacing={1}>
            <Avatar sx={{backgroundColor:"primary.light"}}>BW</Avatar>
            <Avatar sx={{backgroundColor:"success.light"}}>CK</Avatar>
        </Stack>
        <Stack direction='row' spacing={1}>
            <AvatarGroup max={2}>
            <Avatar sx={{backgroundColor:"primary.light"}}>BW</Avatar>
            <Avatar sx={{backgroundColor:"success.light"}}>CK</Avatar>
            <Avatar src='https://randomuser.me/api/portraits/women/79.jpg' sx={{backgroundColor:"success.light"}} alt='asd'/>
            <Avatar src='https://randomuser.me/api/portraits/men/51.jpg' sx={{backgroundColor:"success.light"}} alt='b'/>
            </AvatarGroup>
        </Stack>
        <Stack direction='row' spacing={1}>
            <Avatar sx={{backgroundColor:"primary.light",widows:48,height:48}}>BW</Avatar>
            <Avatar variant='rounded' sx={{backgroundColor:"success.light",widows:48,height:48}}>CK</Avatar>
        </Stack>
      </Stack>
    )
}
