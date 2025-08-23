import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#556B2F', // Olive green
    },
    secondary: {
      main: '#FFD700', // Golden yellow
    },
    background: {
      default: '#f4f6f3',
      paper: '#ffffff',
    },
    text: {
      primary: '#1e1e1e',
      secondary: '#555',
    },
  },
  typography: {
    fontFamily: "'Poppins', 'Roboto', sans-serif",
    h5: { fontWeight: 600 },
    body1: { lineHeight: 1.6 },
    button: { textTransform: 'none', fontWeight: 500 },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          transition: '0.3s',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
  },
});

export default theme;
