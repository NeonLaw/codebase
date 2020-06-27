import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any;
  /** A universally unique identifier as defined by [RFC 4122](https://tools.ietf.org/html/rfc4122). */
  UUID: any;
  /** A point in time as described by the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone. */
  Datetime: string;
};

/** All input for the create `Flashcard` mutation. */
export type CreateFlashcardInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Flashcard` to be created by this mutation. */
  flashcard: FlashcardInput;
};

/** The output of our create `Flashcard` mutation. */
export type CreateFlashcardPayload = {
  __typename?: 'CreateFlashcardPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Flashcard` that was created by this mutation. */
  flashcard?: Maybe<Flashcard>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Flashcard`. May be used by Relay 1. */
  flashcardEdge?: Maybe<FlashcardsEdge>;
};


/** The output of our create `Flashcard` mutation. */
export type CreateFlashcardPayloadFlashcardEdgeArgs = {
  orderBy?: Maybe<Array<FlashcardsOrderBy>>;
};

/** All input for the `createPrimaryKeyIdIfNotExists` mutation. */
export type CreatePrimaryKeyIdIfNotExistsInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  tName?: Maybe<Scalars['String']>;
};

/** The output of our `createPrimaryKeyIdIfNotExists` mutation. */
export type CreatePrimaryKeyIdIfNotExistsPayload = {
  __typename?: 'CreatePrimaryKeyIdIfNotExistsPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `createRoleIfNotExists` mutation. */
export type CreateRoleIfNotExistsInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  roleName?: Maybe<Scalars['String']>;
};

/** The output of our `createRoleIfNotExists` mutation. */
export type CreateRoleIfNotExistsPayload = {
  __typename?: 'CreateRoleIfNotExistsPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};



/** All input for the `deleteFlashcardById` mutation. */
export type DeleteFlashcardByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The unique ID of a flashcard */
  id: Scalars['UUID'];
};

/** All input for the `deleteFlashcard` mutation. */
export type DeleteFlashcardInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Flashcard` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Flashcard` mutation. */
export type DeleteFlashcardPayload = {
  __typename?: 'DeleteFlashcardPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Flashcard` that was deleted by this mutation. */
  flashcard?: Maybe<Flashcard>;
  deletedFlashcardId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Flashcard`. May be used by Relay 1. */
  flashcardEdge?: Maybe<FlashcardsEdge>;
};


/** The output of our delete `Flashcard` mutation. */
export type DeleteFlashcardPayloadFlashcardEdgeArgs = {
  orderBy?: Maybe<Array<FlashcardsOrderBy>>;
};

/** All input for the `deletePersonById` mutation. */
export type DeletePersonByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** All input for the `deletePerson` mutation. */
export type DeletePersonInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Person` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Person` mutation. */
export type DeletePersonPayload = {
  __typename?: 'DeletePersonPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Person` that was deleted by this mutation. */
  person?: Maybe<Person>;
  deletedPersonId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Person`. May be used by Relay 1. */
  personEdge?: Maybe<PeopleEdge>;
};


/** The output of our delete `Person` mutation. */
export type DeletePersonPayloadPersonEdgeArgs = {
  orderBy?: Maybe<Array<PeopleOrderBy>>;
};

/** A flashcard used for studying */
export type Flashcard = Node & {
  __typename?: 'Flashcard';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** The unique ID of a flashcard */
  id: Scalars['UUID'];
  /** The prompt or sideA of a flashcard */
  prompt: Scalars['String'];
  /** The answer or SideB of the flashcard */
  answer: Scalars['String'];
  /** The topic of the flashcard. This maps to a topic administered on the California Bar exam. */
  topic: Scalars['String'];
  createdAt: Scalars['Datetime'];
  updatedAt: Scalars['Datetime'];
};

/**
 * A condition to be used against `Flashcard` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type FlashcardCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `topic` field. */
  topic?: Maybe<Scalars['String']>;
};

/** An input for mutations affecting `Flashcard` */
export type FlashcardInput = {
  /** The unique ID of a flashcard */
  id?: Maybe<Scalars['UUID']>;
  /** The prompt or sideA of a flashcard */
  prompt: Scalars['String'];
  /** The answer or SideB of the flashcard */
  answer: Scalars['String'];
  /** The topic of the flashcard. This maps to a topic administered on the California Bar exam. */
  topic: Scalars['String'];
};

/** Represents an update to a `Flashcard`. Fields that are set will be updated. */
export type FlashcardPatch = {
  /** The unique ID of a flashcard */
  id?: Maybe<Scalars['UUID']>;
  /** The prompt or sideA of a flashcard */
  prompt?: Maybe<Scalars['String']>;
  /** The answer or SideB of the flashcard */
  answer?: Maybe<Scalars['String']>;
  /** The topic of the flashcard. This maps to a topic administered on the California Bar exam. */
  topic?: Maybe<Scalars['String']>;
};

/** A connection to a list of `Flashcard` values. */
export type FlashcardsConnection = {
  __typename?: 'FlashcardsConnection';
  /** A list of `Flashcard` objects. */
  nodes: Array<Flashcard>;
  /** A list of edges which contains the `Flashcard` and cursor to aid in pagination. */
  edges: Array<FlashcardsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Flashcard` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Flashcard` edge in the connection. */
export type FlashcardsEdge = {
  __typename?: 'FlashcardsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Flashcard` at the end of the edge. */
  node: Flashcard;
};

/** Methods to use when ordering `Flashcard`. */
export enum FlashcardsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  TopicAsc = 'TOPIC_ASC',
  TopicDesc = 'TOPIC_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `Flashcard`. */
  createFlashcard?: Maybe<CreateFlashcardPayload>;
  /** Updates a single `Flashcard` using its globally unique id and a patch. */
  updateFlashcard?: Maybe<UpdateFlashcardPayload>;
  /** Updates a single `Flashcard` using a unique key and a patch. */
  updateFlashcardById?: Maybe<UpdateFlashcardPayload>;
  /** Updates a single `Person` using its globally unique id and a patch. */
  updatePerson?: Maybe<UpdatePersonPayload>;
  /** Updates a single `Person` using a unique key and a patch. */
  updatePersonById?: Maybe<UpdatePersonPayload>;
  /** Deletes a single `Flashcard` using its globally unique id. */
  deleteFlashcard?: Maybe<DeleteFlashcardPayload>;
  /** Deletes a single `Flashcard` using a unique key. */
  deleteFlashcardById?: Maybe<DeleteFlashcardPayload>;
  /** Deletes a single `Person` using its globally unique id. */
  deletePerson?: Maybe<DeletePersonPayload>;
  /** Deletes a single `Person` using a unique key. */
  deletePersonById?: Maybe<DeletePersonPayload>;
  createPrimaryKeyIdIfNotExists?: Maybe<CreatePrimaryKeyIdIfNotExistsPayload>;
  createRoleIfNotExists?: Maybe<CreateRoleIfNotExistsPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateFlashcardArgs = {
  input: CreateFlashcardInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFlashcardArgs = {
  input: UpdateFlashcardInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFlashcardByIdArgs = {
  input: UpdateFlashcardByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePersonArgs = {
  input: UpdatePersonInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePersonByIdArgs = {
  input: UpdatePersonByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFlashcardArgs = {
  input: DeleteFlashcardInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFlashcardByIdArgs = {
  input: DeleteFlashcardByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePersonArgs = {
  input: DeletePersonInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePersonByIdArgs = {
  input: DeletePersonByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreatePrimaryKeyIdIfNotExistsArgs = {
  input: CreatePrimaryKeyIdIfNotExistsInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateRoleIfNotExistsArgs = {
  input: CreateRoleIfNotExistsInput;
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>;
};

/** A `Person` edge in the connection. */
export type PeopleEdge = {
  __typename?: 'PeopleEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Person` at the end of the edge. */
  node: Person;
};

/** Methods to use when ordering `Person`. */
export enum PeopleOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type Person = Node & {
  __typename?: 'Person';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['UUID'];
  /** The name of a person */
  name?: Maybe<Scalars['String']>;
  createdAt: Scalars['Datetime'];
  updatedAt: Scalars['Datetime'];
  role: Scalars['String'];
  email: Scalars['String'];
  picture?: Maybe<Scalars['String']>;
};

/** Represents an update to a `Person`. Fields that are set will be updated. */
export type PersonPatch = {
  /** The name of a person */
  name?: Maybe<Scalars['String']>;
};

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query';
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID'];
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** Reads and enables pagination through a set of `Flashcard`. */
  allFlashcards?: Maybe<FlashcardsConnection>;
  flashcardById?: Maybe<Flashcard>;
  personById?: Maybe<Person>;
  getCurrentUser?: Maybe<Person>;
  /** Reads a single `Flashcard` using its globally unique `ID`. */
  flashcard?: Maybe<Flashcard>;
  /** Reads a single `Person` using its globally unique `ID`. */
  person?: Maybe<Person>;
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAllFlashcardsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<FlashcardsOrderBy>>;
  condition?: Maybe<FlashcardCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryFlashcardByIdArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPersonByIdArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFlashcardArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPersonArgs = {
  nodeId: Scalars['ID'];
};

/** All input for the `updateFlashcardById` mutation. */
export type UpdateFlashcardByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Flashcard` being updated. */
  flashcardPatch: FlashcardPatch;
  /** The unique ID of a flashcard */
  id: Scalars['UUID'];
};

/** All input for the `updateFlashcard` mutation. */
export type UpdateFlashcardInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Flashcard` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Flashcard` being updated. */
  flashcardPatch: FlashcardPatch;
};

/** The output of our update `Flashcard` mutation. */
export type UpdateFlashcardPayload = {
  __typename?: 'UpdateFlashcardPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Flashcard` that was updated by this mutation. */
  flashcard?: Maybe<Flashcard>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Flashcard`. May be used by Relay 1. */
  flashcardEdge?: Maybe<FlashcardsEdge>;
};


/** The output of our update `Flashcard` mutation. */
export type UpdateFlashcardPayloadFlashcardEdgeArgs = {
  orderBy?: Maybe<Array<FlashcardsOrderBy>>;
};

/** All input for the `updatePersonById` mutation. */
export type UpdatePersonByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Person` being updated. */
  personPatch: PersonPatch;
  id: Scalars['UUID'];
};

/** All input for the `updatePerson` mutation. */
export type UpdatePersonInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Person` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Person` being updated. */
  personPatch: PersonPatch;
};

/** The output of our update `Person` mutation. */
export type UpdatePersonPayload = {
  __typename?: 'UpdatePersonPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Person` that was updated by this mutation. */
  person?: Maybe<Person>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Person`. May be used by Relay 1. */
  personEdge?: Maybe<PeopleEdge>;
};


/** The output of our update `Person` mutation. */
export type UpdatePersonPayloadPersonEdgeArgs = {
  orderBy?: Maybe<Array<PeopleOrderBy>>;
};


export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = (
  { __typename?: 'Query' }
  & { getCurrentUser?: Maybe<(
    { __typename?: 'Person' }
    & Pick<Person, 'id' | 'name' | 'email' | 'picture' | 'role'>
  )> }
);

export type UpdatePersonByIdMutationVariables = Exact<{
  id: Scalars['UUID'];
  name: Scalars['String'];
}>;


export type UpdatePersonByIdMutation = (
  { __typename?: 'Mutation' }
  & { updatePersonById?: Maybe<(
    { __typename?: 'UpdatePersonPayload' }
    & { person?: Maybe<(
      { __typename?: 'Person' }
      & Pick<Person, 'id' | 'name'>
    )> }
  )> }
);


export const CurrentUserDocument = gql`
    query CurrentUser {
  getCurrentUser {
    id
    name
    email
    picture
    role
  }
}
    `;
export type CurrentUserComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CurrentUserQuery, CurrentUserQueryVariables>, 'query'>;

    export const CurrentUserComponent = (props: CurrentUserComponentProps) => (
      <ApolloReactComponents.Query<CurrentUserQuery, CurrentUserQueryVariables> query={CurrentUserDocument} {...props} />
    );
    
export type CurrentUserProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<CurrentUserQuery, CurrentUserQueryVariables>
    } & TChildProps;
export function withCurrentUser<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CurrentUserQuery,
  CurrentUserQueryVariables,
  CurrentUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, CurrentUserQuery, CurrentUserQueryVariables, CurrentUserProps<TChildProps, TDataName>>(CurrentUserDocument, {
      alias: 'currentUser',
      ...operationOptions
    });
};

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
        return ApolloReactHooks.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, baseOptions);
      }
export function useCurrentUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, baseOptions);
        }
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserQueryResult = ApolloReactCommon.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;
export const UpdatePersonByIdDocument = gql`
    mutation UpdatePersonById($id: UUID!, $name: String!) {
  updatePersonById(input: {id: $id, personPatch: {name: $name}}) {
    person {
      id
      name
    }
  }
}
    `;
export type UpdatePersonByIdMutationFn = ApolloReactCommon.MutationFunction<UpdatePersonByIdMutation, UpdatePersonByIdMutationVariables>;
export type UpdatePersonByIdComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdatePersonByIdMutation, UpdatePersonByIdMutationVariables>, 'mutation'>;

    export const UpdatePersonByIdComponent = (props: UpdatePersonByIdComponentProps) => (
      <ApolloReactComponents.Mutation<UpdatePersonByIdMutation, UpdatePersonByIdMutationVariables> mutation={UpdatePersonByIdDocument} {...props} />
    );
    
export type UpdatePersonByIdProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<UpdatePersonByIdMutation, UpdatePersonByIdMutationVariables>
    } & TChildProps;
export function withUpdatePersonById<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdatePersonByIdMutation,
  UpdatePersonByIdMutationVariables,
  UpdatePersonByIdProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdatePersonByIdMutation, UpdatePersonByIdMutationVariables, UpdatePersonByIdProps<TChildProps, TDataName>>(UpdatePersonByIdDocument, {
      alias: 'updatePersonById',
      ...operationOptions
    });
};

/**
 * __useUpdatePersonByIdMutation__
 *
 * To run a mutation, you first call `useUpdatePersonByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePersonByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePersonByIdMutation, { data, loading, error }] = useUpdatePersonByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useUpdatePersonByIdMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdatePersonByIdMutation, UpdatePersonByIdMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdatePersonByIdMutation, UpdatePersonByIdMutationVariables>(UpdatePersonByIdDocument, baseOptions);
      }
export type UpdatePersonByIdMutationHookResult = ReturnType<typeof useUpdatePersonByIdMutation>;
export type UpdatePersonByIdMutationResult = ApolloReactCommon.MutationResult<UpdatePersonByIdMutation>;
export type UpdatePersonByIdMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdatePersonByIdMutation, UpdatePersonByIdMutationVariables>;