import React, { useState } from 'react';
import { Outlet, Link as RouterLink, useLocation } from 'react-router-dom';
import {
  Box,
  Container,
  Stack,
  Typography,
  IconButton,
  Button,
  useTheme,
  Drawer,
} from '@mui/material';
import {
  WbSunnyOutlined,
  ChevronRight,
  Memory,
  GitHub,
  Twitter,
  Menu as MenuIcon,
  Close as CloseIcon,
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
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

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
          maxWidth: { xs: '100%', md: '850px' },
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
          {/* Logo / Brand */}
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            component={RouterLink}
            to="/"
            sx={{
              textDecoration: 'none',
              color: '#0f172a',
              '&:hover': { opacity: 0.9 }
            }}
          >
            <Memory sx={{ color: '#0f172a', fontSize: 24 }} />
            <Typography
              variant="body1"
              sx={{
                fontFamily: '"Montserrat", sans-serif',
                fontWeight: 800,
                color: '#0f172a',
                letterSpacing: '0.5px',
                fontSize: '0.95rem'
              }}
            >
              ROBOSTREAM
            </Typography>
          </Stack>

          {/* Centered Navigation Links - Desktop Only */}
          <Stack
            direction="row"
            spacing={{ xs: 1, sm: 2.5 }}
            alignItems="center"
            sx={{ display: { xs: 'none', md: 'flex' } }}
          >
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

          {/* Right Action Pill Button - Desktop Only */}
          <Button
            component={RouterLink}
            to="/contact"
            sx={{
              display: { xs: 'none', md: 'inline-flex' },
              backgroundColor: '#1f242d',
              color: '#ffffff',
              borderRadius: '28px',
              px: 2.2,
              py: 0.8,
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.2px',
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

          {/* Hamburger Menu Icon - Mobile Only */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: 'flex', md: 'none' }, color: '#0f172a' }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Mobile Navigation Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
            borderTopLeftRadius: '24px',
            borderBottomLeftRadius: '24px',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(16px)',
            p: 3,
            boxShadow: '-10px 0 30px rgba(0,0,0,0.05)',
          },
        }}
        anchor="right"
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Memory sx={{ color: '#0f172a', fontSize: 24 }} />
            <Typography variant="h6" sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 800, color: '#0f172a' }}>
              ROBOSTREAM
            </Typography>
          </Stack>
          <IconButton onClick={handleDrawerToggle} sx={{ color: '#0f172a' }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Stack spacing={1.5} sx={{ mb: 4 }}>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
            return (
              <Button
                key={link.title}
                component={RouterLink}
                to={link.path}
                onClick={handleDrawerToggle}
                fullWidth
                sx={{
                  justifyContent: 'flex-start',
                  color: isActive ? '#0f172a' : '#475569',
                  fontWeight: isActive ? 700 : 500,
                  fontSize: '1rem',
                  px: 2,
                  py: 1.2,
                  borderRadius: '12px',
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

        <Button
          component={RouterLink}
          to="/contact"
          onClick={handleDrawerToggle}
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: '#1f242d',
            color: '#ffffff',
            borderRadius: '24px',
            py: 1.5,
            fontSize: '0.95rem',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
            '&:hover': {
              backgroundColor: '#0f172a',
            }
          }}
        >
          Get Access
          <ChevronRight sx={{ fontSize: 18 }} />
        </Button>
      </Drawer>

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
