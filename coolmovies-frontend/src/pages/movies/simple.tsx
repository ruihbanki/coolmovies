import { Typography, Grid, Box, Input, Avatar } from "@mui/material";
import { Search } from "@mui/icons-material";

const Movies = () => {
  return (
    <div>
      <Typography
        component="h1"
        variant="h4"
        color="common.black"
        fontWeight={300}
        sx={{ m: 0 }}
      >
        Movies
      </Typography>
      <Box mt={2}>
        <Grid container spacing={5}>
          <Grid item flex="0 0 240px">
            1234
          </Grid>
        </Grid>
      </Box>
      <Search />
      <Input type="text" placeholder="Search movies" disableUnderline />
      <Avatar
        sx={{ width: 32, height: 32, color: "common.white", fontSize: 12 }}
      >
        UN
      </Avatar>
    </div>
  );
};

export default Movies;
