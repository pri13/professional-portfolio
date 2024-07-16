import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Card, CardContent, CardMedia, CardActions, CardHeader } from '@mui/material';

const AboutMePage = () => {
  return (
      <Box sx={{ display: 'flex', flexDirection: 'column',  m:2 }}>
          {/* Main content */}
              <Grid container spacing={3}>
                  {/* Profile Picture and Introduction */}
                  <Grid item xs={12} md={4}>
                      <Paper sx={{ p: 2, textAlign: 'center' }}>
                          <Avatar sx={{ width: 150, height: 150, mb: 2, mx: 'auto' }} src="/Assets/me.png" />
                          <Typography variant="h5" gutterBottom>
                              Priyank Patel
                          </Typography>
                          <Typography variant="subtitle1" gutterBottom>
                              Software Developer | React.js, Node.js
                          </Typography>
                          <Typography variant="body1">
                              Passionate about creating elegant solutions to complex problems. I enjoy learning new technologies and collaborating on innovative projects.
                          </Typography>
                      </Paper>
                      
                      <Paper sx={{ p: 2, my:4 }}>
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
                  <Grid item xs={12} md={8}>
                  <Paper sx={{ p: 2,mb:1 }}>
                          <Typography variant="h6" gutterBottom>
                              Education
                          </Typography>
                          <Typography variant="subtitle1" gutterBottom>
                              B.S. in Computer Science, University of XYZ (2014 - 2018)
                          </Typography>
                      </Paper>
                  <Card>
                          <CardHeader
                              title="Experience"
                              sx={{ background: "#efe7d469", color: 'green', p:1 }}>
                          </CardHeader>
                          <CardContent>
                              <Typography variant="subtitle1" gutterBottom>
                                  Software Developer at ABC Tech (2018 - Present)
                              </Typography>
                              <Typography variant="body1">
                                  Led development projects, collaborated with cross-functional teams, and optimized application performance.
                              </Typography>
                          </CardContent>
                      </Card>

                     
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

export default AboutMePage;
