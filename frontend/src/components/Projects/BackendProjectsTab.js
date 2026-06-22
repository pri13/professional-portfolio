import React from "react";
import { Box } from "@mui/material";
import DisplayProjects from "./ShowProjects.js";

export default function BackendProjectsTab() {
  return (
    <Box>
      <DisplayProjects category="backend" />
    </Box>
  );
}