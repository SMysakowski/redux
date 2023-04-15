import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export let theme = createTheme({});

export default function ThemeProvider({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
