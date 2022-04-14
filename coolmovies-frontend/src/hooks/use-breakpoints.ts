import { Breakpoint, useMediaQuery, useTheme } from "@mui/material";

export default function useBreakpoints(key: number | Breakpoint) {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.up(key));
}
