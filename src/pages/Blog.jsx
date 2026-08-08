import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Container, Stack, Typography } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import RevealSection from '../components/RevealSection';
import { posts } from '../data/posts';

const mono = {
  fontFamily: "'IBM Plex Mono', monospace",
  fontSize: '0.78rem',
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  color: '#8a8a85',
};

const displayFont = "'Pixelify Sans', sans-serif";
const bodyFont = "'Inter', sans-serif";

export default function Blog() {
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ backgroundColor: '#131211', py: { xs: 10, md: 13 }, borderBottom: '1px solid #1f1e1c' }}>
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: '760px' }}>
            <Typography sx={{ ...mono, color: '#6e6e69', mb: 2.5 }}>Writing</Typography>
            <Typography
              variant="h1"
              sx={{
                color: '#fafaf8',
                fontFamily: displayFont,
                fontWeight: 500,
                fontSize: { xs: '2rem', sm: '2.6rem', md: '3rem' },
                lineHeight: 1.25,
                mb: 2.5,
              }}
            >
              Notes from the capture pipeline.
            </Typography>
            <Typography
              sx={{ color: '#9c9c96', fontFamily: bodyFont, fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '620px' }}
            >
              What we build, what we measure, and what the data actually looks like coming out the other end.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <RevealSection selector=".post-item" once y={24}>
            <Stack sx={{ maxWidth: '860px' }}>
              {posts.map((post) => (
                <Box
                  key={post.slug}
                  className="post-item"
                  component={RouterLink}
                  to={`/blog/${post.slug}`}
                  sx={{
                    display: 'block',
                    textDecoration: 'none',
                    py: 4.5,
                    borderTop: '1px solid #e4e4e1',
                    '&:last-of-type': { borderBottom: '1px solid #e4e4e1' },
                    transition: 'background-color 0.15s ease',
                    '&:hover': { backgroundColor: '#f3f3f0' },
                    '&:hover .post-arrow': { transform: 'translateX(4px)' },
                    px: { xs: 0, md: 2 },
                    mx: { xs: 0, md: -2 },
                  }}
                >
                  <Stack direction="row" spacing={2} sx={{ mb: 1.5, flexWrap: 'wrap', rowGap: 1 }}>
                    <Typography sx={mono}>{post.dateLabel}</Typography>
                    <Typography sx={{ ...mono, color: '#c4c4c0' }}>/</Typography>
                    <Typography sx={mono}>{post.tag}</Typography>
                    <Typography sx={{ ...mono, color: '#c4c4c0' }}>/</Typography>
                    <Typography sx={mono}>{post.readingTime}</Typography>
                  </Stack>

                  <Typography
                    variant="h2"
                    sx={{
                      fontFamily: displayFont,
                      fontWeight: 500,
                      color: '#171717',
                      fontSize: { xs: '1.5rem', md: '1.9rem' },
                      lineHeight: 1.3,
                      mb: 1.5,
                    }}
                  >
                    {post.title}
                  </Typography>

                  <Typography
                    sx={{ color: '#54544f', fontFamily: bodyFont, fontSize: '1rem', lineHeight: 1.75, mb: 2.5, maxWidth: '640px' }}
                  >
                    {post.summary}
                  </Typography>

                  <Stack direction="row" spacing={1} sx={{ alignItems: 'center', color: '#171717' }}>
                    <Typography sx={{ fontFamily: bodyFont, fontSize: '0.9rem', fontWeight: 600 }}>
                      Read it
                    </Typography>
                    <ArrowForward
                      className="post-arrow"
                      sx={{ fontSize: 16, transition: 'transform 0.15s ease' }}
                    />
                  </Stack>
                </Box>
              ))}
            </Stack>
          </RevealSection>
        </Container>
      </Box>
    </Box>
  );
}
