import type { NextPage } from "next";
import { useRouter } from "next/router";

const Movie: NextPage = () => {
  const router = useRouter();
  const { movieId } = router.query;
  return <div>{movieId}</div>;
};

export default Movie;
