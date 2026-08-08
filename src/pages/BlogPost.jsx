import React from 'react';
import { Link as RouterLink, useParams, Navigate } from 'react-router-dom';
import { Box, Container, Stack, Typography, Button, Divider } from '@mui/material';
import { ArrowBack, ChevronRight } from '@mui/icons-material';
import SampleVideo from '../components/SampleVideo';
import RevealSection from '../components/RevealSection';
import { postsBySlug } from '../data/posts';

const mono = {
  fontFamily: "'IBM Plex Mono', monospace",
  fontSize: '0.78rem',
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  color: '#8a8a85',
};

const displayFont = "'Pixelify Sans', sans-serif";
const bodyFont = "'Inter', sans-serif";

const bodyText = {
  color: '#54544f',
  fontFamily: bodyFont,
  fontSize: '1.02rem',
  lineHeight: 1.85,
};

const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

const samples = [
  {
    id: 'camera-pose',
    index: '01',
    stage: 'Head trajectory',
    title: 'Where the head went',
    description:
      'Stereo frames and IMU are fused into a single 6-DoF camera trajectory, so every later signal shares one metric world frame. The path you see is the operator moving through the workspace — reaching, leaning in, turning to the counter. Without this, hand positions are only ever relative to a camera that was itself moving.',
    src: asset('videos/camera_pose_motion.mp4'),
    poster: asset('videos/posters/camera_pose_motion.jpg'),
    specs: [
      { label: 'Signal', value: '6-DoF pose' },
      { label: 'Rate', value: '200 Hz IMU' },
      { label: 'Frame', value: 'Metric, world' },
    ],
  },
  {
    id: 'depth-map',
    index: '02',
    stage: 'Dense depth',
    title: 'How far away everything was',
    description:
      'Per-frame metric depth from the stereo pair, stored as 16-bit millimetres. The baseline is tuned for the range that actually matters for manipulation — roughly 0.3 to 0.8 m, where a hand closes on an object. Depth is what turns a 2D keypoint into a position you can hand to a controller.',
    src: asset('videos/depth_map.mp4'),
    poster: asset('videos/posters/depth_map.jpg'),
    specs: [
      { label: 'Signal', value: 'Dense depth' },
      { label: 'Format', value: '16-bit mm' },
      { label: 'Sweet spot', value: '0.3–0.8 m' },
    ],
  },
  {
    id: 'hand-tracking',
    index: '03',
    stage: 'Hand motion',
    title: 'What the hands did',
    description:
      'Twenty-one keypoints per hand, detected in 2D and triangulated into metric 3D against the depth and pose above. This is the part people underestimate: fingers occlude each other constantly during real work, and a tracker that looks clean on a benchmark drops frames the moment a hand goes behind an object.',
    src: asset('videos/hand_tracking_motion.mp4'),
    poster: asset('videos/posters/hand_tracking_motion.jpg'),
    specs: [
      { label: 'Signal', value: '21 keypoints / hand' },
      { label: 'Space', value: 'Metric 3D' },
      { label: 'Provenance', value: 'Tagged per frame' },
    ],
  },
  {
    id: 'gripper-render',
    index: '04',
    stage: 'Retargeting',
    title: 'The same motion, on a gripper',
    description:
      'The human trajectory retargeted onto a parallel-jaw gripper. A five-fingered demonstration does not map cleanly onto two jaws, so retargeting solves for the pose and aperture that reproduce the same contact intent rather than copying joint angles. This is what makes one capture reusable across embodiments instead of tied to the hand that recorded it.',
    src: asset('videos/gripper_render.mp4'),
    poster: asset('videos/posters/gripper_render.jpg'),
    specs: [
      { label: 'Output', value: 'End-effector pose' },
      { label: 'Target', value: 'Parallel-jaw' },
      { label: 'Solves for', value: 'Contact intent' },
    ],
  },
];

export default function BlogPost() {
  const { slug } = useParams();
  const post = postsBySlug[slug];

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <Box sx={{ width: '100%' }}>
      {/* Post header */}
      <Box sx={{ backgroundColor: '#131211', py: { xs: 8, md: 11 }, borderBottom: '1px solid #1f1e1c' }}>
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: '760px' }}>
            <Button
              component={RouterLink}
              to="/blog"
              startIcon={<ArrowBack sx={{ fontSize: 16 }} />}
              sx={{
                ...mono,
                color: '#6e6e69',
                px: 0,
                mb: 3.5,
                '&:hover': { backgroundColor: 'transparent', color: '#fafaf8' },
              }}
            >
              All writing
            </Button>

            <Typography
              variant="h1"
              sx={{
                color: '#fafaf8',
                fontFamily: displayFont,
                fontWeight: 500,
                fontSize: { xs: '1.9rem', sm: '2.4rem', md: '2.9rem' },
                lineHeight: 1.28,
                mb: 3,
              }}
            >
              {post.title}
            </Typography>

            <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', rowGap: 1 }}>
              <Typography sx={{ ...mono, color: '#6e6e69' }}>{post.dateLabel}</Typography>
              <Typography sx={{ ...mono, color: '#3a3937' }}>/</Typography>
              <Typography sx={{ ...mono, color: '#6e6e69' }}>{post.tag}</Typography>
              <Typography sx={{ ...mono, color: '#3a3937' }}>/</Typography>
              <Typography sx={{ ...mono, color: '#6e6e69' }}>{post.readingTime}</Typography>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* Intro */}
      <Box sx={{ py: { xs: 7, md: 10 } }}>
        <Container maxWidth="lg">
          <Stack spacing={3} sx={{ maxWidth: '720px' }}>
            <Typography sx={{ ...bodyText, fontSize: '1.15rem', color: '#171717', lineHeight: 1.75 }}>
              A demonstration is easy to record and hard to use. The gap between the two is the pipeline.
            </Typography>
            <Typography sx={bodyText}>
              Below are four clips from one continuous capture — an ordinary task, performed once, at normal
              speed. Each clip is the same few seconds seen through a different stage of processing. Nothing
              here is a render of an idealised trajectory; it is what comes out of the pipeline on a real
              take, jitter included.
            </Typography>
            <Typography sx={bodyText}>
              We show them in order because the order is the point. Each stage depends on the one above it,
              and an error introduced early does not get fixed later — it gets inherited.
            </Typography>
          </Stack>
        </Container>
      </Box>

      {/* Samples */}
      <Box sx={{ pb: { xs: 4, md: 6 } }}>
        <Container maxWidth="lg">
          <Stack spacing={{ xs: 8, md: 11 }} sx={{ maxWidth: '860px' }}>
            {samples.map((sample) => (
              <RevealSection key={sample.id} selector="" once y={24}>
                <Box id={sample.id}>
                  <SampleVideo {...sample} />
                </Box>
              </RevealSection>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* Closing */}
      <Box sx={{ py: { xs: 9, md: 13 } }}>
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: '720px' }}>
            <Divider sx={{ mb: 6, borderColor: '#e4e4e1' }} />
            <Typography sx={{ ...mono, mb: 2.5 }}>On what we don't do</Typography>
            <Typography
              variant="h2"
              sx={{
                fontFamily: displayFont,
                fontWeight: 500,
                color: '#171717',
                fontSize: { xs: '1.6rem', md: '2rem' },
                lineHeight: 1.3,
                mb: 3,
              }}
            >
              Gaps stay gaps.
            </Typography>
            <Stack spacing={3}>
              <Typography sx={bodyText}>
                When a hand disappears behind an object, the tracker loses it. We mark those frames rather
                than filling them in. Every keypoint carries its provenance — detected, re-detected, or
                interpolated across a short gap — and a long occlusion is left as a hole in the sequence.
              </Typography>
              <Typography sx={bodyText}>
                Invented data trains a policy to be confident exactly where the sensor was blind. It is the
                cheapest way to make a dataset look better and a model behave worse, so we leave the holes
                visible and let the training decide what to do with them.
              </Typography>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* CTA */}
      <Box sx={{ py: { xs: 9, md: 12 }, backgroundColor: '#131211', borderTop: '1px solid #1f1e1c' }}>
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: '560px', mx: 'auto', textAlign: 'center' }}>
            <Typography
              variant="h5"
              sx={{ color: '#fafaf8', fontFamily: displayFont, fontWeight: 500, fontSize: '1.6rem', mb: 1.5 }}
            >
              Want this data for your policy?
            </Typography>
            <Typography sx={{ color: '#9c9c96', fontFamily: bodyFont, fontSize: '0.95rem', lineHeight: 1.7, mb: 4 }}>
              A small number of design partner slots are open right now.
            </Typography>
            <Button
              component={RouterLink}
              to="/#contact"
              endIcon={<ChevronRight sx={{ fontSize: 18 }} />}
              sx={{
                backgroundColor: '#fafaf8',
                color: '#131211',
                borderRadius: '6px',
                px: 3.5,
                py: 1.4,
                fontSize: '0.92rem',
                fontWeight: 500,
                '&:hover': { backgroundColor: '#e4e4e1' },
              }}
            >
              Get in touch
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
