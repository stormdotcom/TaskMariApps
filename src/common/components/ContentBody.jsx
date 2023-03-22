import React from "react";
import { Typography, Box } from "@mui/material";
import { colors } from "../theme/theme";

const ContentBody = ({ subHeading="", content="", subHeadingText="", isContent=false, inline=false, color=colors.grey[100], addStyle={} }) => {
    if(isContent) {
        return  <Typography sx={{ mb: "3px", ...addStyle }} variant="p" fontWeight="small" color={color} >
        {content}
      </Typography>
    }
    if(inline) {
      return <Box my="10px" >
      <Typography
        variant="p"
        color={color}
        fontWeight="bold"
        sx={{ mb: "5px",  mr:"15px", ...addStyle }}
      >
        {subHeading}
      </Typography>
      <Typography variant="p" fontWeight="small" color={color} >
        {content}
      </Typography>
    </Box>
    }
    if(subHeadingText) {
      return <Box my="10px" >
      <Typography
        variant="p"
        color={color}
        fontWeight="bold"
        sx={{ mb: "5px",  mr:"15px", ...addStyle }}
      >
        {subHeading}
      </Typography>
      <br />
      <Typography
        variant="p"
        color={color}
        fontWeight="small"
      >
        {subHeadingText}
      </Typography>
      <Typography variant="p" fontWeight="small" color={color} >
        {content}
      </Typography>
    </Box>
    }
  return (
    <Box my="10px">
      <Typography
        variant="p"
        color={color}
        fontWeight="bold"
        sx={{ mb: "5px", ...addStyle }}
      >
        {subHeading}
      </Typography>
      <Box>
      <Typography variant="p" fontWeight="small" color={color} >
        {content}
      </Typography>
      </Box>
    </Box>
  );
};

export default ContentBody;
