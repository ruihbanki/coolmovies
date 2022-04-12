export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any;
  /** The day, does not include a time. */
  Date: any;
  /** A universally unique identifier as defined by [RFC 4122](https://tools.ietf.org/html/rfc4122). */
  UUID: any;
};

export type Comment = Node & {
  __typename?: 'Comment';
  body?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  /** Reads a single `MovieReview` that is related to this `Comment`. */
  movieReviewByMovieReviewId?: Maybe<MovieReview>;
  movieReviewId: Scalars['UUID'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  /** Reads a single `User` that is related to this `Comment`. */
  userByUserId?: Maybe<User>;
  userId: Scalars['UUID'];
};

/** A condition to be used against `Comment` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type CommentCondition = {
  /** Checks for equality with the object’s `body` field. */
  body?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `movieReviewId` field. */
  movieReviewId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `title` field. */
  title?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['UUID']>;
};

/** A filter to be used against `Comment` object types. All fields are combined with a logical ‘and.’ */
export type CommentFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<CommentFilter>>;
  /** Filter by the object’s `body` field. */
  body?: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `movieReviewId` field. */
  movieReviewId?: InputMaybe<UuidFilter>;
  /** Negates the expression. */
  not?: InputMaybe<CommentFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<CommentFilter>>;
  /** Filter by the object’s `title` field. */
  title?: InputMaybe<StringFilter>;
  /** Filter by the object’s `userId` field. */
  userId?: InputMaybe<UuidFilter>;
};

/** An input for mutations affecting `Comment` */
export type CommentInput = {
  body?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  movieReviewId: Scalars['UUID'];
  title?: InputMaybe<Scalars['String']>;
  userId: Scalars['UUID'];
};

/** Represents an update to a `Comment`. Fields that are set will be updated. */
export type CommentPatch = {
  body?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  movieReviewId?: InputMaybe<Scalars['UUID']>;
  title?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['UUID']>;
};

/** A connection to a list of `Comment` values. */
export type CommentsConnection = {
  __typename?: 'CommentsConnection';
  /** A list of edges which contains the `Comment` and cursor to aid in pagination. */
  edges: Array<CommentsEdge>;
  /** A list of `Comment` objects. */
  nodes: Array<Maybe<Comment>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Comment` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Comment` edge in the connection. */
export type CommentsEdge = {
  __typename?: 'CommentsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Comment` at the end of the edge. */
  node?: Maybe<Comment>;
};

/** Methods to use when ordering `Comment`. */
export enum CommentsOrderBy {
  BodyAsc = 'BODY_ASC',
  BodyDesc = 'BODY_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  MovieReviewIdAsc = 'MOVIE_REVIEW_ID_ASC',
  MovieReviewIdDesc = 'MOVIE_REVIEW_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

/** All input for the create `Comment` mutation. */
export type CreateCommentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Comment` to be created by this mutation. */
  comment: CommentInput;
};

/** The output of our create `Comment` mutation. */
export type CreateCommentPayload = {
  __typename?: 'CreateCommentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Comment` that was created by this mutation. */
  comment?: Maybe<Comment>;
  /** An edge for our `Comment`. May be used by Relay 1. */
  commentEdge?: Maybe<CommentsEdge>;
  /** Reads a single `MovieReview` that is related to this `Comment`. */
  movieReviewByMovieReviewId?: Maybe<MovieReview>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Comment`. */
  userByUserId?: Maybe<User>;
};


/** The output of our create `Comment` mutation. */
export type CreateCommentPayloadCommentEdgeArgs = {
  orderBy?: InputMaybe<Array<CommentsOrderBy>>;
};

/** All input for the create `MovieDirector` mutation. */
export type CreateMovieDirectorInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `MovieDirector` to be created by this mutation. */
  movieDirector: MovieDirectorInput;
};

/** The output of our create `MovieDirector` mutation. */
export type CreateMovieDirectorPayload = {
  __typename?: 'CreateMovieDirectorPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `MovieDirector` that was created by this mutation. */
  movieDirector?: Maybe<MovieDirector>;
  /** An edge for our `MovieDirector`. May be used by Relay 1. */
  movieDirectorEdge?: Maybe<MovieDirectorsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `MovieDirector` mutation. */
export type CreateMovieDirectorPayloadMovieDirectorEdgeArgs = {
  orderBy?: InputMaybe<Array<MovieDirectorsOrderBy>>;
};

/** All input for the create `Movie` mutation. */
export type CreateMovieInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Movie` to be created by this mutation. */
  movie: MovieInput;
};

/** The output of our create `Movie` mutation. */
export type CreateMoviePayload = {
  __typename?: 'CreateMoviePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Movie` that was created by this mutation. */
  movie?: Maybe<Movie>;
  /** Reads a single `MovieDirector` that is related to this `Movie`. */
  movieDirectorByMovieDirectorId?: Maybe<MovieDirector>;
  /** An edge for our `Movie`. May be used by Relay 1. */
  movieEdge?: Maybe<MoviesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Movie`. */
  userByUserCreatorId?: Maybe<User>;
};


/** The output of our create `Movie` mutation. */
export type CreateMoviePayloadMovieEdgeArgs = {
  orderBy?: InputMaybe<Array<MoviesOrderBy>>;
};

/** All input for the create `MovieReview` mutation. */
export type CreateMovieReviewInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `MovieReview` to be created by this mutation. */
  movieReview: MovieReviewInput;
};

/** The output of our create `MovieReview` mutation. */
export type CreateMovieReviewPayload = {
  __typename?: 'CreateMovieReviewPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Movie` that is related to this `MovieReview`. */
  movieByMovieId?: Maybe<Movie>;
  /** The `MovieReview` that was created by this mutation. */
  movieReview?: Maybe<MovieReview>;
  /** An edge for our `MovieReview`. May be used by Relay 1. */
  movieReviewEdge?: Maybe<MovieReviewsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `MovieReview`. */
  userByUserReviewerId?: Maybe<User>;
};


/** The output of our create `MovieReview` mutation. */
export type CreateMovieReviewPayloadMovieReviewEdgeArgs = {
  orderBy?: InputMaybe<Array<MovieReviewsOrderBy>>;
};

/** All input for the create `User` mutation. */
export type CreateUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `User` to be created by this mutation. */
  user: UserInput;
};

/** The output of our create `User` mutation. */
export type CreateUserPayload = {
  __typename?: 'CreateUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was created by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};


/** The output of our create `User` mutation. */
export type CreateUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** A filter to be used against Date fields. All fields are combined with a logical ‘and.’ */
export type DateFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['Date']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['Date']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['Date']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Date']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['Date']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['Date']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Date']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['Date']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['Date']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['Date']>>;
};

/** All input for the `deleteCommentById` mutation. */
export type DeleteCommentByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** All input for the `deleteComment` mutation. */
export type DeleteCommentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Comment` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Comment` mutation. */
export type DeleteCommentPayload = {
  __typename?: 'DeleteCommentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Comment` that was deleted by this mutation. */
  comment?: Maybe<Comment>;
  /** An edge for our `Comment`. May be used by Relay 1. */
  commentEdge?: Maybe<CommentsEdge>;
  deletedCommentId?: Maybe<Scalars['ID']>;
  /** Reads a single `MovieReview` that is related to this `Comment`. */
  movieReviewByMovieReviewId?: Maybe<MovieReview>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Comment`. */
  userByUserId?: Maybe<User>;
};


/** The output of our delete `Comment` mutation. */
export type DeleteCommentPayloadCommentEdgeArgs = {
  orderBy?: InputMaybe<Array<CommentsOrderBy>>;
};

/** All input for the `deleteMovieById` mutation. */
export type DeleteMovieByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** All input for the `deleteMovieDirectorById` mutation. */
export type DeleteMovieDirectorByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** All input for the `deleteMovieDirector` mutation. */
export type DeleteMovieDirectorInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `MovieDirector` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `MovieDirector` mutation. */
export type DeleteMovieDirectorPayload = {
  __typename?: 'DeleteMovieDirectorPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedMovieDirectorId?: Maybe<Scalars['ID']>;
  /** The `MovieDirector` that was deleted by this mutation. */
  movieDirector?: Maybe<MovieDirector>;
  /** An edge for our `MovieDirector`. May be used by Relay 1. */
  movieDirectorEdge?: Maybe<MovieDirectorsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `MovieDirector` mutation. */
export type DeleteMovieDirectorPayloadMovieDirectorEdgeArgs = {
  orderBy?: InputMaybe<Array<MovieDirectorsOrderBy>>;
};

/** All input for the `deleteMovie` mutation. */
export type DeleteMovieInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Movie` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Movie` mutation. */
export type DeleteMoviePayload = {
  __typename?: 'DeleteMoviePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedMovieId?: Maybe<Scalars['ID']>;
  /** The `Movie` that was deleted by this mutation. */
  movie?: Maybe<Movie>;
  /** Reads a single `MovieDirector` that is related to this `Movie`. */
  movieDirectorByMovieDirectorId?: Maybe<MovieDirector>;
  /** An edge for our `Movie`. May be used by Relay 1. */
  movieEdge?: Maybe<MoviesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Movie`. */
  userByUserCreatorId?: Maybe<User>;
};


/** The output of our delete `Movie` mutation. */
export type DeleteMoviePayloadMovieEdgeArgs = {
  orderBy?: InputMaybe<Array<MoviesOrderBy>>;
};

/** All input for the `deleteMovieReviewById` mutation. */
export type DeleteMovieReviewByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** All input for the `deleteMovieReview` mutation. */
export type DeleteMovieReviewInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `MovieReview` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `MovieReview` mutation. */
export type DeleteMovieReviewPayload = {
  __typename?: 'DeleteMovieReviewPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedMovieReviewId?: Maybe<Scalars['ID']>;
  /** Reads a single `Movie` that is related to this `MovieReview`. */
  movieByMovieId?: Maybe<Movie>;
  /** The `MovieReview` that was deleted by this mutation. */
  movieReview?: Maybe<MovieReview>;
  /** An edge for our `MovieReview`. May be used by Relay 1. */
  movieReviewEdge?: Maybe<MovieReviewsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `MovieReview`. */
  userByUserReviewerId?: Maybe<User>;
};


/** The output of our delete `MovieReview` mutation. */
export type DeleteMovieReviewPayloadMovieReviewEdgeArgs = {
  orderBy?: InputMaybe<Array<MovieReviewsOrderBy>>;
};

/** All input for the `deleteUserById` mutation. */
export type DeleteUserByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** All input for the `deleteUser` mutation. */
export type DeleteUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `User` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `User` mutation. */
export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedUserId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was deleted by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};


/** The output of our delete `User` mutation. */
export type DeleteUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** A filter to be used against Int fields. All fields are combined with a logical ‘and.’ */
export type IntFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['Int']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['Int']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['Int']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Int']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['Int']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['Int']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Int']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['Int']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['Int']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type Movie = Node & {
  __typename?: 'Movie';
  id: Scalars['UUID'];
  imgUrl: Scalars['String'];
  /** Reads a single `MovieDirector` that is related to this `Movie`. */
  movieDirectorByMovieDirectorId?: Maybe<MovieDirector>;
  movieDirectorId: Scalars['UUID'];
  /** Reads and enables pagination through a set of `MovieReview`. */
  movieReviewsByMovieId: MovieReviewsConnection;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  releaseDate: Scalars['Date'];
  title: Scalars['String'];
  /** Reads a single `User` that is related to this `Movie`. */
  userByUserCreatorId?: Maybe<User>;
  userCreatorId: Scalars['UUID'];
};


export type MovieMovieReviewsByMovieIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<MovieReviewCondition>;
  filter?: InputMaybe<MovieReviewFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MovieReviewsOrderBy>>;
};

/** A condition to be used against `Movie` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type MovieCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `imgUrl` field. */
  imgUrl?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `movieDirectorId` field. */
  movieDirectorId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `releaseDate` field. */
  releaseDate?: InputMaybe<Scalars['Date']>;
  /** Checks for equality with the object’s `title` field. */
  title?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `userCreatorId` field. */
  userCreatorId?: InputMaybe<Scalars['UUID']>;
};

export type MovieDirector = Node & {
  __typename?: 'MovieDirector';
  age: Scalars['Int'];
  id: Scalars['UUID'];
  /** Reads and enables pagination through a set of `Movie`. */
  moviesByMovieDirectorId: MoviesConnection;
  name: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};


export type MovieDirectorMoviesByMovieDirectorIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<MovieCondition>;
  filter?: InputMaybe<MovieFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MoviesOrderBy>>;
};

/**
 * A condition to be used against `MovieDirector` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type MovieDirectorCondition = {
  /** Checks for equality with the object’s `age` field. */
  age?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against `MovieDirector` object types. All fields are combined with a logical ‘and.’ */
export type MovieDirectorFilter = {
  /** Filter by the object’s `age` field. */
  age?: InputMaybe<IntFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<MovieDirectorFilter>>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<MovieDirectorFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<MovieDirectorFilter>>;
};

/** An input for mutations affecting `MovieDirector` */
export type MovieDirectorInput = {
  age: Scalars['Int'];
  id?: InputMaybe<Scalars['UUID']>;
  name: Scalars['String'];
};

/** Represents an update to a `MovieDirector`. Fields that are set will be updated. */
export type MovieDirectorPatch = {
  age?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['UUID']>;
  name?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `MovieDirector` values. */
export type MovieDirectorsConnection = {
  __typename?: 'MovieDirectorsConnection';
  /** A list of edges which contains the `MovieDirector` and cursor to aid in pagination. */
  edges: Array<MovieDirectorsEdge>;
  /** A list of `MovieDirector` objects. */
  nodes: Array<Maybe<MovieDirector>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `MovieDirector` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `MovieDirector` edge in the connection. */
export type MovieDirectorsEdge = {
  __typename?: 'MovieDirectorsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `MovieDirector` at the end of the edge. */
  node?: Maybe<MovieDirector>;
};

/** Methods to use when ordering `MovieDirector`. */
export enum MovieDirectorsOrderBy {
  AgeAsc = 'AGE_ASC',
  AgeDesc = 'AGE_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A filter to be used against `Movie` object types. All fields are combined with a logical ‘and.’ */
export type MovieFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<MovieFilter>>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `imgUrl` field. */
  imgUrl?: InputMaybe<StringFilter>;
  /** Filter by the object’s `movieDirectorId` field. */
  movieDirectorId?: InputMaybe<UuidFilter>;
  /** Negates the expression. */
  not?: InputMaybe<MovieFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<MovieFilter>>;
  /** Filter by the object’s `releaseDate` field. */
  releaseDate?: InputMaybe<DateFilter>;
  /** Filter by the object’s `title` field. */
  title?: InputMaybe<StringFilter>;
  /** Filter by the object’s `userCreatorId` field. */
  userCreatorId?: InputMaybe<UuidFilter>;
};

/** An input for mutations affecting `Movie` */
export type MovieInput = {
  id?: InputMaybe<Scalars['UUID']>;
  imgUrl: Scalars['String'];
  movieDirectorId: Scalars['UUID'];
  releaseDate: Scalars['Date'];
  title: Scalars['String'];
  userCreatorId: Scalars['UUID'];
};

/** Represents an update to a `Movie`. Fields that are set will be updated. */
export type MoviePatch = {
  id?: InputMaybe<Scalars['UUID']>;
  imgUrl?: InputMaybe<Scalars['String']>;
  movieDirectorId?: InputMaybe<Scalars['UUID']>;
  releaseDate?: InputMaybe<Scalars['Date']>;
  title?: InputMaybe<Scalars['String']>;
  userCreatorId?: InputMaybe<Scalars['UUID']>;
};

export type MovieReview = Node & {
  __typename?: 'MovieReview';
  body?: Maybe<Scalars['String']>;
  /** Reads and enables pagination through a set of `Comment`. */
  commentsByMovieReviewId: CommentsConnection;
  id: Scalars['UUID'];
  /** Reads a single `Movie` that is related to this `MovieReview`. */
  movieByMovieId?: Maybe<Movie>;
  movieId: Scalars['UUID'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  rating?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
  /** Reads a single `User` that is related to this `MovieReview`. */
  userByUserReviewerId?: Maybe<User>;
  userReviewerId: Scalars['UUID'];
};


export type MovieReviewCommentsByMovieReviewIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<CommentCondition>;
  filter?: InputMaybe<CommentFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CommentsOrderBy>>;
};

/**
 * A condition to be used against `MovieReview` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type MovieReviewCondition = {
  /** Checks for equality with the object’s `body` field. */
  body?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `movieId` field. */
  movieId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `rating` field. */
  rating?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `title` field. */
  title?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `userReviewerId` field. */
  userReviewerId?: InputMaybe<Scalars['UUID']>;
};

/** A filter to be used against `MovieReview` object types. All fields are combined with a logical ‘and.’ */
export type MovieReviewFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<MovieReviewFilter>>;
  /** Filter by the object’s `body` field. */
  body?: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `movieId` field. */
  movieId?: InputMaybe<UuidFilter>;
  /** Negates the expression. */
  not?: InputMaybe<MovieReviewFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<MovieReviewFilter>>;
  /** Filter by the object’s `rating` field. */
  rating?: InputMaybe<IntFilter>;
  /** Filter by the object’s `title` field. */
  title?: InputMaybe<StringFilter>;
  /** Filter by the object’s `userReviewerId` field. */
  userReviewerId?: InputMaybe<UuidFilter>;
};

/** An input for mutations affecting `MovieReview` */
export type MovieReviewInput = {
  body?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  movieId: Scalars['UUID'];
  rating?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
  userReviewerId: Scalars['UUID'];
};

/** Represents an update to a `MovieReview`. Fields that are set will be updated. */
export type MovieReviewPatch = {
  body?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  movieId?: InputMaybe<Scalars['UUID']>;
  rating?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  userReviewerId?: InputMaybe<Scalars['UUID']>;
};

/** A connection to a list of `MovieReview` values. */
export type MovieReviewsConnection = {
  __typename?: 'MovieReviewsConnection';
  /** A list of edges which contains the `MovieReview` and cursor to aid in pagination. */
  edges: Array<MovieReviewsEdge>;
  /** A list of `MovieReview` objects. */
  nodes: Array<Maybe<MovieReview>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `MovieReview` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `MovieReview` edge in the connection. */
export type MovieReviewsEdge = {
  __typename?: 'MovieReviewsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `MovieReview` at the end of the edge. */
  node?: Maybe<MovieReview>;
};

/** Methods to use when ordering `MovieReview`. */
export enum MovieReviewsOrderBy {
  BodyAsc = 'BODY_ASC',
  BodyDesc = 'BODY_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  MovieIdAsc = 'MOVIE_ID_ASC',
  MovieIdDesc = 'MOVIE_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RatingAsc = 'RATING_ASC',
  RatingDesc = 'RATING_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  UserReviewerIdAsc = 'USER_REVIEWER_ID_ASC',
  UserReviewerIdDesc = 'USER_REVIEWER_ID_DESC'
}

/** A connection to a list of `Movie` values. */
export type MoviesConnection = {
  __typename?: 'MoviesConnection';
  /** A list of edges which contains the `Movie` and cursor to aid in pagination. */
  edges: Array<MoviesEdge>;
  /** A list of `Movie` objects. */
  nodes: Array<Maybe<Movie>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Movie` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Movie` edge in the connection. */
export type MoviesEdge = {
  __typename?: 'MoviesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Movie` at the end of the edge. */
  node?: Maybe<Movie>;
};

/** Methods to use when ordering `Movie`. */
export enum MoviesOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  ImgUrlAsc = 'IMG_URL_ASC',
  ImgUrlDesc = 'IMG_URL_DESC',
  MovieDirectorIdAsc = 'MOVIE_DIRECTOR_ID_ASC',
  MovieDirectorIdDesc = 'MOVIE_DIRECTOR_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ReleaseDateAsc = 'RELEASE_DATE_ASC',
  ReleaseDateDesc = 'RELEASE_DATE_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  UserCreatorIdAsc = 'USER_CREATOR_ID_ASC',
  UserCreatorIdDesc = 'USER_CREATOR_ID_DESC'
}

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `Comment`. */
  createComment?: Maybe<CreateCommentPayload>;
  /** Creates a single `Movie`. */
  createMovie?: Maybe<CreateMoviePayload>;
  /** Creates a single `MovieDirector`. */
  createMovieDirector?: Maybe<CreateMovieDirectorPayload>;
  /** Creates a single `MovieReview`. */
  createMovieReview?: Maybe<CreateMovieReviewPayload>;
  /** Creates a single `User`. */
  createUser?: Maybe<CreateUserPayload>;
  /** Deletes a single `Comment` using its globally unique id. */
  deleteComment?: Maybe<DeleteCommentPayload>;
  /** Deletes a single `Comment` using a unique key. */
  deleteCommentById?: Maybe<DeleteCommentPayload>;
  /** Deletes a single `Movie` using its globally unique id. */
  deleteMovie?: Maybe<DeleteMoviePayload>;
  /** Deletes a single `Movie` using a unique key. */
  deleteMovieById?: Maybe<DeleteMoviePayload>;
  /** Deletes a single `MovieDirector` using its globally unique id. */
  deleteMovieDirector?: Maybe<DeleteMovieDirectorPayload>;
  /** Deletes a single `MovieDirector` using a unique key. */
  deleteMovieDirectorById?: Maybe<DeleteMovieDirectorPayload>;
  /** Deletes a single `MovieReview` using its globally unique id. */
  deleteMovieReview?: Maybe<DeleteMovieReviewPayload>;
  /** Deletes a single `MovieReview` using a unique key. */
  deleteMovieReviewById?: Maybe<DeleteMovieReviewPayload>;
  /** Deletes a single `User` using its globally unique id. */
  deleteUser?: Maybe<DeleteUserPayload>;
  /** Deletes a single `User` using a unique key. */
  deleteUserById?: Maybe<DeleteUserPayload>;
  /** Updates a single `Comment` using its globally unique id and a patch. */
  updateComment?: Maybe<UpdateCommentPayload>;
  /** Updates a single `Comment` using a unique key and a patch. */
  updateCommentById?: Maybe<UpdateCommentPayload>;
  /** Updates a single `Movie` using its globally unique id and a patch. */
  updateMovie?: Maybe<UpdateMoviePayload>;
  /** Updates a single `Movie` using a unique key and a patch. */
  updateMovieById?: Maybe<UpdateMoviePayload>;
  /** Updates a single `MovieDirector` using its globally unique id and a patch. */
  updateMovieDirector?: Maybe<UpdateMovieDirectorPayload>;
  /** Updates a single `MovieDirector` using a unique key and a patch. */
  updateMovieDirectorById?: Maybe<UpdateMovieDirectorPayload>;
  /** Updates a single `MovieReview` using its globally unique id and a patch. */
  updateMovieReview?: Maybe<UpdateMovieReviewPayload>;
  /** Updates a single `MovieReview` using a unique key and a patch. */
  updateMovieReviewById?: Maybe<UpdateMovieReviewPayload>;
  /** Updates a single `User` using its globally unique id and a patch. */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Updates a single `User` using a unique key and a patch. */
  updateUserById?: Maybe<UpdateUserPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateCommentArgs = {
  input: CreateCommentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateMovieArgs = {
  input: CreateMovieInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateMovieDirectorArgs = {
  input: CreateMovieDirectorInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateMovieReviewArgs = {
  input: CreateMovieReviewInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCommentArgs = {
  input: DeleteCommentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCommentByIdArgs = {
  input: DeleteCommentByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMovieArgs = {
  input: DeleteMovieInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMovieByIdArgs = {
  input: DeleteMovieByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMovieDirectorArgs = {
  input: DeleteMovieDirectorInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMovieDirectorByIdArgs = {
  input: DeleteMovieDirectorByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMovieReviewArgs = {
  input: DeleteMovieReviewInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMovieReviewByIdArgs = {
  input: DeleteMovieReviewByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserByIdArgs = {
  input: DeleteUserByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCommentArgs = {
  input: UpdateCommentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCommentByIdArgs = {
  input: UpdateCommentByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMovieArgs = {
  input: UpdateMovieInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMovieByIdArgs = {
  input: UpdateMovieByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMovieDirectorArgs = {
  input: UpdateMovieDirectorInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMovieDirectorByIdArgs = {
  input: UpdateMovieDirectorByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMovieReviewArgs = {
  input: UpdateMovieReviewInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMovieReviewByIdArgs = {
  input: UpdateMovieReviewByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserByIdArgs = {
  input: UpdateUserByIdInput;
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>;
};

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query';
  /** Reads and enables pagination through a set of `Comment`. */
  allComments?: Maybe<CommentsConnection>;
  /** Reads and enables pagination through a set of `MovieDirector`. */
  allMovieDirectors?: Maybe<MovieDirectorsConnection>;
  /** Reads and enables pagination through a set of `MovieReview`. */
  allMovieReviews?: Maybe<MovieReviewsConnection>;
  /** Reads and enables pagination through a set of `Movie`. */
  allMovies?: Maybe<MoviesConnection>;
  /** Reads and enables pagination through a set of `User`. */
  allUsers?: Maybe<UsersConnection>;
  /** Reads a single `Comment` using its globally unique `ID`. */
  comment?: Maybe<Comment>;
  commentById?: Maybe<Comment>;
  currentUser?: Maybe<User>;
  /** Reads a single `Movie` using its globally unique `ID`. */
  movie?: Maybe<Movie>;
  movieById?: Maybe<Movie>;
  /** Reads a single `MovieDirector` using its globally unique `ID`. */
  movieDirector?: Maybe<MovieDirector>;
  movieDirectorById?: Maybe<MovieDirector>;
  /** Reads a single `MovieReview` using its globally unique `ID`. */
  movieReview?: Maybe<MovieReview>;
  movieReviewById?: Maybe<MovieReview>;
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID'];
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  /** Reads a single `User` using its globally unique `ID`. */
  user?: Maybe<User>;
  userById?: Maybe<User>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllCommentsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<CommentCondition>;
  filter?: InputMaybe<CommentFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CommentsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllMovieDirectorsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<MovieDirectorCondition>;
  filter?: InputMaybe<MovieDirectorFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MovieDirectorsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllMovieReviewsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<MovieReviewCondition>;
  filter?: InputMaybe<MovieReviewFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MovieReviewsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllMoviesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<MovieCondition>;
  filter?: InputMaybe<MovieFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MoviesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllUsersArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<UserCondition>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryCommentArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCommentByIdArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMovieArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMovieByIdArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMovieDirectorArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMovieDirectorByIdArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMovieReviewArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMovieReviewByIdArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserByIdArgs = {
  id: Scalars['UUID'];
};

/** A filter to be used against String fields. All fields are combined with a logical ‘and.’ */
export type StringFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['String']>;
  /** Not equal to the specified value, treating null like an ordinary value (case-insensitive). */
  distinctFromInsensitive?: InputMaybe<Scalars['String']>;
  /** Ends with the specified string (case-sensitive). */
  endsWith?: InputMaybe<Scalars['String']>;
  /** Ends with the specified string (case-insensitive). */
  endsWithInsensitive?: InputMaybe<Scalars['String']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['String']>;
  /** Equal to the specified value (case-insensitive). */
  equalToInsensitive?: InputMaybe<Scalars['String']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['String']>;
  /** Greater than the specified value (case-insensitive). */
  greaterThanInsensitive?: InputMaybe<Scalars['String']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['String']>;
  /** Greater than or equal to the specified value (case-insensitive). */
  greaterThanOrEqualToInsensitive?: InputMaybe<Scalars['String']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['String']>>;
  /** Included in the specified list (case-insensitive). */
  inInsensitive?: InputMaybe<Array<Scalars['String']>>;
  /** Contains the specified string (case-sensitive). */
  includes?: InputMaybe<Scalars['String']>;
  /** Contains the specified string (case-insensitive). */
  includesInsensitive?: InputMaybe<Scalars['String']>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['String']>;
  /** Less than the specified value (case-insensitive). */
  lessThanInsensitive?: InputMaybe<Scalars['String']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['String']>;
  /** Less than or equal to the specified value (case-insensitive). */
  lessThanOrEqualToInsensitive?: InputMaybe<Scalars['String']>;
  /** Matches the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  like?: InputMaybe<Scalars['String']>;
  /** Matches the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  likeInsensitive?: InputMaybe<Scalars['String']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['String']>;
  /** Equal to the specified value, treating null like an ordinary value (case-insensitive). */
  notDistinctFromInsensitive?: InputMaybe<Scalars['String']>;
  /** Does not end with the specified string (case-sensitive). */
  notEndsWith?: InputMaybe<Scalars['String']>;
  /** Does not end with the specified string (case-insensitive). */
  notEndsWithInsensitive?: InputMaybe<Scalars['String']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['String']>;
  /** Not equal to the specified value (case-insensitive). */
  notEqualToInsensitive?: InputMaybe<Scalars['String']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['String']>>;
  /** Not included in the specified list (case-insensitive). */
  notInInsensitive?: InputMaybe<Array<Scalars['String']>>;
  /** Does not contain the specified string (case-sensitive). */
  notIncludes?: InputMaybe<Scalars['String']>;
  /** Does not contain the specified string (case-insensitive). */
  notIncludesInsensitive?: InputMaybe<Scalars['String']>;
  /** Does not match the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  notLike?: InputMaybe<Scalars['String']>;
  /** Does not match the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  notLikeInsensitive?: InputMaybe<Scalars['String']>;
  /** Does not start with the specified string (case-sensitive). */
  notStartsWith?: InputMaybe<Scalars['String']>;
  /** Does not start with the specified string (case-insensitive). */
  notStartsWithInsensitive?: InputMaybe<Scalars['String']>;
  /** Starts with the specified string (case-sensitive). */
  startsWith?: InputMaybe<Scalars['String']>;
  /** Starts with the specified string (case-insensitive). */
  startsWithInsensitive?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against UUID fields. All fields are combined with a logical ‘and.’ */
export type UuidFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['UUID']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['UUID']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['UUID']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['UUID']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['UUID']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['UUID']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['UUID']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['UUID']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['UUID']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['UUID']>>;
};

/** All input for the `updateCommentById` mutation. */
export type UpdateCommentByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Comment` being updated. */
  commentPatch: CommentPatch;
  id: Scalars['UUID'];
};

/** All input for the `updateComment` mutation. */
export type UpdateCommentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Comment` being updated. */
  commentPatch: CommentPatch;
  /** The globally unique `ID` which will identify a single `Comment` to be updated. */
  nodeId: Scalars['ID'];
};

/** The output of our update `Comment` mutation. */
export type UpdateCommentPayload = {
  __typename?: 'UpdateCommentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Comment` that was updated by this mutation. */
  comment?: Maybe<Comment>;
  /** An edge for our `Comment`. May be used by Relay 1. */
  commentEdge?: Maybe<CommentsEdge>;
  /** Reads a single `MovieReview` that is related to this `Comment`. */
  movieReviewByMovieReviewId?: Maybe<MovieReview>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Comment`. */
  userByUserId?: Maybe<User>;
};


/** The output of our update `Comment` mutation. */
export type UpdateCommentPayloadCommentEdgeArgs = {
  orderBy?: InputMaybe<Array<CommentsOrderBy>>;
};

/** All input for the `updateMovieById` mutation. */
export type UpdateMovieByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
  /** An object where the defined keys will be set on the `Movie` being updated. */
  moviePatch: MoviePatch;
};

/** All input for the `updateMovieDirectorById` mutation. */
export type UpdateMovieDirectorByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
  /** An object where the defined keys will be set on the `MovieDirector` being updated. */
  movieDirectorPatch: MovieDirectorPatch;
};

/** All input for the `updateMovieDirector` mutation. */
export type UpdateMovieDirectorInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `MovieDirector` being updated. */
  movieDirectorPatch: MovieDirectorPatch;
  /** The globally unique `ID` which will identify a single `MovieDirector` to be updated. */
  nodeId: Scalars['ID'];
};

/** The output of our update `MovieDirector` mutation. */
export type UpdateMovieDirectorPayload = {
  __typename?: 'UpdateMovieDirectorPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `MovieDirector` that was updated by this mutation. */
  movieDirector?: Maybe<MovieDirector>;
  /** An edge for our `MovieDirector`. May be used by Relay 1. */
  movieDirectorEdge?: Maybe<MovieDirectorsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `MovieDirector` mutation. */
export type UpdateMovieDirectorPayloadMovieDirectorEdgeArgs = {
  orderBy?: InputMaybe<Array<MovieDirectorsOrderBy>>;
};

/** All input for the `updateMovie` mutation. */
export type UpdateMovieInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Movie` being updated. */
  moviePatch: MoviePatch;
  /** The globally unique `ID` which will identify a single `Movie` to be updated. */
  nodeId: Scalars['ID'];
};

/** The output of our update `Movie` mutation. */
export type UpdateMoviePayload = {
  __typename?: 'UpdateMoviePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Movie` that was updated by this mutation. */
  movie?: Maybe<Movie>;
  /** Reads a single `MovieDirector` that is related to this `Movie`. */
  movieDirectorByMovieDirectorId?: Maybe<MovieDirector>;
  /** An edge for our `Movie`. May be used by Relay 1. */
  movieEdge?: Maybe<MoviesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Movie`. */
  userByUserCreatorId?: Maybe<User>;
};


/** The output of our update `Movie` mutation. */
export type UpdateMoviePayloadMovieEdgeArgs = {
  orderBy?: InputMaybe<Array<MoviesOrderBy>>;
};

/** All input for the `updateMovieReviewById` mutation. */
export type UpdateMovieReviewByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
  /** An object where the defined keys will be set on the `MovieReview` being updated. */
  movieReviewPatch: MovieReviewPatch;
};

/** All input for the `updateMovieReview` mutation. */
export type UpdateMovieReviewInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `MovieReview` being updated. */
  movieReviewPatch: MovieReviewPatch;
  /** The globally unique `ID` which will identify a single `MovieReview` to be updated. */
  nodeId: Scalars['ID'];
};

/** The output of our update `MovieReview` mutation. */
export type UpdateMovieReviewPayload = {
  __typename?: 'UpdateMovieReviewPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Movie` that is related to this `MovieReview`. */
  movieByMovieId?: Maybe<Movie>;
  /** The `MovieReview` that was updated by this mutation. */
  movieReview?: Maybe<MovieReview>;
  /** An edge for our `MovieReview`. May be used by Relay 1. */
  movieReviewEdge?: Maybe<MovieReviewsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `MovieReview`. */
  userByUserReviewerId?: Maybe<User>;
};


/** The output of our update `MovieReview` mutation. */
export type UpdateMovieReviewPayloadMovieReviewEdgeArgs = {
  orderBy?: InputMaybe<Array<MovieReviewsOrderBy>>;
};

/** All input for the `updateUserById` mutation. */
export type UpdateUserByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
  /** An object where the defined keys will be set on the `User` being updated. */
  userPatch: UserPatch;
};

/** All input for the `updateUser` mutation. */
export type UpdateUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `User` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `User` being updated. */
  userPatch: UserPatch;
};

/** The output of our update `User` mutation. */
export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was updated by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};


/** The output of our update `User` mutation. */
export type UpdateUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

export type User = Node & {
  __typename?: 'User';
  /** Reads and enables pagination through a set of `Comment`. */
  commentsByUserId: CommentsConnection;
  id: Scalars['UUID'];
  /** Reads and enables pagination through a set of `MovieReview`. */
  movieReviewsByUserReviewerId: MovieReviewsConnection;
  /** Reads and enables pagination through a set of `Movie`. */
  moviesByUserCreatorId: MoviesConnection;
  name: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};


export type UserCommentsByUserIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<CommentCondition>;
  filter?: InputMaybe<CommentFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CommentsOrderBy>>;
};


export type UserMovieReviewsByUserReviewerIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<MovieReviewCondition>;
  filter?: InputMaybe<MovieReviewFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MovieReviewsOrderBy>>;
};


export type UserMoviesByUserCreatorIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<MovieCondition>;
  filter?: InputMaybe<MovieFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MoviesOrderBy>>;
};

/** A condition to be used against `User` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type UserCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against `User` object types. All fields are combined with a logical ‘and.’ */
export type UserFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<UserFilter>>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<UserFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<UserFilter>>;
};

/** An input for mutations affecting `User` */
export type UserInput = {
  id?: InputMaybe<Scalars['UUID']>;
  name: Scalars['String'];
};

/** Represents an update to a `User`. Fields that are set will be updated. */
export type UserPatch = {
  id?: InputMaybe<Scalars['UUID']>;
  name?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `User` values. */
export type UsersConnection = {
  __typename?: 'UsersConnection';
  /** A list of edges which contains the `User` and cursor to aid in pagination. */
  edges: Array<UsersEdge>;
  /** A list of `User` objects. */
  nodes: Array<Maybe<User>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `User` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `User` edge in the connection. */
export type UsersEdge = {
  __typename?: 'UsersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `User` at the end of the edge. */
  node?: Maybe<User>;
};

/** Methods to use when ordering `User`. */
export enum UsersOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}
