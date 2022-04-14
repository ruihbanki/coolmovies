interface Rating {
  node?: {
    rating?: number | null;
  } | null;
}

export const sortMovieReviewByRating = (a: Rating, b: Rating) => {
  if (a.node && b.node && a.node.rating && b.node.rating) {
    return b.node.rating - a.node.rating;
  }
  return 0;
};

export const nameToLetters = (name?: string) => {
  if (!name) {
    return "?";
  }
  const parts = name.split(" ");
  return parts.map((part) => part.substring(0, 1)).join("");
};
