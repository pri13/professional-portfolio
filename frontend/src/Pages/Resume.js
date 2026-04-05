import React, { useEffect, useState } from 'react';
import { Typography, Button, Box, Grid, Avatar, Card } from '@mui/material';
import Education from '../components/Resume/Education.js';
import Experience from '../components/Resume/Experience.js';
import Summary from '../components/Resume/Summary.js';
import Skills from '../components/Resume/Skills.js';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SaveAltIcon from '@mui/icons-material/SaveAlt';

import { useLoader } from '../context/LoaderContext';
import api from '../api.js';

const MyResumePage = ({ data }) => {
  const [user, setUser] = useState({});
  const { showLoader, hideLoader } = useLoader();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        showLoader("Fetching resume data...");
        const response = await api.get('api/resumes/latest');
        setUser(response.data);
        hideLoader();
      } catch (error) {
        hideLoader();
        console.error('Error fetching user data', error);
      }
    };
    fetchUser();
  },  [showLoader, hideLoader]);

  const buttons = [
    { name: "LinkedIn", icon: <LinkedInIcon />, url: `${user.linkedin}` },
    { name: "GitHub", icon: <GitHubIcon />, url: `${user.github}` },
  ];

  const openInNewTab = (url) => {
    const win = window.open(url, '_blank');
    if (win != null) win.focus();
  };

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, bgcolor: '#f5f7fa', minHeight: '100vh' }}>
      <Grid container spacing={4} justifyContent="center">
        {/* Profile Card */}
        <Grid item xs={12}>
          <Card sx={{ p: 3, borderRadius: 3, boxShadow: 6, bgcolor: '#ffffff' }}>
            <Grid container spacing={4} alignItems="center">
              {/* Avatar */}
              <Grid item xs={12} md={4} container justifyContent="center">
                <Avatar
                  sx={{ width: 180, height: 180, border: '4px solid #4caf50' }}
                  src="/Assets/me.png"
                />
              </Grid>
              {/* User Info */}
              <Grid item xs={12} md={8} container justifyContent="center">
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" fontWeight="bold" gutterBottom>
                    {user.firstName} {user.lastName} | BSCE
                  </Typography>
                  <Typography variant="h6" color="text.secondary" gutterBottom>
                    Senior Full Stack Software Engineer
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                     {user.address?.city}, {user.address?.state} |  {user.phone} | {user.email}
                  </Typography>
                  <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1 }}>
                    {buttons.map((button) => (
                      <Button
                        key={button.name}
                        variant="outlined"
                        color="success"
                        startIcon={button.icon}
                        onClick={() => openInNewTab(button.url)}
                        sx={{ borderRadius: 2 }}
                      >
                        {button.name}
                      </Button>
                    ))}
                    <Button
                      variant="contained"
                      color="success"
                      startIcon={<SaveAltIcon />}
                      sx={{ borderRadius: 2 }}
                      onClick={() => openInNewTab('/Priyank Patel 2.3.pdf')}
                    >
                      Download Resume
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Grid>

        {/* Education & Skills */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Education data={user.education} />
            </Grid>
            <Grid item xs={12}>
              <Skills skills={user.skills} />
            </Grid>
          </Grid>
        </Grid>

        {/* Summary & Experience */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Summary summary={user.summary} />
            </Grid>
            <Grid item xs={12}>
              <Experience experience={user.experience} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MyResumePage;