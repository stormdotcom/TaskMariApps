import { Box } from '@mui/system'
import React from 'react'
import { colors } from '../../common/theme/theme'

const DescriptionCard = ({children, color=colors.blueAccent[100], additionStyles={}}) => {
  return (
    <Box m={1}  sx={{minWidth:"275px", minHeight:"300px", backgroundColor:color, borderRadius:"10px", padding: "6px 2px 2px 2px", ...additionStyles}}>
        <Box p={1} sx={{ backgroundColor:colors.primary[300], minHeight:"298px", borderRadius:"0 0 10px 10px" }}>
                {children}
        </Box>
    </Box>
  )
}

export default DescriptionCard