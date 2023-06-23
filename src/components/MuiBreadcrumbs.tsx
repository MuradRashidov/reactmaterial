import { Box, Breadcrumbs, Link, Typography } from '@mui/material'
import React from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

export const MuiBreadcrumbs = () => {
  return (
    <Box m={2}>
        <Breadcrumbs aria-label='breadcrumbs' itemsBeforeCollapse={2} maxItems={3} separator={<NavigateNextIcon fontSize='small'/>}>
          <Link underline='hover' href='#'>Home</Link>
          <Link underline='hover' href='#'>Catalog</Link>
          <Link underline='hover' href='#'>Accessories</Link>
          <Typography color='text.primary'>Shoes</Typography>
        </Breadcrumbs>
    </Box>
  )
}
