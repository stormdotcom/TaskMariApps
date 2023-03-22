import {  theme } from "./common/theme/theme";
import { CssBaseline, Grid, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { ProSidebarWrapper } from "./modules/common/sidebar/ProSidebarWrapper";

import ToolBar from "./modules/common/ToolBar";
import Dashboard from "./modules/gadgets";
import Footer from "./modules/common/Footer";



const App = () => {
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ProSidebarWrapper>
          <Grid style={{ height: "100%", width: "100%" }}>
            <Grid>
              <ToolBar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
              </Routes>
              <Footer />
            </Grid>
          </Grid>
        </ProSidebarWrapper>
      </ThemeProvider>
  );
};

export default App;
