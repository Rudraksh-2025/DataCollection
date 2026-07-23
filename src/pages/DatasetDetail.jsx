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
      <Box sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(0,0,0,0.06)',
        pt: 6,
        pb: 6
      }}>
        <Container maxWidth="lg">
          <Button onClick={() => navigate('/datasets')} sx={{ mb: 3, color: '#475569', fontWeight: 600 }}>← Back to Catalogue</Button>
          <Typography variant="h2" sx={{ mb: 2, color: '#0f172a', fontWeight: 800 }}>{dataset.name}</Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 4, maxWidth: '800px', fontWeight: 400, lineHeight: 1.6 }}>
            {dataset.description}
          </Typography>

          <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', gap: 2 }}>
            <Button
              variant="contained"
              size="large"
              endIcon={<Download />}
              sx={{
                borderRadius: '28px',
                backgroundColor: '#1f242d',
                color: '#ffffff',
                fontWeight: 600,
                '&:hover': { backgroundColor: '#0f172a' }
              }}
            >
              Download Free Sample
            </Button>
            <Button
              variant="outlined"
              size="large"
              endIcon={<Email />}
              onClick={() => navigate('/contact')}
              sx={{
                borderRadius: '28px',
                color: '#0f172a',
                borderColor: 'rgba(0,0,0,0.2)',
                fontWeight: 600,
                '&:hover': { borderColor: '#0f172a', backgroundColor: 'rgba(0,0,0,0.04)' }
              }}
            >
              Request Full Dataset
            </Button>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ pt: 6 }}>
        <Grid container spacing={6}>
          {/* Main Content */}
          <Grid size={{ xs: 12, md: 8 }}>
            {/* Video Player Frame */}
            <Box sx={{
              width: '100%',
              height: { xs: '300px', md: '450px' },
              borderRadius: '24px',
              overflow: 'hidden',
              mb: 6,
              position: 'relative',
              backgroundImage: `url(${dataset.thumbnail})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255,255,255,0.9)',
              boxShadow: '0 12px 36px rgba(0,0,0,0.08)',
            }}>
              <Box sx={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15, 23, 42, 0.2)' }} />
              <Button variant="contained" sx={{
                zIndex: 2,
                borderRadius: '50%',
                width: 68,
                height: 68,
                minWidth: 'auto',
                p: 0,
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                color: '#1f242d',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
                '&:hover': { backgroundColor: '#ffffff', transform: 'scale(1.05)' }
              }}>
                <Typography variant="h4" sx={{ ml: 0.5 }}>▶</Typography>
              </Button>
            </Box>

            <Typography variant="h4" sx={{ mb: 3, color: '#0f172a', fontWeight: 800 }}>Dataset Card</Typography>
            <Paper sx={{
              p: 4,
              borderRadius: '20px',
              backgroundColor: 'rgba(255, 255, 255, 0.75)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.95)',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)',
              mb: 6
            }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 700, color: '#0f172a' }}>Overview</Typography>
              <Typography color="text.secondary" paragraph sx={{ lineHeight: 1.7 }}>
                This dataset was collected using our custom teleoperation setup. The human operator controls the robot arm via a VR controller while receiving haptic feedback. We capture data directly in the {dataset.format} format, making it trivial to drop into your training pipelines.
              </Typography>
              <Typography variant="h6" sx={{ mt: 4, mb: 2, fontWeight: 700, color: '#0f172a' }}>Sensors</Typography>
              <ul style={{ color: '#475569' }}>
                {dataset.sensors.map(s => <li key={s} style={{ marginBottom: '8px' }}>{s}</li>)}
              </ul>
            </Paper>

            <Typography variant="h4" sx={{ mb: 3, color: '#0f172a', fontWeight: 800 }}>Usage (PyTorch)</Typography>
            <Paper sx={{ p: 0, overflow: 'hidden', borderRadius: '20px', mb: 6, border: '1px solid rgba(0,0,0,0.08)' }}>
              <Box sx={{ p: 2, backgroundColor: 'rgba(240, 243, 248, 0.8)', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                <Typography variant="body2" sx={{ fontFamily: 'monospace', display: 'flex', alignItems: 'center', gap: 1, color: '#0f172a', fontWeight: 600 }}>
                  <Code fontSize="small" /> load_dataset.py
                </Typography>
              </Box>
              <Box sx={{ p: 3, backgroundColor: '#1e293b', overflowX: 'auto' }}>
                <Typography component="pre" sx={{ fontFamily: 'monospace', color: '#38bdf8', fontSize: '0.9rem', m: 0 }}>
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
            <Paper sx={{
              p: 4,
              borderRadius: '20px',
              backgroundColor: 'rgba(255, 255, 255, 0.75)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.95)',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)',
              position: 'sticky',
              top: 100
            }}>
              <Typography variant="h5" sx={{ mb: 4, fontWeight: 700, color: '#0f172a' }}>Key Stats</Typography>

              <Stack spacing={3}>
                <Box>
                  <Typography color="text.secondary" variant="body2" sx={{ textTransform: 'uppercase', letterSpacing: 1, mb: 1, fontWeight: 600 }}>Episodes</Typography>
                  <Typography variant="h3" sx={{ color: '#0f172a', fontWeight: 800 }}>{dataset.episodes}</Typography>
                </Box>
                <Divider sx={{ borderColor: 'rgba(0,0,0,0.06)' }} />
                <Box>
                  <Typography color="text.secondary" variant="body2" sx={{ textTransform: 'uppercase', letterSpacing: 1, mb: 1, fontWeight: 600 }}>Hours of Video</Typography>
                  <Typography variant="h4" sx={{ color: '#0f172a', fontWeight: 700 }}>{dataset.hours}h</Typography>
                </Box>
                <Divider sx={{ borderColor: 'rgba(0,0,0,0.06)' }} />
                <Box>
                  <Typography color="text.secondary" variant="body2" sx={{ textTransform: 'uppercase', letterSpacing: 1, mb: 1, fontWeight: 600 }}>Task Success Rate</Typography>
                  <Typography variant="h4" sx={{ color: '#0f172a', fontWeight: 700 }}>{dataset.successRate}</Typography>
                </Box>
                <Divider sx={{ borderColor: 'rgba(0,0,0,0.06)' }} />
                <Box>
                  <Typography color="text.secondary" variant="body2" sx={{ textTransform: 'uppercase', letterSpacing: 1, mb: 1, fontWeight: 600 }}>Modalities</Typography>
                  <Stack direction="row" spacing={1} mt={1}>
                    {dataset.modality.map(m => <Chip key={m} label={m} size="small" variant="outlined" sx={{ color: '#475569', borderColor: 'rgba(0,0,0,0.15)' }} />)}
                  </Stack>
                </Box>
                <Divider sx={{ borderColor: 'rgba(0,0,0,0.06)' }} />
                <Box>
                  <Typography color="text.secondary" variant="body2" sx={{ textTransform: 'uppercase', letterSpacing: 1, mb: 1, fontWeight: 600 }}>License</Typography>
                  <Typography variant="body1" sx={{ color: '#0f172a' }}>CC BY 4.0 (Sample) / Commercial (Full)</Typography>
                </Box>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
