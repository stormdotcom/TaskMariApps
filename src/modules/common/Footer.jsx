import { Box, IconButton, Modal } from '@mui/material'
import React from 'react'
import ViewList from '@mui/icons-material/ViewList';

import ContentBody from '../../common/components/ContentBody'
import { colors } from '../../common/theme/theme'
import { CloseOutlined, DarkMode, Filter, More } from '@mui/icons-material';

const style = {
    backgroundColor: colors.primary[100],
    width:"100%",
    position:"fixed",
    left:0,
    bottom:0,
    zIndex:99
}


const modalStyle =  {
  backgroundColor: 'transparent',
  position: 'fixed',
  bottom:20,
  right:10,
  p: 4,
  display:"flex",
  flexDirection:"column",
  alignItems:"center",
  justifyContent:"space-evenly"
};
const Footer = () => {
  
  return (
    <>

       <Box sx={style} >
    <Box sx={{marginLeft: "259px"}}>
        <Box>
            <ContentBody content={"2020 Equipo © | Build V1.0"}  isContent={true}/>
        </Box>
        <Box>
           {/* Logo */}
        </Box>
    </Box>
    </Box>
    </>
 
  )
}

export default Footer