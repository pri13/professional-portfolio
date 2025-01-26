import React from 'react';
import { Box, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
const Footer = () => (
  <AppBar position="static" color="primary">
    <Toolbar>
      <Typography variant="body1" color="inherit">
        &copy; 2024 Priyank Patel
      </Typography>
      <Box sx={{ flexGrow: 1 }} />
      <IconButton color="inherit" href="https://www.linkedin.com/in/priyank-patel-bsce-soft-dev">
        <LinkedInIcon />
      </IconButton>
      <IconButton color="inherit" href="https://github.com/pri13">
        <GitHubIcon />
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default Footer;
