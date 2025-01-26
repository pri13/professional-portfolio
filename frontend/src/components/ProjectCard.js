import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActions, Button, CardHeader ,Box } 
from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const ProjectCard = ({ title, description, imageUrl, icon  }) => (
  <Card sx={{ my: 2 }}>
   <CardHeader sx={{ background: "#efe7d469", color: 'green', p: 1 }}
      avatar={
        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
          {icon} {/* Display icon component */}
          <Typography variant="h6" sx={{ marginLeft: 1 }}>
            {title}
          </Typography>
        </Box>
      }
    />
    {imageUrl && (<CardMedia
      component="img"
      height="140"
      image={imageUrl}
      alt={title}
    />)
    }
    <CardContent>
      <Typography variant="subtitle1">
        {description}
      </Typography>
    </CardContent>
  </Card>
);

export default ProjectCard;