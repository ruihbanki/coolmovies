import { generateUtilityClasses } from "@mui/base";
import { styled } from "@mui/system";

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
      flex: "0 0 48px",
      position: "fixed",
      left: 0,
      right: 0,
      height: 48,
      zIndex: 1,
    },
    [`& > .${classes.content}`]: {
      flex: 1,
      position: "relative",
      padding: "64px 16px 16px 16px",
      background: theme.palette.grey[900],
      "*": {
        position: "relative",
      },
      "&::before": {
        content: "''",
        position: "absolute",
        inset: 0,
        height: "80vh",
        backgroundImage: contentBackgroundImage
          ? `url(${contentBackgroundImage})`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.2,
        filter: "blur(10px) grayscale(0.5)",
        maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
      },
      [theme.breakpoints.up("md")]: {
        padding: "88px 40px 40px 40px",
      },
    },
  })
);
