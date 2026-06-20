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
      This is a cold start. The server is waking up and may take a few seconds (Up to Minute) to respond. Thank you for your patience!
    </Alert>
  );
};


export default ColdStartBanner;