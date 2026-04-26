import React, { useEffect, useState } from 'react';
import { Alert } from '@mui/material';
import { amber } from '@mui/material/colors';
import { useLoader } from '../context/LoaderContext';

const ColdStartBanner = ({ visible }) => {
  if (!visible) return null;

  return (
    <Alert
      severity="warning"
      sx={{
        mb: 2,
        backgroundColor: amber[50],
        color: amber[900],
        '& .MuiAlert-icon': {
          color: amber[700],
        },
      }}
    >
      This app may take up to a minute to load after inactivity. We’re working to make startup faster.
    </Alert>
  );
};


export default ColdStartBanner;