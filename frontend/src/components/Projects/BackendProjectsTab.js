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

const backendProjects = [
  {
    id: 1,
    title: 'Backend Project 1',
    description: 'Replace this with your real backend project.',
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: 2,
    title: 'Backend Project 2',
    description: 'Replace this with your real backend project.',
    githubUrl: '#',
    liveUrl: '#',
  },
];

const BackendProjectsTab = () => {
  return (
    <Box elevation={3} sx={{ p: 3, borderRadius: 3, mt: 3 }}>
        <Alert severity="info" sx={{ mb: 3 }}>
          This section is under construction. Please check back later for backend projects!
        </Alert>
    </Box>
  );
};

export default BackendProjectsTab;