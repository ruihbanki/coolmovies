import Image from "next/image";
import { Typography } from "@mui/material";
import { Movie } from "../../../pages/movies/movies.types";
import { classes, StyledRoot } from "./movie-card.styles";

interface MovieCard {
  movie: Movie;
}

const MovieCard = (props: MovieCard) => {
  const { movie } = props;
  return (
    <StyledRoot className={classes.root}>
      <div className={classes.image}>
        <Image src={movie.imgUrl} width={200} height={300} alt="Movie image" />
      </div>
      <div className={classes.title}>
        <Typography color="common.white">{movie.title}</Typography>
      </div>
      <div className={classes.date}>
        <Typography color="common.white" variant="body2">
          {movie.releaseDate}
        </Typography>
      </div>
    </StyledRoot>
  );
};

export default MovieCard;
