import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme( {
  palette: {
    primary: {
      main: '#D13730'
    },
    secondary: {
      main: '#0E0E1D'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      ds: 1024,
      lg: 1280,
      xl: 1440
    }
  }
} );
