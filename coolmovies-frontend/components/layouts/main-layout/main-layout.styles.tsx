import { styled } from "@mui/material/styles";
import { generateUtilityClasses } from "@mui/base";

export const classes = generateUtilityClasses("MainLayoutHeader", [
  "root",
  "header",
  "content",
]);

export const StyledRoot = styled("div")<{ contentBackgroundImage?: string }>(
  ({ theme, contentBackgroundImage }) => ({
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    height: "100vh",
    [`& > .${classes.header}`]: {
      flex: "0 0 44px",
    },
    [`& > .${classes.content}`]: {
      flex: 1,
      position: "relative",
      padding: 40,
      background: theme.palette.grey[900],
      "*": {
        position: "relative",
      },
      "&::before": {
        content: "''",
        position: "absolute",
        inset: 0,
        bottom: "30%",
        backgroundImage: contentBackgroundImage
          ? `url(${contentBackgroundImage})`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.2,
        filter: "blur(10px) grayscale(0.5)",
        maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
      },
    },
  })
);
