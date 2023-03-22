import { useState } from "react";
import { Menu, Sidebar, MenuItem } from "react-pro-sidebar";
import { useProSidebar } from "react-pro-sidebar";


import { Link } from "react-router-dom";
import { colors } from "../../../common/theme/theme";
import {  Box, Typography, IconButton } from "@mui/material";

import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import PersonIcon from '@mui/icons-material/Person';
import SpeedIcon from '@mui/icons-material/Speed';
import ShieldIcon from '@mui/icons-material/Shield';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import MedicationIcon from '@mui/icons-material/Medication';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MasksIcon from '@mui/icons-material/Masks';
import PaymentIcon from '@mui/icons-material/Payment';

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
          backgroundColor: `${colors.blueAccent[100]} !important`,
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
                <Typography variant="h3" color={colors.grey[900]}>
                  Product Name
                </Typography>
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
              title="Dashboard"
              to="/"
              icon={<SpeedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Info"
              to="/customers-info"
              icon={<PersonIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Customers"
              to="/customers"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Shield"
              to="/security"
              icon={<ShieldIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Emergency"
              to="/emergency"
              icon={<LocalPharmacyIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Medical Kit"
              to="/medic"
              icon={<MedicationIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calender"
              to="/calender"
              icon={<CalendarMonthIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Hospital"
              to="/hospital"
              icon={<MasksIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Payment"
              to="/payment"
              icon={<PaymentIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Help"
              to="/line"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Map"
              to="/map"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
             <Item
              title="Speed"
              to="/speed"
              icon={<SpeedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Ask"
              to="/ask"
              icon={<HelpOutlineOutlinedIcon />}
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
