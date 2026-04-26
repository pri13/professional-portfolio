import React from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
  Typography,
  Paper,
  Box,
  Alert
} from '@mui/material';

const frontendProjects = [
  {
    id: 1,
    title: 'Professional Portfolio',
    description: 'Personal portfolio built with React and MUI.',
    githubUrl: 'https://github.com/pri13/professional-portfolio',
    liveUrl: 'https://professional-portfolio-wheat.vercel.app',
  },
  {
    id: 2,
    title: 'Frontend Project 2',
    description: 'Replace this with your real frontend project.',
    githubUrl: '#',
    liveUrl: '#',
  },
];

const FrontendProjectsTab = () => {
  return (
    <Box elevation={3} sx={{ p: 3, borderRadius: 3, mt: 3 }}>
           <Alert severity="info" sx={{ mb: 3 }}>
             This section is under construction. Please check back later for frontend projects!
           </Alert>
       </Box>
  );
};

export default FrontendProjectsTab;