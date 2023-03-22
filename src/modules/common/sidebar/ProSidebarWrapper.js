import React from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import MyProSidebar from "./MyProSidebar";

export const ProSidebarWrapper = ({ children }) => {

  return (
    <ProSidebarProvider>
        <div
          style={{
            display: "flex",
            flexDirection:  "row",
          }}
        >
          <MyProSidebar />
          {children}
        </div>
    </ProSidebarProvider>
  );
};


