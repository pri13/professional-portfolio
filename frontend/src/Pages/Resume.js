import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Typography, IconButton, Toolbar, AppBar, Button, Link} from '@mui/material';
import {Box, Grid ,Paper, Container, Avatar } from '@mui/material';
import { Card, CardContent, CardMedia, CardActions, CardHeader } from '@mui/material';
import ProjectCard from '../components/ProjectCard';
import Education from '../components/Resume/Education.js'
import Experience from '../components/Resume/Experience.js'
import Summary  from '../components/Resume/Summary.js';
import Skills from '../components/Resume/Skills.js';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub'
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const MyResumePage = ({data}) => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
          try {
            const response = await axios.get('http://localhost:8000/api/resumes/latest');
            setUser(response.data);
          } catch (error) {
            console.error('Error fetching user data', error);
          }
        };
    
        fetchUser();
      }, []);

      const buttons = [
        { name: "LinkedIn", icon: <LinkedInIcon />, url:`${user.linkedin}` },
        { name: "GitHub", icon: <GitHubIcon />, url:`${user.github}`},
        
      ];

      const openInNewTab = (url) => {
          const win = window.open(url, '_blank');
          if (win != null) {
              win.focus();
          }
      };
   
  return (
      <Box sx={{ display: 'flex', flexDirection: 'column', m: 2 }}>
          <Grid container spacing={1}>
              {/* Profile Picture and Introduction */}
              <Grid item xs={12} md={12} >
                  <Card sx={{ p: 0, bgcolor: '#dff0d8' }}>
                      <CardContent>
                          <Grid container spacing={4} justifyContent="center" alignItems="center">
                              {/* Image (Avatar) on the left */}
                              <Grid item xs={12} md={4} container justifyContent="center">
                                  <Avatar sx={{ width: 200, height: 200, mb: 2 }} src="/Assets/me.png" />
                              </Grid>
                              {/* Text content on the right */}
                              <Grid item xs={12} md={8} container justifyContent="center">
                                  <div>
                                      <Typography variant="h5" gutterBottom align="center">
                                          {user.firstName} {user.lastName} | BSCE
                                      </Typography>
                                      <Typography variant="subtitle1" gutterBottom align="center"  >
                                          <strong>Senior Full Stack Software Engineer</strong>
                                      </Typography>
                                      <Typography variant="subtitle1" gutterBottom align="center">
                                          Location: {user.address?.city}, {user.address?.state}
                                      </Typography>
                                      <Typography variant="subtitle1" gutterBottom align="center">
                                          Phone: {user.phone}
                                      </Typography>
                                      <Typography variant="subtitle1" gutterBottom align="center">
                                          Email: {user.email}
                                      </Typography>
                                      <Box sx={{ display: 'flex' }}>
                                          {buttons.map((button) => (
                                              <Button sx={{ marginRight: '8px' }}
                                                  variant="outlined" color="success"
                                                  key={button.name}
                                                  startIcon={button.icon}
                                                  onClick={() => openInNewTab(button.url)}>
                                                  {button.name}
                                              </Button>
                                          ))}
                                          <Button target="_blank" href='/Priyank Patel 2.3.pdf' variant="outlined" color="success" onClick={() => openInNewTab('')}>
                                              <SaveAltIcon />Download Resume
                                          </Button>
                                      </Box>
                                  </div>
                              </Grid>
                          </Grid>
                      </CardContent>
                  </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                  <Grid container>
                      <Grid item sm={12}>
                          <Education data={user.education}></Education>
                      </Grid>
                      <Grid item sm={12}>
                        <Skills skills = {user.skills} ></Skills>
                      </Grid>
                  </Grid>
              </Grid>
              {/* Summary */}
              <Grid item sm={12} md={6}>
                  <Grid container>
                      <Grid item sm={12} md={12} >
                          <Summary summary={user.summary}></Summary>
                      </Grid>
                      <Grid item sm={12} md={12}>
                          <Experience experience={user.experience}></Experience>
                      </Grid>
                  </Grid>
              </Grid>
          </Grid>
      </Box>
  );
};

export default MyResumePage;
