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
} from '@mui/material';
import {
  WbSunnyOutlined,
  ChevronRight,
  Memory,
  GitHub,
  Twitter,
} from '@mui/icons-material';

const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Datasets', path: '/datasets' },
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
      backgroundColor: '#FEFFFC',
    }}>
      {/* Decorative Subtle Light Blur Orbs */}
      <Box sx={{
        position: 'absolute',
        top: '-5%',
        left: '20%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(220,230,245,0.4) 0%, rgba(254,255,252,0) 70%)',
        zIndex: -1,
        pointerEvents: 'none',
      }} />
      <Box sx={{
        position: 'absolute',
        bottom: '10%',
        right: '10%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(230,235,245,0.3) 0%, rgba(254,255,252,0) 70%)',
        zIndex: -1,
        pointerEvents: 'none',
      }} />

      {/* Floating Centered Glassmorphism Navbar */}
      <Box sx={{
        position: 'sticky',
        top: 20,
        zIndex: 1100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        px: 2,
        mb: 2,
      }}>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: '680px',
          px: { xs: 2, sm: 2.5 },
          py: 1,
          borderRadius: '50px',
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(16px) saturate(180%)',
          WebkitBackdropFilter: 'blur(16px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.95)',
          boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.03)',
          transition: 'all 0.3s ease',
        }}>
          {/* confole,logasdddaddadd */}
          {/* Left Icon / Logo */}
          {/* <IconButton
            component={RouterLink}
            to="/"
            size="small"
            sx={{
              color: '#1e293b',
              p: 1,
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              }
            }}
          >
            <WbSunnyOutlined sx={{ fontSize: 22, color: '#334155' }} />
          </IconButton> */}

          {/* Centered Navigation Links */}
          <Stack direction="row" spacing={{ xs: 1, sm: 2.5 }} alignItems="center">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
              return (
                <Button
                  key={link.title}
                  component={RouterLink}
                  to={link.path}
                  size="small"
                  sx={{
                    color: isActive ? '#0f172a' : '#475569',
                    fontWeight: isActive ? 700 : 500,
                    fontSize: '0.9rem',
                    px: 1.5,
                    py: 0.6,
                    borderRadius: '20px',
                    backgroundColor: isActive ? 'rgba(0, 0, 0, 0.04)' : 'transparent',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.05)',
                      color: '#0f172a',
                    }
                  }}
                >
                  {link.title}
                </Button>
              );
            })}
          </Stack>

          {/* Right Action Pill Button */}
          <Button
            component={RouterLink}
            to="/contact"
            sx={{
              backgroundColor: '#1f242d',
              color: '#ffffff',
              borderRadius: '28px',
              px: 2.2,
              py: 0.8,
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.2px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 0.5,
              '&:hover': {
                backgroundColor: '#0f172a',
                boxShadow: '0 4px 12px rgba(15, 23, 42, 0.25)',
              }
            }}
          >
            Get Access
            <Box component="span" sx={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 20,
              height: 20,
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              ml: 0.5,
            }}>
              <ChevronRight sx={{ fontSize: 16, color: '#ffffff' }} />
            </Box>
          </Button>
        </Box>
      </Box>

      {/* Main Content Area */}
      <Box component="main" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Outlet />
      </Box>

      {/* Footer */}
      <Box sx={{
        borderTop: '1px solid rgba(0, 0, 0, 0.06)',
        mt: 8,
        py: 6,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}>
        <Container maxWidth="lg">
          <Stack direction={{ xs: 'column', md: 'row' }} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} spacing={3}>
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <Memory sx={{ color: '#1f242d', fontSize: 24 }} />
              <Typography variant="h6" sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 700, color: '#0f172a' }}>
                ROBOSTREAM
              </Typography>
            </Stack>
            <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()} Robostream. All rights reserved.
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button component={RouterLink} to="/datasets" size="small" sx={{ color: 'text.secondary', '&:hover': { color: '#0f172a' } }}>Datasets</Button>
              <Button component={RouterLink} to="/about" size="small" sx={{ color: 'text.secondary', '&:hover': { color: '#0f172a' } }}>About</Button>
              <Button component={RouterLink} to="/contact" size="small" sx={{ color: 'text.secondary', '&:hover': { color: '#0f172a' } }}>Contact</Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
