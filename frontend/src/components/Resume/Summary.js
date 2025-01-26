import React from 'react';
import ProjectCard from '../ProjectCard';
import { Card, CardContent, CardMedia, Typography, CardActions, Button, CardHeader, Grid } 
from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';


const Summary = (info) =>{
   
    if (!info || info.length === 0) {
        return <Typography variant="body1">No Summary data available</Typography>;
    }
    return (
        <ProjectCard
        title={'Summary'}
        description={info.summary}
        icon={<PersonIcon  />} // Pass StarIcon component directly as JSX
      />
    );
}


export default Summary;