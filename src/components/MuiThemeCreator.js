import { createMuiTheme } from "@material-ui/core/styles";

export const sizeSelectTheme = createMuiTheme({
  typography: {
    body1: {
      fontSize: "0.9rem",
      "@media (max-width:768px)": {
        fontSize: "1rem",
      },
      textTransform: "capitalize",
      fontFamily: ["Courier New", "-apple-system", "Roboto", "sans-serif"].join(
        ","
      ),
      color: "black",
    },
  },
});

export const titleSizeSelectTheme = createMuiTheme({
  typography: {
    fontFamily: ["Courier New", "-apple-system", "Roboto", "sans-serif"].join(
      ","
    ),
  },
});
