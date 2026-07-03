import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

import Layout from './components/Layout';
import Home from './pages/Home';
import Catalogue from './pages/Catalogue';
import DatasetDetail from './pages/DatasetDetail';
import About from './pages/About';
import Contact from './pages/Contact';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00f0ff', // Cyber Cyan
    },
    secondary: {
      main: '#8b5cf6', // Violet
    },
    background: {
      default: '#0b0d17',
      paper: '#111827',
    },
    text: {
      primary: '#ffffff',
      secondary: '#94a3b8',
    },
  },
  typography: {
    fontFamily: '"Montserrat", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Montserrat", "Inter", sans-serif',
      fontWeight: 800,
    },
    h2: {
      fontFamily: '"Montserrat", "Inter", sans-serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: '"Montserrat", "Inter", sans-serif',
      fontWeight: 600,
    },
    h4: {
      fontFamily: '"Montserrat", "Inter", sans-serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Montserrat", "Inter", sans-serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Montserrat", "Inter", sans-serif',
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0.5px'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backgroundColor: 'rgba(17, 24, 39, 0.7)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.05)',
        }
      }
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
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
