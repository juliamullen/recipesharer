import { createMuiTheme } from '@material-ui/core/styles';
import { red, amber, lime } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: amber,
    secondary: {
      main: "#e6ee9c",
    }
  },
});

export default theme;
