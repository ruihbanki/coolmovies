import { Search } from "@mui/icons-material";
import { Avatar, Input, Typography } from "@mui/material";
import { StyledRoot, classes } from "./main-layout-header.styles";

interface MainLayoutHeaderProps {}

const MainLayoutHeader = (props: MainLayoutHeaderProps) => {
  return (
    <StyledRoot className={classes.root}>
      <div className={classes.title}>
        <Typography variant="body1">MOVIE APP</Typography>
      </div>
      <div className={classes.search}>
        <Search className={classes.searchIcon} />
        <Input
          type="text"
          className={classes.searchInput}
          placeholder="Search movies"
          disableUnderline
        />
      </div>
      <div className={classes.user}>
        <Typography variant="body2">User name</Typography>
      </div>
      <div className={classes.avatar}>
        <Avatar
          sx={{ width: 32, height: 32, color: "common.white", fontSize: 12 }}
        >
          UN
        </Avatar>
      </div>
    </StyledRoot>
  );
};

export default MainLayoutHeader;
