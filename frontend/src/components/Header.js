import * as React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import {AppBar, Box, Toolbar} from '@mui/material';
import {Container, Avatar, Button} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import DescriptionIcon from '@mui/icons-material/Description';


const pages = [
  { pageName: "About Me", icon: <PersonIcon />, path:"/about" },
  { pageName: "Projects", icon: <WorkOutlineIcon />, path:"/projects"},
  { pageName: "Resume", icon: <DescriptionIcon />, path:"/resume"}
];

function Header() {
  return (
    <AppBar position="static" sx={{background:"#efe7d469"}}>
      <Container maxWidth="x2">
        <Toolbar disableGutters>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <Box sx={{ flexGrow: 0 }}>
              <Avatar sx={{
                border: '2px solid green', // Set border color to white
              }} alt="Pri Patel" src="/Assets/me.png" />
            </Box>
            {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
            <Box sx={{ display: 'flex' }}>
              {pages.map((page) => (
                <Button sx={{ marginRight: '8px' }}
                  variant="outlined" color="success"
                  key={page.pageName}
                  startIcon={page.icon}
                  component ={Link}
                  to={page.path} >
                  {page.pageName}
                </Button>
              ))}
            </Box>
          </Box>
             
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;