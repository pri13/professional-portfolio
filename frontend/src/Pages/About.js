import React from 'react';
import { Grid, Box, Typography } from '@mui/material';

import SwipeableTextMobileStepper from '../components/SwipeableTextMobileStepper'

const AboutMe = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgcolor="rgba(239, 231, 212, 0.4)"
      padding={1}
    >
      <Grid container spacing={1}>
        {/* Left Side - Image */}
        <Grid item xs={12} md={6} display="flex" justifyContent="center" alignItems="center">
          <Box sx={{ pt: 6 }} display="flex" justifyContent="center" alignItems="center" >
            <SwipeableTextMobileStepper />
          </Box>
        </Grid>
        {/* Right Side - Information */}

        <Grid item xs={12} md={6}>
          <Typography variant="h3" component="h1" gutterBottom>
            Priyank (Pri) Patel, BSCE
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: '500', mb: 2 }}>
            Building better systems for the people who rely on them
          </Typography>

          <Typography variant="h6" sx={{ mb: 2, color: "#666" }}>
            <Box component="span">
              Senior Software Engineer 
            </Box>

            <Box component="span" sx={{mx :1}}>
               •
            </Box>

            <Box component="span" >
              Healthcare IT
            </Box>
          </Typography>

          <Typography variant="body1" paragraph>
            I’m a software engineer with over five years of experience building software in the healthcare IT space. Most of my work has focused on creating practical, user-focused solutions that make complex systems easier to use and more efficient for the people who rely on them.
          </Typography>

          <Typography variant="body1" paragraph>
            I enjoy working through difficult problems, improving existing workflows, and building software that has a real purpose behind it. Healthcare technology can be complex, but that’s also what makes the work meaningful. Small improvements can have a big impact when they help teams work faster, reduce friction, or create a better experience for end users.
          </Typography>

          <Typography variant="body1" paragraph>
            I earned my Bachelor’s degree in Computer Engineering from the University of Central Florida, where I built the foundation that shaped my path into software development. Since then, I’ve continued to grow by learning new technologies, refining how I build, and staying curious about better ways to solve problems.
          </Typography>

          <Typography variant="body1" paragraph>
            Outside of work, I value staying active and challenging myself. I enjoy working out, rock climbing, hiking, traveling, and spending time outdoors. I’m also someone who appreciates good coffee, great desserts, and quality time with family and friends.
          </Typography>

          <Typography variant="body1" paragraph>
            I’ve called Jacksonville, Florida home for more than 20 years, and I’m grateful for the people, experiences, and opportunities that continue to shape who I am.
          </Typography>

          <Typography sx={{my:2}} >
            Based in Jacksonville, Florida, I’m always open to connecting with others in the tech community, sharing ideas, and exploring new opportunities. If you’d like to chat about software development, healthcare technology, or just want to say hi, feel free to reach out!
          </Typography>

          <Typography variant="h5" component="h5">
            Work hard. Play hard.
          </Typography>
        </Grid>
      </Grid>

    </Box>
  );
};

export default AboutMe;
