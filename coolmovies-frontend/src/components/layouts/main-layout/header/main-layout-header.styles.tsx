import { generateUtilityClasses } from "@mui/base";
import { lighten, styled } from "@mui/material";

export const classes = generateUtilityClasses("MainLayoutHeader", [
  "root",
  "title",
  "search",
  "searchIcon",
  "searchInput",
  "user",
  "avatar",
]);

export const StyledRoot = styled("div")(({ theme }) => ({
  display: "flex",
  position: "relative",
  width: "100%",
  height: "100%",
  background: theme.palette.primary.main,
  color: theme.palette.common.white,
  [`& .${classes.title}`]: {
    flex: "0 0 220px",
    display: "flex",
    alignItems: "center",
    paddingLeft: 12,
  },
  [`& .${classes.search}`]: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    paddingLeft: 20,
    background: lighten(theme.palette.primary.main, 0.1),
  },
  [`& .${classes.searchInput}`]: {
    flex: 1,
    background: "transparent",
    height: 28,
    marginLeft: 8,
    marginRight: 20,
    border: 0,
  },
  [`& .${classes.user}`]: {
    display: "flex",
    alignItems: "center",
    paddingRight: 20,
    background: lighten(theme.palette.primary.main, 0.1),
  },
  [`& .${classes.avatar}`]: {
    display: "flex",
    alignItems: "center",
    paddingRight: 8,
    background: lighten(theme.palette.primary.main, 0.1),
  },
}));
