import React from 'react';
import {SpeedDial,SpeedDialAction,SpeedDialIcon} from '@mui/material'
import CopyIcon from '@mui/icons-material/FileCopyOutlined'
import PrintIcon from '@mui/icons-material/Print'
import ShareIcon from '@mui/icons-material/Share'
import EditIcon from '@mui/icons-material/Edit'

export const MuiSpeedDial = () => {
  return (
    <SpeedDial 
    sx={{position:'absolute',bottom:16,right:16}} 
    ariaLabel='Navigation Speed Dial' 
    icon={<SpeedDialIcon openIcon={<EditIcon/>}/>}
    >
    <SpeedDialAction icon={<CopyIcon/>}   tooltipTitle="Copy"  tooltipOpen/>
    <SpeedDialAction icon={<PrintIcon/>}  tooltipTitle="Print" tooltipOpen/>
    <SpeedDialAction icon={<ShareIcon/>}  tooltipTitle="Share" tooltipOpen/>
    </SpeedDial>
  )
}
