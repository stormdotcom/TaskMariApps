import React from "react";
import {  Box, Chip, IconButton, InputBase, Modal, useMediaQuery, useTheme } from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SearchIcon from "@mui/icons-material/Search";
import CampaignIcon from '@mui/icons-material/Campaign';
import DescriptionIcon from '@mui/icons-material/Description';
import { useProSidebar } from "react-pro-sidebar";
import { Add, ArrowCircleLeft, Close, CloseOutlined,  Search } from "@mui/icons-material";
import {  colors } from "../../common/theme/theme";


const iconWrapper = {
  margin: "0.6rem",
  backgroundColor: `${colors.grey[900]}}`,
  padding: 1,
  cursor: "pointer",
  borderRadius: 1,
  borderWidth: "2px",
  borderColor: `${colors.grey[600]}}`,
}
const modalStyle =  {
  position: 'absolute',
  top: '6%',
  left: '60%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  p: 4,
};
const ToolBar = () => {
  const { toggleSidebar, broken } = useProSidebar();
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const mdScreen = useMediaQuery(theme.breakpoints.up("md"));
  const screenBreak = !mdScreen || !smScreen;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box display="flex" justifyContent="space-between" p={2}  backgroundColor={colors.primary[100]} sx={{borderBottom: "0.2px solid grey"}}>
      <Box display={screenBreak ? "block" :"flex"}>
        {broken  && (
          <IconButton
            sx={{ margin: "0 6 0 2" }}
            onClick={() => toggleSidebar()}
          >
            <MenuOutlinedIcon />
          </IconButton>
        )}
        <Box
          display="flex"
          backgroundColor={colors.primary[200]}
          p={0.2}
          borderColor={colors.blueAccent[300]}
          borderRadius={5}
        >
           <IconButton type="button">
            <SearchIcon />
          </IconButton>
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
          <IconButton type="button">
            <Close />
          </IconButton>
        </Box>
        <Box py={1}>
            <Chip label="Advanced Search" size="medium" sx={{ bgcolor: colors.blueAccent[100], color: 'white', px:0.5, mx:1, cursor: "pointer" }} 
             icon={<Search style={{color:colors.primary[100]}} />} /> 
            <Chip label="Patient" size="medium" sx={{ bgcolor: colors.blueAccent[100], color: 'white', px:0.5, mx:1, cursor: "pointer" }}  
            icon={<Add style={{color:colors.primary[100]}} />} />          
             </Box>
      </Box>
      {screenBreak ? 
      <Box>
         <IconButton   sx={iconWrapper} onClick={handleOpen}>
        <ArrowCircleLeft fontSize="small" />
      </IconButton>
         </Box> : 
      <Box display="flex">
      <IconButton   sx={iconWrapper}>
        <NotificationsOutlinedIcon fontSize="small"/>
      </IconButton>
      <IconButton   sx={iconWrapper}>
        <SettingsOutlinedIcon fontSize="small" />
      </IconButton>
      <IconButton  
        sx={iconWrapper}
        >
        <DescriptionIcon size="small"/>
      </IconButton>
      <IconButton  
        sx={{...iconWrapper, marginRight: "3px"}}
        >
        <CampaignIcon size="small"/>
      </IconButton>
      <IconButton   sx={iconWrapper}>
        <PersonOutlinedIcon fontSize="small" />
      </IconButton>
      {broken  && (
        <IconButton
          sx={{ margin: "0 6 0 2" }}
          onClick={() => toggleSidebar()}
        >
          <MenuOutlinedIcon size="small" />
        </IconButton>
      )}
    </Box>}
    <Modal
    open={open}
    onClose={handleClose}>
    <Box display="flex" style={modalStyle}>
      <IconButton   sx={iconWrapper}>
        <NotificationsOutlinedIcon fontSize="small"/>
      </IconButton>
      <IconButton   sx={iconWrapper}>
        <SettingsOutlinedIcon fontSize="small" />
      </IconButton>
      <IconButton  
        sx={iconWrapper}
        >
        <DescriptionIcon size="small"/>
      </IconButton>
      <IconButton  
        sx={{...iconWrapper, marginRight: "3px"}}
        >
        <CampaignIcon size="small"/>
      </IconButton>
      <IconButton   sx={iconWrapper}>
        <PersonOutlinedIcon fontSize="small" />
      </IconButton>
       <IconButton   sx={{...iconWrapper,  backgroundColor: `${colors.primary[900]}}`,}}>
       <CloseOutlined onClick={()=>handleClose()} />
      </IconButton>
    </Box>
    </Modal>
    </Box>
  );
};

export default ToolBar;
