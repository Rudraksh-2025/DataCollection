import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Stack,
  IconButton,
  Card,
  CardMedia,
  CardContent, Button
} from '@mui/material';
import { GitHub, Link as LinkIcon } from '@mui/icons-material';

export default function About() {
  const team = [
    {
      name: "Alex Mercer",
      role: "Hardware & Sensors Lead",
      github: "#",
      hf: "#"
    },
    {
      name: "Dr. Sarah Chen",
      role: "Data Pipeline & RL Lead",
      github: "#",
      hf: "#"
    }
  ];

  return (
    <Box sx={{ pb: 12 }}>
      {/* Header */}
      <Box sx={{ pt: 8, pb: 6, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h1" sx={{
            mb: 3, fontSize: { xs: '2.5rem', md: '4rem' }, fontWeight: 500, lineHeight: 1.15,
            fontFamily: "'Fraunces', serif",
            letterSpacing: '-0.02em',
            WebkitFontSmoothing: 'none',
            MozOsxFontSmoothing: 'unset',
            textRendering: 'optimizeSpeed', color: '#0f172a',
          }}>
            We build the data that builds physical AI.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* The Why */}
        <Grid container spacing={8} alignItems="center" sx={{ mb: 12 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h3" sx={{
              mb: 3, color: '#0f172a', fontWeight: 500, lineHeight: 1.15,
              fontFamily: "'Fraunces', serif",
              letterSpacing: '-0.02em',
              WebkitFontSmoothing: 'none',
              MozOsxFontSmoothing: 'unset',
              textRendering: 'optimizeSpeed',
            }}>Why we started this</Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#475569', mb: 3, lineHeight: 1.8 }}>
              The robotics industry is blocked by data. Simulation to real-world transfer is hard, and existing physical datasets are either heavily constrained to lab environments, lack tactile sensing, or require million-dollar teleoperation setups to collect.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.8 }}>
              We built ROBOSTREAM to solve this. We use low-cost, high-fidelity egocentric setups (camera glasses, custom haptic gloves, and robust mounts) to collect human-level manipulation data out in the real world. No robotic arm required during collection. Just pure, multi-modal human intent formatted perfectly for imitation learning and RL pipelines.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            {/* Hardware Setup Collage */}
            <Box sx={{ position: 'relative', height: '480px' }}>
              <Box sx={{
                position: 'absolute', top: 0, right: 0, width: '70%', height: '60%',
                borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.9)',
                backgroundImage: 'url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600)',
                backgroundSize: 'cover', backgroundPosition: 'center',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)', zIndex: 2
              }} />
              <Box sx={{
                position: 'absolute', bottom: 0, left: 0, width: '60%', height: '55%',
                borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.9)',
                backgroundImage: 'url(https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600)',
                backgroundSize: 'cover', backgroundPosition: 'center',
                boxShadow: '0 20px 40px rgba(0,0,0,0.12)', zIndex: 3
              }} />
            </Box>
          </Grid>
        </Grid>

        {/* The Team */}
        <Typography variant="h3" sx={{
          mb: 6, textAlign: 'center', color: '#0f172a', fontWeight: 500, lineHeight: 1.15,
          fontFamily: "'Fraunces', serif",
          letterSpacing: '-0.02em',
          WebkitFontSmoothing: 'none',
          MozOsxFontSmoothing: 'unset',
          textRendering: 'optimizeSpeed',
        }}>The Team</Typography>
        <Grid container spacing={4} justifyContent="center">
          {team.map((member) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={member.name}>
              <Card sx={{ textAlign: 'center', overflow: 'hidden', height: '100%' }}>
                <Box sx={{
                  p: 2,
                  backgroundColor: 'rgba(255, 255, 255, 0.65)',
                  backdropFilter: 'blur(12px)',
                  borderBottom: '1px solid rgba(0, 0, 0, 0.06)'
                }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a' }}>{member.role}</Typography>
                </Box>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{
                    width: 100, height: 100, borderRadius: '50%', mx: 'auto', mb: 2,
                    backgroundColor: 'rgba(0,0,0,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: '2px solid rgba(0,0,0,0.08)'
                  }}>
                    <Typography variant="h3" sx={{ color: '#0f172a' }}>{member.name.charAt(0)}</Typography>
                  </Box>
                  <Typography variant="h5" sx={{ mb: 1, fontWeight: 700, color: '#0f172a' }}>{member.name}</Typography>
                  <Typography color="text.secondary" sx={{ mb: 3, fontWeight: 500 }}>{member.role}</Typography>
                  <Stack direction="row" spacing={1} justifyContent="center">
                    <IconButton href={member.github} target="_blank" size="small" sx={{ color: '#475569', '&:hover': { color: '#0f172a' } }}>
                      <GitHub fontSize="small" />
                    </IconButton>
                    <IconButton href={member.hf} target="_blank" size="small" sx={{ color: '#475569', '&:hover': { color: '#0f172a' } }}>
                      <Box component="span" sx={{ fontSize: '0.8rem', fontWeight: 900 }}>HF</Box>
                    </IconButton>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Social Proof / Links */}
        <Box sx={{
          mt: 12,
          p: 6,
          backgroundColor: 'rgba(255, 255, 255, 0.75)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.95)',
          borderRadius: '24px',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)',
          textAlign: 'center'
        }}>
          <Typography variant="h5" sx={{ mb: 2, color: '#0f172a', fontWeight: 700 }}>Open Source & Verified</Typography>
          <Typography color="text.secondary" sx={{ mb: 4, maxWidth: '600px', mx: 'auto' }}>
            We believe in contributing back. Check out our open-source scripts for processing egocentric data or view our verified dataset cards on HuggingFace.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button href="#" target="_blank" sx={{ border: '1px solid rgba(0,0,0,0.15)', borderRadius: '24px', px: 3, py: 1, color: '#0f172a', '&:hover': { borderColor: '#0f172a', backgroundColor: 'rgba(0,0,0,0.04)' } }}>
              <GitHub sx={{ mr: 1 }} /> GitHub Profile
            </Button>
            <Button href="#" target="_blank" sx={{ border: '1px solid rgba(0,0,0,0.15)', borderRadius: '24px', px: 3, py: 1, color: '#0f172a', '&:hover': { borderColor: '#0f172a', backgroundColor: 'rgba(0,0,0,0.04)' } }}>
              <LinkIcon sx={{ mr: 1 }} /> HuggingFace
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
