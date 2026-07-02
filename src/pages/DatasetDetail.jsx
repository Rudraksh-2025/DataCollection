import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Grid,
  Button,
  Stack,
  Chip,
  Paper,
  Divider,
} from '@mui/material';
import {
  Download,
  Email,
  Code,
  Storage,
  Sensors
} from '@mui/icons-material';
import { datasets } from '../data/mockDatasets';

export default function DatasetDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const dataset = datasets.find(d => d.id === id);

  if (!dataset) {
    return (
      <Container sx={{ py: 12, textAlign: 'center' }}>
        <Typography variant="h4">Dataset not found</Typography>
        <Button onClick={() => navigate('/datasets')} sx={{ mt: 2 }}>Back to Catalogue</Button>
      </Container>
    );
  }

  return (
    <Box sx={{ pb: 12 }}>
      {/* Header */}
      <Box sx={{ backgroundColor: 'rgba(0,0,0,0.3)', borderBottom: '1px solid rgba(255,255,255,0.05)', pt: 8, pb: 6 }}>
        <Container maxWidth="lg">
          <Button onClick={() => navigate('/datasets')} sx={{ mb: 4, color: 'text.secondary' }}>← Back to Catalogue</Button>
          <Typography variant="h2" sx={{ mb: 2 }}>{dataset.name}</Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 4, maxWidth: '800px', fontWeight: 400 }}>
            {dataset.description}
          </Typography>

          <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', gap: 2 }}>
            <Button variant="contained" color="primary" size="large" endIcon={<Download />}>
              Download Free Sample
            </Button>
            <Button variant="outlined" color="secondary" size="large" endIcon={<Email />} onClick={() => navigate('/contact')}>
              Request Full Dataset
            </Button>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ pt: 6 }}>
        <Grid container spacing={6}>
          {/* Main Content */}
          <Grid size={{ xs: 12, md: 8 }}>
            {/* Video Player */}
            <Box sx={{
              width: '100%',
              height: { xs: '300px', md: '450px' },
              borderRadius: 4,
              overflow: 'hidden',
              mb: 6,
              position: 'relative',
              backgroundImage: `url(${dataset.thumbnail})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(0,240,255,0.2)',
            }}>
              <Box sx={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.3)' }} />
              <Button variant="contained" color="primary" sx={{ zIndex: 2, borderRadius: '50%', width: 64, height: 64, p: 0 }}>
                <Typography variant="h4">▶</Typography>
              </Button>
            </Box>

            <Typography variant="h4" sx={{ mb: 3 }}>Dataset Card</Typography>
            <Paper sx={{ p: 4, backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: 4, mb: 6 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>Overview</Typography>
              <Typography color="text.secondary" paragraph>
                This dataset was collected using our custom teleoperation setup. The human operator controls the robot arm via a VR controller while receiving haptic feedback. We capture data directly in the {dataset.format} format, making it trivial to drop into your training pipelines.
              </Typography>
              <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>Sensors</Typography>
              <ul style={{ color: '#94a3b8' }}>
                {dataset.sensors.map(s => <li key={s} style={{ marginBottom: '8px' }}>{s}</li>)}
              </ul>
            </Paper>

            <Typography variant="h4" sx={{ mb: 3 }}>Usage (PyTorch)</Typography>
            <Paper sx={{ p: 0, overflow: 'hidden', borderRadius: 4, mb: 6, border: '1px solid rgba(255,255,255,0.1)' }}>
              <Box sx={{ p: 2, backgroundColor: 'rgba(0,0,0,0.5)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <Typography variant="body2" sx={{ fontFamily: 'monospace', display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Code fontSize="small" /> load_dataset.py
                </Typography>
              </Box>
              <Box sx={{ p: 3, backgroundColor: '#0b0d17', overflowX: 'auto' }}>
                <Typography component="pre" sx={{ fontFamily: 'monospace', color: '#00f0ff', fontSize: '0.9rem', m: 0 }}>
                  {`import lerobot
from torch.utils.data import DataLoader

# Load the dataset directly from HuggingFace or local dir
dataset = lerobot.Dataset("robostream/${dataset.id}")

# Create a dataloader
dataloader = DataLoader(
    dataset,
    batch_size=32,
    shuffle=True,
    num_workers=4
)

for batch in dataloader:
    vision_input = batch['observation.images.wrist']
    tactile_input = batch['observation.state.tactile']
    actions = batch['action']
    # train your policy...`}
                </Typography>
              </Box>
            </Paper>
          </Grid>

          {/* Sidebar */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Paper sx={{ p: 4, borderRadius: 4, backgroundColor: 'rgba(0,240,255,0.02)', border: '1px solid rgba(0,240,255,0.2)', position: 'sticky', top: 24 }}>
              <Typography variant="h5" sx={{ mb: 4 }}>Key Stats</Typography>

              <Stack spacing={3}>
                <Box>
                  <Typography color="text.secondary" variant="body2" sx={{ textTransform: 'uppercase', letterSpacing: 1, mb: 1 }}>Episodes</Typography>
                  <Typography variant="h3" color="primary.main">{dataset.episodes}</Typography>
                </Box>
                <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />
                <Box>
                  <Typography color="text.secondary" variant="body2" sx={{ textTransform: 'uppercase', letterSpacing: 1, mb: 1 }}>Hours of Video</Typography>
                  <Typography variant="h4">{dataset.hours}h</Typography>
                </Box>
                <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />
                <Box>
                  <Typography color="text.secondary" variant="body2" sx={{ textTransform: 'uppercase', letterSpacing: 1, mb: 1 }}>Task Success Rate</Typography>
                  <Typography variant="h4" color="secondary.main">{dataset.successRate}</Typography>
                </Box>
                <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />
                <Box>
                  <Typography color="text.secondary" variant="body2" sx={{ textTransform: 'uppercase', letterSpacing: 1, mb: 1 }}>Modalities</Typography>
                  <Stack direction="row" spacing={1} mt={1}>
                    {dataset.modality.map(m => <Chip key={m} label={m} size="small" />)}
                  </Stack>
                </Box>
                <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />
                <Box>
                  <Typography color="text.secondary" variant="body2" sx={{ textTransform: 'uppercase', letterSpacing: 1, mb: 1 }}>License</Typography>
                  <Typography variant="body1">CC BY 4.0 (Sample) / Commercial (Full)</Typography>
                </Box>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
