import React from "react";
import { Box } from "@mui/material";
import { colors } from '../theme/theme';
const ProgressCircle = ({progress = "0.70", size="40"}) => {
  const angle = progress * 360;
  return (
    <Box 
        sx={{
            background: `radial-gradient(${colors.primary[100]} 55%, transparent 56%),
                conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[800]} ${angle}deg 360deg),
                ${colors.blueAccent[600]}`,
            borderRadius: "50%",
            width: `${size}px`,
            height: `${size}px`,
        }}
     />
  );
};

export default ProgressCircle;