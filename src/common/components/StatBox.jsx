import { Box, Typography } from "@mui/material";
import ProgressCircle from "./ProgressCircle";
import { colors } from "../theme/theme";
import { Image } from "@mui/icons-material";

const StatBox = ({ title, subtitle, progress, increase, icon, imageUrl="" }) => {
    const value = Number(increase)

  return (
    <Box width="100%" m="0 30px" p="12px 0">
      <Box display="flex" justifyContent="space-between">
        <Box>
         {imageUrl ? <Image />  : icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h5" sx={{ color: colors.grey[800] }}>
          {subtitle}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: value < 10 ? colors.redAccent[600] :colors.greenAccent[600]  }}
        >
          {`+${value} %`}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
