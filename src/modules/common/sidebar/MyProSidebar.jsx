import { useState } from "react";
import { Menu, Sidebar, MenuItem } from "react-pro-sidebar";
import { useProSidebar } from "react-pro-sidebar";


import { Link } from "react-router-dom";
import { colors } from "../../../common/theme/theme";
import {  Box, Typography, IconButton } from "@mui/material";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

import SpeedIcon from '@mui/icons-material/Speed';
import { HomeMax } from "@mui/icons-material";


const Item = ({ title, to, icon, selected, setSelected }) => {

  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.primary[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
      routerLink={<Link to={to} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const MyProSidebar = () => {
  const [selected, setSelected] = useState("Dashboard");
  const { collapseSidebar, toggleSidebar, collapsed, broken } = useProSidebar();
  return (
    <Box
      sx={{
        position: "sticky",
        display: "flex",
        height: "100vh",
        top: 0,
        bottom: 0,
        zIndex: 10000,
        "& .sidebar": {
          border: "none",
        },
        "& .menu-icon": {
          backgroundColor: "transparent !important",
        },
        "& .menu-item": {
          // padding: "5px 35px 5px 20px !important",
          backgroundColor: "transparent !important",
        },
        "& .menu-anchor": {
          color: `inherit !important`,
          backgroundColor: "transparent !important",
        },
        "& .menu-item:hover": {
          color: `${colors.blueAccent[500]} !important`,
          backgroundColor: `${colors.blueAccent[700]} !important`,
        },
        "& .menu-item.active": {
          color: "#000",
          backgroundColor: `${colors.primary[100]} !important`,
        },
      }}
    >
      <Sidebar
        breakPoint="md"
        backgroundColor={colors.blueAccent[200]}
      >
        <Menu iconshape="square">
          <MenuItem
            icon={
              collapsed && (
                <MenuOutlinedIcon onClick={() => collapseSidebar()} />
              ) 
            }
            style={{
              margin: "10px 0 20px 0",
              color: colors.primary[100],
            }}
          >
            {!collapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3">
                Gadgets Hub
                </Typography> 
                <HomeMax fontSize={"large"} />
                <IconButton
                  onClick={
                    broken ? () => toggleSidebar() : () => collapseSidebar()
                  }
                >
                  <CloseOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          <Box paddingLeft={collapsed ? undefined : "10%"}>
            <Item
              title="Gadgets"
              to="/"
              icon={<SpeedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default MyProSidebar;
