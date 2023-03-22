import { useEffect, useState } from "react";
import {
  Box,
  useTheme,
  useMediaQuery,
  Grid
} from "@mui/material";


import { colors } from "../../common/theme/theme";
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import Header from "../../common/components/Header";
import ItemCard from "../../common/components/ItemCard";



const DashBoard = () => {
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const [items, setItems] = useState([])

  useEffect(()=>{
    fetch("https://dummyjson.com/products")
    .then((res)=> res.json())
    .then((data)=> setItems(data.products))
  }, [])

  return (
    <Box m="20px">
      <Box
        display={smScreen ? "flex" : "block"}
        flexDirection={smScreen ? "row" : "column"}
        justifyContent={smScreen ? "space-between" : "start"}
        alignItems={smScreen ? "center" : "start"}
        m="10px 0"
      >
        <Header title="Gadgets List" subtitle="Get all the trending stuff." />
        <Box>
        </Box>
      </Box>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg:4 }}>
        {items.map((item)=>{
          return  <Grid xs={12} sm={12} md={6} lg={4} xl={4}>
          <Box
            width="100%"
            backgroundColor={colors.primary[100]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{borderRadius: "5px", boxShadow: `${colors.grey[800]} 0px 3px 8px`}}
          >
            <ItemCard
              title={item.title}
              brand={item.brand}
              subtitle={item.category}
              discountPercentage={item.discountPercentage}
              rating={item.rating}
              description={item.description}
              price={item.price}
              imageUrl={item.thumbnail}
              icon={
                <PhoneAndroidIcon
                  sx={{ color: colors.blueAccent[100], fontSize: "26px" }}
                />
              }
            />
          </Box>
        </Grid>
        })}

        {/* <Grid xs={12} sm={12} md={6} lg={3} xl={3}>
          <Box
            width="100%"
            backgroundColor={colors.primary[100]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{borderRadius: "5px", boxShadow: `${colors.grey[800]} 0px 3px 8px`}}
          >
            <ItemCard
              title="431,225"
              subtitle="Customers"
              progress="0.50"
              increase={21}
              icon={
                <PointOfSaleIcon
                sx={{ color: colors.blueAccent[100], fontSize: "26px" }}
                />
              }
            />
          </Box>
        </Grid> */}
      </Grid>
    </Box>
  );
};

export default DashBoard;
