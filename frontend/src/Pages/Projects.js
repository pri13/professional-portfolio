import React from 'react';
import { Box, Container, Tab, Tabs, Typography } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import DescriptionIcon from '@mui/icons-material/Description';

import FrontendProjectsTab from '../components/Projects/FrontendProjectsTab';
import BackendProjectsTab from '../components/Projects/BackendProjectsTab';
import DocumentsTab from '../components/Projects/DocumentsTab';

const TabPanel = ({ children, value, index }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`projects-tabpanel-${index}`}
      aria-labelledby={`projects-tab-${index}`}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

const Projects = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          textAlign: 'center',
          mb: 1,
        }}
      >
        Projects
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        sx={{
          textAlign: 'center',
          mb: 4,
        }}
      >
        Explore frontend projects, backend projects, and engineering documents.
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mb: 2,
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="projects tabs"
        >
          <Tab
            icon={<CodeIcon />}
            iconPosition="start"
            label="FrontEnd"
            id="projects-tab-0"
            aria-controls="projects-tabpanel-0"
          />
          <Tab
            icon={<StorageIcon />}
            iconPosition="start"
            label="BackEnd"
            id="projects-tab-1"
            aria-controls="projects-tabpanel-1"
          />
          <Tab
            icon={<DescriptionIcon />}
            iconPosition="start"
            label="Documents"
            id="projects-tab-2"
            aria-controls="projects-tabpanel-2"
          />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <FrontendProjectsTab />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <BackendProjectsTab />
      </TabPanel>

      <TabPanel value={value} index={2}>
        <DocumentsTab />
      </TabPanel>
    </Container>
  );
};

export default Projects;