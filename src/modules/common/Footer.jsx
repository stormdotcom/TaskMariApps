import React from 'react'
import { Box } from '@mui/material'
import HomeMaxIcon from '@mui/icons-material/HomeMax';
import ContentBody from '../../common/components/ContentBody'
import { colors } from '../../common/theme/theme'


const style = {
    backgroundColor: colors.primary[100],
    width:"100%",
    position:"fixed",
    left:0,
    bottom:0,
    zIndex:99
}
const Footer = () => {
  
  return (
    <>
       <Box sx={style} >
    <Box sx={{marginLeft: "259px", display:"flex", justifyContent:"space-between"}}>
        <Box>
            <ContentBody content={"Gadgets Hub 2023"}  isContent={true}/>
        </Box>
        <Box mr={23}>
           <HomeMaxIcon />
        </Box>
    </Box>
    </Box>
    </>
 
  )
}

export default Footer