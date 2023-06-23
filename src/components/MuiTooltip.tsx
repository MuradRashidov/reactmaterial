import React from 'react'
import {IconButton, Tooltip} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

export const MuiTooltip = () => {
  return (
    <Tooltip placement='right' arrow enterDelay={500} leaveDelay={200} title="Delete">
        <IconButton>
            <DeleteIcon/>
        </IconButton>
    </Tooltip>
  )
}
