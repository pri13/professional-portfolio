import React from 'react';
import { Box, Grid, Typography, Button, Avatar } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const HomePage = () => {
  const openInNewTab = (url) => {
    if (!url) return;
    const win = window.open(url, '_blank');
    if (win) win.focus();
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f0f4f8', px: { xs: 2, md: 6 }, py: { xs: 4, md: 8 } }}>
      <Grid container spacing={4} alignItems="center">
        
        {/* Left Side - Photo */}
        <Grid item xs={12} md={5} container justifyContent="center">
          <Avatar
            src="/Assets/me-2.jpg"
            sx={{
              width: { xs: 200, md: 300 },
              height: { xs: 200, md: 300 },
              border: '4px solid #4caf50',
              boxShadow: 4,
            }}
          />
        </Grid>

        {/* Right Side - Info */}
        <Grid item xs={12} md={7}>
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h2" fontWeight="bold" gutterBottom>
              Hi, I'm Priyank Patel
            </Typography>
            <Typography variant="h5" color="text.secondary" gutterBottom>
              Full Stack Developer
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              I create modern and responsive web applications with clean code and beautiful UI.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' }, flexWrap: 'wrap' }}>
              <Button variant="contained" color="secondary" onClick={() => openInNewTab('/projects')}>
                View Projects
              </Button>
              <Button variant="outlined" color="inherit" onClick={() => openInNewTab('/contact')}>
                Contact Me
              </Button>
            </Box>

            {/* Social Buttons */}
            <Box sx={{ display: 'flex', gap: 2, mt: 4, justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <Button
                variant="outlined"
                startIcon={<LinkedInIcon />}
                onClick={() => openInNewTab('https://linkedin.com')}
              >
                LinkedIn
              </Button>
              <Button
                variant="outlined"
                startIcon={<GitHubIcon />}
                onClick={() => openInNewTab('https://github.com')}
              >
                GitHub
              </Button>
              <Button
                variant="outlined"
                startIcon={<EmailIcon />}
                onClick={() => openInNewTab('mailto:email@example.com')}
              >
                Email
              </Button>
            </Box>
          </Box>
        </Grid>

      </Grid>
    </Box>
  );
};

export default HomePage;