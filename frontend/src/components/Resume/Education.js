import React from 'react';

import { Card, CardContent, CardMedia, Typography, CardActions, Button, CardHeader, Grid,Avatar ,Box,  Accordion, AccordionSummary, AccordionDetails } 
from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Education = ({data}) => {
    if (!data || data.length === 0) {
        return <Typography variant="body1">No education data available</Typography>;
    }
    return (
        <Card sx={{ my: 2, }} >
            <CardHeader
                avatar={
                    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                        <SchoolIcon />
                        <Typography variant="h6" sx={{ marginLeft: 1 }}>
                            Education
                        </Typography>
                    </Box>
                }
                sx={{ background: "#efe7d469", color: 'green', p: 1 }}>
            </CardHeader>
            <CardContent>
                <Grid container spacing={2} id="e">
                    {data.map((education, index) => (
                        <Grid item xs={12} md={12} key={index}>
                            <Accordion sx={{ '&:hover': { backgroundColor: '#dff0d8', }, }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                                    <Grid container spacing={2}>
                                        {/* Degree and Institution */}
                                        <Grid item md={12}>
                                            <Typography variant="h6"  color="primary">{education.degree}</Typography>
                                            <Typography>{education.institution}</Typography>
                                        </Grid>
                                    </Grid>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Grid container>
                                        {/* Dates, GPA, Location */}
                                        <Grid item xs={12} sm={12}>
                                            <Typography>
                                                {new Date(education.startDate).toLocaleDateString()} -{' '}
                                                {new Date(education.endDate).toLocaleDateString()}
                                            </Typography>
                                            <Typography>GPA: {education.gpa}</Typography>
                                            <Typography>
                                                Location: {education.location.city}, {education.location.state}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </AccordionDetails>
                            </Accordion>

                        </Grid>
                    ))}
                </Grid>
            </CardContent>
        </Card>
    );
};
    
   


export default Education;