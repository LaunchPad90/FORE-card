import { createMuiTheme } from '@material-ui/core/styles';


  const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#66bb6a',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#01579b',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

export default theme;