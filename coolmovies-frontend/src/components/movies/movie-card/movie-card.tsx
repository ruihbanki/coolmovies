import Image from "next/image";
import { Typography } from "@mui/material";
import { formatDistance } from "date-fns";
import { Movie } from "../../../pages/movies/movies.types";
import { classes, StyledRoot } from "./movie-card.styles";
import Link from "next/link";

interface MovieCard {
  movie: Movie;
}

const MovieCard = (props: MovieCard) => {
  const { movie } = props;

  const releaseDate = formatDistance(
    new Date(),
    new Date(movie?.releaseDate! as string)
  );

  return (
    <StyledRoot className={classes.root}>
      <div className={classes.image}>
        <Link href={`/movies/${movie?.nodeId}`}>
          <a>
            <Image
              src={movie?.imgUrl!}
              width={200}
              height={300}
              alt="Movie image"
            />
          </a>
        </Link>
      </div>
      <div className={classes.title}>
        <Typography color="common.white" variant="body1">
          {movie?.title}
        </Typography>
      </div>
      <div className={classes.date}>
        <Typography color="common.white" variant="body2" sx={{ opacity: 0.48 }}>
          {releaseDate}
        </Typography>
      </div>
    </StyledRoot>
  );
};

export default MovieCard;
