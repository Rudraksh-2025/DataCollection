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
      <Box sx={{ pt: 10, pb: 6, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Hub sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
          <Typography variant="h2" sx={{ mb: 2 }}>Get in Touch</Typography>
          <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400 }}>
            Request full datasets, ask about custom collection, or just say hello.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={8}>
          {/* Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Paper sx={{ p: { xs: 3, md: 5 }, borderRadius: 4, backgroundColor: 'rgba(0,0,0,0.2)' }}>
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
                      color="primary"
                      size="large"
                      fullWidth
                      disabled={status === 'submitting'}
                      endIcon={<Send />}
                      sx={{ py: 1.5, fontSize: '1.1rem' }}
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
            <Box sx={{ position: 'sticky', top: 40 }}>
              <Typography variant="h4" sx={{ mb: 4 }}>Direct Contact</Typography>
              <Typography color="text.secondary" paragraph sx={{ mb: 4, fontSize: '1.1rem' }}>
                Don't like forms? You can email us directly. We respond to all technical enquiries within 24 hours.
              </Typography>

              <Paper sx={{ p: 4, borderRadius: 4, backgroundColor: 'rgba(0,240,255,0.05)', border: '1px solid rgba(0,240,255,0.2)' }}>
                <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 1 }}>
                  <Email color="primary" />
                  <Typography variant="h6">Data Enquiries</Typography>
                </Stack>
                <Typography component="a" href="mailto:data@robostream.ai" sx={{
                  color: 'primary.main',
                  textDecoration: 'none',
                  fontSize: '1.2rem',
                  '&:hover': { textDecoration: 'underline' }
                }}>
                  data@robostream.ai
                </Typography>
              </Paper>

              <Box sx={{ mt: 8, p: 4, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.02)' }}>
                <Typography variant="h6" sx={{ mb: 2 }}>Custom Collection?</Typography>
                <Typography color="text.secondary" variant="body2">
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
