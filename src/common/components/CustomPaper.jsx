import { Paper } from "@mui/material";
import React from "react";

const style = {
  boxShadow: "1px 1px 6px 0px rgba(46,46,46,0.76)",
  m: 1,
  p: 2,
};
const CustomPaper = ({ children, additionStyles = {} }) => {
  return <Paper  sx={{ ...style, ...additionStyles }}>{children}</Paper>;
};

export default CustomPaper;
