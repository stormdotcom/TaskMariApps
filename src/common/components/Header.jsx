import React from "react";
import { Typography, Box } from "@mui/material";
import { colors } from "../theme/theme";

const Header = ({ title, subtitle }) => {

  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.blueAccent[200]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
