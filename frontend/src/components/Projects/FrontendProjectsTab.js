import React, { useEffect, useState } from "react";
import { Grid, Card, CardContent, Typography, Button, Chip, Box, Divider, CardHeader } from "@mui/material";
import { useHistory } from "react-router-dom";
import DisplayProjects from "./ShowProjects.js";

import api from "../../api.js";

export default function FrontendProjectsTab() { 
  return (
    <Box >
      <DisplayProjects category="frontend" />
      </Box>

  );
}