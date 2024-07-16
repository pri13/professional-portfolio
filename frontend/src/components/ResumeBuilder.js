import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

const ResumeBuilder = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    education: '',
    experience: '',
    skills: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle resume data
    console.log(form);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Resume Builder
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          name="name"
          label="Name"
          value={form.name}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          name="email"
          label="Email"
          value={form.email}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          name="phone"
          label="Phone"
          value={form.phone}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          name="education"
          label="Education"
          value={form.education}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          name="experience"
          label="Experience"
          value={form.experience}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          name="skills"
          label="Skills"
          value={form.skills}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" color="primary">
          Save Resume
        </Button>
      </form>
    </Container>
  );
};

export default ResumeBuilder;