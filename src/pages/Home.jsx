import React, { useState, useEffect, useRef } from 'react';
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
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  Alert,
} from '@mui/material';
import {
  Videocam,
  PrecisionManufacturing,
  AssignmentTurnedIn,
  CheckCircle,
  Download,
  Work,
  ArrowForward,
  ChevronRight,
  Send,
  Hub,
} from '@mui/icons-material';
import { datasets } from '../data/mockDatasets';
import RevealSection from '../components/RevealSection';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import backgroundImage from '../assets/image2.png';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const navigate = useNavigate();
  const previewDatasets = datasets.slice(0, 3);
  const parallaxRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      e.target.reset();
    }, 1500);
  };

  useEffect(() => {
    const container = parallaxRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      // set initial centering state that GSAP will own from now on
      gsap.set('.parallax-title', { xPercent: -50 });

      gsap.to('.parallax-sky', {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      gsap.to('.parallax-title', {
        yPercent: -20, // xPercent: -50 stays intact since GSAP merges it
        opacity: 0.2,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      gsap.to('.parallax-foreground', {
        yPercent: -5,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <Box sx={{ pb: 8 }}>
      {/* Parallax Hero Section */}
      <Box
        ref={parallaxRef}
        sx={{
          position: 'relative',
          height: '100vh',
          width: '100%',
          overflow: 'hidden',
          backgroundColor: '#b85f58',
          mb: 6,
          mt: -12, // Pull up under the floating navbar
          pt: 12,
        }}
      >
        {/* Layer 1: Background Image */}
        <Box
          className="parallax-sky"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '130%', // extra height for parallax scroll range
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />


        {/* Layer 3: Central serif text */}
        <Box
          className="parallax-title"
          sx={{
            position: 'absolute',
            top: '20%',
            left: '50%',
            textAlign: 'center',
            width: '90%',
            maxWidth: '900px',
            zIndex: 3,
            color: '#fffbec',
            willChange: 'transform',
            pointerEvents: 'none',
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.8rem', md: '4.5rem' },
              fontWeight: 400,
              fontFamily: "'Fraunces', serif",
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              textShadow: '0 4px 20px rgba(15, 23, 42, 0.25)',
              mb: 1,
            }}
          >
            Where Human Movement
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.8rem', md: '4.5rem' },
              fontWeight: 400,
              fontFamily: "'Fraunces', serif",
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              textShadow: '0 4px 20px rgba(15, 23, 42, 0.25)',
            }}
          >
            Becomes Robot Intelligence
          </Typography>
        </Box>

        {/* Layer 5: Floating Glassmorphic Info Card */}
        <Box
          className="parallax-foreground"
          sx={{
            position: 'absolute',
            bottom: '10%',
            left: '5%',
            maxWidth: { xs: '90%', sm: '420px' },
            borderRadius: '24px',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(24px) saturate(140%)',
            WebkitBackdropFilter: 'blur(24px) saturate(140%)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.12), inset 0 0 0 1px rgba(255,255,255,0.05)',
            p: { xs: 3, md: 4 },
            zIndex: 5,
            willChange: 'transform',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: '#fffbec',
              fontFamily: "'Fraunces', serif",
              fontSize: { xs: '1.6rem', md: '2rem' },
              fontWeight: 400,
              mb: 2,
              lineHeight: 1.25,
            }}
          >
            Trained on how  humans actually move
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255, 255, 256, 0.8)',
              fontFamily: 'inherit',
              lineHeight: 1.6,
              mb: 3,
              fontSize: '0.92rem',
            }}
          >
            We capture how people naturally interact with the world, then turn that footage into high-fidelity trajectories for robot policy training.
          </Typography>
          <Button
            onClick={() => navigate('/datasets')}
            sx={{
              color: '#fffbec',
              fontWeight: 600,
              p: 0,
              fontSize: '0.95rem',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: 'transparent',
                textDecoration: 'underline',
              },
            }}
            endIcon={<ChevronRight sx={{ ml: -0.5 }} />}
          >
            Get to know us
          </Button>
        </Box>
      </Box>

      {/* Media Highlight (Glassmorphic Preview Frame) */}
      <RevealSection Component={Container} maxWidth="lg" sx={{ mb: 12 }} once={true} selector=".media-reveal">
        <Box className="media-reveal" sx={{
          width: '100%',
          height: { xs: '300px', md: '480px' },
          borderRadius: '24px',
          overflow: 'hidden',
          position: 'relative',
          border: '1px solid rgba(255, 255, 255, 0.9)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05)',
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
            backgroundColor: 'rgba(15, 23, 42, 0.25)',
            backdropFilter: 'blur(2px)',
          }} />
          <Button variant="contained" sx={{
            zIndex: 2,
            borderRadius: '50%',
            width: 76,
            height: 76,
            minWidth: 'auto',
            p: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            color: '#1f242d',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
            '&:hover': {
              backgroundColor: '#ffffff',
              transform: 'scale(1.05)',
            }
          }}>
            <Typography variant="h4" sx={{ ml: 0.5 }}>▶</Typography>
          </Button>
        </Box>
      </RevealSection>

      {/* What We Offer */}
      <Box sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        backdropFilter: 'blur(20px)',
        py: 10,
        borderTop: '1px solid rgba(0, 0, 0, 0.05)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
      }}>
        <RevealSection Component={Container} maxWidth="lg" selector=".offer-reveal">
          <Typography className="offer-reveal" variant="h3" textAlign="center" sx={{
            mb: 8, color: '#0f172a', fontWeight: 500,
            lineHeight: 1.15,
            fontFamily: "'Fraunces', serif",
            letterSpacing: '-0.02em',
            WebkitFontSmoothing: 'none',
            MozOsxFontSmoothing: 'unset',
            textRendering: 'optimizeSpeed',
          }}>
            The Data Pipeline
          </Typography>
          <Grid container spacing={4}>
            <Grid className="offer-reveal" size={{ xs: 12, md: 4 }}>
              <Card sx={{
                height: '100%',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                '&:hover': { transform: 'translateY(-6px)' }
              }}>
                {/* Glass Header Bar */}
                <Box sx={{
                  p: 2.5,
                  backgroundColor: 'rgba(255, 255, 255, 0.65)',
                  backdropFilter: 'blur(12px)',
                  borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5
                }}>
                  <Videocam sx={{ fontSize: 28, color: '#0f172a' }} />
                  <Typography variant="h6" sx={{ color: '#0f172a', fontWeight: 700 }}>
                    Vision Data
                  </Typography>
                </Box>
                <CardContent sx={{ p: 3 }}>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    Egocentric wrist and overhead video streams synchronized perfectly. Captured at 4K resolution and 60fps for maximum detail.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid className="offer-reveal" size={{ xs: 12, md: 4 }}>
              <Card sx={{
                height: '100%',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                '&:hover': { transform: 'translateY(-6px)' }
              }}>
                {/* Glass Header Bar */}
                <Box sx={{
                  p: 2.5,
                  backgroundColor: 'rgba(255, 255, 255, 0.65)',
                  backdropFilter: 'blur(12px)',
                  borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5
                }}>
                  <PrecisionManufacturing sx={{ fontSize: 28, color: '#0f172a' }} />
                  <Typography variant="h6" sx={{ color: '#0f172a', fontWeight: 700 }}>
                    Tactile Data
                  </Typography>
                </Box>
                <CardContent sx={{ p: 3 }}>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    High-frequency 100Hz physical contact data. Includes FSR force sensing, flex sensor curvature, and IMU orientations.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid className="offer-reveal" size={{ xs: 12, md: 4 }}>
              <Card sx={{
                height: '100%',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                '&:hover': { transform: 'translateY(-6px)' }
              }}>
                {/* Glass Header Bar */}
                <Box sx={{
                  p: 2.5,
                  backgroundColor: 'rgba(255, 255, 255, 0.65)',
                  backdropFilter: 'blur(12px)',
                  borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5
                }}>
                  <AssignmentTurnedIn sx={{ fontSize: 28, color: '#0f172a' }} />
                  <Typography variant="h6" sx={{ color: '#0f172a', fontWeight: 700 }}>
                    Annotations
                  </Typography>
                </Box>
                <CardContent sx={{ p: 3 }}>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    Rich metadata for every episode including phase labels, contact events, bounding boxes, and success/fail flags.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </RevealSection>
      </Box>

      {/* Dataset Previews */}
      <RevealSection Component={Container} maxWidth="lg" sx={{ py: 12 }} selector=".dataset-reveal">
        <Stack className="dataset-reveal" direction="row" sx={{ display: 'flex', justifyContent: 'space-between', mb: 6, alignItems: 'center' }}>
          <Typography variant="h3" sx={{
            color: '#0f172a', fontWeight: 500, lineHeight: 1.15,
            fontFamily: "'Fraunces', serif",
            letterSpacing: '-0.02em',
            WebkitFontSmoothing: 'none',
            MozOsxFontSmoothing: 'unset',
            textRendering: 'optimizeSpeed',
          }}>Available Datasets</Typography>
          <Button
            variant="text"
            sx={{ color: '#0f172a', fontWeight: 700 }}
            onClick={() => navigate('/datasets')}
          >
            View all →
          </Button>
        </Stack>
        <Grid container spacing={4}>
          {previewDatasets.map((dataset) => (
            <Grid className="dataset-reveal" size={{ xs: 12, md: 4 }} key={dataset.id}>
              <Card sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 16px 40px rgba(0, 0, 0, 0.08)'
                }
              }}>
                {/* Glass Header Banner */}
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
                  <Typography variant="body2" sx={{ fontWeight: 700, color: '#0f172a' }}>
                    {dataset.taskType}
                  </Typography>
                  <Chip label={dataset.format} size="small" sx={{ backgroundColor: 'rgba(0,0,0,0.06)', fontWeight: 600, fontSize: '0.75rem' }} />
                </Box>
                <CardMedia
                  component="img"
                  height="180"
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
                    {dataset.description.substring(0, 100)}...
                  </Typography>
                  {/* <Button
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
                    View dataset
                  </Button> */}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </RevealSection>

      {/* Get Quote Section */}
      <Box sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.45)',
        backdropFilter: 'blur(20px)',
        py: 12,
        borderTop: '1px solid rgba(0, 0, 0, 0.05)',
      }}>
        <RevealSection Component={Container} maxWidth="lg" selector=".quote-reveal">
          <Grid container spacing={8} alignItems="stretch">
            {/* Info / Value Proposition */}
            <Grid className="quote-reveal" size={{ xs: 12, md: 5 }} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Box>
                {/* <Box sx={{ display: 'inline-flex', p: 1.5, borderRadius: '16px', backgroundColor: 'rgba(31, 36, 45, 0.05)', mb: 3 }}>
                  <Hub sx={{ fontSize: 32, color: '#1f242d' }} />
                </Box> */}
                <Typography variant="h3" sx={{
                  mb: 3, color: '#0f172a', fontWeight: 500, lineHeight: 1.15,
                  fontFamily: "'Fraunces', serif",
                  letterSpacing: '-0.02em',
                  WebkitFontSmoothing: 'none',
                  MozOsxFontSmoothing: 'unset',
                  textRendering: 'optimizeSpeed',
                }}>
                  Request a Custom Dataset Quote
                </Typography>
                <Typography color="text.secondary" paragraph sx={{ mb: 4, fontSize: '1.05rem', lineHeight: 1.7 }}>
                  Need high-fidelity trajectories for a specific robotic task, custom environments, or unique multi-modal configurations?
                </Typography>

                <Stack spacing={3}>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <CheckCircle sx={{ color: '#0f172a', mt: 0.5 }} />
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 700, color: '#0f172a' }}>Tailored Trajectories</Typography>
                      <Typography variant="body2" color="text.secondary">We set up customized task environments and collect precise teleoperation/imitation data.</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <CheckCircle sx={{ color: '#0f172a', mt: 0.5 }} />
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 700, color: '#0f172a' }}>Sensor Suite Alignment</Typography>
                      <Typography variant="body2" color="text.secondary">Select from custom camera positions, resolutions, tactile sensors (FSR, IMU), or custom formats.</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <CheckCircle sx={{ color: '#0f172a', mt: 0.5 }} />
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 700, color: '#0f172a' }}>Fast Turnaround</Typography>
                      <Typography variant="body2" color="text.secondary">Receive high-quality annotated episodes ready for model training in a matter of days.</Typography>
                    </Box>
                  </Box>
                </Stack>
              </Box>
            </Grid>

            {/* Form */}
            <Grid className="quote-reveal" size={{ xs: 12, md: 7 }}>
              <Paper sx={{
                p: { xs: 4, md: 6 },
                borderRadius: '24px',
                backgroundColor: 'rgba(255, 255, 255, 0.75)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.95)',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.04)'
              }}>
                {status === 'success' && (
                  <Alert severity="success" sx={{ mb: 4, borderRadius: 2 }}>
                    Your quote request has been sent. We'll get back to you within 24 hours.
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
                          <MenuItem value="custom"><em>Custom / New Dataset</em></MenuItem>
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
                        label="Project Details & Requirements"
                        multiline
                        rows={4}
                        placeholder="Tell us about the task, camera setups, robot hardware, or custom formats needed..."
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
                          py: 1.7,
                          fontSize: '1rem',
                          fontWeight: 600,
                          backgroundColor: '#1f242d',
                          color: '#ffffff',
                          borderRadius: '28px',
                          '&:hover': { backgroundColor: '#0f172a' }
                        }}
                      >
                        {status === 'submitting' ? 'Submitting Request...' : 'Request Quote'}
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </Grid>
          </Grid>
        </RevealSection>
      </Box>

    </Box>
  );
}
