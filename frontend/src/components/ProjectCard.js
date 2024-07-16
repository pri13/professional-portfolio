import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActions, Button, CardHeader } from '@mui/material';

const ProjectCard = ({ title, description, imageUrl }) => (
  <Card sx={{ my: 2 }}>
    <CardHeader title={title} sx={{ background: "#efe7d469", color: 'green', p: 1 }}></CardHeader>
    {imageUrl && (<CardMedia
      component="img"
      height="140"
      image={imageUrl}
      alt={title}
    />)
    }
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
  </Card>
);

export default ProjectCard;