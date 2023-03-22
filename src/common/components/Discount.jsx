import React from "react";
import { Box, Typography } from "@mui/material";
import { colors } from '../theme/theme';
import { Grid } from "@mui/material";
const Discount = ({rating = "0.70", size="60", discountPercentage=0}) => {
  const angle = (discountPercentage/100) * 360;
  const circleColor =  Number(discountPercentage) > 10 ?  colors.greenAccent[500] : colors.redAccent[500]
  return (
    <Grid sx={{ 
      display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column"
    }}> 
     <Typography
            variant="p"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
           Discount :
          </Typography>
    <Box 
        sx={{
            background: `radial-gradient(${colors.primary[100]} 55%, transparent 56%),
                conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[800]} ${angle}deg 360deg),
                ${circleColor}`,
            borderRadius: "50%",
            width: `${size}px`,
            height: `${size}px`,
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        }}
        
     >  
     <Typography
            variant="p"
            fontWeight="bold"
            sx={{ color: Number(discountPercentage) > 10 ?  colors.greenAccent[500] : colors.redAccent[500] }}
          >
          {`${discountPercentage} %`} 
          </Typography>
          </Box>
     </Grid>
  );
};

export default Discount;