import React from 'react'
import {Stack,Link,Typography} from "@mui/material"
export const MuiLink = () => {
  return (
    <Stack direction='row' m={4} spacing={2}>
        <Link variant='h6' href="#">Link</Link>
        <Typography variant='h6'><Link underline='hover' color='secondary' href="#">Secondary</Link></Typography>
    </Stack>
  )
}
