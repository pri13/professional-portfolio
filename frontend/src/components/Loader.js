import { Backdrop, CircularProgress, Typography, Box } from '@mui/material';

export default function Loader({ open, message = "Loading..." }) {
  return (
    <Backdrop
      open={open}
      sx={{
        color: '#fff',
        zIndex: (theme) => theme.zIndex.modal + 1,
        backdropFilter: 'blur(1px)',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flexDirection: 'column',
      }}
    >
      <CircularProgress color="inherit" />

      <Box mt={2}>
        <Typography variant="body1">{message}</Typography>
      </Box>
    </Backdrop>
  );
}