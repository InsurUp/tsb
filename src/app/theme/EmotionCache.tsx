'use client';

import * as React from 'react';
import createCache from '@emotion/cache';
import { CacheProvider as EmotionCacheProvider } from '@emotion/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Create a default Material-UI theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: '#red',
    },
  },
});

// prepend: true moves Emotion styles to the top of the <head> so Material UI styles are prioritized.
// It's useful if you're using a CSS framework like Tailwind CSS.
function createEmotionCache() {
  return createCache({ key: 'css', prepend: true });
}

interface EmotionCacheProps {
  children: React.ReactNode;
}

export default function EmotionCache({ children }: EmotionCacheProps) {
  const [emotionCache] = React.useState(() => createEmotionCache());

  return (
    <EmotionCacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {children}
      </ThemeProvider>
    </EmotionCacheProvider>
  );
}