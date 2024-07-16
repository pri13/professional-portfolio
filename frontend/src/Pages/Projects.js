import React from 'react';
import { Container, Grid } from '@mui/material';
import ProjectCard from '../components/ProjectCard';

const Projects = () => (
  <Container>
    <Grid container spacing={3}>
      {/* Render ProjectCard components here */}
      <ProjectCard title="Project 1" description="Description of project 1" />
      <ProjectCard title="Project 2" description="Description of project 2" />
    </Grid>
  </Container>
);

export default Projects;