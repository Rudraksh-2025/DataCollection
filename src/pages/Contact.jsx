import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  Stack,
  Alert,
} from '@mui/material';
import { Email, Send, Hub } from '@mui/icons-material';
import { datasets } from '../data/mockDatasets';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    // Mock network request
    setTimeout(() => {
      setStatus('success');
      e.target.reset();
    }, 1500);
  };

  return (
    <Box sx={{ pb: 12 }}>
      {/* Header */}
      <Box sx={{ pt: 8, pb: 6, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Hub sx={{ fontSize: 44, color: '#0f172a', mb: 2 }} />
          <Typography variant="h2" sx={{
            mb: 2, color: '#0f172a', fontWeight: 500, lineHeight: 1.15,
            fontFamily: "'Fraunces', serif",
            letterSpacing: '-0.02em',
            WebkitFontSmoothing: 'none',
            MozOsxFontSmoothing: 'unset',
            textRendering: 'optimizeSpeed',
          }}>Get in Touch</Typography>
          <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400 }}>
            Request full datasets, ask about custom collection, or just say hello.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={8}>
          {/* Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Paper sx={{
              p: { xs: 3, md: 5 },
              borderRadius: '24px',
              backgroundColor: 'rgba(255, 255, 255, 0.75)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.95)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)'
            }}>
              {status === 'success' && (
                <Alert severity="success" sx={{ mb: 4, borderRadius: 2 }}>
                  Your enquiry has been sent. We'll get back to you within 24 hours.
                </Alert>
              )}
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField fullWidth label="Name" required variant="outlined" />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField fullWidth label="Work Email" required type="email" />
                  </Grid>
                  <Grid size={12}>
                    <TextField fullWidth label="Company / Institution" required />
                  </Grid>
                  <Grid size={12}>
                    <FormControl fullWidth>
                      <InputLabel>Dataset of Interest</InputLabel>
                      <Select label="Dataset of Interest" defaultValue="">
                        <MenuItem value="all"><em>Multiple / All</em></MenuItem>
                        {datasets.map(d => <MenuItem key={d.id} value={d.id}>{d.name}</MenuItem>)}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <FormControl fullWidth required>
                      <InputLabel>Intended Use Case</InputLabel>
                      <Select label="Intended Use Case" defaultValue="">
                        <MenuItem value="training">Training</MenuItem>
                        <MenuItem value="evaluation">Evaluation</MenuItem>
                        <MenuItem value="both">Both</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField fullWidth label="Approx. Episodes Needed" type="number" />
                  </Grid>
                  <Grid size={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      multiline
                      rows={4}
                      placeholder="Tell us about your project..."
                    />
                  </Grid>
                  <Grid size={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      disabled={status === 'submitting'}
                      endIcon={<Send />}
                      sx={{
                        py: 1.5,
                        fontSize: '1rem',
                        fontWeight: 600,
                        backgroundColor: '#1f242d',
                        color: '#ffffff',
                        borderRadius: '28px',
                        '&:hover': { backgroundColor: '#0f172a' }
                      }}
                    >
                      {status === 'submitting' ? 'Sending...' : 'Send Enquiry'}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>

          {/* Contact Info */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ position: 'sticky', top: 100 }}>
              <Typography variant="h4" sx={{
                mb: 3, color: '#0f172a', fontWeight: 500, lineHeight: 1.15,
                fontFamily: "'Fraunces', serif",
                letterSpacing: '-0.02em',
                WebkitFontSmoothing: 'none',
                MozOsxFontSmoothing: 'unset',
                textRendering: 'optimizeSpeed',
              }}>Direct Contact</Typography>
              <Typography color="text.secondary" paragraph sx={{ mb: 4, fontSize: '1.05rem', lineHeight: 1.7 }}>
                Don't like forms? You can email us directly. We respond to all technical enquiries within 24 hours.
              </Typography>

              <Paper sx={{
                p: 4,
                borderRadius: '20px',
                backgroundColor: 'rgba(255, 255, 255, 0.75)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.95)',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)'
              }}>
                <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 1 }}>
                  <Email sx={{ color: '#0f172a' }} />
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a' }}>Data Enquiries</Typography>
                </Stack>
                <Typography component="a" href="mailto:data@robostream.ai" sx={{
                  color: '#0f172a',
                  fontWeight: 600,
                  textDecoration: 'none',
                  fontSize: '1.15rem',
                  '&:hover': { textDecoration: 'underline' }
                }}>
                  data@robostream.ai
                </Typography>
              </Paper>

              <Box sx={{
                mt: 4,
                p: 4,
                borderRadius: '20px',
                backgroundColor: 'rgba(255, 255, 255, 0.6)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(0, 0, 0, 0.06)'
              }}>
                <Typography variant="h6" sx={{ mb: 1.5, fontWeight: 700, color: '#0f172a' }}>Custom Collection?</Typography>
                <Typography color="text.secondary" variant="body2" sx={{ lineHeight: 1.7 }}>
                  Need a specific task collected? We can set up new physical environments and start collecting high-quality data within days. Contact us for custom enterprise pricing.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
