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
  CardContent,
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
      <Box sx={{ pt: 12, pb: 8, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h1" sx={{ mb: 4, fontSize: { xs: '3rem', md: '4rem' } }}>We build the data that builds physical AI.</Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* The Why */}
        <Grid container spacing={8} alignItems="center" sx={{ mb: 12 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h3" sx={{ mb: 4, color: 'primary.main' }}>Why we started this</Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', color: 'text.secondary', mb: 3, lineHeight: 1.8 }}>
              The robotics industry is blocked by data. Simulation to real-world transfer is hard, and existing physical datasets are either heavily constrained to lab environments, lack tactile sensing, or require million-dollar teleoperation setups to collect.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', color: 'text.secondary', lineHeight: 1.8 }}>
              We built ROBOSTREAM to solve this. We use low-cost, high-fidelity egocentric setups (camera glasses, custom haptic gloves, and robust mounts) to collect human-level manipulation data out in the real world. No robotic arm required during collection. Just pure, multi-modal human intent formatted perfectly for imitation learning and RL pipelines.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            {/* Hardware Setup Collage */}
            <Box sx={{ position: 'relative', height: '500px' }}>
              <Box sx={{
                position: 'absolute', top: 0, right: 0, width: '70%', height: '60%',
                borderRadius: 4, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)',
                backgroundImage: 'url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600)',
                backgroundSize: 'cover', backgroundPosition: 'center',
                boxShadow: '0 20px 40px rgba(0,0,0,0.5)', zIndex: 2
              }} />
              <Box sx={{
                position: 'absolute', bottom: 0, left: 0, width: '60%', height: '55%',
                borderRadius: 4, overflow: 'hidden', border: '1px solid rgba(0,240,255,0.3)',
                backgroundImage: 'url(https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600)',
                backgroundSize: 'cover', backgroundPosition: 'center',
                boxShadow: '0 20px 40px rgba(0,240,255,0.1)', zIndex: 3
              }} />
              {/* Decorative Elements */}
              <Box sx={{ position: 'absolute', top: '10%', left: '10%', width: 100, height: 100, borderRadius: '50%', border: '1px dashed rgba(0,240,255,0.5)', animation: 'spin 10s linear infinite' }} />
              <style>
                {`
                    @keyframes spin { 100% { transform: rotate(360deg); } }
                  `}
              </style>
            </Box>
          </Grid>
        </Grid>

        {/* The Team */}
        <Typography variant="h3" sx={{ mb: 6, textAlign: 'center' }}>The Team</Typography>
        <Grid container spacing={4} justifyContent="center">
          {team.map((member) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={member.name}>
              <Card sx={{ textAlign: 'center', p: 2, height: '100%', backgroundColor: 'rgba(0,0,0,0.2)' }}>
                <Box sx={{
                  width: 120, height: 120, borderRadius: '50%', mx: 'auto', mt: 3, mb: 2,
                  backgroundColor: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: '2px solid rgba(0,240,255,0.2)'
                }}>
                  <Typography variant="h3" color="text.secondary">{member.name.charAt(0)}</Typography>
                </Box>
                <CardContent>
                  <Typography variant="h5" sx={{ mb: 1 }}>{member.name}</Typography>
                  <Typography color="secondary.main" sx={{ mb: 2, fontWeight: 500 }}>{member.role}</Typography>
                  <Stack direction="row" spacing={1} justifyContent="center">
                    <IconButton href={member.github} target="_blank" size="small" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
                      <GitHub fontSize="small" />
                    </IconButton>
                    <IconButton href={member.hf} target="_blank" size="small" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
                      <Box component="span" sx={{ fontSize: '0.8rem', fontWeight: 900 }}>HF</Box>
                    </IconButton>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Social Proof / Links */}
        <Box sx={{ mt: 12, p: 6, backgroundColor: 'rgba(0,240,255,0.02)', border: '1px solid rgba(0,240,255,0.1)', borderRadius: 4, textAlign: 'center' }}>
          <Typography variant="h5" sx={{ mb: 3 }}>Open Source & Verified</Typography>
          <Typography color="text.secondary" sx={{ mb: 4, maxWidth: '600px', mx: 'auto' }}>
            We believe in contributing back. Check out our open-source scripts for processing egocentric data or view our verified dataset cards on HuggingFace.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <IconButton href="#" sx={{ border: '1px solid rgba(255,255,255,0.2)', borderRadius: 2, px: 3, py: 1.5, color: 'white', '&:hover': { borderColor: 'primary.main', color: 'primary.main' } }}>
              <GitHub sx={{ mr: 1 }} /> GitHub Profile
            </IconButton>
            <IconButton href="#" sx={{ border: '1px solid rgba(255,255,255,0.2)', borderRadius: 2, px: 3, py: 1.5, color: 'white', '&:hover': { borderColor: 'primary.main', color: 'primary.main' } }}>
              <LinkIcon sx={{ mr: 1 }} /> HuggingFace
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
