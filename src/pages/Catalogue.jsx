import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Chip,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { datasets } from '../data/mockDatasets';

export default function Catalogue() {
  const navigate = useNavigate();

  // Filter states
  const [taskFilter, setTaskFilter] = useState('');
  const [modalityFilter, setModalityFilter] = useState('');
  const [materialFilter, setMaterialFilter] = useState('');
  const [formatFilter, setFormatFilter] = useState('');

  // Extract unique filter options
  const taskOptions = [...new Set(datasets.map(d => d.taskType))];
  const materialOptions = [...new Set(datasets.map(d => d.material))];
  const formatOptions = [...new Set(datasets.map(d => d.format))];

  // Apply filters
  const filteredDatasets = datasets.filter(d => {
    if (taskFilter && d.taskType !== taskFilter) return false;
    if (modalityFilter && !d.modality.includes(modalityFilter)) return false;
    if (materialFilter && d.material !== materialFilter) return false;
    if (formatFilter && d.format !== formatFilter) return false;
    return true;
  });

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h2" sx={{ mb: 1, color: '#0f172a', fontWeight: 800 }}>Dataset Catalogue</Typography>
      <Typography variant="h6" color="text.secondary" sx={{ mb: 5, fontWeight: 400 }}>
        Browse our collection of high-fidelity physical manipulation datasets.
      </Typography>

      {/* Glassmorphic Filters Header Box */}
      <Box sx={{
        p: 3,
        mb: 6,
        borderRadius: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.95)',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)'
      }}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <FormControl fullWidth size="small">
              <InputLabel id="task-filter-label">Task Type</InputLabel>
              <Select
                labelId="task-filter-label"
                value={taskFilter}
                label="Task Type"
                onChange={(e) => setTaskFilter(e.target.value)}
                sx={{ borderRadius: '12px' }}
              >
                <MenuItem value=""><em>All</em></MenuItem>
                {taskOptions.map(t => <MenuItem key={t} value={t}>{t}</MenuItem>)}
              </Select>
            </FormControl>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <FormControl fullWidth size="small">
              <InputLabel id="modality-filter-label">Sensor Modality</InputLabel>
              <Select
                labelId="modality-filter-label"
                value={modalityFilter}
                label="Sensor Modality"
                onChange={(e) => setModalityFilter(e.target.value)}
                sx={{ borderRadius: '12px' }}
              >
                <MenuItem value=""><em>All</em></MenuItem>
                <MenuItem value="vision">Vision</MenuItem>
                <MenuItem value="tactile">Tactile</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <FormControl fullWidth size="small">
              <InputLabel id="material-filter-label">Object Material</InputLabel>
              <Select
                labelId="material-filter-label"
                value={materialFilter}
                label="Object Material"
                onChange={(e) => setMaterialFilter(e.target.value)}
                sx={{ borderRadius: '12px' }}
              >
                <MenuItem value=""><em>All</em></MenuItem>
                {materialOptions.map(m => <MenuItem key={m} value={m}>{m}</MenuItem>)}
              </Select>
            </FormControl>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <FormControl fullWidth size="small">
              <InputLabel id="format-filter-label">Format</InputLabel>
              <Select
                labelId="format-filter-label"
                value={formatFilter}
                label="Format"
                onChange={(e) => setFormatFilter(e.target.value)}
                sx={{ borderRadius: '12px' }}
              >
                <MenuItem value=""><em>All</em></MenuItem>
                {formatOptions.map(f => <MenuItem key={f} value={f}>{f}</MenuItem>)}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>

      {/* Dataset Grid */}
      <Grid container spacing={4}>
        {filteredDatasets.map((dataset) => (
          <Grid size={{ xs: 12, md: 6, lg: 4 }} key={dataset.id}>
            <Card sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'translateY(-6px)',
                boxShadow: '0 16px 36px rgba(0,0,0,0.08)'
              }
            }}>
              {/* Glass Header Bar */}
              <Box sx={{
                p: 1.5,
                px: 2.5,
                backgroundColor: 'rgba(255, 255, 255, 0.85)',
                backdropFilter: 'blur(12px)',
                borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#0f172a' }}>
                  {dataset.taskType}
                </Typography>
                <Chip label={dataset.format} size="small" sx={{ backgroundColor: 'rgba(0,0,0,0.06)', fontWeight: 600, fontSize: '0.75rem' }} />
              </Box>
              <CardMedia
                component="img"
                height="190"
                image={dataset.thumbnail}
                alt={dataset.name}
              />
              <CardContent sx={{ flexGrow: 1, p: 3, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 700, color: '#0f172a' }}>{dataset.name}</Typography>
                <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
                  <Chip label={`${dataset.episodes} episodes`} size="small" sx={{ backgroundColor: 'rgba(0,0,0,0.05)', color: '#475569' }} />
                  {dataset.modality.map(m => (
                    <Chip key={m} label={m} size="small" variant="outlined" sx={{ borderColor: 'rgba(0,0,0,0.12)', color: '#475569' }} />
                  ))}
                </Stack>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, flexGrow: 1 }}>
                  {dataset.description}
                </Typography>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{
                    borderRadius: '24px',
                    color: '#0f172a',
                    borderColor: 'rgba(0,0,0,0.2)',
                    fontWeight: 600,
                    '&:hover': {
                      borderColor: '#0f172a',
                      backgroundColor: 'rgba(0,0,0,0.04)'
                    }
                  }}
                  onClick={() => navigate(`/datasets/${dataset.id}`)}
                >
                  View details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
        {filteredDatasets.length === 0 && (
          <Grid size={12}>
            <Typography variant="h6" color="text.secondary" textAlign="center" sx={{ py: 8 }}>
              No datasets found matching your filters.
            </Typography>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}
