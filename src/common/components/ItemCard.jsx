import { Box, Tooltip, Typography } from "@mui/material";
import Discount from "./Discount";
import { colors } from "../theme/theme";
import ReactStars from "react-rating-stars-component";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ItemCard = ({ title="", brand="", subtitle="", discountPercentage, rating, icon, imageUrl="", description="" }) => {
    const value = Number(rating)

  return (
    <Box width="100%" m="0 30px" p="12px 0">
      <Box display="flex" justifyContent="space-between">
        <Box>
         {imageUrl ?  <Box
        component="img"
        sx={{
          height: 100,
          width: 75,
          maxHeight: { xs: 100, md: 80 },
          maxWidth: { xs: 75, md: 63 },
          borderRadius:"10px"
        }}
        alt={`${subtitle} ${brand}`}
        src={imageUrl}
      /> : icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
          <Typography
            variant="p"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
           Manufacturer : 
          </Typography>
          <Typography
            variant="h6"
            fontWeight="bold"
            display="inline"
            sx={{ color: colors.grey[100] }}
          >
            {brand}
          </Typography>
        </Box>
        <Box>
          <Discount discountPercentage={discountPercentage} />
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
       <Box>
       <Typography variant="h6" display="inline" sx={{ color: colors.grey[800] }}>
          Category : 
        </Typography>
        <Typography   display="inline" variant="p" sx={{ color: colors.grey[800] }}>
          {subtitle}
        </Typography>
       </Box>
        <ReactStars
    count={5}
    value={value}
    size={24}
    activeColor="#ffd700"
  />
      </Box>
      <Tooltip title={description}>
      <ExpandMoreIcon sx={{ cursor:"pointer" }} />
</Tooltip>
    </Box>
  );
};

export default ItemCard;
