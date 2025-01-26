import React from 'react';
import { Container, Grid, Box, Typography, Avatar } from '@mui/material';

import SwipeableTextMobileStepper from '../components/SwipeableTextMobileStepper'

const AboutMe = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgcolor="#dff0d8"
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
        <Grid item xs={12} md={6} >
          <Typography variant="h3" component="h1" gutterBottom>
            Priyank (Pri) Patel, BSCE
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom sx={{ textDecoration: 'underline' }}>
            Senior Software Engineer at Sedgwick | Computer Engineering Degree
          </Typography>
          <Typography variant="body1" paragraph>
            I am passionate about personal growth and exploration, both professionally and personally. I dedicate time to fitness and enjoy the energy and discipline that come from working out at the gym. I have a deep love for outdoor activities, including rock climbing, hiking, and exploring nature, which fuel my adventurous spirit. Additionally, I am passionate about sports, appreciating the dedication, strategy, and teamwork they inspire. Beyond physical pursuits, I also enjoy traveling and immersing myself in new cultures, gaining fresh perspectives that spark creativity and innovation in my work. I’m a true enthusiast for good coffee and can’t resist indulging in delicious desserts, always on the hunt for the next perfect combination of flavors. These small joys bring balance and delight to my day-to-day life.
          </Typography>
          <Typography variant="body1" paragraph>
            Professionally, I have been working in the IT industry, specifically within the healthcare sector, for over five years. During this time, I have dedicated myself to writing software that enhances end-user experiences, solves complex problems, and creates value-driven products. My work is centered on leveraging technology to make meaningful impacts, improving efficiency and outcomes in a domain as critical as healthcare.
          </Typography>
          <Typography variant="body1" paragraph>
            I received my Bachelor's in Computer Engineering from the University of Central Florida, an institution that played a significant role in shaping me into the person I am today. The university provided me with the necessary education and core foundation to thrive in my career and pursue my passion for technology.
          </Typography>
          <Typography variant="body1" paragraph>
            As a technology enthusiast, I am deeply committed to learning emerging technologies and applying them to solve complex problems through efficient and optimal solutions. With a lifelong love for computers, I find immense joy in working with technology, whether it’s tackling challenging projects, optimizing workflows, or driving impactful digital transformations.
          </Typography>
          <Typography variant="body1" paragraph>
            Beyond my personal interests, I am passionate about investing wisely. Whether it’s in stocks, business ventures, or opportunities that create long-term value, I enjoy strategically placing my resources where they matter most.
          </Typography>
          <Typography variant="body1" paragraph>
            Above all, I value spending quality time with my family and friends. Whether it’s celebrating special moments or simply enjoying meaningful conversations, I cherish the connections that bring warmth and happiness to my life.
          </Typography>
          <Typography variant="body1" component="h5">
            Lastly, I am a U.S. citizen and have been living in Jacksonville, FL for the last 20+ years.
          </Typography>
          <Typography variant="h5" component="h5">
            Work Hard, Play Hard...
          </Typography>
        </Grid>
      </Grid>

    </Box>
  );
};

export default AboutMe;
