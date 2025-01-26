import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { Container, Grid } from '@mui/material';
import { Box, Typography, Avatar } from '@mui/material';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
return (

  <Box
    display="flex"
    justifyContent="center"
    minHeight="100vh"
    bgcolor="#dff0d8"
    padding={4}
  >
    <Grid container spacing={3}>
      <Grid item>
        <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
          <Tab icon={<PhoneIcon />} label="FrontEnd" />
          <Tab icon={<FavoriteIcon />} label="BackEnd" />
          <Tab icon={<PersonPinIcon />} label="NEARBY" />
        </Tabs>
      </Grid>
    </Grid>
  </Box>



)
};

export default Projects;

