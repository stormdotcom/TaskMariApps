import {
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { colors } from "../../common/theme/theme";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import AirlineSeatFlatIcon from '@mui/icons-material/AirlineSeatFlat';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import UnsubscribeIcon from '@mui/icons-material/Unsubscribe';
import CreditCardIcon from '@mui/icons-material/CreditCard';

import Header from "../../common/components/Header";
import StatBox from "../../common/components/StatBox";


const DashBoard = () => {
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
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

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={12} sm={12} md={6} lg={3} xl={3}>
          <Box
            width="100%"
            backgroundColor={colors.primary[100]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{borderRadius: "5px", boxShadow: `${colors.grey[800]} 0px 3px 8px`}}
          >
            <StatBox
              title="12,361"
              subtitle="Emails Sent"
              progress="0.75"
              increase={14}
              icon={
                <EmailIcon
                  sx={{ color: colors.blueAccent[100], fontSize: "26px" }}
                />
              }
            />
          </Box>
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={3} xl={3}>
          <Box
            width="100%"
            backgroundColor={colors.primary[100]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{borderRadius: "5px", boxShadow: `${colors.grey[800]} 0px 3px 8px`}}
          >
            <StatBox
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
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={3} xl={3}>
          <Box
            width="100%"
            backgroundColor={colors.primary[100]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{borderRadius: "5px", boxShadow: `${colors.grey[800]} 0px 3px 8px`}}
          >
            <StatBox
              title="32,441"
              subtitle="Enrolled Customers"
              progress="0.30"
              increase={5}
              icon={
                <PersonAddIcon
                sx={{ color: colors.blueAccent[100], fontSize: "26px" }}
                />
              }
            />
          </Box>
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={3} xl={3}>
          <Box
            width="100%"
            backgroundColor={colors.primary[100]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{borderRadius: "5px", boxShadow: `${colors.grey[800]} 0px 3px 8px`}}
          >
            <StatBox
              title="1,325,134"
              subtitle="Enquiries Received"
              progress="0.80"
              increase={43}
              icon={
                <TrafficIcon
                sx={{ color: colors.blueAccent[100], fontSize: "26px" }}
                />
              }
            />
          </Box>
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={3} xl={3}>
          <Box
            width="100%"
            backgroundColor={colors.primary[100]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{borderRadius: "5px", boxShadow: `${colors.grey[800]} 0px 3px 8px`}}
          >
            <StatBox
              title="12,361"
              subtitle="Emails Sent"
              progress="0.75"
              increase={14}
              icon={
                <EmailIcon
                sx={{ color: colors.blueAccent[100], fontSize: "26px" }}
                />
              }
            />
          </Box>
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={3} xl={3}>
          <Box
            width="100%"
            backgroundColor={colors.primary[100]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{borderRadius: "5px", boxShadow: `${colors.grey[800]} 0px 3px 8px`}}
          >
            <StatBox
              title="32,441"
              subtitle="Enrolled Customers"
              progress="0.30"
              increase={5}
              icon={
                <PersonAddIcon
                sx={{ color: colors.blueAccent[100], fontSize: "26px" }}
                />
              }
            />
          </Box>
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={3} xl={3}>
          <Box
            width="100%"
            backgroundColor={colors.primary[100]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{borderRadius: "5px", boxShadow: `${colors.grey[800]} 0px 3px 8px`}}
          >
            <StatBox
              title="12,361"
              subtitle="Transactions"
              progress="0.65"
              increase={14}
              icon={
                <CreditCardIcon
                sx={{ color: colors.blueAccent[100], fontSize: "26px" }}
                />
              }
            />
          </Box>
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={3} xl={3}>
          <Box
            width="100%"
            backgroundColor={colors.primary[100]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{borderRadius: "5px", boxShadow: `${colors.grey[800]} 0px 3px 8px`}}
          >
            <StatBox
              title="3,125"
              subtitle="Total Complaints"
              progress="0.700"
              increase={20}
              icon={
                <EmailIcon
                sx={{ color: colors.blueAccent[100], fontSize: "26px" }}
                />
              }
            />
          </Box>
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={3} xl={3}>
          <Box
            width="100%"
            backgroundColor={colors.primary[100]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{borderRadius: "5px", boxShadow: `${colors.grey[800]} 0px 3px 8px`}}
          >
            <StatBox
              title="112"
              subtitle="Complaints Pending"
              progress="0.75"
              increase={14}
              icon={
                <UnsubscribeIcon
                sx={{ color: colors.blueAccent[100], fontSize: "26px" }}
                />
              }
            />
          </Box>
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={3} xl={3}>
          <Box
            width="100%"
            backgroundColor={colors.primary[100]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{borderRadius: "5px", boxShadow: `${colors.grey[800]} 0px 3px 8px`}}
          >
            <StatBox
              title="441"
              subtitle="Complaints Resolved"
              progress="0.30"
              increase={5}
              icon={
                <MoveToInboxIcon
                sx={{ color: colors.blueAccent[100], fontSize: "26px" }}
                />
              }
            />
          </Box>
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={3} xl={3}>
          <Box
            width="100%"
            backgroundColor={colors.primary[100]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{borderRadius: "5px", boxShadow: `${colors.grey[800]} 0px 3px 8px`}}
          >
            <StatBox
              title="1000"
              subtitle="Staffs"
              progress="0.95"
              increase={1}
              icon={
                <EmojiPeopleIcon
                sx={{ color: colors.blueAccent[100], fontSize: "26px" }}
                />
              }
            />
          </Box>
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={3} xl={3}>
          <Box
            width="100%"
            backgroundColor={colors.primary[100]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{borderRadius: "5px", boxShadow: `${colors.grey[800]} 0px 3px 8px`}}
          >
            <StatBox
              title="3,212"
              subtitle="Patients "
              progress="0.10"
              increase={1}
              icon={
                <AirlineSeatFlatIcon
                sx={{ color: colors.blueAccent[100], fontSize: "26px" }}
                />
              }
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashBoard;
