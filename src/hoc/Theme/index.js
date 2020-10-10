import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3981E8',
      dark: '#5D6FD3',
      contrastText: '#fff',
    },
  },
});

export default function Palette({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
