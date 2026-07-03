import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Chip,
  Divider,
} from '@mui/material';
import {
  Videocam,
  PrecisionManufacturing,
  AssignmentTurnedIn,
  CheckCircle,
  Download
} from '@mui/icons-material';
import { datasets } from '../data/mockDatasets';

export default function Home() {
  const navigate = useNavigate();
  const previewDatasets = datasets.slice(0, 3);

  return (
    <Box sx={{ pb: 8 }}>
      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ pt: { xs: 8, md: 12 }, pb: { xs: 6, md: 8 }, textAlign: 'center' }}>
        <Typography variant="h1" sx={{
          fontSize: { xs: '2.5rem', md: '3.5rem' },
          fontWeight: 900,
          mb: 3,
          lineHeight: 1.1,
          background: 'linear-gradient(135deg, #ffffff 30%, #00f0ff 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Egocentric manipulation datasets<br />with vision + tactile data
        </Typography>
        <Typography variant="h5" sx={{
          color: 'text.secondary',
          mb: 5,
          fontWeight: 400,
          maxWidth: '800px',
          mx: 'auto'
        }}>
          High-fidelity physical trajectories ready for robot policy training.
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 8 }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            endIcon={<Download />}
            sx={{
              py: 1.5,
              px: 4,
              fontSize: '1.1rem',
              boxShadow: '0 0 20px rgba(0, 240, 255, 0.4)',
              '&:hover': {
                boxShadow: '0 0 30px rgba(0, 240, 255, 0.6)',
              }
            }}
            onClick={() => navigate('/datasets')}
          >
            Download free sample
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            sx={{ py: 1.5, px: 4, fontSize: '1.1rem' }}
            onClick={() => navigate('/datasets')}
          >
            View Catalogue
          </Button>
        </Box>

        {/* Trust Signals */}
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: { xs: 2, md: 4 },
          px: 2,
          py: 3,
          borderRadius: 4,
          backgroundColor: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <Typography variant="h6" color="primary.main" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <span style={{ color: 'white' }}>1,200+</span> Episodes
          </Typography>
          <Typography variant="h6" color="text.secondary">·</Typography>
          <Typography variant="h6" color="primary.main" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <span style={{ color: 'white' }}>8</span> Tasks
          </Typography>
          <Typography variant="h6" color="text.secondary">·</Typography>
          <Typography variant="h6" color="primary.main" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <span style={{ color: 'white' }}>LeRobot</span> Format
          </Typography>
          <Typography variant="h6" color="text.secondary">·</Typography>
          <Typography variant="h6" color="primary.main" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <span style={{ color: 'white' }}>HuggingFace</span> Verified
          </Typography>
        </Box>
      </Container>

      {/* Media Highlight (Video placeholder) */}
      <Container maxWidth="lg" sx={{ mb: 12 }}>
        <Box sx={{
          width: '100%',
          height: { xs: '300px', md: '500px' },
          borderRadius: 4,
          overflow: 'hidden',
          position: 'relative',
          border: '1px solid rgba(0,240,255,0.3)',
          boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
          backgroundImage: 'url(https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Box sx={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.4)'
          }} />
          <Button variant="contained" color="primary" sx={{ zIndex: 2, borderRadius: '50%', width: 80, height: 80, p: 0 }}>
            <Typography variant="h3">▶</Typography>
          </Button>
        </Box>
      </Container>

      {/* What We Offer */}
      <Box sx={{ backgroundColor: 'background.paper', py: 10, borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" textAlign="center" sx={{ mb: 8 }}>The Data Pipeline</Typography>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ p: 4, height: '100%', backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: 4, transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-5px)' } }}>
                <Videocam sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                <Typography variant="h5" sx={{ mb: 2 }}>Vision Data</Typography>
                <Typography color="text.secondary">
                  Egocentric wrist and overhead video streams synchronized perfectly. Captured at 4K resolution and 60fps for maximum detail.
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ p: 4, height: '100%', backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: 4, transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-5px)' } }}>
                <PrecisionManufacturing sx={{ fontSize: 48, color: 'secondary.main', mb: 2 }} />
                <Typography variant="h5" sx={{ mb: 2 }}>Tactile Data</Typography>
                <Typography color="text.secondary">
                  High-frequency 100Hz physical contact data. Includes FSR force sensing, flex sensor curvature, and IMU orientations.
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ p: 4, height: '100%', backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: 4, transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-5px)' } }}>
                <AssignmentTurnedIn sx={{ fontSize: 48, color: '#10b981', mb: 2 }} />
                <Typography variant="h5" sx={{ mb: 2 }}>Annotations</Typography>
                <Typography color="text.secondary">
                  Rich metadata for every episode including phase labels, contact events, bounding boxes, and success/fail flags.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Dataset Previews */}
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 6 }}>
          <Typography variant="h3">Available Datasets</Typography>
          <Button variant="text" color="primary" onClick={() => navigate('/datasets')}>
            View all →
          </Button>
        </Stack>
        <Grid container spacing={4}>
          {previewDatasets.map((dataset) => (
            <Grid size={{ xs: 12, md: 4 }} key={dataset.id}>
              <Card sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 24px rgba(0,240,255,0.15)'
                }
              }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={dataset.thumbnail}
                  alt={dataset.name}
                />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography variant="h5" sx={{ mb: 1 }}>{dataset.name}</Typography>
                  <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
                    <Chip label={`${dataset.episodes} episodes`} size="small" sx={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />
                    {dataset.modality.map(m => (
                      <Chip key={m} label={m} size="small" color={m === 'tactile' ? 'secondary' : 'default'} sx={{ opacity: 0.9 }} />
                    ))}
                  </Stack>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    {dataset.description.substring(0, 100)}...
                  </Typography>
                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={() => navigate(`/datasets/${dataset.id}`)}
                  >
                    View dataset
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Pricing */}
      <Box sx={{ backgroundColor: 'background.paper', py: 12 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" textAlign="center" sx={{ mb: 2 }}>Simple, transparent pricing</Typography>
          <Typography variant="h6" color="text.secondary" textAlign="center" sx={{ mb: 8, fontWeight: 400 }}>
            Get exactly the data you need for your models.
          </Typography>

          <Grid container spacing={4} alignItems="center">
            {/* Free Tier */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Card sx={{ p: 4, height: '100%' }}>
                <Typography variant="h5" sx={{ mb: 2 }}>Free Sample</Typography>
                <Typography variant="h2" sx={{ mb: 4 }}>$0</Typography>
                <Stack spacing={2} sx={{ mb: 4 }}>
                  <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CheckCircle color="primary" fontSize="small" /> 10 episodes per task
                  </Typography>
                  <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CheckCircle color="primary" fontSize="small" /> Full sensor stack included
                  </Typography>
                  <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CheckCircle color="primary" fontSize="small" /> Non-commercial use
                  </Typography>
                </Stack>
                <Button variant="outlined" fullWidth size="large" onClick={() => navigate('/datasets')}>Download Now</Button>
              </Card>
            </Grid>

            {/* Standard Tier */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Card sx={{ p: 4, height: '100%', borderColor: 'primary.main', border: '2px solid', position: 'relative' }}>
                <Typography variant="h5" sx={{ mb: 2, color: 'primary.main' }}>Standard License</Typography>
                <Typography variant="h2" sx={{ mb: 1 }}>$1.50</Typography>
                <Typography color="text.secondary" sx={{ mb: 4 }}>per episode</Typography>
                <Stack spacing={2} sx={{ mb: 4 }}>
                  <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CheckCircle color="primary" fontSize="small" /> Access to full datasets
                  </Typography>
                  <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CheckCircle color="primary" fontSize="small" /> Commercial license
                  </Typography>
                  <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CheckCircle color="primary" fontSize="small" /> 1 year of updates
                  </Typography>
                </Stack>
                <Button variant="contained" fullWidth size="large" onClick={() => navigate('/contact')}>Purchase Dataset</Button>
              </Card>
            </Grid>

            {/* Enterprise Tier */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Card sx={{ p: 4, height: '100%' }}>
                <Typography variant="h5" sx={{ mb: 2 }}>Enterprise</Typography>
                <Typography variant="h2" sx={{ mb: 4 }}>Custom</Typography>
                <Stack spacing={2} sx={{ mb: 4 }}>
                  <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CheckCircle color="primary" fontSize="small" /> Custom task collection
                  </Typography>
                  <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CheckCircle color="primary" fontSize="small" /> Large volume discount
                  </Typography>
                  <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CheckCircle color="primary" fontSize="small" /> NDA & Custom invoicing
                  </Typography>
                </Stack>
                <Button variant="outlined" fullWidth size="large" onClick={() => navigate('/contact')}>Contact Sales</Button>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

    </Box>
  );
}
