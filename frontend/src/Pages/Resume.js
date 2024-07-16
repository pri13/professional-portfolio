import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Typography, IconButton, Toolbar, AppBar, Button} from '@mui/material';
import {Box, Grid ,Paper, Container, Avatar } from '@mui/material';
import {LinkedInIcon, GitHubIcon,  InstagramIcon} from '@mui/icons-material';
import { Card, CardContent, CardMedia, CardActions, CardHeader } from '@mui/material';
import ProjectCard from '../components/ProjectCard';
import { useLocation } from 'react-router-dom';

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
   
  return (
      <Box sx={{ display: 'flex', flexDirection: 'column', m: 2 }}>
          <Grid container spacing={3}>
              {/* Profile Picture and Introduction */}
              <Grid item xs={12} md={12}>
              
                      <Card>
                          <CardContent>
                              <Grid container spacing={2} >
                                  {/* Image (Avatar) on the left */}
                                  <Grid item xs={12} sm={4}>
                                      <Avatar sx={{ width: 200, height: 200, mb: 2, mx: 'auto' }} src="/Assets/me.png" />
                                  </Grid>
                                  {/* Text content on the right */}
                                  <Grid item xs={12} sm={8}>
                                      <Typography variant="h5" gutterBottom>
                                          {user.firstName} {user.lastName}
                                      </Typography>
                                      <Typography variant="subtitle1" gutterBottom>
                                          Software Developer | React.js, Node.js
                                      </Typography>
                                      <Typography variant="body1">
                                          Passionate about creating elegant solutions to complex problems. I enjoy learning new technologies and collaborating on innovative projects.
                                      </Typography>
                                  </Grid>
                              </Grid>
                          </CardContent>
                          {/* <CardActions sx={{ justifyContent: 'center' }}>
                              <Button variant="outlined" color="primary">
                                  Action 1
                              </Button>
                              <Button variant="outlined" color="error">
                                  Action 2
                              </Button>
                          </CardActions> */}
                      </Card>
               
                  <ProjectCard title={'Education'}
                      description={'Led development projects, collaborated with cross-functional teams'}
                      imageUrl={null} >
                  </ProjectCard>
                  <Paper sx={{ p: 2, my: 4 }}>
                      {/* <pre>
        {JSON.stringify(user.experience, null, 2)}
      </pre> */}
                      <Typography variant="h6" gutterBottom>
                          Skills & Interests
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                          - React.js, Node.js, JavaScript <br />
                          - UI/UX Design, Responsive Web Design <br />
                          - Photography, Traveling, Music <br />
                          - Open Source Contribution, Blogging <br />
                      </Typography>
                  </Paper>
              </Grid>
              {/* Skills and Interests */}
              <Grid item xs={12} md={8} >
                  <ProjectCard title={'Education' }>
                      description={'Led development projects, collaborated with cross-functional teams'}
                      imageUrl={null} 
                  </ProjectCard>
                 
                  <ProjectCard title={'Experience'}
                      description={'Led development projects, collaborated with cross-functional teams'}
                      imageUrl={null} >
                  </ProjectCard>
              </Grid>
              {/* Experience */}
              <Grid item xs={12}>

              </Grid>

              {/* Education */}
              <Grid item xs={12}>

              </Grid>

              {/* Contact */}
              <Grid item xs={12}>
                  <Paper sx={{ p: 2 }}>
                      <Typography variant="h6" gutterBottom>
                          Contact Me
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                          Email: john.doe@example.com <br />
                          Phone: +123 456 7890 <br />
                      </Typography>
                  </Paper>
              </Grid>
          </Grid>
      </Box>
  );
};

export default MyResumePage;
