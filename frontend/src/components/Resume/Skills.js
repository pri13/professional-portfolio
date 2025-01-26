import React from 'react';

import { Card, CardContent, CardMedia, Typography, CardActions, Button, CardHeader, Grid,Avatar ,Box,  Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import StarRateIcon from '@mui/icons-material/StarRate';
import CircleIcon from '@mui/icons-material/Circle';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Skills = ({ skills }) => {
    console.log(skills)
  if (!skills || Object.keys(skills).length === 0) {
    return <Typography variant="body1">No skills data available</Typography>;
  }

  const keys = Object.keys(skills);

  const renderStars = (rating) => {
    const filledStars = Array.from({ length: 5 }, (_, index) => (
      <CircleIcon key={index} style={{ color: '#1976d2' }} />
    ));
    const emptyStars = Array.from({ length: 5 - rating }, (_, index) => (
      <CircleIcon key={index} style={{ color: '#e0e0e0' }} />
    ));
    return [...filledStars.slice(0, rating), ...emptyStars];
  };

  const renderSkills = (categorySkills) => {
    if(!skills || !categorySkills){
      return <Typography variant="body1">No skills data available</Typography>;
    }
    var skillItems = skills[`${categorySkills}`];
    
   return skillItems.map((skill) => (
     <Box key={skill._id} sx={{ my: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
       <Typography variant="body1" sx={{ mr: 2 }}>
         {skill.technology}
       </Typography>
       <Box sx={{ display: 'flex', alignItems: 'center' }}>
         {renderStars(skill.rating)}
       </Box>
     </Box>
   ));
  };
  const renderSkillCategories = () => {
    return (
      <Card sx={{ my: 2, }} >
        <CardHeader
          avatar={
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              <SchoolIcon />
              <Typography variant="h6" sx={{ marginLeft: 1 }}>
                Skills
              </Typography>
            </Box>
          }
          sx={{ background: "#efe7d469", color: 'green', p: 1 }}>
        </CardHeader>
        <CardContent>   <div className="skill-categories">
          {keys.map((item, index) => (
            <Accordion sx={{
              '&:hover': {
                backgroundColor: '#dff0d8',
              },
            }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6" color='primary'>{item}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {renderSkills(item)}
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="skills">    
      {renderSkillCategories()}
    </div>
  );
};

export default Skills;
