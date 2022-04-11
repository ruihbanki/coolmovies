import { styled } from "@mui/material/styles";
import { generateUtilityClasses } from "@mui/base";

export const classes = generateUtilityClasses("MainLayoutHeader", [
  "root",
  "header",
  "content",
]);

export const StyledRoot = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100vw",
  height: "100vh",
  [`& > .${classes.header}`]: {
    flex: "0 0 44px",
  },
  [`& > .${classes.content}`]: {
    flex: 1,
    background: theme.palette.grey[900],
  },
}));
