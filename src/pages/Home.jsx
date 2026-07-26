import React, { useState, useEffect, useRef } from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Card,
  CardContent,
  Stack,
  Chip,
  TextField,
  Paper,
  Alert,
  Fade,
} from '@mui/material';
import {
  ChevronRight,
  Send,
  CheckCircle,
  Sensors,
  AccessibilityNew,
  Hub,
  HomeWork,
  MedicalServices,
  Build,
  LocalShipping,
  Restaurant,
} from '@mui/icons-material';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextReveal from '../components/TextReveal';
import RevealSection from '../components/RevealSection';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [waitlistStatus, setWaitlistStatus] = useState('idle'); // idle, submitting, success
  const [contributorStatus, setContributorStatus] = useState('idle'); // idle, submitting, success

  const handleWaitlistSubmit = (e) => {
    e.preventDefault();
    setWaitlistStatus('submitting');
    setTimeout(() => {
      setWaitlistStatus('success');
      e.target.reset();
    }, 1500);
  };

  const handleContributorSubmit = (e) => {
    e.preventDefault();
    setContributorStatus('submitting');
    setTimeout(() => {
      setContributorStatus('success');
      e.target.reset();
    }, 1500);
  };

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90; // Adjusts for the sticky navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Decorative floating effect for background orbs
  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);

  useEffect(() => {
    if (orb1Ref.current && orb2Ref.current) {
      gsap.to(orb1Ref.current, {
        x: '+=30',
        y: '+=50',
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
      gsap.to(orb2Ref.current, {
        x: '-=40',
        y: '-=30',
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }
  }, []);

  const verticals = [
    {
      title: 'Home & hospitality',
      desc: 'Cooking, cleaning, service tasks with high everyday task diversity.',
      icon: <HomeWork sx={{ fontSize: 32, color: '#0f172a' }} />
    },
    {
      title: 'Healthcare & care settings',
      desc: 'Delicate, precision-sensitive manipulation.',
      icon: <MedicalServices sx={{ fontSize: 32, color: '#0f172a' }} />
    },
    {
      title: 'Skilled trades',
      desc: 'Craftsmanship and repair tasks where force control matters as much as motion.',
      icon: <Build sx={{ fontSize: 32, color: '#0f172a' }} />
    },
    {
      title: 'Logistics & inspection',
      desc: 'Handling, sorting, and inspection tasks across varied objects.',
      icon: <LocalShipping sx={{ fontSize: 32, color: '#0f172a' }} />
    },
    {
      title: 'Food service',
      desc: 'High-repetition tasks with meaningful force and grip variation.',
      icon: <Restaurant sx={{ fontSize: 32, color: '#0f172a' }} />
    }
  ];

  return (
    <Box sx={{ width: '100%' }}>
      {/* 1. Hero Section (Deep Tech Dark Mode) */}
      <Box sx={{
        position: 'relative',
        height: '92vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#0b0f17',
        mt: -12, // Pull up under the floating navbar
        pt: 12,
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      }}>
        {/* Floating gradient orbs */}
        <Box
          ref={orb1Ref}
          sx={{
            position: 'absolute',
            top: '20%',
            left: '10%',
            width: '450px',
            height: '450px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(99, 102, 241, 0) 70%)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />
        <Box
          ref={orb2Ref}
          sx={{
            position: 'absolute',
            bottom: '10%',
            right: '5%',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.12) 0%, rgba(168, 85, 247, 0) 70%)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />
        {/* Grid pattern background */}
        <Box sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.015) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.015) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          pointerEvents: 'none',
          zIndex: 1,
        }} />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 5 }}>
          <Stack spacing={4} sx={{ maxWidth: '850px', mx: 'auto', textAlign: 'center' }}>
            <TextReveal variant="words" duration={1} stagger={0.05} scroller={false}>
              <Typography
                variant="h1"
                sx={{
                  color: '#f8fafc',
                  fontSize: { xs: '2.5rem', sm: '3.8rem', md: '4.8rem' },
                  fontWeight: 800,
                  fontFamily: "'Fraunces', serif",
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                  textShadow: '0 4px 30px rgba(0,0,0,0.5)',
                }}
              >
                The data layer for robots that can touch the world.
              </Typography>
            </TextReveal>

            <Fade in={true} timeout={1200} style={{ transitionDelay: '500ms' }}>
              <Typography
                variant="h6"
                sx={{
                  color: '#94a3b8',
                  fontFamily: '"Montserrat", "Inter", sans-serif',
                  fontWeight: 400,
                  lineHeight: 1.6,
                  fontSize: { xs: '1rem', sm: '1.25rem' },
                  maxWidth: '750px',
                  mx: 'auto',
                }}
              >
                Sinew builds the multimodal data infrastructure manipulation policies are trained on — vision, depth, motion, and force, captured at the scale physical AI needs.
              </Typography>
            </Fade>

            <Fade in={true} timeout={1200} style={{ transitionDelay: '800ms' }}>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2.5}
                justifyContent="center"
                sx={{ pt: 2, px: { xs: 4, sm: 0 } }}
              >
                <Button
                  variant="contained"
                  onClick={() => handleScrollTo('waitlist')}
                  sx={{
                    backgroundColor: '#ffffff',
                    color: '#0b0f17',
                    borderRadius: '28px',
                    px: 3.5,
                    py: 1.6,
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    boxShadow: '0 8px 30px rgba(255, 255, 255, 0.1)',
                    '&:hover': {
                      backgroundColor: '#f1f5f9',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.2s ease',
                  }}
                >
                  For research & robotics teams
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => handleScrollTo('contributors')}
                  sx={{
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                    color: '#ffffff',
                    borderRadius: '28px',
                    px: 3.5,
                    py: 1.6,
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    '&:hover': {
                      borderColor: '#ffffff',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.2s ease',
                  }}
                >
                  For contributors
                </Button>
              </Stack>
            </Fade>
          </Stack>
        </Container>
      </Box>

      {/* 2. The Problem Section (Warm Minimalist Editorial) */}
      <Box id="problem" sx={{ py: 14, backgroundColor: '#FEFFFC' }}>
        <Container maxWidth="lg">
          <RevealSection selector=".problem-item" once={true}>
            <Grid container spacing={8} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }} className="problem-item">
                <Typography
                  variant="h2"
                  sx={{
                    color: '#0f172a',
                    fontFamily: "'Fraunces', serif",
                    fontWeight: 700,
                    fontSize: { xs: '2rem', md: '3rem' },
                    lineHeight: 1.15,
                    letterSpacing: '-0.02em',
                    mb: 4,
                  }}
                >
                  Manipulation is stuck on data, not models.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#475569',
                    fontFamily: '"Montserrat", "Inter", sans-serif',
                    fontSize: '1.08rem',
                    lineHeight: 1.8,
                    mb: 3,
                  }}
                >
                  Vision-language-action models have gotten dramatically better at understanding scenes and planning actions. What they still can't learn from video alone is touch — how much force a grasp takes, how contact shifts across a fingertip, how a wrist compensates for an object's weight mid-motion. That information barely exists in any dataset at scale, because collecting it has always required expensive teleoperation rigs or robot-specific hardware.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#475569',
                    fontFamily: '"Montserrat", "Inter", sans-serif',
                    fontSize: '1.08rem',
                    lineHeight: 1.8,
                  }}
                >
                  The result: today's manipulation policies are trained overwhelmingly on what a robot can see, not what it would need to feel. That's the gap we build for.
                </Typography>
              </Grid>

              {/* Conceptual tactile force visualizer graphic */}
              <Grid size={{ xs: 12, md: 6 }} className="problem-item" sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '460px',
                  height: '380px',
                  borderRadius: '24px',
                  backgroundColor: 'rgba(255, 255, 255, 0.4)',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.03)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                }}>
                  {/* Subtle Grid overlay */}
                  <Box sx={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `
                      linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px)
                    `,
                    backgroundSize: '24px 24px',
                  }} />

                  {/* Conceptual vector haptic force map */}
                  <Box sx={{
                    position: 'relative',
                    width: '280px',
                    height: '280px',
                    borderRadius: '50%',
                    border: '1.5px dashed rgba(15, 23, 42, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    {/* Ring 2 */}
                    <Box sx={{
                      position: 'absolute',
                      width: '190px',
                      height: '190px',
                      borderRadius: '50%',
                      border: '1px solid rgba(15, 23, 42, 0.15)',
                      backgroundColor: 'rgba(240, 243, 250, 0.3)',
                    }} />

                    {/* Force center */}
                    <Box sx={{
                      position: 'absolute',
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      background: 'radial-gradient(circle, rgba(99, 102, 241, 0.45) 0%, rgba(99, 102, 241, 0.05) 100%)',
                      border: '2px solid rgba(99, 102, 241, 0.6)',
                      boxShadow: '0 0 20px rgba(99, 102, 241, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <Sensors sx={{ color: '#4f46e5', fontSize: 28 }} />
                    </Box>

                    {/* Sensor Nodes */}
                    <Box sx={{ position: 'absolute', top: '15%', left: '30%', width: 8, height: 8, borderRadius: '50%', backgroundColor: '#6366f1' }} />
                    <Box sx={{ position: 'absolute', bottom: '25%', right: '20%', width: 10, height: 10, borderRadius: '50%', backgroundColor: '#a855f7' }} />
                    <Box sx={{ position: 'absolute', top: '40%', right: '12%', width: 6, height: 6, borderRadius: '50%', backgroundColor: '#475569' }} />
                    <Box sx={{ position: 'absolute', bottom: '45%', left: '15%', width: 8, height: 8, borderRadius: '50%', backgroundColor: '#6366f1' }} />

                    {/* Connection Lines (stylized vector) */}
                    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                      <path d="M 84,112 L 140,140 M 200,180 L 140,140 M 140,140 L 220,110 M 140,140 L 105,210" stroke="rgba(15,23,42,0.15)" strokeWidth="1" strokeDasharray="3,3" />
                    </svg>
                  </Box>

                  {/* Legend / Overlay pill */}
                  <Paper sx={{
                    position: 'absolute',
                    bottom: 24,
                    px: 2,
                    py: 1,
                    borderRadius: '20px',
                    backgroundColor: 'rgba(255, 255, 255, 0.85)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(0,0,0,0.06)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                  }}>
                    <Typography variant="caption" sx={{ fontWeight: 700, letterSpacing: '0.5px', color: '#0f172a' }}>
                      SYNCHRONIZED FORCE GRID
                    </Typography>
                  </Paper>
                </Box>
              </Grid>
            </Grid>
          </RevealSection>
        </Container>
      </Box>

      {/* 3. What Sinew Does (Platform) */}
      <Box id="platform" sx={{ py: 14, backgroundColor: 'rgba(248, 250, 252, 0.55)', borderTop: '1px solid rgba(0,0,0,0.04)', borderBottom: '1px solid rgba(0,0,0,0.04)' }}>
        <Container maxWidth="lg">
          <RevealSection selector=".what-reveal" once={true}>
            <Stack spacing={2} className="what-reveal" sx={{ maxWidth: '800px', mb: 8 }}>
              <Typography
                variant="h2"
                sx={{
                  color: '#0f172a',
                  fontFamily: "'Fraunces', serif",
                  fontWeight: 700,
                  fontSize: { xs: '2rem', md: '3rem' },
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                }}
              >
                A data layer, not a robot.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#475569',
                  fontFamily: '"Montserrat", "Inter", sans-serif',
                  fontSize: '1.08rem',
                  lineHeight: 1.7,
                }}
              >
                We collect and structure real-world human demonstration data — synchronized across vision, metric depth, motion, and contact force — and deliver it as training-ready datasets to teams building manipulation and embodied AI models.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#475569',
                  fontFamily: '"Montserrat", "Inter", sans-serif',
                  fontSize: '1.08rem',
                  lineHeight: 1.7,
                }}
              >
                We are not a robot company, a VLA company, or a teleoperation hardware company. We don't compete with the teams we sell to. We exist so they don't have to build and run a data collection operation themselves.
              </Typography>
            </Stack>

            <Grid container spacing={4}>
              <Grid size={{ xs: 12, md: 4 }} className="what-reveal">
                <Card sx={{
                  height: '100%',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                  }
                }}>
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'inline-flex', p: 2, borderRadius: '16px', backgroundColor: 'rgba(99, 102, 241, 0.08)', mb: 3 }}>
                      <Sensors sx={{ color: '#4f46e5', fontSize: 32 }} />
                    </Box>
                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 700, color: '#0f172a', fontFamily: '"Montserrat", sans-serif' }}>
                      Multimodal capture
                    </Typography>
                    <Typography color="text.secondary" sx={{ lineHeight: 1.6, fontSize: '0.95rem' }}>
                      Vision, metric depth, hand and body motion, and per-contact force — captured together, not stitched together after the fact.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }} className="what-reveal">
                <Card sx={{
                  height: '100%',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                  }
                }}>
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'inline-flex', p: 2, borderRadius: '16px', backgroundColor: 'rgba(168, 85, 247, 0.08)', mb: 3 }}>
                      <AccessibilityNew sx={{ color: '#a855f7', fontSize: 32 }} />
                    </Box>
                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 700, color: '#0f172a', fontFamily: '"Montserrat", sans-serif' }}>
                      Embodiment-agnostic
                    </Typography>
                    <Typography color="text.secondary" sx={{ lineHeight: 1.6, fontSize: '0.95rem' }}>
                      Human demonstration data structured to retarget across manipulator types, not tied to one robot's kinematics.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }} className="what-reveal">
                <Card sx={{
                  height: '100%',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                  }
                }}>
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'inline-flex', p: 2, borderRadius: '16px', backgroundColor: 'rgba(71, 85, 105, 0.08)', mb: 3 }}>
                      <Hub sx={{ color: '#475569', fontSize: 32 }} />
                    </Box>
                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 700, color: '#0f172a', fontFamily: '"Montserrat", sans-serif' }}>
                      Built to scale
                    </Typography>
                    <Typography color="text.secondary" sx={{ lineHeight: 1.6, fontSize: '0.95rem' }}>
                      A distributed capture network designed to grow with task and environment diversity, not bottlenecked by hardware availability or lab headcount.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </RevealSection>
        </Container>
      </Box>

      {/* 4. Where the Data Comes From */}
      <Box id="data" sx={{ py: 14, backgroundColor: '#FEFFFC' }}>
        <Container maxWidth="lg">
          <RevealSection selector=".data-reveal" once={true}>
            <Grid container spacing={8} alignItems="center">
              <Grid size={{ xs: 12, md: 5 }} className="data-reveal">
                {/* Styled decorative badge lists */}
                <Stack spacing={2} sx={{ py: 2 }}>
                  {['Kitchens', 'Workshops', 'Service Counters', 'Care Settings'].map((env, idx) => (
                    <Box key={env} sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      p: 2.5,
                      borderRadius: '16px',
                      backgroundColor: 'rgba(248, 250, 252, 0.8)',
                      border: '1px solid rgba(0, 0, 0, 0.04)',
                      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.01)',
                      width: 'fit-content',
                      transform: `translateX(${idx * 16}px)`,
                    }}>
                      <Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: idx % 2 === 0 ? '#6366f1' : '#a855f7' }} />
                      <Typography variant="body1" sx={{ fontWeight: 700, color: '#0f172a', fontSize: '0.95rem' }}>
                        {env}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Grid>

              <Grid size={{ xs: 12, md: 7 }} className="data-reveal">
                <Typography
                  variant="h2"
                  sx={{
                    color: '#0f172a',
                    fontFamily: "'Fraunces', serif",
                    fontWeight: 700,
                    fontSize: { xs: '2rem', md: '3rem' },
                    lineHeight: 1.15,
                    letterSpacing: '-0.02em',
                    mb: 4,
                  }}
                >
                  Real environments, real hands, real force.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#475569',
                    fontFamily: '"Montserrat", "Inter", sans-serif',
                    fontSize: '1.08rem',
                    lineHeight: 1.8,
                    mb: 3,
                  }}
                >
                  Our data is captured during ordinary human task performance — not staged lab demonstrations. Contributors record themselves performing real manipulation tasks in real environments: kitchens, service counters, workshops, care settings. That's what gives the resulting datasets the task and environment diversity a lab-only collection process can't produce.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#475569',
                    fontFamily: '"Montserrat", "Inter", sans-serif',
                    fontSize: '1.08rem',
                    lineHeight: 1.8,
                  }}
                >
                  Every capture is synchronized down to the frame — vision, depth, motion, and contact force aligned to a single timeline, quality-checked before it enters a delivered dataset.
                </Typography>
              </Grid>
            </Grid>
          </RevealSection>
        </Container>
      </Box>

      {/* 5. Verticals Section */}
      <Box id="verticals" sx={{ py: 14, backgroundColor: 'rgba(248, 250, 252, 0.55)', borderTop: '1px solid rgba(0,0,0,0.04)', borderBottom: '1px solid rgba(0,0,0,0.04)' }}>
        <Container maxWidth="lg">
          <RevealSection selector=".vert-reveal" once={true}>
            <Typography
              variant="h2"
              className="vert-reveal"
              sx={{
                color: '#0f172a',
                fontFamily: "'Fraunces', serif",
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '3rem' },
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                textAlign: 'center',
                mb: 8,
              }}
            >
              Manipulation shows up everywhere.<br />We're built to cover all of it.
            </Typography>

            <Grid container spacing={3.5} justifyContent="center">
              {verticals.map((vert) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={vert.title} className="vert-reveal">
                  <Card sx={{
                    height: '100%',
                    backgroundColor: 'rgba(255, 255, 255, 0.75)',
                    backdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255, 255, 255, 0.95)',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.02)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.02)',
                      boxShadow: '0 16px 40px rgba(0, 0, 0, 0.04)',
                      borderColor: 'rgba(99, 102, 241, 0.25)',
                    }
                  }}>
                    <CardContent sx={{ p: 4 }}>
                      <Box sx={{ display: 'inline-flex', p: 1.5, borderRadius: '12px', backgroundColor: 'rgba(15, 23, 42, 0.04)', mb: 3.5 }}>
                        {vert.icon}
                      </Box>
                      <Typography variant="h6" sx={{ mb: 1.5, fontWeight: 700, color: '#0f172a', fontFamily: '"Montserrat", sans-serif' }}>
                        {vert.title}
                      </Typography>
                      <Typography color="text.secondary" sx={{ lineHeight: 1.6, fontSize: '0.92rem' }}>
                        {vert.desc}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </RevealSection>
        </Container>
      </Box>

      {/* 6. Team Section */}
      <Box id="team" sx={{ py: 14, backgroundColor: '#FEFFFC' }}>
        <Container maxWidth="lg">
          <RevealSection selector=".team-reveal" once={true}>
            <Stack spacing={2} sx={{ maxWidth: '800px', mx: 'auto', textAlign: 'center', mb: 8 }} className="team-reveal">
              <Typography
                variant="h2"
                sx={{
                  color: '#0f172a',
                  fontFamily: "'Fraunces', serif",
                  fontWeight: 700,
                  fontSize: { xs: '2rem', md: '3rem' },
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                }}
              >
                Built by people who've built the pipeline themselves.
              </Typography>
            </Stack>

            <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: '900px', mx: 'auto' }}>
              <Grid size={{ xs: 12, sm: 6 }} className="team-reveal">
                <Card sx={{
                  height: '100%',
                  textAlign: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.75)',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.02)',
                  border: '1px solid rgba(0,0,0,0.05)',
                }}>
                  <CardContent sx={{ p: 5 }}>
                    <Box sx={{
                      width: 100,
                      height: 100,
                      borderRadius: '50%',
                      mx: 'auto',
                      mb: 3,
                      backgroundColor: '#6366f1',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      boxShadow: '0 8px 20px rgba(99, 102, 241, 0.25)',
                    }}>
                      <Typography variant="h3" sx={{ fontFamily: "'Fraunces', serif", fontWeight: 400 }}>A</Typography>
                    </Box>
                    <Typography variant="h5" sx={{ mb: 1, fontWeight: 700, color: '#0f172a', fontFamily: '"Montserrat", sans-serif' }}>
                      Aryan Shah
                    </Typography>
                    <Typography color="text.secondary" sx={{ mb: 3.5, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.8rem' }}>
                      Co-founder & CEO
                    </Typography>
                    <Typography color="text.secondary" sx={{ lineHeight: 1.7, fontSize: '0.95rem' }}>
                      Previously engineered data infrastructure for scaling robotics policies. Founded Sinew to solve the fundamental data bottleneck preventing VLAs from generalizing in physical environments.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }} className="team-reveal">
                <Card sx={{
                  height: '100%',
                  textAlign: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.75)',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.02)',
                  border: '1px solid rgba(0,0,0,0.05)',
                }}>
                  <CardContent sx={{ p: 5 }}>
                    <Box sx={{
                      width: 100,
                      height: 100,
                      borderRadius: '50%',
                      mx: 'auto',
                      mb: 3,
                      backgroundColor: '#a855f7',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      boxShadow: '0 8px 20px rgba(168, 85, 247, 0.25)',
                    }}>
                      <Typography variant="h3" sx={{ fontFamily: "'Fraunces', serif", fontWeight: 400 }}>U</Typography>
                    </Box>
                    <Typography variant="h5" sx={{ mb: 1, fontWeight: 700, color: '#0f172a', fontFamily: '"Montserrat", sans-serif' }}>
                      Umang Bhargav
                    </Typography>
                    <Typography color="text.secondary" sx={{ mb: 3.5, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.8rem' }}>
                      Co-founder
                    </Typography>
                    <Typography color="text.secondary" sx={{ lineHeight: 1.7, fontSize: '0.95rem' }}>
                      Background in multimodal machine learning and physical sensing systems. Leads the software, sensor suite alignment, and real-time synchronization pipelines.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </RevealSection>
        </Container>
      </Box>

      {/* 7. Forms / Interactive Split CTAs */}
      <Box id="contact" sx={{
        py: 14,
        backgroundColor: '#0f172a',
        color: '#ffffff',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle background glow */}
        <Box sx={{
          position: 'absolute',
          bottom: '-10%',
          left: '25%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, rgba(99, 102, 241, 0) 70%)',
          pointerEvents: 'none',
        }} />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 5 }}>
          <Grid container spacing={6} alignItems="stretch">
            {/* Form 1: Robotics Teams Waitlist */}
            <Grid id="waitlist" size={{ xs: 12, md: 6 }} sx={{ display: 'flex' }}>
              <Paper sx={{
                width: '100%',
                p: { xs: 4, md: 5 },
                borderRadius: '24px',
                backgroundColor: 'rgba(30, 41, 59, 0.4)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
                <Box>
                  <Typography variant="h4" sx={{
                    color: '#ffffff',
                    fontFamily: "'Fraunces', serif",
                    fontWeight: 500,
                    fontSize: '1.75rem',
                    mb: 2,
                  }}>
                    For research & robotics teams
                  </Typography>
                  <Typography sx={{ color: '#94a3b8', mb: 4, lineHeight: 1.6, fontSize: '0.95rem' }}>
                    Building a manipulation policy and need training data with real contact and force information? We're working with a small number of design partners right now.
                  </Typography>

                  {waitlistStatus === 'success' ? (
                    <Fade in={true}>
                      <Alert
                        icon={<CheckCircle fontSize="inherit" />}
                        severity="success"
                        sx={{
                          borderRadius: '16px',
                          backgroundColor: 'rgba(16, 185, 129, 0.1)',
                          color: '#34d399',
                          border: '1px solid rgba(16, 185, 129, 0.2)',
                          '& .MuiAlert-icon': { color: '#34d399' }
                        }}
                      >
                        Your waitlist request has been submitted successfully. We'll be in touch soon.
                      </Alert>
                    </Fade>
                  ) : (
                    <form onSubmit={handleWaitlistSubmit}>
                      <Stack spacing={2.5}>
                        <TextField
                          fullWidth
                          required
                          label="Name"
                          variant="outlined"
                          slotProps={{
                            inputLabel: { style: { color: '#94a3b8' } },
                          }}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              color: '#ffffff',
                              '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.12)' },
                              '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.25)' },
                              '&.Mui-focused fieldset': { borderColor: '#6366f1' },
                            }
                          }}
                        />
                        <TextField
                          fullWidth
                          required
                          label="Organization / Institute"
                          variant="outlined"
                          slotProps={{
                            inputLabel: { style: { color: '#94a3b8' } },
                          }}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              color: '#ffffff',
                              '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.12)' },
                              '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.25)' },
                              '&.Mui-focused fieldset': { borderColor: '#6366f1' },
                            }
                          }}
                        />
                        <TextField
                          fullWidth
                          required
                          type="email"
                          label="Work Email"
                          variant="outlined"
                          slotProps={{
                            inputLabel: { style: { color: '#94a3b8' } },
                          }}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              color: '#ffffff',
                              '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.12)' },
                              '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.25)' },
                              '&.Mui-focused fieldset': { borderColor: '#6366f1' },
                            }
                          }}
                        />
                        <TextField
                          fullWidth
                          required
                          label="What are you building?"
                          variant="outlined"
                          placeholder="e.g. VLA for precise home-cleaning, or generalist manipulation policy..."
                          multiline
                          rows={3}
                          slotProps={{
                            inputLabel: { style: { color: '#94a3b8' } },
                          }}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              color: '#ffffff',
                              '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.12)' },
                              '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.25)' },
                              '&.Mui-focused fieldset': { borderColor: '#6366f1' },
                            }
                          }}
                        />
                        <Button
                          type="submit"
                          variant="contained"
                          disabled={waitlistStatus === 'submitting'}
                          endIcon={<Send />}
                          sx={{
                            py: 1.5,
                            borderRadius: '24px',
                            backgroundColor: '#ffffff',
                            color: '#0f172a',
                            fontWeight: 700,
                            '&:hover': {
                              backgroundColor: '#f1f5f9',
                            },
                            '&.Mui-disabled': {
                              backgroundColor: 'rgba(255,255,255,0.3)',
                              color: 'rgba(0,0,0,0.5)',
                            }
                          }}
                        >
                          {waitlistStatus === 'submitting' ? 'Submitting...' : 'Get in touch'}
                        </Button>
                      </Stack>
                    </form>
                  )}
                </Box>
              </Paper>
            </Grid>

            {/* Form 2: Contributor Sign-up */}
            <Grid id="contributors" size={{ xs: 12, md: 6 }} sx={{ display: 'flex' }}>
              <Paper sx={{
                width: '100%',
                p: { xs: 4, md: 5 },
                borderRadius: '24px',
                backgroundColor: 'rgba(30, 41, 59, 0.4)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
                <Box>
                  <Typography variant="h4" sx={{
                    color: '#ffffff',
                    fontFamily: "'Fraunces', serif",
                    fontWeight: 500,
                    fontSize: '1.75rem',
                    mb: 2,
                  }}>
                    For contributors
                  </Typography>
                  <Typography sx={{ color: '#94a3b8', mb: 4, lineHeight: 1.6, fontSize: '0.95rem' }}>
                    Interested in joining our data collection network? We're onboarding contributors in select regions.
                  </Typography>

                  {contributorStatus === 'success' ? (
                    <Fade in={true}>
                      <Alert
                        icon={<CheckCircle fontSize="inherit" />}
                        severity="success"
                        sx={{
                          borderRadius: '16px',
                          backgroundColor: 'rgba(16, 185, 129, 0.1)',
                          color: '#34d399',
                          border: '1px solid rgba(16, 185, 129, 0.2)',
                          '& .MuiAlert-icon': { color: '#34d399' }
                        }}
                      >
                        Your application has been received. We'll be in touch if there's a match.
                      </Alert>
                    </Fade>
                  ) : (
                    <form onSubmit={handleContributorSubmit}>
                      <Stack spacing={2.5}>
                        <TextField
                          fullWidth
                          required
                          label="Name"
                          variant="outlined"
                          slotProps={{
                            inputLabel: { style: { color: '#94a3b8' } },
                          }}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              color: '#ffffff',
                              '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.12)' },
                              '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.25)' },
                              '&.Mui-focused fieldset': { borderColor: '#a855f7' },
                            }
                          }}
                        />
                        <TextField
                          fullWidth
                          required
                          type="email"
                          label="Email Address"
                          variant="outlined"
                          slotProps={{
                            inputLabel: { style: { color: '#94a3b8' } },
                          }}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              color: '#ffffff',
                              '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.12)' },
                              '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.25)' },
                              '&.Mui-focused fieldset': { borderColor: '#a855f7' },
                            }
                          }}
                        />
                        <TextField
                          fullWidth
                          required
                          label="City"
                          variant="outlined"
                          slotProps={{
                            inputLabel: { style: { color: '#94a3b8' } },
                          }}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              color: '#ffffff',
                              '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.12)' },
                              '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.25)' },
                              '&.Mui-focused fieldset': { borderColor: '#a855f7' },
                            }
                          }}
                        />
                        <TextField
                          fullWidth
                          required
                          label="Availability"
                          variant="outlined"
                          placeholder="e.g. 10 hours/week, weekends, full-time..."
                          slotProps={{
                            inputLabel: { style: { color: '#94a3b8' } },
                          }}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              color: '#ffffff',
                              '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.12)' },
                              '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.25)' },
                              '&.Mui-focused fieldset': { borderColor: '#a855f7' },
                            }
                          }}
                        />
                        <Button
                          type="submit"
                          variant="contained"
                          disabled={contributorStatus === 'submitting'}
                          endIcon={<Send />}
                          sx={{
                            py: 1.5,
                            borderRadius: '24px',
                            backgroundColor: '#ffffff',
                            color: '#0f172a',
                            fontWeight: 700,
                            '&:hover': {
                              backgroundColor: '#f1f5f9',
                            },
                            '&.Mui-disabled': {
                              backgroundColor: 'rgba(255,255,255,0.3)',
                              color: 'rgba(0,0,0,0.5)',
                            }
                          }}
                        >
                          {contributorStatus === 'submitting' ? 'Submitting...' : 'Sign up'}
                        </Button>
                      </Stack>
                    </form>
                  )}
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
