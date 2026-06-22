import React from "react";
import { Box } from "@mui/material";
import DisplayProjects from "./ShowProjects.js";

export default function FrontendProjectsTab() {
  return (
    <Box>
      <DisplayProjects category="frontend" />
    </Box>
  );
}