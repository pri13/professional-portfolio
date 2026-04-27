import * as React from 'react';
import '../App.css';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  Container,
  Avatar,
  Button,
  IconButton,
  Menu,
  MenuItem
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import DescriptionIcon from '@mui/icons-material/Description';
import HomeIcon from '@mui/icons-material/Home';

const pages = [
  { pageName: "Home", icon: <HomeIcon />, path: "/" },
  { pageName: "About Me", icon: <PersonIcon />, path: "/about" },
  { pageName: "Projects", icon: <WorkOutlineIcon />, path: "/projects" },
  { pageName: "Resume", icon: <DescriptionIcon />, path: "/resume" }
];

function Header() {
  const location = useLocation();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: "rgba(239, 231, 212, 0.4)",
        backdropFilter: "blur(10px)",
        boxShadow: "none"
      }}
    >
      <Container maxWidth="false">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%'
            }}
          >
            {/* Logo */}
            <Button component={Link} to="/" sx={{ minWidth: 0, padding: 0 }}>
              <Avatar
                alt="Pri Patel"
                src="/Assets/logo-large.png"
                sx={{
                  width: 50,
                  height: 50,
                  bgcolor: 'transparent',
                  objectFit: 'contain',
                }}
              />
            </Button>

            {/* Hamburger Menu (Mobile) */}
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton onClick={handleOpenNavMenu}>
                <MenuIcon />
              </IconButton>

              <Menu
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page.pageName}
                    component={Link}
                    to={page.path}
                    onClick={handleCloseNavMenu}
                    selected={location.pathname === page.path}
                  >
                    {page.pageName}
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Desktop Menu */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
              {pages.map((page) => (
                <Button
                  key={page.pageName}
                  component={Link}
                  to={page.path}
                  startIcon={page.icon}
                  sx={{
                    color: '#2e2e2e',
                    textTransform: 'none',
                    fontWeight: 500,
                    borderRadius: '20px',
                    padding: '6px 14px',
                    transition: 'all 0.2s ease',
                    backgroundColor:
                      location.pathname === page.path
                        ? '#dbe7c9'
                        : 'transparent',

                    '&:hover': {
                      backgroundColor: '#dbe7c9',
                      transform: 'translateY(-1px)',
                    },
                  }}
                >
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