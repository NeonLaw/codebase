import { gql } from '@apollo/client';
import * as React from 'react';
import * as Apollo from '@apollo/client';
import * as ApolloReactComponents from '@apollo/client/react/components';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
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
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { [key: string]: any };
};

/** All input for the create `DocumentCode` mutation. */
export type CreateDocumentCodeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `DocumentCode` to be created by this mutation. */
  documentCode: DocumentCodeInput;
};

/** The output of our create `DocumentCode` mutation. */
export type CreateDocumentCodePayload = {
  __typename?: 'CreateDocumentCodePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `DocumentCode` that was created by this mutation. */
  documentCode?: Maybe<DocumentCode>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `DocumentCode`. May be used by Relay 1. */
  documentCodeEdge?: Maybe<DocumentCodesEdge>;
};


/** The output of our create `DocumentCode` mutation. */
export type CreateDocumentCodePayloadDocumentCodeEdgeArgs = {
  orderBy?: Maybe<Array<DocumentCodesOrderBy>>;
};

/** All input for the create `Document` mutation. */
export type CreateDocumentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Document` to be created by this mutation. */
  document: DocumentInput;
};

/** The output of our create `Document` mutation. */
export type CreateDocumentPayload = {
  __typename?: 'CreateDocumentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Document` that was created by this mutation. */
  document?: Maybe<Document>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Matter` that is related to this `Document`. */
  matterByMatterId?: Maybe<Matter>;
  /** An edge for our `Document`. May be used by Relay 1. */
  documentEdge?: Maybe<DocumentsEdge>;
};


/** The output of our create `Document` mutation. */
export type CreateDocumentPayloadDocumentEdgeArgs = {
  orderBy?: Maybe<Array<DocumentsOrderBy>>;
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

/** All input for the create `Question` mutation. */
export type CreateQuestionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Question` to be created by this mutation. */
  question: QuestionInput;
};

/** All input for the create `Questionnaire` mutation. */
export type CreateQuestionnaireInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Questionnaire` to be created by this mutation. */
  questionnaire: QuestionnaireInput;
};

/** The output of our create `Questionnaire` mutation. */
export type CreateQuestionnairePayload = {
  __typename?: 'CreateQuestionnairePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Questionnaire` that was created by this mutation. */
  questionnaire?: Maybe<Questionnaire>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Questionnaire`. May be used by Relay 1. */
  questionnaireEdge?: Maybe<QuestionnairesEdge>;
};


/** The output of our create `Questionnaire` mutation. */
export type CreateQuestionnairePayloadQuestionnaireEdgeArgs = {
  orderBy?: Maybe<Array<QuestionnairesOrderBy>>;
};

/** All input for the create `QuestionnaireResponse` mutation. */
export type CreateQuestionnaireResponseInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `QuestionnaireResponse` to be created by this mutation. */
  questionnaireResponse: QuestionnaireResponseInput;
};

/** The output of our create `QuestionnaireResponse` mutation. */
export type CreateQuestionnaireResponsePayload = {
  __typename?: 'CreateQuestionnaireResponsePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `QuestionnaireResponse` that was created by this mutation. */
  questionnaireResponse?: Maybe<QuestionnaireResponse>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Person` that is related to this `QuestionnaireResponse`. */
  personByPersonId?: Maybe<Person>;
  /** Reads a single `Questionnaire` that is related to this `QuestionnaireResponse`. */
  questionnaireByQuestionnaireId?: Maybe<Questionnaire>;
  /** An edge for our `QuestionnaireResponse`. May be used by Relay 1. */
  questionnaireResponseEdge?: Maybe<QuestionnaireResponsesEdge>;
};


/** The output of our create `QuestionnaireResponse` mutation. */
export type CreateQuestionnaireResponsePayloadQuestionnaireResponseEdgeArgs = {
  orderBy?: Maybe<Array<QuestionnaireResponsesOrderBy>>;
};

/** The output of our create `Question` mutation. */
export type CreateQuestionPayload = {
  __typename?: 'CreateQuestionPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Question` that was created by this mutation. */
  question?: Maybe<Question>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Question`. May be used by Relay 1. */
  questionEdge?: Maybe<QuestionsEdge>;
};


/** The output of our create `Question` mutation. */
export type CreateQuestionPayloadQuestionEdgeArgs = {
  orderBy?: Maybe<Array<QuestionsOrderBy>>;
};

/** All input for the create `Response` mutation. */
export type CreateResponseInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Response` to be created by this mutation. */
  response: ResponseInput;
};

/** The output of our create `Response` mutation. */
export type CreateResponsePayload = {
  __typename?: 'CreateResponsePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Response` that was created by this mutation. */
  response?: Maybe<Response>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `QuestionnaireResponse` that is related to this `Response`. */
  questionnaireResponseByQuestionnaireResponseId?: Maybe<QuestionnaireResponse>;
  /** Reads a single `Question` that is related to this `Response`. */
  questionByQuestionId?: Maybe<Question>;
  /** An edge for our `Response`. May be used by Relay 1. */
  responseEdge?: Maybe<ResponsesEdge>;
};


/** The output of our create `Response` mutation. */
export type CreateResponsePayloadResponseEdgeArgs = {
  orderBy?: Maybe<Array<ResponsesOrderBy>>;
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



/** All input for the `deleteDocumentById` mutation. */
export type DeleteDocumentByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** All input for the `deleteDocumentCodeById` mutation. */
export type DeleteDocumentCodeByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** All input for the `deleteDocumentCode` mutation. */
export type DeleteDocumentCodeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `DocumentCode` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `DocumentCode` mutation. */
export type DeleteDocumentCodePayload = {
  __typename?: 'DeleteDocumentCodePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `DocumentCode` that was deleted by this mutation. */
  documentCode?: Maybe<DocumentCode>;
  deletedDocumentCodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `DocumentCode`. May be used by Relay 1. */
  documentCodeEdge?: Maybe<DocumentCodesEdge>;
};


/** The output of our delete `DocumentCode` mutation. */
export type DeleteDocumentCodePayloadDocumentCodeEdgeArgs = {
  orderBy?: Maybe<Array<DocumentCodesOrderBy>>;
};

/** All input for the `deleteDocument` mutation. */
export type DeleteDocumentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Document` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Document` mutation. */
export type DeleteDocumentPayload = {
  __typename?: 'DeleteDocumentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Document` that was deleted by this mutation. */
  document?: Maybe<Document>;
  deletedDocumentId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Matter` that is related to this `Document`. */
  matterByMatterId?: Maybe<Matter>;
  /** An edge for our `Document`. May be used by Relay 1. */
  documentEdge?: Maybe<DocumentsEdge>;
};


/** The output of our delete `Document` mutation. */
export type DeleteDocumentPayloadDocumentEdgeArgs = {
  orderBy?: Maybe<Array<DocumentsOrderBy>>;
};

/** All input for the `deleteFlashcardById` mutation. */
export type DeleteFlashcardByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
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

/** All input for the `deleteMatterById` mutation. */
export type DeleteMatterByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** All input for the `deleteMatter` mutation. */
export type DeleteMatterInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Matter` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Matter` mutation. */
export type DeleteMatterPayload = {
  __typename?: 'DeleteMatterPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Matter` that was deleted by this mutation. */
  matter?: Maybe<Matter>;
  deletedMatterId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Person` that is related to this `Matter`. */
  personByPrimaryContactId?: Maybe<Person>;
  /** An edge for our `Matter`. May be used by Relay 1. */
  matterEdge?: Maybe<MattersEdge>;
};


/** The output of our delete `Matter` mutation. */
export type DeleteMatterPayloadMatterEdgeArgs = {
  orderBy?: Maybe<Array<MattersOrderBy>>;
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

/** All input for the `deleteQuestionById` mutation. */
export type DeleteQuestionByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** All input for the `deleteQuestion` mutation. */
export type DeleteQuestionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Question` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteQuestionnaireById` mutation. */
export type DeleteQuestionnaireByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** All input for the `deleteQuestionnaire` mutation. */
export type DeleteQuestionnaireInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Questionnaire` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Questionnaire` mutation. */
export type DeleteQuestionnairePayload = {
  __typename?: 'DeleteQuestionnairePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Questionnaire` that was deleted by this mutation. */
  questionnaire?: Maybe<Questionnaire>;
  deletedQuestionnaireId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Questionnaire`. May be used by Relay 1. */
  questionnaireEdge?: Maybe<QuestionnairesEdge>;
};


/** The output of our delete `Questionnaire` mutation. */
export type DeleteQuestionnairePayloadQuestionnaireEdgeArgs = {
  orderBy?: Maybe<Array<QuestionnairesOrderBy>>;
};

/** All input for the `deleteQuestionnaireResponseById` mutation. */
export type DeleteQuestionnaireResponseByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** All input for the `deleteQuestionnaireResponse` mutation. */
export type DeleteQuestionnaireResponseInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `QuestionnaireResponse` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `QuestionnaireResponse` mutation. */
export type DeleteQuestionnaireResponsePayload = {
  __typename?: 'DeleteQuestionnaireResponsePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `QuestionnaireResponse` that was deleted by this mutation. */
  questionnaireResponse?: Maybe<QuestionnaireResponse>;
  deletedQuestionnaireResponseId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Person` that is related to this `QuestionnaireResponse`. */
  personByPersonId?: Maybe<Person>;
  /** Reads a single `Questionnaire` that is related to this `QuestionnaireResponse`. */
  questionnaireByQuestionnaireId?: Maybe<Questionnaire>;
  /** An edge for our `QuestionnaireResponse`. May be used by Relay 1. */
  questionnaireResponseEdge?: Maybe<QuestionnaireResponsesEdge>;
};


/** The output of our delete `QuestionnaireResponse` mutation. */
export type DeleteQuestionnaireResponsePayloadQuestionnaireResponseEdgeArgs = {
  orderBy?: Maybe<Array<QuestionnaireResponsesOrderBy>>;
};

/** The output of our delete `Question` mutation. */
export type DeleteQuestionPayload = {
  __typename?: 'DeleteQuestionPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Question` that was deleted by this mutation. */
  question?: Maybe<Question>;
  deletedQuestionId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Question`. May be used by Relay 1. */
  questionEdge?: Maybe<QuestionsEdge>;
};


/** The output of our delete `Question` mutation. */
export type DeleteQuestionPayloadQuestionEdgeArgs = {
  orderBy?: Maybe<Array<QuestionsOrderBy>>;
};

/** All input for the `deleteResponseById` mutation. */
export type DeleteResponseByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** All input for the `deleteResponse` mutation. */
export type DeleteResponseInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Response` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Response` mutation. */
export type DeleteResponsePayload = {
  __typename?: 'DeleteResponsePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Response` that was deleted by this mutation. */
  response?: Maybe<Response>;
  deletedResponseId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `QuestionnaireResponse` that is related to this `Response`. */
  questionnaireResponseByQuestionnaireResponseId?: Maybe<QuestionnaireResponse>;
  /** Reads a single `Question` that is related to this `Response`. */
  questionByQuestionId?: Maybe<Question>;
  /** An edge for our `Response`. May be used by Relay 1. */
  responseEdge?: Maybe<ResponsesEdge>;
};


/** The output of our delete `Response` mutation. */
export type DeleteResponsePayloadResponseEdgeArgs = {
  orderBy?: Maybe<Array<ResponsesOrderBy>>;
};

export type Document = Node & {
  __typename?: 'Document';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['UUID'];
  filename: Scalars['String'];
  matterId: Scalars['UUID'];
  documentCodeId: Scalars['UUID'];
  /** Reads a single `Matter` that is related to this `Document`. */
  matterByMatterId?: Maybe<Matter>;
};

export type DocumentCode = Node & {
  __typename?: 'DocumentCode';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['UUID'];
  name: Scalars['String'];
  description: Scalars['String'];
};

/**
 * A condition to be used against `DocumentCode` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type DocumentCodeCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>;
};

/** An input for mutations affecting `DocumentCode` */
export type DocumentCodeInput = {
  id?: Maybe<Scalars['UUID']>;
  name: Scalars['String'];
  description: Scalars['String'];
};

/** Represents an update to a `DocumentCode`. Fields that are set will be updated. */
export type DocumentCodePatch = {
  id?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

/** A connection to a list of `DocumentCode` values. */
export type DocumentCodesConnection = {
  __typename?: 'DocumentCodesConnection';
  /** A list of `DocumentCode` objects. */
  nodes: Array<DocumentCode>;
  /** A list of edges which contains the `DocumentCode` and cursor to aid in pagination. */
  edges: Array<DocumentCodesEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `DocumentCode` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `DocumentCode` edge in the connection. */
export type DocumentCodesEdge = {
  __typename?: 'DocumentCodesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `DocumentCode` at the end of the edge. */
  node: DocumentCode;
};

/** Methods to use when ordering `DocumentCode`. */
export enum DocumentCodesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/**
 * A condition to be used against `Document` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type DocumentCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `matterId` field. */
  matterId?: Maybe<Scalars['UUID']>;
};

/** An input for mutations affecting `Document` */
export type DocumentInput = {
  id?: Maybe<Scalars['UUID']>;
  filename: Scalars['String'];
  matterId: Scalars['UUID'];
  documentCodeId: Scalars['UUID'];
};

/** Represents an update to a `Document`. Fields that are set will be updated. */
export type DocumentPatch = {
  id?: Maybe<Scalars['UUID']>;
  filename?: Maybe<Scalars['String']>;
  matterId?: Maybe<Scalars['UUID']>;
  documentCodeId?: Maybe<Scalars['UUID']>;
};

/** A connection to a list of `Document` values. */
export type DocumentsConnection = {
  __typename?: 'DocumentsConnection';
  /** A list of `Document` objects. */
  nodes: Array<Document>;
  /** A list of edges which contains the `Document` and cursor to aid in pagination. */
  edges: Array<DocumentsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Document` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Document` edge in the connection. */
export type DocumentsEdge = {
  __typename?: 'DocumentsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Document` at the end of the edge. */
  node: Document;
};

/** Methods to use when ordering `Document`. */
export enum DocumentsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  MatterIdAsc = 'MATTER_ID_ASC',
  MatterIdDesc = 'MATTER_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A flashcard used for studying */
export type Flashcard = Node & {
  __typename?: 'Flashcard';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['UUID'];
  /** The prompt or sideA of a flashcard */
  prompt: Scalars['String'];
  /** The answer or SideB of the flashcard */
  answer: Scalars['String'];
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
  /** Checks for equality with the object’s `prompt` field. */
  prompt?: Maybe<Scalars['String']>;
};

/** An input for mutations affecting `Flashcard` */
export type FlashcardInput = {
  /** The prompt or sideA of a flashcard */
  prompt: Scalars['String'];
  /** The answer or SideB of the flashcard */
  answer: Scalars['String'];
};

/** Represents an update to a `Flashcard`. Fields that are set will be updated. */
export type FlashcardPatch = {
  id?: Maybe<Scalars['UUID']>;
  /** The prompt or sideA of a flashcard */
  prompt?: Maybe<Scalars['String']>;
  /** The answer or SideB of the flashcard */
  answer?: Maybe<Scalars['String']>;
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
  PromptAsc = 'PROMPT_ASC',
  PromptDesc = 'PROMPT_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type GetSignedUploadUrlPayload = {
  __typename?: 'GetSignedUploadUrlPayload';
  url?: Maybe<Scalars['String']>;
};


export type Matter = Node & {
  __typename?: 'Matter';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['UUID'];
  name: Scalars['String'];
  createdAt: Scalars['Datetime'];
  updatedAt: Scalars['Datetime'];
  folderName: Scalars['String'];
  primaryContactId?: Maybe<Scalars['UUID']>;
  /** Reads a single `Person` that is related to this `Matter`. */
  personByPrimaryContactId?: Maybe<Person>;
  /** Reads and enables pagination through a set of `Document`. */
  documentsByMatterId: DocumentsConnection;
};


export type MatterDocumentsByMatterIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<DocumentsOrderBy>>;
  condition?: Maybe<DocumentCondition>;
};

/** A condition to be used against `Matter` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type MatterCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `folderName` field. */
  folderName?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `primaryContactId` field. */
  primaryContactId?: Maybe<Scalars['UUID']>;
};

/** Represents an update to a `Matter`. Fields that are set will be updated. */
export type MatterPatch = {
  id?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  folderName?: Maybe<Scalars['String']>;
  primaryContactId?: Maybe<Scalars['UUID']>;
};

/** A connection to a list of `Matter` values. */
export type MattersConnection = {
  __typename?: 'MattersConnection';
  /** A list of `Matter` objects. */
  nodes: Array<Matter>;
  /** A list of edges which contains the `Matter` and cursor to aid in pagination. */
  edges: Array<MattersEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Matter` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Matter` edge in the connection. */
export type MattersEdge = {
  __typename?: 'MattersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Matter` at the end of the edge. */
  node: Matter;
};

/** Methods to use when ordering `Matter`. */
export enum MattersOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  FolderNameAsc = 'FOLDER_NAME_ASC',
  FolderNameDesc = 'FOLDER_NAME_DESC',
  PrimaryContactIdAsc = 'PRIMARY_CONTACT_ID_ASC',
  PrimaryContactIdDesc = 'PRIMARY_CONTACT_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `Document`. */
  createDocument?: Maybe<CreateDocumentPayload>;
  /** Creates a single `DocumentCode`. */
  createDocumentCode?: Maybe<CreateDocumentCodePayload>;
  /** Creates a single `Flashcard`. */
  createFlashcard?: Maybe<CreateFlashcardPayload>;
  /** Creates a single `Question`. */
  createQuestion?: Maybe<CreateQuestionPayload>;
  /** Creates a single `Questionnaire`. */
  createQuestionnaire?: Maybe<CreateQuestionnairePayload>;
  /** Creates a single `QuestionnaireResponse`. */
  createQuestionnaireResponse?: Maybe<CreateQuestionnaireResponsePayload>;
  /** Creates a single `Response`. */
  createResponse?: Maybe<CreateResponsePayload>;
  /** Updates a single `Document` using its globally unique id and a patch. */
  updateDocument?: Maybe<UpdateDocumentPayload>;
  /** Updates a single `Document` using a unique key and a patch. */
  updateDocumentById?: Maybe<UpdateDocumentPayload>;
  /** Updates a single `DocumentCode` using its globally unique id and a patch. */
  updateDocumentCode?: Maybe<UpdateDocumentCodePayload>;
  /** Updates a single `DocumentCode` using a unique key and a patch. */
  updateDocumentCodeById?: Maybe<UpdateDocumentCodePayload>;
  /** Updates a single `Flashcard` using its globally unique id and a patch. */
  updateFlashcard?: Maybe<UpdateFlashcardPayload>;
  /** Updates a single `Flashcard` using a unique key and a patch. */
  updateFlashcardById?: Maybe<UpdateFlashcardPayload>;
  /** Updates a single `Matter` using its globally unique id and a patch. */
  updateMatter?: Maybe<UpdateMatterPayload>;
  /** Updates a single `Matter` using a unique key and a patch. */
  updateMatterById?: Maybe<UpdateMatterPayload>;
  /** Updates a single `Person` using its globally unique id and a patch. */
  updatePerson?: Maybe<UpdatePersonPayload>;
  /** Updates a single `Person` using a unique key and a patch. */
  updatePersonById?: Maybe<UpdatePersonPayload>;
  /** Updates a single `Question` using its globally unique id and a patch. */
  updateQuestion?: Maybe<UpdateQuestionPayload>;
  /** Updates a single `Question` using a unique key and a patch. */
  updateQuestionById?: Maybe<UpdateQuestionPayload>;
  /** Updates a single `Questionnaire` using its globally unique id and a patch. */
  updateQuestionnaire?: Maybe<UpdateQuestionnairePayload>;
  /** Updates a single `Questionnaire` using a unique key and a patch. */
  updateQuestionnaireById?: Maybe<UpdateQuestionnairePayload>;
  /** Updates a single `QuestionnaireResponse` using its globally unique id and a patch. */
  updateQuestionnaireResponse?: Maybe<UpdateQuestionnaireResponsePayload>;
  /** Updates a single `QuestionnaireResponse` using a unique key and a patch. */
  updateQuestionnaireResponseById?: Maybe<UpdateQuestionnaireResponsePayload>;
  /** Updates a single `Response` using its globally unique id and a patch. */
  updateResponse?: Maybe<UpdateResponsePayload>;
  /** Updates a single `Response` using a unique key and a patch. */
  updateResponseById?: Maybe<UpdateResponsePayload>;
  /** Deletes a single `Document` using its globally unique id. */
  deleteDocument?: Maybe<DeleteDocumentPayload>;
  /** Deletes a single `Document` using a unique key. */
  deleteDocumentById?: Maybe<DeleteDocumentPayload>;
  /** Deletes a single `DocumentCode` using its globally unique id. */
  deleteDocumentCode?: Maybe<DeleteDocumentCodePayload>;
  /** Deletes a single `DocumentCode` using a unique key. */
  deleteDocumentCodeById?: Maybe<DeleteDocumentCodePayload>;
  /** Deletes a single `Flashcard` using its globally unique id. */
  deleteFlashcard?: Maybe<DeleteFlashcardPayload>;
  /** Deletes a single `Flashcard` using a unique key. */
  deleteFlashcardById?: Maybe<DeleteFlashcardPayload>;
  /** Deletes a single `Matter` using its globally unique id. */
  deleteMatter?: Maybe<DeleteMatterPayload>;
  /** Deletes a single `Matter` using a unique key. */
  deleteMatterById?: Maybe<DeleteMatterPayload>;
  /** Deletes a single `Person` using its globally unique id. */
  deletePerson?: Maybe<DeletePersonPayload>;
  /** Deletes a single `Person` using a unique key. */
  deletePersonById?: Maybe<DeletePersonPayload>;
  /** Deletes a single `Question` using its globally unique id. */
  deleteQuestion?: Maybe<DeleteQuestionPayload>;
  /** Deletes a single `Question` using a unique key. */
  deleteQuestionById?: Maybe<DeleteQuestionPayload>;
  /** Deletes a single `Questionnaire` using its globally unique id. */
  deleteQuestionnaire?: Maybe<DeleteQuestionnairePayload>;
  /** Deletes a single `Questionnaire` using a unique key. */
  deleteQuestionnaireById?: Maybe<DeleteQuestionnairePayload>;
  /** Deletes a single `QuestionnaireResponse` using its globally unique id. */
  deleteQuestionnaireResponse?: Maybe<DeleteQuestionnaireResponsePayload>;
  /** Deletes a single `QuestionnaireResponse` using a unique key. */
  deleteQuestionnaireResponseById?: Maybe<DeleteQuestionnaireResponsePayload>;
  /** Deletes a single `Response` using its globally unique id. */
  deleteResponse?: Maybe<DeleteResponsePayload>;
  /** Deletes a single `Response` using a unique key. */
  deleteResponseById?: Maybe<DeleteResponsePayload>;
  createPrimaryKeyIdIfNotExists?: Maybe<CreatePrimaryKeyIdIfNotExistsPayload>;
  createRoleIfNotExists?: Maybe<CreateRoleIfNotExistsPayload>;
  getSignedUploadUrl?: Maybe<GetSignedUploadUrlPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateDocumentArgs = {
  input: CreateDocumentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateDocumentCodeArgs = {
  input: CreateDocumentCodeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateFlashcardArgs = {
  input: CreateFlashcardInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateQuestionArgs = {
  input: CreateQuestionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateQuestionnaireArgs = {
  input: CreateQuestionnaireInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateQuestionnaireResponseArgs = {
  input: CreateQuestionnaireResponseInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateResponseArgs = {
  input: CreateResponseInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateDocumentArgs = {
  input: UpdateDocumentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateDocumentByIdArgs = {
  input: UpdateDocumentByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateDocumentCodeArgs = {
  input: UpdateDocumentCodeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateDocumentCodeByIdArgs = {
  input: UpdateDocumentCodeByIdInput;
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
export type MutationUpdateMatterArgs = {
  input: UpdateMatterInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMatterByIdArgs = {
  input: UpdateMatterByIdInput;
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
export type MutationUpdateQuestionArgs = {
  input: UpdateQuestionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateQuestionByIdArgs = {
  input: UpdateQuestionByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateQuestionnaireArgs = {
  input: UpdateQuestionnaireInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateQuestionnaireByIdArgs = {
  input: UpdateQuestionnaireByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateQuestionnaireResponseArgs = {
  input: UpdateQuestionnaireResponseInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateQuestionnaireResponseByIdArgs = {
  input: UpdateQuestionnaireResponseByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateResponseArgs = {
  input: UpdateResponseInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateResponseByIdArgs = {
  input: UpdateResponseByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteDocumentArgs = {
  input: DeleteDocumentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteDocumentByIdArgs = {
  input: DeleteDocumentByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteDocumentCodeArgs = {
  input: DeleteDocumentCodeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteDocumentCodeByIdArgs = {
  input: DeleteDocumentCodeByIdInput;
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
export type MutationDeleteMatterArgs = {
  input: DeleteMatterInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMatterByIdArgs = {
  input: DeleteMatterByIdInput;
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
export type MutationDeleteQuestionArgs = {
  input: DeleteQuestionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteQuestionByIdArgs = {
  input: DeleteQuestionByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteQuestionnaireArgs = {
  input: DeleteQuestionnaireInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteQuestionnaireByIdArgs = {
  input: DeleteQuestionnaireByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteQuestionnaireResponseArgs = {
  input: DeleteQuestionnaireResponseInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteQuestionnaireResponseByIdArgs = {
  input: DeleteQuestionnaireResponseByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteResponseArgs = {
  input: DeleteResponseInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteResponseByIdArgs = {
  input: DeleteResponseByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreatePrimaryKeyIdIfNotExistsArgs = {
  input: CreatePrimaryKeyIdIfNotExistsInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateRoleIfNotExistsArgs = {
  input: CreateRoleIfNotExistsInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationGetSignedUploadUrlArgs = {
  filename?: Maybe<Scalars['String']>;
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
  SubAsc = 'SUB_ASC',
  SubDesc = 'SUB_DESC',
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
  sub?: Maybe<Scalars['String']>;
  /** Reads and enables pagination through a set of `QuestionnaireResponse`. */
  questionnaireResponsesByPersonId: QuestionnaireResponsesConnection;
  /** Reads and enables pagination through a set of `Matter`. */
  mattersByPrimaryContactId: MattersConnection;
};


export type PersonQuestionnaireResponsesByPersonIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<QuestionnaireResponsesOrderBy>>;
  condition?: Maybe<QuestionnaireResponseCondition>;
};


export type PersonMattersByPrimaryContactIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<MattersOrderBy>>;
  condition?: Maybe<MatterCondition>;
};

/** Represents an update to a `Person`. Fields that are set will be updated. */
export type PersonPatch = {
  /** The name of a person */
  name?: Maybe<Scalars['String']>;
  sub?: Maybe<Scalars['String']>;
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
  /** Reads and enables pagination through a set of `Document`. */
  allDocuments?: Maybe<DocumentsConnection>;
  /** Reads and enables pagination through a set of `DocumentCode`. */
  allDocumentCodes?: Maybe<DocumentCodesConnection>;
  /** Reads and enables pagination through a set of `Flashcard`. */
  allFlashcards?: Maybe<FlashcardsConnection>;
  /** Reads and enables pagination through a set of `Question`. */
  allQuestions?: Maybe<QuestionsConnection>;
  /** Reads and enables pagination through a set of `Questionnaire`. */
  allQuestionnaires?: Maybe<QuestionnairesConnection>;
  /** Reads and enables pagination through a set of `QuestionnaireResponse`. */
  allQuestionnaireResponses?: Maybe<QuestionnaireResponsesConnection>;
  /** Reads and enables pagination through a set of `Response`. */
  allResponses?: Maybe<ResponsesConnection>;
  documentById?: Maybe<Document>;
  documentCodeById?: Maybe<DocumentCode>;
  flashcardById?: Maybe<Flashcard>;
  matterById?: Maybe<Matter>;
  personById?: Maybe<Person>;
  questionById?: Maybe<Question>;
  questionnaireById?: Maybe<Questionnaire>;
  questionnaireResponseById?: Maybe<QuestionnaireResponse>;
  responseById?: Maybe<Response>;
  getCurrentUser?: Maybe<Person>;
  responsePersonMatch?: Maybe<Scalars['Boolean']>;
  /** Reads a single `Document` using its globally unique `ID`. */
  document?: Maybe<Document>;
  /** Reads a single `DocumentCode` using its globally unique `ID`. */
  documentCode?: Maybe<DocumentCode>;
  /** Reads a single `Flashcard` using its globally unique `ID`. */
  flashcard?: Maybe<Flashcard>;
  /** Reads a single `Matter` using its globally unique `ID`. */
  matter?: Maybe<Matter>;
  /** Reads a single `Person` using its globally unique `ID`. */
  person?: Maybe<Person>;
  /** Reads a single `Question` using its globally unique `ID`. */
  question?: Maybe<Question>;
  /** Reads a single `Questionnaire` using its globally unique `ID`. */
  questionnaire?: Maybe<Questionnaire>;
  /** Reads a single `QuestionnaireResponse` using its globally unique `ID`. */
  questionnaireResponse?: Maybe<QuestionnaireResponse>;
  /** Reads a single `Response` using its globally unique `ID`. */
  response?: Maybe<Response>;
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAllDocumentsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<DocumentsOrderBy>>;
  condition?: Maybe<DocumentCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllDocumentCodesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<DocumentCodesOrderBy>>;
  condition?: Maybe<DocumentCodeCondition>;
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
export type QueryAllQuestionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<QuestionsOrderBy>>;
  condition?: Maybe<QuestionCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllQuestionnairesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<QuestionnairesOrderBy>>;
  condition?: Maybe<QuestionnaireCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllQuestionnaireResponsesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<QuestionnaireResponsesOrderBy>>;
  condition?: Maybe<QuestionnaireResponseCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllResponsesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ResponsesOrderBy>>;
  condition?: Maybe<ResponseCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryDocumentByIdArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryDocumentCodeByIdArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFlashcardByIdArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMatterByIdArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPersonByIdArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryQuestionByIdArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryQuestionnaireByIdArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryQuestionnaireResponseByIdArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryResponseByIdArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryResponsePersonMatchArgs = {
  responseId?: Maybe<Scalars['UUID']>;
  personId?: Maybe<Scalars['UUID']>;
};


/** The root query type which gives access points into the data universe. */
export type QueryDocumentArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryDocumentCodeArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFlashcardArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMatterArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPersonArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryQuestionArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryQuestionnaireArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryQuestionnaireResponseArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryResponseArgs = {
  nodeId: Scalars['ID'];
};

export type Question = Node & {
  __typename?: 'Question';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['UUID'];
  /** The prompt is what the question is asking for. */
  prompt: Scalars['String'];
  /** The question_type designates if a question is a multiple-choice, text, number, file-upload, or date/time question. */
  questionType: Scalars['String'];
  /** An optional column containing options to answer a question. */
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt: Scalars['Datetime'];
  updatedAt: Scalars['Datetime'];
  /** Reads and enables pagination through a set of `Response`. */
  responsesByQuestionId: ResponsesConnection;
};


export type QuestionResponsesByQuestionIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ResponsesOrderBy>>;
  condition?: Maybe<ResponseCondition>;
};

/**
 * A condition to be used against `Question` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type QuestionCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `prompt` field. */
  prompt?: Maybe<Scalars['String']>;
};

/** An input for mutations affecting `Question` */
export type QuestionInput = {
  /** The prompt is what the question is asking for. */
  prompt: Scalars['String'];
  /** The question_type designates if a question is a multiple-choice, text, number, file-upload, or date/time question. */
  questionType: Scalars['String'];
  /** An optional column containing options to answer a question. */
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
};

export type Questionnaire = Node & {
  __typename?: 'Questionnaire';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['UUID'];
  /** The name of the questionnaire */
  name: Scalars['String'];
  /** The question tree or how a person answers the questionnaire */
  questionTree: Scalars['JSON'];
  createdAt: Scalars['Datetime'];
  updatedAt: Scalars['Datetime'];
  /** Reads and enables pagination through a set of `QuestionnaireResponse`. */
  questionnaireResponsesByQuestionnaireId: QuestionnaireResponsesConnection;
};


export type QuestionnaireQuestionnaireResponsesByQuestionnaireIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<QuestionnaireResponsesOrderBy>>;
  condition?: Maybe<QuestionnaireResponseCondition>;
};

/**
 * A condition to be used against `Questionnaire` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type QuestionnaireCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>;
};

/** An input for mutations affecting `Questionnaire` */
export type QuestionnaireInput = {
  /** The name of the questionnaire */
  name: Scalars['String'];
  /** The question tree or how a person answers the questionnaire */
  questionTree: Scalars['JSON'];
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
};

/** Represents an update to a `Questionnaire`. Fields that are set will be updated. */
export type QuestionnairePatch = {
  id?: Maybe<Scalars['UUID']>;
  /** The name of the questionnaire */
  name?: Maybe<Scalars['String']>;
  /** The question tree or how a person answers the questionnaire */
  questionTree?: Maybe<Scalars['JSON']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
};

export type QuestionnaireResponse = Node & {
  __typename?: 'QuestionnaireResponse';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['UUID'];
  personId: Scalars['UUID'];
  questionnaireId: Scalars['UUID'];
  createdAt: Scalars['Datetime'];
  updatedAt: Scalars['Datetime'];
  /** Reads a single `Person` that is related to this `QuestionnaireResponse`. */
  personByPersonId?: Maybe<Person>;
  /** Reads a single `Questionnaire` that is related to this `QuestionnaireResponse`. */
  questionnaireByQuestionnaireId?: Maybe<Questionnaire>;
  /** Reads and enables pagination through a set of `Response`. */
  responsesByQuestionnaireResponseId: ResponsesConnection;
};


export type QuestionnaireResponseResponsesByQuestionnaireResponseIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ResponsesOrderBy>>;
  condition?: Maybe<ResponseCondition>;
};

/**
 * A condition to be used against `QuestionnaireResponse` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type QuestionnaireResponseCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `personId` field. */
  personId?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `questionnaireId` field. */
  questionnaireId?: Maybe<Scalars['UUID']>;
};

/** An input for mutations affecting `QuestionnaireResponse` */
export type QuestionnaireResponseInput = {
  personId: Scalars['UUID'];
  questionnaireId: Scalars['UUID'];
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
};

/** Represents an update to a `QuestionnaireResponse`. Fields that are set will be updated. */
export type QuestionnaireResponsePatch = {
  id?: Maybe<Scalars['UUID']>;
  personId?: Maybe<Scalars['UUID']>;
  questionnaireId?: Maybe<Scalars['UUID']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
};

/** A connection to a list of `QuestionnaireResponse` values. */
export type QuestionnaireResponsesConnection = {
  __typename?: 'QuestionnaireResponsesConnection';
  /** A list of `QuestionnaireResponse` objects. */
  nodes: Array<QuestionnaireResponse>;
  /** A list of edges which contains the `QuestionnaireResponse` and cursor to aid in pagination. */
  edges: Array<QuestionnaireResponsesEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `QuestionnaireResponse` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `QuestionnaireResponse` edge in the connection. */
export type QuestionnaireResponsesEdge = {
  __typename?: 'QuestionnaireResponsesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `QuestionnaireResponse` at the end of the edge. */
  node: QuestionnaireResponse;
};

/** Methods to use when ordering `QuestionnaireResponse`. */
export enum QuestionnaireResponsesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  PersonIdAsc = 'PERSON_ID_ASC',
  PersonIdDesc = 'PERSON_ID_DESC',
  QuestionnaireIdAsc = 'QUESTIONNAIRE_ID_ASC',
  QuestionnaireIdDesc = 'QUESTIONNAIRE_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A connection to a list of `Questionnaire` values. */
export type QuestionnairesConnection = {
  __typename?: 'QuestionnairesConnection';
  /** A list of `Questionnaire` objects. */
  nodes: Array<Questionnaire>;
  /** A list of edges which contains the `Questionnaire` and cursor to aid in pagination. */
  edges: Array<QuestionnairesEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Questionnaire` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Questionnaire` edge in the connection. */
export type QuestionnairesEdge = {
  __typename?: 'QuestionnairesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Questionnaire` at the end of the edge. */
  node: Questionnaire;
};

/** Methods to use when ordering `Questionnaire`. */
export enum QuestionnairesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** Represents an update to a `Question`. Fields that are set will be updated. */
export type QuestionPatch = {
  id?: Maybe<Scalars['UUID']>;
  /** The prompt is what the question is asking for. */
  prompt?: Maybe<Scalars['String']>;
  /** The question_type designates if a question is a multiple-choice, text, number, file-upload, or date/time question. */
  questionType?: Maybe<Scalars['String']>;
  /** An optional column containing options to answer a question. */
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
};

/** A connection to a list of `Question` values. */
export type QuestionsConnection = {
  __typename?: 'QuestionsConnection';
  /** A list of `Question` objects. */
  nodes: Array<Question>;
  /** A list of edges which contains the `Question` and cursor to aid in pagination. */
  edges: Array<QuestionsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Question` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Question` edge in the connection. */
export type QuestionsEdge = {
  __typename?: 'QuestionsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Question` at the end of the edge. */
  node: Question;
};

/** Methods to use when ordering `Question`. */
export enum QuestionsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  PromptAsc = 'PROMPT_ASC',
  PromptDesc = 'PROMPT_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type Response = Node & {
  __typename?: 'Response';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['UUID'];
  questionnaireResponseId: Scalars['UUID'];
  questionId: Scalars['UUID'];
  answer: Scalars['String'];
  createdAt: Scalars['Datetime'];
  updatedAt: Scalars['Datetime'];
  /** Reads a single `QuestionnaireResponse` that is related to this `Response`. */
  questionnaireResponseByQuestionnaireResponseId?: Maybe<QuestionnaireResponse>;
  /** Reads a single `Question` that is related to this `Response`. */
  questionByQuestionId?: Maybe<Question>;
};

/**
 * A condition to be used against `Response` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type ResponseCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `questionnaireResponseId` field. */
  questionnaireResponseId?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `questionId` field. */
  questionId?: Maybe<Scalars['UUID']>;
};

/** An input for mutations affecting `Response` */
export type ResponseInput = {
  questionnaireResponseId: Scalars['UUID'];
  questionId: Scalars['UUID'];
  answer: Scalars['String'];
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
};

/** Represents an update to a `Response`. Fields that are set will be updated. */
export type ResponsePatch = {
  id?: Maybe<Scalars['UUID']>;
  questionnaireResponseId?: Maybe<Scalars['UUID']>;
  questionId?: Maybe<Scalars['UUID']>;
  answer?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
};

/** A connection to a list of `Response` values. */
export type ResponsesConnection = {
  __typename?: 'ResponsesConnection';
  /** A list of `Response` objects. */
  nodes: Array<Response>;
  /** A list of edges which contains the `Response` and cursor to aid in pagination. */
  edges: Array<ResponsesEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Response` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Response` edge in the connection. */
export type ResponsesEdge = {
  __typename?: 'ResponsesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Response` at the end of the edge. */
  node: Response;
};

/** Methods to use when ordering `Response`. */
export enum ResponsesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  QuestionnaireResponseIdAsc = 'QUESTIONNAIRE_RESPONSE_ID_ASC',
  QuestionnaireResponseIdDesc = 'QUESTIONNAIRE_RESPONSE_ID_DESC',
  QuestionIdAsc = 'QUESTION_ID_ASC',
  QuestionIdDesc = 'QUESTION_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** All input for the `updateDocumentById` mutation. */
export type UpdateDocumentByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Document` being updated. */
  documentPatch: DocumentPatch;
  id: Scalars['UUID'];
};

/** All input for the `updateDocumentCodeById` mutation. */
export type UpdateDocumentCodeByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `DocumentCode` being updated. */
  documentCodePatch: DocumentCodePatch;
  id: Scalars['UUID'];
};

/** All input for the `updateDocumentCode` mutation. */
export type UpdateDocumentCodeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `DocumentCode` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `DocumentCode` being updated. */
  documentCodePatch: DocumentCodePatch;
};

/** The output of our update `DocumentCode` mutation. */
export type UpdateDocumentCodePayload = {
  __typename?: 'UpdateDocumentCodePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `DocumentCode` that was updated by this mutation. */
  documentCode?: Maybe<DocumentCode>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `DocumentCode`. May be used by Relay 1. */
  documentCodeEdge?: Maybe<DocumentCodesEdge>;
};


/** The output of our update `DocumentCode` mutation. */
export type UpdateDocumentCodePayloadDocumentCodeEdgeArgs = {
  orderBy?: Maybe<Array<DocumentCodesOrderBy>>;
};

/** All input for the `updateDocument` mutation. */
export type UpdateDocumentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Document` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Document` being updated. */
  documentPatch: DocumentPatch;
};

/** The output of our update `Document` mutation. */
export type UpdateDocumentPayload = {
  __typename?: 'UpdateDocumentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Document` that was updated by this mutation. */
  document?: Maybe<Document>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Matter` that is related to this `Document`. */
  matterByMatterId?: Maybe<Matter>;
  /** An edge for our `Document`. May be used by Relay 1. */
  documentEdge?: Maybe<DocumentsEdge>;
};


/** The output of our update `Document` mutation. */
export type UpdateDocumentPayloadDocumentEdgeArgs = {
  orderBy?: Maybe<Array<DocumentsOrderBy>>;
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

/** All input for the `updateMatterById` mutation. */
export type UpdateMatterByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Matter` being updated. */
  matterPatch: MatterPatch;
  id: Scalars['UUID'];
};

/** All input for the `updateMatter` mutation. */
export type UpdateMatterInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Matter` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Matter` being updated. */
  matterPatch: MatterPatch;
};

/** The output of our update `Matter` mutation. */
export type UpdateMatterPayload = {
  __typename?: 'UpdateMatterPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Matter` that was updated by this mutation. */
  matter?: Maybe<Matter>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Person` that is related to this `Matter`. */
  personByPrimaryContactId?: Maybe<Person>;
  /** An edge for our `Matter`. May be used by Relay 1. */
  matterEdge?: Maybe<MattersEdge>;
};


/** The output of our update `Matter` mutation. */
export type UpdateMatterPayloadMatterEdgeArgs = {
  orderBy?: Maybe<Array<MattersOrderBy>>;
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

/** All input for the `updateQuestionById` mutation. */
export type UpdateQuestionByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Question` being updated. */
  questionPatch: QuestionPatch;
  id: Scalars['UUID'];
};

/** All input for the `updateQuestion` mutation. */
export type UpdateQuestionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Question` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Question` being updated. */
  questionPatch: QuestionPatch;
};

/** All input for the `updateQuestionnaireById` mutation. */
export type UpdateQuestionnaireByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Questionnaire` being updated. */
  questionnairePatch: QuestionnairePatch;
  id: Scalars['UUID'];
};

/** All input for the `updateQuestionnaire` mutation. */
export type UpdateQuestionnaireInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Questionnaire` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Questionnaire` being updated. */
  questionnairePatch: QuestionnairePatch;
};

/** The output of our update `Questionnaire` mutation. */
export type UpdateQuestionnairePayload = {
  __typename?: 'UpdateQuestionnairePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Questionnaire` that was updated by this mutation. */
  questionnaire?: Maybe<Questionnaire>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Questionnaire`. May be used by Relay 1. */
  questionnaireEdge?: Maybe<QuestionnairesEdge>;
};


/** The output of our update `Questionnaire` mutation. */
export type UpdateQuestionnairePayloadQuestionnaireEdgeArgs = {
  orderBy?: Maybe<Array<QuestionnairesOrderBy>>;
};

/** All input for the `updateQuestionnaireResponseById` mutation. */
export type UpdateQuestionnaireResponseByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `QuestionnaireResponse` being updated. */
  questionnaireResponsePatch: QuestionnaireResponsePatch;
  id: Scalars['UUID'];
};

/** All input for the `updateQuestionnaireResponse` mutation. */
export type UpdateQuestionnaireResponseInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `QuestionnaireResponse` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `QuestionnaireResponse` being updated. */
  questionnaireResponsePatch: QuestionnaireResponsePatch;
};

/** The output of our update `QuestionnaireResponse` mutation. */
export type UpdateQuestionnaireResponsePayload = {
  __typename?: 'UpdateQuestionnaireResponsePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `QuestionnaireResponse` that was updated by this mutation. */
  questionnaireResponse?: Maybe<QuestionnaireResponse>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Person` that is related to this `QuestionnaireResponse`. */
  personByPersonId?: Maybe<Person>;
  /** Reads a single `Questionnaire` that is related to this `QuestionnaireResponse`. */
  questionnaireByQuestionnaireId?: Maybe<Questionnaire>;
  /** An edge for our `QuestionnaireResponse`. May be used by Relay 1. */
  questionnaireResponseEdge?: Maybe<QuestionnaireResponsesEdge>;
};


/** The output of our update `QuestionnaireResponse` mutation. */
export type UpdateQuestionnaireResponsePayloadQuestionnaireResponseEdgeArgs = {
  orderBy?: Maybe<Array<QuestionnaireResponsesOrderBy>>;
};

/** The output of our update `Question` mutation. */
export type UpdateQuestionPayload = {
  __typename?: 'UpdateQuestionPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Question` that was updated by this mutation. */
  question?: Maybe<Question>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Question`. May be used by Relay 1. */
  questionEdge?: Maybe<QuestionsEdge>;
};


/** The output of our update `Question` mutation. */
export type UpdateQuestionPayloadQuestionEdgeArgs = {
  orderBy?: Maybe<Array<QuestionsOrderBy>>;
};

/** All input for the `updateResponseById` mutation. */
export type UpdateResponseByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Response` being updated. */
  responsePatch: ResponsePatch;
  id: Scalars['UUID'];
};

/** All input for the `updateResponse` mutation. */
export type UpdateResponseInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Response` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Response` being updated. */
  responsePatch: ResponsePatch;
};

/** The output of our update `Response` mutation. */
export type UpdateResponsePayload = {
  __typename?: 'UpdateResponsePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Response` that was updated by this mutation. */
  response?: Maybe<Response>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `QuestionnaireResponse` that is related to this `Response`. */
  questionnaireResponseByQuestionnaireResponseId?: Maybe<QuestionnaireResponse>;
  /** Reads a single `Question` that is related to this `Response`. */
  questionByQuestionId?: Maybe<Question>;
  /** An edge for our `Response`. May be used by Relay 1. */
  responseEdge?: Maybe<ResponsesEdge>;
};


/** The output of our update `Response` mutation. */
export type UpdateResponsePayloadResponseEdgeArgs = {
  orderBy?: Maybe<Array<ResponsesOrderBy>>;
};


export type AllFlashcardsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllFlashcardsQuery = (
  { __typename?: 'Query' }
  & { allFlashcards?: Maybe<(
    { __typename?: 'FlashcardsConnection' }
    & { nodes: Array<(
      { __typename?: 'Flashcard' }
      & Pick<Flashcard, 'id' | 'prompt' | 'answer'>
    )> }
  )> }
);

export type CreateFlashcardMutationVariables = Exact<{
  answer: Scalars['String'];
  prompt: Scalars['String'];
}>;


export type CreateFlashcardMutation = (
  { __typename?: 'Mutation' }
  & { createFlashcard?: Maybe<(
    { __typename?: 'CreateFlashcardPayload' }
    & { flashcard?: Maybe<(
      { __typename?: 'Flashcard' }
      & Pick<Flashcard, 'id' | 'answer' | 'prompt'>
    )> }
  )> }
);

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = (
  { __typename?: 'Query' }
  & { getCurrentUser?: Maybe<(
    { __typename?: 'Person' }
    & Pick<Person, 'id' | 'name' | 'email' | 'picture' | 'role'>
  )> }
);

export type DeleteFlashcardByIdMutationVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type DeleteFlashcardByIdMutation = (
  { __typename?: 'Mutation' }
  & { deleteFlashcardById?: Maybe<(
    { __typename?: 'DeleteFlashcardPayload' }
    & { flashcard?: Maybe<(
      { __typename?: 'Flashcard' }
      & Pick<Flashcard, 'id'>
    )> }
  )> }
);

export type UpdateFlashcardByIdMutationVariables = Exact<{
  id: Scalars['UUID'];
  answer?: Maybe<Scalars['String']>;
  prompt?: Maybe<Scalars['String']>;
}>;


export type UpdateFlashcardByIdMutation = (
  { __typename?: 'Mutation' }
  & { updateFlashcardById?: Maybe<(
    { __typename?: 'UpdateFlashcardPayload' }
    & { flashcard?: Maybe<(
      { __typename?: 'Flashcard' }
      & Pick<Flashcard, 'id' | 'answer' | 'prompt'>
    )> }
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


export const AllFlashcardsDocument = gql`
    query AllFlashcards {
  allFlashcards(orderBy: PROMPT_ASC) {
    nodes {
      id
      prompt
      answer
    }
  }
}
    `;
export type AllFlashcardsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllFlashcardsQuery, AllFlashcardsQueryVariables>, 'query'>;

    export const AllFlashcardsComponent = (props: AllFlashcardsComponentProps) => (
      <ApolloReactComponents.Query<AllFlashcardsQuery, AllFlashcardsQueryVariables> query={AllFlashcardsDocument} {...props} />
    );
    

/**
 * __useAllFlashcardsQuery__
 *
 * To run a query within a React component, call `useAllFlashcardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllFlashcardsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllFlashcardsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllFlashcardsQuery(baseOptions?: Apollo.QueryHookOptions<AllFlashcardsQuery, AllFlashcardsQueryVariables>) {
        return Apollo.useQuery<AllFlashcardsQuery, AllFlashcardsQueryVariables>(AllFlashcardsDocument, baseOptions);
      }
export function useAllFlashcardsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllFlashcardsQuery, AllFlashcardsQueryVariables>) {
          return Apollo.useLazyQuery<AllFlashcardsQuery, AllFlashcardsQueryVariables>(AllFlashcardsDocument, baseOptions);
        }
export type AllFlashcardsQueryHookResult = ReturnType<typeof useAllFlashcardsQuery>;
export type AllFlashcardsLazyQueryHookResult = ReturnType<typeof useAllFlashcardsLazyQuery>;
export type AllFlashcardsQueryResult = Apollo.QueryResult<AllFlashcardsQuery, AllFlashcardsQueryVariables>;
export const CreateFlashcardDocument = gql`
    mutation CreateFlashcard($answer: String!, $prompt: String!) {
  createFlashcard(input: {flashcard: {answer: $answer, prompt: $prompt}}) {
    flashcard {
      id
      answer
      prompt
    }
  }
}
    `;
export type CreateFlashcardMutationFn = Apollo.MutationFunction<CreateFlashcardMutation, CreateFlashcardMutationVariables>;
export type CreateFlashcardComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateFlashcardMutation, CreateFlashcardMutationVariables>, 'mutation'>;

    export const CreateFlashcardComponent = (props: CreateFlashcardComponentProps) => (
      <ApolloReactComponents.Mutation<CreateFlashcardMutation, CreateFlashcardMutationVariables> mutation={CreateFlashcardDocument} {...props} />
    );
    

/**
 * __useCreateFlashcardMutation__
 *
 * To run a mutation, you first call `useCreateFlashcardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFlashcardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFlashcardMutation, { data, loading, error }] = useCreateFlashcardMutation({
 *   variables: {
 *      answer: // value for 'answer'
 *      prompt: // value for 'prompt'
 *   },
 * });
 */
export function useCreateFlashcardMutation(baseOptions?: Apollo.MutationHookOptions<CreateFlashcardMutation, CreateFlashcardMutationVariables>) {
        return Apollo.useMutation<CreateFlashcardMutation, CreateFlashcardMutationVariables>(CreateFlashcardDocument, baseOptions);
      }
export type CreateFlashcardMutationHookResult = ReturnType<typeof useCreateFlashcardMutation>;
export type CreateFlashcardMutationResult = Apollo.MutationResult<CreateFlashcardMutation>;
export type CreateFlashcardMutationOptions = Apollo.BaseMutationOptions<CreateFlashcardMutation, CreateFlashcardMutationVariables>;
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
export function useCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
        return Apollo.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, baseOptions);
      }
export function useCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
          return Apollo.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, baseOptions);
        }
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserQueryResult = Apollo.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;
export const DeleteFlashcardByIdDocument = gql`
    mutation DeleteFlashcardById($id: UUID!) {
  deleteFlashcardById(input: {id: $id}) {
    flashcard {
      id
    }
  }
}
    `;
export type DeleteFlashcardByIdMutationFn = Apollo.MutationFunction<DeleteFlashcardByIdMutation, DeleteFlashcardByIdMutationVariables>;
export type DeleteFlashcardByIdComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteFlashcardByIdMutation, DeleteFlashcardByIdMutationVariables>, 'mutation'>;

    export const DeleteFlashcardByIdComponent = (props: DeleteFlashcardByIdComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteFlashcardByIdMutation, DeleteFlashcardByIdMutationVariables> mutation={DeleteFlashcardByIdDocument} {...props} />
    );
    

/**
 * __useDeleteFlashcardByIdMutation__
 *
 * To run a mutation, you first call `useDeleteFlashcardByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFlashcardByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFlashcardByIdMutation, { data, loading, error }] = useDeleteFlashcardByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteFlashcardByIdMutation(baseOptions?: Apollo.MutationHookOptions<DeleteFlashcardByIdMutation, DeleteFlashcardByIdMutationVariables>) {
        return Apollo.useMutation<DeleteFlashcardByIdMutation, DeleteFlashcardByIdMutationVariables>(DeleteFlashcardByIdDocument, baseOptions);
      }
export type DeleteFlashcardByIdMutationHookResult = ReturnType<typeof useDeleteFlashcardByIdMutation>;
export type DeleteFlashcardByIdMutationResult = Apollo.MutationResult<DeleteFlashcardByIdMutation>;
export type DeleteFlashcardByIdMutationOptions = Apollo.BaseMutationOptions<DeleteFlashcardByIdMutation, DeleteFlashcardByIdMutationVariables>;
export const UpdateFlashcardByIdDocument = gql`
    mutation UpdateFlashcardById($id: UUID!, $answer: String, $prompt: String) {
  updateFlashcardById(input: {flashcardPatch: {answer: $answer, prompt: $prompt}, id: $id}) {
    flashcard {
      id
      answer
      prompt
    }
  }
}
    `;
export type UpdateFlashcardByIdMutationFn = Apollo.MutationFunction<UpdateFlashcardByIdMutation, UpdateFlashcardByIdMutationVariables>;
export type UpdateFlashcardByIdComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateFlashcardByIdMutation, UpdateFlashcardByIdMutationVariables>, 'mutation'>;

    export const UpdateFlashcardByIdComponent = (props: UpdateFlashcardByIdComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateFlashcardByIdMutation, UpdateFlashcardByIdMutationVariables> mutation={UpdateFlashcardByIdDocument} {...props} />
    );
    

/**
 * __useUpdateFlashcardByIdMutation__
 *
 * To run a mutation, you first call `useUpdateFlashcardByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateFlashcardByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateFlashcardByIdMutation, { data, loading, error }] = useUpdateFlashcardByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *      answer: // value for 'answer'
 *      prompt: // value for 'prompt'
 *   },
 * });
 */
export function useUpdateFlashcardByIdMutation(baseOptions?: Apollo.MutationHookOptions<UpdateFlashcardByIdMutation, UpdateFlashcardByIdMutationVariables>) {
        return Apollo.useMutation<UpdateFlashcardByIdMutation, UpdateFlashcardByIdMutationVariables>(UpdateFlashcardByIdDocument, baseOptions);
      }
export type UpdateFlashcardByIdMutationHookResult = ReturnType<typeof useUpdateFlashcardByIdMutation>;
export type UpdateFlashcardByIdMutationResult = Apollo.MutationResult<UpdateFlashcardByIdMutation>;
export type UpdateFlashcardByIdMutationOptions = Apollo.BaseMutationOptions<UpdateFlashcardByIdMutation, UpdateFlashcardByIdMutationVariables>;
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
export type UpdatePersonByIdMutationFn = Apollo.MutationFunction<UpdatePersonByIdMutation, UpdatePersonByIdMutationVariables>;
export type UpdatePersonByIdComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdatePersonByIdMutation, UpdatePersonByIdMutationVariables>, 'mutation'>;

    export const UpdatePersonByIdComponent = (props: UpdatePersonByIdComponentProps) => (
      <ApolloReactComponents.Mutation<UpdatePersonByIdMutation, UpdatePersonByIdMutationVariables> mutation={UpdatePersonByIdDocument} {...props} />
    );
    

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
export function useUpdatePersonByIdMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePersonByIdMutation, UpdatePersonByIdMutationVariables>) {
        return Apollo.useMutation<UpdatePersonByIdMutation, UpdatePersonByIdMutationVariables>(UpdatePersonByIdDocument, baseOptions);
      }
export type UpdatePersonByIdMutationHookResult = ReturnType<typeof useUpdatePersonByIdMutation>;
export type UpdatePersonByIdMutationResult = Apollo.MutationResult<UpdatePersonByIdMutation>;
export type UpdatePersonByIdMutationOptions = Apollo.BaseMutationOptions<UpdatePersonByIdMutation, UpdatePersonByIdMutationVariables>;