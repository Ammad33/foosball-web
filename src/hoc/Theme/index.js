import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#3981E8',
      contrastText: '#fff',
    },
    primary2: {
      main: '#5d6fd3',
      contrastText: '#fff',
      
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
    blue1:{
      main:"#0952D1"
    }
  },
});

export default function Palette({children}) {
  return (
    <ThemeProvider theme={theme}>
      {children}
      </ThemeProvider>
  );
}
