import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Stack } from '@mui/material';

const mono = {
  fontFamily: "'IBM Plex Mono', monospace",
  fontSize: '0.72rem',
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
};

/**
 * A pipeline sample clip.
 *
 * Loads nothing until the card scrolls near the viewport, then plays muted on
 * loop while visible and pauses once it leaves. Keeps four clips on one page
 * from all decoding at once.
 *
 * Props:
 * - src: video URL.
 * - poster: still shown before the video loads.
 * - index: two-digit label, e.g. '01'.
 * - stage: short pipeline stage name.
 * - title: headline for the clip.
 * - description: what the viewer is looking at.
 * - specs: array of { label, value } rendered as a spec strip.
 */
export default function SampleVideo({
  src,
  poster,
  index,
  stage,
  title,
  description,
  specs = [],
}) {
  const videoRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShouldLoad(true);
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin: '200px 0px', threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  // Play only once the src is actually attached — playing on the same tick we
  // flip shouldLoad would hit a source-less element and reject.
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad) return;

    if (isVisible) {
      const attempt = video.play();
      if (attempt) attempt.catch(() => {});
    } else {
      video.pause();
    }
  }, [shouldLoad, isVisible]);

  return (
    <Box>
      <Stack
        direction="row"
        spacing={1.5}
        sx={{ alignItems: 'baseline', mb: 1.5, flexWrap: 'wrap' }}
      >
        <Typography sx={{ ...mono, color: '#8a8a85' }}>
          {index} / {stage}
        </Typography>
      </Stack>

      <Typography
        variant="h3"
        sx={{
          fontFamily: "'Pixelify Sans', sans-serif",
          fontWeight: 500,
          color: '#171717',
          fontSize: { xs: '1.35rem', md: '1.6rem' },
          lineHeight: 1.3,
          mb: 1.5,
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          color: '#54544f',
          fontFamily: "'Inter', sans-serif",
          fontSize: '1rem',
          lineHeight: 1.8,
          mb: 3,
        }}
      >
        {description}
      </Typography>

      <Box
        sx={{
          border: '1px solid #e4e4e1',
          borderRadius: '10px',
          overflow: 'hidden',
          backgroundColor: '#131211',
        }}
      >
        <Box
          component="video"
          ref={videoRef}
          src={shouldLoad ? src : undefined}
          poster={poster}
          muted
          loop
          playsInline
          preload="none"
          controls
          sx={{
            display: 'block',
            width: '100%',
            height: 'auto',
            backgroundColor: '#131211',
          }}
        />

        {specs.length > 0 && (
          <Stack
            direction="row"
            sx={{
              flexWrap: 'wrap',
              borderTop: '1px solid #2a2927',
              backgroundColor: '#131211',
            }}
          >
            {specs.map((spec) => (
              <Box
                key={spec.label}
                sx={{
                  px: 2.5,
                  py: 1.5,
                  flex: '1 1 auto',
                  minWidth: 130,
                  borderRight: '1px solid #2a2927',
                  '&:last-of-type': { borderRight: 'none' },
                }}
              >
                <Typography sx={{ ...mono, color: '#6e6e69', mb: 0.5 }}>
                  {spec.label}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '0.85rem',
                    color: '#fafaf8',
                  }}
                >
                  {spec.value}
                </Typography>
              </Box>
            ))}
          </Stack>
        )}
      </Box>
    </Box>
  );
}
