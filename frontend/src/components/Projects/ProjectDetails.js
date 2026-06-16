import React, { useEffect, useState } from "react";
import {
    Box,
    Typography,
    Chip,
    Paper,
    Stack,
    Button,
    CircularProgress,
    Alert,
    Divider
} from "@mui/material";

import { useParams, useHistory } from "react-router-dom";
import api from "../../api.js";

const ProjectDetails = () => {
    const { slug } = useParams();
    const history = useHistory();

    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadProject = async () => {
            try {
                const res = await api.get(`api/projects/${slug}`);
                setProject(res.data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        loadProject();
    }, [slug]);

    const formatDate = (date) => {
        if (!date) return "Present";
        return new Date(date).toLocaleDateString("en-US", {
            month: "short",
            year: "numeric"
        });
    };

    const statusColor = (status) => {
        switch (status) {
            case "completed":
                return { bg: "#ecfdf5", color: "#166534" };
            case "in-progress":
                return { bg: "#eff6ff", color: "#1e40af" };
            default:
                return { bg: "#f3f4f6", color: "#374151" };
        }
    };

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" mt={8}>
                <CircularProgress />
            </Box>
        );
    }

    if (!project) {
        return <Alert severity="error">Project not found</Alert>;
    }

    const statusStyle = statusColor(project.status);

    return (
        <Box sx={{ maxWidth: 1050, mx: "auto", px: 3, py: 4 }}>

            {/* BACK */}
            <Button
                onClick={() => history.goBack()}
                sx={{ mb: 3, textTransform: "none" }}
            >
                ← Back
            </Button>

            {/* TITLE */}
            <Typography variant="h3" fontWeight={800}>
                {project.title}
            </Typography>

            <Typography
                variant="h6"
                sx={{ mt: 1, color: "text.secondary" }}
            >
                {project.summary}
            </Typography>

            {/* META SECTION */}
            <Stack
                direction="row"
                spacing={1}
                flexWrap="wrap"
                mt={3}
                mb={3}
            >
                {project.companyName && (
                    <Chip
                        label={`Company: ${project.companyName}`}
                        variant="outlined"
                    />
                )}

                {project.role && (
                    <Chip
                        label={`Role: ${project.role}`}
                        variant="outlined"
                    />
                )}

                {project.startDate || project.endDate ? (
                    <Chip
                        label={`Duration: ${formatDate(project.startDate)} - ${formatDate(project.endDate)}`}
                        variant="outlined"
                    />
                ) : null}

                {project.status && (
                    <Chip
                        label={project.status}
                        sx={{
                            backgroundColor: statusStyle.bg,
                            color: statusStyle.color,
                            fontWeight: 600
                        }}
                    />
                )}

                <Chip label={project.category} />
                <Chip label={project.projectType} />
            </Stack>

            {project.techstack?.length > 0 && (
                <Paper sx={{ p: 3, mb: 3, borderLeft: "4px solid #6366f1", '&:hover': { boxShadow: 6, backgroundColor: '#dff0d8' } }}>
                    <Typography variant="h6" fontWeight={700} mb={2}>
                        Tech Stack
                    </Typography>

                    <Stack direction="row" spacing={1} flexWrap="wrap">
                        {project.techstack.map((tech, idx) => (
                            <Chip
                                key={idx}
                                label={tech}
                                variant="outlined"
                                sx={{
                                    mb: 1,
                                    fontWeight: 500,
                                    '&:hover': { boxShadow: 6, backgroundColor: '#dff0d8' }
                                }}
                            />
                        ))}
                    </Stack>
                </Paper>
            )}

            {/* PROBLEM */}
            {project.problem && (
                <Paper sx={sectionStyle("#ef4444")}>
                    <Typography variant="h6" fontWeight={700} color="#ef4444">
                        Problem
                    </Typography>

                    <Typography sx={{ mt: 1, lineHeight: 1.7 }}>
                        {project.problem}
                    </Typography>
                </Paper>
            )}

            {/* SOLUTION */}
            {project.solution && (
                <Paper sx={sectionStyle("#22c55e")}>
                    <Typography variant="h6" fontWeight={700} color="#22c55e">
                        Solution
                    </Typography>

                    <Typography sx={{ mt: 1, lineHeight: 1.7 }}>
                        {project.solution}
                    </Typography>
                </Paper>
            )}

            {/* KEY CONTRIBUTIONS */}
            {project.keyContributions?.length > 0 && (
                <Paper sx={sectionStyle("#8b5cf6")}>
                    <Typography variant="h6" fontWeight={700} mb={2} color="#8b5cf6">
                        Key Contributions
                    </Typography>

                    <ul style={{ margin: 0, paddingLeft: 18 }}>
                        {project.keyContributions.map((item, i) => (
                            <li key={i}>
                                <Typography sx={{ mb: 1 }}>
                                    {item}
                                </Typography>
                            </li>
                        ))}
                    </ul>
                </Paper>
            )}

            {/* IMPACT */}
            {project.impact?.length > 0 && (
                <Paper sx={sectionStyle("#2563eb")}>
                    <Typography variant="h6" fontWeight={700} mb={2} color="#2563eb">
                        Impact
                    </Typography>

                    <ul style={{ margin: 0, paddingLeft: 18 }}>
                        {project.impact.map((item, i) => (
                            <li key={i}>
                                <Typography sx={{ mb: 1 }}>
                                    {item}
                                </Typography>
                            </li>
                        ))}
                    </ul>
                </Paper>
            )}

        </Box>
    );
};

export default ProjectDetails;

/* ---------------- CLEAN STYLE SYSTEM ---------------- */

const sectionStyle = (color) => ({
    p: 3,
    mb: 3,
    borderRadius: 2,
    borderLeft: `4px solid ${color}`,
    backgroundColor: "#ffffff",
    '&:hover': {
        boxShadow: 6,
        backgroundColor: '#dff0d8' 
    }

});