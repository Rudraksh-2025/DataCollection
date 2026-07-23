import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

import Layout from './components/Layout';
import Home from './pages/Home';
import Catalogue from './pages/Catalogue';
import DatasetDetail from './pages/DatasetDetail';
import About from './pages/About';
import Contact from './pages/Contact';

const headingStyle = {
  fontFamily: "'Fraunces', serif",
  WebkitFontSmoothing: 'none',
  MozOsxFontSmoothing: 'unset',
  textRendering: 'optimizeSpeed',
};

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1f242d', // Sleek dark charcoal/slate like screenshot pill button
    },
    secondary: {
      main: '#475569', // Slate accent
    },
    background: {
      default: '#FEFFFC',
      paper: 'rgba(255, 255, 255, 0.8)',
    },
    text: {
      primary: '#1e293b',
      secondary: '#64748b',
    },
  },
  typography: {
    fontFamily: '"Montserrat", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      ...headingStyle,
      fontWeight: 800,
    },
    h2: {
      ...headingStyle,
      fontWeight: 700,
    },
    h3: {
      ...headingStyle,
      fontWeight: 600,
    },
    h4: {
      ...headingStyle,
      fontWeight: 600,
    },
    h5: {
      ...headingStyle,
      fontWeight: 600,
    },
    h6: {
      ...headingStyle,
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0.2px'
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Fraunces', serif !important;
          -webkit-font-smoothing: none !important;
          -moz-osx-font-smoothing: unset !important;
          text-rendering: optimizeSpeed !important;
        }
      `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          padding: '8px 20px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          backgroundColor: 'rgba(255, 255, 255, 0.75)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.9)',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04), 0 2px 8px rgba(0, 0, 0, 0.02)',
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.75)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.9)',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)',
        }
      }
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="datasets" element={<Catalogue />} />
            <Route path="datasets/:id" element={<DatasetDetail />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
