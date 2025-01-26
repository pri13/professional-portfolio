import React from 'react';
import { Grid, Box, Typography, Accordion, AccordionSummary, AccordionDetails, Badge } from '@mui/material';
import { Card, CardContent, CardMedia, CardActions, Button, CardHeader } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import moment from 'moment';
import WorkIcon from '@mui/icons-material/Work';

const Experience = ({ experience }) => {
    const formatDate = (dateString) => {
        return moment.utc(dateString).format("MM/DD/YYYY"); 
    };
    const calculateDuration = (startDate, endDate) => {
        const start = moment(startDate);
        const end = endDate ? moment(endDate) : moment(); 
        const duration = moment.duration(end.diff(start));
        const years = duration.years();
        const months = duration.months();
        return `${years} year(s) and ${months} month(s)`;
      };
    
    if (!experience || experience.length === 0) {
        return <Typography variant="body1">No education data available</Typography>;
    }
    return (
        <Card sx={{ my: 2 }}>
          <CardHeader 
                avatar={
                    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                        <WorkIcon />
                        <Typography variant="h6" sx={{ marginLeft: 1 }}>
                            Experience
                        </Typography>
                    </Box>
                }
                sx={{ background: "#efe7d469", color: 'green', p: 1 }}>

            </CardHeader>
            <CardContent>
                <Grid container spacing={2}>
                    {experience.map((exp, index) => (
                        <Grid item xs={12} key={index}>
                            <Accordion sx={{
                                '&:hover': {
                                    backgroundColor: '#dff0d8',
                                },
                            }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                                    <Grid container spacing={2}>
                                        {/* Timeline */}
                                        <Grid item xs={12} md={4}>
                                            <Typography variant="subtitle1" >
                                                {exp.startDate && formatDate(exp.startDate)} -{' '}
                                                {exp.endDate ? formatDate(exp.endDate) : 'Present'}
                                            </Typography>
                                            <Typography>
                                                {calculateDuration(exp.startDate, exp.endDate ? exp.endDate : null)}
                                            </Typography>
                                        </Grid>
                                        {/* Job Title and Company */}
                                        <Grid item xs={12} md={8}>
                                            <Box display="flex" alignItems="center">
                                                <Typography variant="h6"   color="primary">{exp.jobTitle}</Typography>
                                                <Badge
                                                    color="primary"
                                                    badgeContent={exp.jobType}
                                                    sx={{ mx: 4 }}
                                                ></Badge>
                                            </Box>
                                            <Typography>{exp.company}</Typography>
                                            <Typography>
                                                {exp.location.city}, {exp.location.state}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Grid container>
                                        {/* Responsibilities */}
                                        <Grid item xs={12}>
                                            <Typography variant="body1"   color="primary">
                                                <strong >Responsibilities:</strong>
                                            </Typography>
                                            <ul>
                                                {exp.responsibilities.map((resp, idx) => (
                                                    <li key={idx}>{resp}</li>
                                                ))}
                                            </ul>
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

export default Experience;
