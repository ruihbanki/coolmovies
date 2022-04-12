import { styled } from "@mui/material/styles";
import { generateUtilityClasses } from "@mui/base";

export const classes = generateUtilityClasses("MovieCard", [
  "root",
  "image",
  "title",
  "date",
]);

export const StyledRoot = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [`& .${classes.image}`]: {
    display: "flex",
  },
  [`& .${classes.title}`]: {},
  [`& .${classes.date}`]: {},
}));
