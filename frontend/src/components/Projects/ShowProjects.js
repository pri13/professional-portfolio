import React, { useEffect, useState } from "react";
import { Grid, Card, CardContent, Typography, Button, Chip, Box, Divider, CardHeader } from "@mui/material";
import { useHistory } from "react-router-dom";
import api from "../../api.js";
import { useLoader } from '../../context/LoaderContext.js';
import ColdStartBanner from '../../components/ColdStartBanner.js';


export default function DisplayProjects({ category }) {
    const [projects, setProjects] = useState([]);
    const [visible, setVisible] = useState(false);
    const history = useHistory();
    const { showLoader, hideLoader } = useLoader();

    useEffect(() => {
        const fetch = async () => {
            try{
              showLoader("Fetching Projects....");
                setVisible(true);
                const response = await api.get('api/projects/getprojects', { params: { category: category } });
                setProjects(response.data);
                hideLoader();
                setVisible(false);
            }
            catch(err){
                console.error("Error fetching projects:", err);
                hideLoader();
                setVisible(false);
            }
            finally{
                hideLoader();
                setVisible(false);
            }           
           
        };
        fetch();
    }, [category]);

    return (
        <Box >
            <ColdStartBanner visible={visible} />
            <Grid container spacing={3}>
                {projects.map((p) => (
                    <Grid item xs={12} md={12} key={p._id}>
                        <Card sx={{ height: "100%", '&:hover': { boxShadow: 6, backgroundColor: '#dff0d8' } }}>
                            <CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2, mb: 2 }}>
                                    <Typography variant="h6">{p.title}</Typography>
                                    <Button
                                        color="success"
                                        size="small"
                                        variant="contained"
                                        onClick={() =>
                                            history.push(`/projects/${p.slug}`)}>
                                        View Details
                                    </Button>
                                </Box>

                                <Divider sx={{ mb: 2 }} />

                                <Typography variant="body2" sx={{ mt: 1, mb: 2 }}>
                                    {p.summary}
                                </Typography>

                                <Chip label={p.category} size="small" sx={{ mr: 1 }} />
                                <Chip label={p.projectType} size="small" />
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>


    );
}


