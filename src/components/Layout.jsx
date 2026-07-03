import React from 'react';
import { Outlet, Link as RouterLink, useLocation } from 'react-router-dom';
import {
  Box,
  Container,
  Stack,
  Typography,
  IconButton,
  Button,
  useTheme,
  SvgIcon,
} from '@mui/material';
import {
  Memory,
  GitHub,
  Twitter,
  Email
} from '@mui/icons-material';

const DiscordIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M18.97,5.55C17.52,4.86,15.96,4.35,14.32,4.06c-0.19,0.36-0.42,0.81-0.58,1.21c-1.74-0.27-3.47-0.27-5.18,0 C8.4,4.87,8.17,4.42,7.97,4.06C6.33,4.35,4.78,4.86,3.32,5.55C0.37,10.12-0.41,14.58,0.2,18.96c1.96,1.49,3.86,2.39,5.72,2.98 c0.46-0.65,0.86-1.35,1.2-2.09c-0.67-0.26-1.31-0.58-1.91-0.96c0.16-0.12,0.32-0.24,0.47-0.37c3.74,1.79,7.81,1.79,11.51,0 c0.16,0.13,0.31,0.25,0.47,0.37c-0.6,0.38-1.24,0.7-1.91,0.96c0.34,0.74,0.74,1.44,1.2,2.09c1.86-0.59,3.76-1.49,5.72-2.98 C22.84,13.79,22.01,9.36,18.97,5.55z M7.71,15.17c-1.12,0-2.05-1.07-2.05-2.38c0-1.31,0.9-2.38,2.05-2.38 c1.15,0,2.07,1.07,2.05,2.38C9.77,14.1,8.86,15.17,7.71,15.17z M15.3,15.17c-1.12,0-2.05-1.07-2.05-2.38c0-1.31,0.9-2.38,2.05-2.38 c1.15,0,2.07,1.07,2.05,2.38C17.37,14.1,16.46,15.17,15.3,15.17z" />
  </SvgIcon>
);

const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'Datasets', path: '/datasets' },
  { title: 'About Us', path: '/about' },
  { title: 'Contact', path: '/contact' },
];

export default function Layout() {
  const theme = useTheme();
  const location = useLocation();

  return (
    <Box sx={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      zIndex: 1,
      overflow: 'hidden',
    }}>
      {/* Decorative Blur Orbs */}
      <Box sx={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(0,240,255,0.12) 0%, rgba(0,0,0,0) 70%)',
        zIndex: -1,
        pointerEvents: 'none',
      }} />
      <Box sx={{
        position: 'absolute',
        bottom: '10%',
        right: '5%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, rgba(0,0,0,0) 70%)',
        zIndex: -1,
        pointerEvents: 'none',
      }} />

      {/* Navigation Header */}
      <Container maxWidth="lg" sx={{ pt: 3, pb: 2 }}>
        <Stack direction="row" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <RouterLink to="/" style={{ textDecoration: 'none' }}>
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <Memory sx={{ color: 'primary.main', fontSize: 32, filter: 'drop-shadow(0 0 8px rgba(0,240,255,0.5))' }} />
              <Typography variant="h5" sx={{
                fontWeight: 900,
                letterSpacing: 2,
                background: 'linear-gradient(90deg, #ffffff 30%, #00f0ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontFamily: '"Montserrat", sans-serif'
              }}>
                ROBOSTREAM
              </Typography>
            </Stack>
          </RouterLink>

          <Stack direction="row" spacing={3} alignItems="center" sx={{ display: { xs: 'none', md: 'flex' } }}>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
              return (
                <Button
                  key={link.title}
                  component={RouterLink}
                  to={link.path}
                  sx={{
                    color: isActive ? 'primary.main' : 'text.primary',
                    fontWeight: isActive ? 700 : 500,
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: isActive ? '100%' : '0%',
                      height: '2px',
                      backgroundColor: 'primary.main',
                      transition: 'width 0.3s ease',
                    },
                    '&:hover::after': {
                      width: '100%'
                    },
                    '&:hover': {
                      backgroundColor: 'transparent',
                      color: 'primary.main'
                    }
                  }}
                >
                  {link.title}
                </Button>
              );
            })}
          </Stack>

          <Stack direction="row" spacing={1}>
            <IconButton href="https://github.com" target="_blank" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
              <GitHub />
            </IconButton>
            <IconButton href="https://twitter.com" target="_blank" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
              <Twitter />
            </IconButton>
          </Stack>
        </Stack>
      </Container>

      {/* Main Content Area */}
      <Box component="main" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Outlet />
      </Box>

      {/* Footer */}
      <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.05)', mt: 8, py: 6, backgroundColor: 'rgba(0,0,0,0.3)' }}>
        <Container maxWidth="lg">
          <Stack direction={{ xs: 'column', md: 'row' }} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} spacing={3}>
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <Memory sx={{ color: 'primary.main', fontSize: 24 }} />
              <Typography variant="h6" sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 700 }}>
                ROBOSTREAM
              </Typography>
            </Stack>
            <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()} Robostream. All rights reserved.
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button component={RouterLink} to="/datasets" size="small" sx={{ color: 'text.secondary' }}>Datasets</Button>
              <Button component={RouterLink} to="/about" size="small" sx={{ color: 'text.secondary' }}>About</Button>
              <Button component={RouterLink} to="/contact" size="small" sx={{ color: 'text.secondary' }}>Contact</Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
