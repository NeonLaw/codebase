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
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { [key: string]: any };
  /** A point in time as described by the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone. */
  Datetime: string;
};

export type Address = Node & {
  __typename?: 'Address';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['UUID'];
  route: Scalars['String'];
  streetNumber: Scalars['String'];
  city: Scalars['String'];
  state: Scalars['String'];
  postalCode: Scalars['String'];
  country: Scalars['String'];
  personId: Scalars['UUID'];
  lobIdentifier: Scalars['String'];
  lobRecord: Scalars['JSON'];
  createdAt: Scalars['Datetime'];
  updatedAt: Scalars['Datetime'];
  name?: Maybe<Scalars['String']>;
  /** Reads a single `Person` that is related to this `Address`. */
  personByPersonId?: Maybe<Person>;
};

/** A condition to be used against `Address` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type AddressCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `personId` field. */
  personId?: Maybe<Scalars['UUID']>;
};

/** A connection to a list of `Address` values. */
export type AddressesConnection = {
  __typename?: 'AddressesConnection';
  /** A list of `Address` objects. */
  nodes: Array<Address>;
  /** A list of edges which contains the `Address` and cursor to aid in pagination. */
  edges: Array<AddressesEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Address` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Address` edge in the connection. */
export type AddressesEdge = {
  __typename?: 'AddressesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Address` at the end of the edge. */
  node: Address;
};

/** Methods to use when ordering `Address`. */
export enum AddressesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  PersonIdAsc = 'PERSON_ID_ASC',
  PersonIdDesc = 'PERSON_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** An input for mutations affecting `Address` */
export type AddressInput = {
  id?: Maybe<Scalars['UUID']>;
  route?: Maybe<Scalars['String']>;
  streetNumber?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  personId: Scalars['UUID'];
  lobIdentifier: Scalars['String'];
  lobRecord: Scalars['JSON'];
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  name?: Maybe<Scalars['String']>;
};

/** Represents an update to a `Address`. Fields that are set will be updated. */
export type AddressPatch = {
  id?: Maybe<Scalars['UUID']>;
  route?: Maybe<Scalars['String']>;
  streetNumber?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  personId?: Maybe<Scalars['UUID']>;
  lobIdentifier?: Maybe<Scalars['String']>;
  lobRecord?: Maybe<Scalars['JSON']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  name?: Maybe<Scalars['String']>;
};

/** All input for the create `Address` mutation. */
export type CreateAddressInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Address` to be created by this mutation. */
  address: AddressInput;
};

/** The output of our create `Address` mutation. */
export type CreateAddressPayload = {
  __typename?: 'CreateAddressPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Address` that was created by this mutation. */
  address?: Maybe<Address>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Person` that is related to this `Address`. */
  personByPersonId?: Maybe<Person>;
  /** An edge for our `Address`. May be used by Relay 1. */
  addressEdge?: Maybe<AddressesEdge>;
};


/** The output of our create `Address` mutation. */
export type CreateAddressPayloadAddressEdgeArgs = {
  orderBy?: Maybe<Array<AddressesOrderBy>>;
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
  /** Reads a single `DocumentTemplate` that is related to this `Document`. */
  documentTemplateByDocumentTemplateId?: Maybe<DocumentTemplate>;
  /** An edge for our `Document`. May be used by Relay 1. */
  documentEdge?: Maybe<DocumentsEdge>;
};


/** The output of our create `Document` mutation. */
export type CreateDocumentPayloadDocumentEdgeArgs = {
  orderBy?: Maybe<Array<DocumentsOrderBy>>;
};

/** All input for the create `DocumentTemplate` mutation. */
export type CreateDocumentTemplateInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `DocumentTemplate` to be created by this mutation. */
  documentTemplate: DocumentTemplateInput;
};

/** The output of our create `DocumentTemplate` mutation. */
export type CreateDocumentTemplatePayload = {
  __typename?: 'CreateDocumentTemplatePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `DocumentTemplate` that was created by this mutation. */
  documentTemplate?: Maybe<DocumentTemplate>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `DocumentTemplate`. May be used by Relay 1. */
  documentTemplateEdge?: Maybe<DocumentTemplatesEdge>;
};


/** The output of our create `DocumentTemplate` mutation. */
export type CreateDocumentTemplatePayloadDocumentTemplateEdgeArgs = {
  orderBy?: Maybe<Array<DocumentTemplatesOrderBy>>;
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

/** All input for the create `Letter` mutation. */
export type CreateLetterInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Letter` to be created by this mutation. */
  letter: LetterInput;
};

/** The output of our create `Letter` mutation. */
export type CreateLetterPayload = {
  __typename?: 'CreateLetterPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Letter` that was created by this mutation. */
  letter?: Maybe<Letter>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Person` that is related to this `Letter`. */
  personByAddressorId?: Maybe<Person>;
  /** Reads a single `Person` that is related to this `Letter`. */
  personByAddresseeId?: Maybe<Person>;
  /** Reads a single `Document` that is related to this `Letter`. */
  documentByDocumentId?: Maybe<Document>;
  /** An edge for our `Letter`. May be used by Relay 1. */
  letterEdge?: Maybe<LettersEdge>;
};


/** The output of our create `Letter` mutation. */
export type CreateLetterPayloadLetterEdgeArgs = {
  orderBy?: Maybe<Array<LettersOrderBy>>;
};

/** All input for the create `MatterDocument` mutation. */
export type CreateMatterDocumentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `MatterDocument` to be created by this mutation. */
  matterDocument: MatterDocumentInput;
};

/** The output of our create `MatterDocument` mutation. */
export type CreateMatterDocumentPayload = {
  __typename?: 'CreateMatterDocumentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `MatterDocument` that was created by this mutation. */
  matterDocument?: Maybe<MatterDocument>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Document` that is related to this `MatterDocument`. */
  documentByDocumentId?: Maybe<Document>;
  /** Reads a single `Person` that is related to this `MatterDocument`. */
  personByAuthorId?: Maybe<Person>;
  /** An edge for our `MatterDocument`. May be used by Relay 1. */
  matterDocumentEdge?: Maybe<MatterDocumentsEdge>;
};


/** The output of our create `MatterDocument` mutation. */
export type CreateMatterDocumentPayloadMatterDocumentEdgeArgs = {
  orderBy?: Maybe<Array<MatterDocumentsOrderBy>>;
};

/** All input for the create `MatterTemplate` mutation. */
export type CreateMatterTemplateInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `MatterTemplate` to be created by this mutation. */
  matterTemplate: MatterTemplateInput;
};

/** The output of our create `MatterTemplate` mutation. */
export type CreateMatterTemplatePayload = {
  __typename?: 'CreateMatterTemplatePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `MatterTemplate` that was created by this mutation. */
  matterTemplate?: Maybe<MatterTemplate>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `MatterTemplate`. May be used by Relay 1. */
  matterTemplateEdge?: Maybe<MatterTemplatesEdge>;
};


/** The output of our create `MatterTemplate` mutation. */
export type CreateMatterTemplatePayloadMatterTemplateEdgeArgs = {
  orderBy?: Maybe<Array<MatterTemplatesOrderBy>>;
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

/** All input for the create `PublicDocument` mutation. */
export type CreatePublicDocumentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `PublicDocument` to be created by this mutation. */
  publicDocument: PublicDocumentInput;
};

/** The output of our create `PublicDocument` mutation. */
export type CreatePublicDocumentPayload = {
  __typename?: 'CreatePublicDocumentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `PublicDocument` that was created by this mutation. */
  publicDocument?: Maybe<PublicDocument>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Document` that is related to this `PublicDocument`. */
  documentByDocumentId?: Maybe<Document>;
  /** An edge for our `PublicDocument`. May be used by Relay 1. */
  publicDocumentEdge?: Maybe<PublicDocumentsEdge>;
};


/** The output of our create `PublicDocument` mutation. */
export type CreatePublicDocumentPayloadPublicDocumentEdgeArgs = {
  orderBy?: Maybe<Array<PublicDocumentsOrderBy>>;
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

export type CreateResponseDocumentFromUploadInput = {
  uploadUrl: Scalars['String'];
  responseId: Scalars['UUID'];
};

export type CreateResponseDocumentFromUploadPayload = {
  __typename?: 'CreateResponseDocumentFromUploadPayload';
  document?: Maybe<Document>;
};

/** All input for the create `ResponseDocument` mutation. */
export type CreateResponseDocumentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ResponseDocument` to be created by this mutation. */
  responseDocument: ResponseDocumentInput;
};

/** The output of our create `ResponseDocument` mutation. */
export type CreateResponseDocumentPayload = {
  __typename?: 'CreateResponseDocumentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ResponseDocument` that was created by this mutation. */
  responseDocument?: Maybe<ResponseDocument>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Document` that is related to this `ResponseDocument`. */
  documentByDocumentId?: Maybe<Document>;
  /** Reads a single `Person` that is related to this `ResponseDocument`. */
  personByAuthorId?: Maybe<Person>;
  /** An edge for our `ResponseDocument`. May be used by Relay 1. */
  responseDocumentEdge?: Maybe<ResponseDocumentsEdge>;
};


/** The output of our create `ResponseDocument` mutation. */
export type CreateResponseDocumentPayloadResponseDocumentEdgeArgs = {
  orderBy?: Maybe<Array<ResponseDocumentsOrderBy>>;
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

/** All input for the create `Sync` mutation. */
export type CreateSyncInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Sync` to be created by this mutation. */
  sync: SyncInput;
};

/** The output of our create `Sync` mutation. */
export type CreateSyncPayload = {
  __typename?: 'CreateSyncPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Sync` that was created by this mutation. */
  sync?: Maybe<Sync>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Sync`. May be used by Relay 1. */
  syncEdge?: Maybe<SyncsEdge>;
};


/** The output of our create `Sync` mutation. */
export type CreateSyncPayloadSyncEdgeArgs = {
  orderBy?: Maybe<Array<SyncsOrderBy>>;
};



/** All input for the `deleteAddressById` mutation. */
export type DeleteAddressByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** All input for the `deleteAddress` mutation. */
export type DeleteAddressInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Address` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Address` mutation. */
export type DeleteAddressPayload = {
  __typename?: 'DeleteAddressPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Address` that was deleted by this mutation. */
  address?: Maybe<Address>;
  deletedAddressId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Person` that is related to this `Address`. */
  personByPersonId?: Maybe<Person>;
  /** An edge for our `Address`. May be used by Relay 1. */
  addressEdge?: Maybe<AddressesEdge>;
};


/** The output of our delete `Address` mutation. */
export type DeleteAddressPayloadAddressEdgeArgs = {
  orderBy?: Maybe<Array<AddressesOrderBy>>;
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
  /** Reads a single `DocumentTemplate` that is related to this `Document`. */
  documentTemplateByDocumentTemplateId?: Maybe<DocumentTemplate>;
  /** An edge for our `Document`. May be used by Relay 1. */
  documentEdge?: Maybe<DocumentsEdge>;
};


/** The output of our delete `Document` mutation. */
export type DeleteDocumentPayloadDocumentEdgeArgs = {
  orderBy?: Maybe<Array<DocumentsOrderBy>>;
};

/** All input for the `deleteDocumentTemplateById` mutation. */
export type DeleteDocumentTemplateByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** All input for the `deleteDocumentTemplate` mutation. */
export type DeleteDocumentTemplateInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `DocumentTemplate` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `DocumentTemplate` mutation. */
export type DeleteDocumentTemplatePayload = {
  __typename?: 'DeleteDocumentTemplatePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `DocumentTemplate` that was deleted by this mutation. */
  documentTemplate?: Maybe<DocumentTemplate>;
  deletedDocumentTemplateId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `DocumentTemplate`. May be used by Relay 1. */
  documentTemplateEdge?: Maybe<DocumentTemplatesEdge>;
};


/** The output of our delete `DocumentTemplate` mutation. */
export type DeleteDocumentTemplatePayloadDocumentTemplateEdgeArgs = {
  orderBy?: Maybe<Array<DocumentTemplatesOrderBy>>;
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

/** All input for the `deleteLetterById` mutation. */
export type DeleteLetterByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** All input for the `deleteLetter` mutation. */
export type DeleteLetterInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Letter` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Letter` mutation. */
export type DeleteLetterPayload = {
  __typename?: 'DeleteLetterPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Letter` that was deleted by this mutation. */
  letter?: Maybe<Letter>;
  deletedLetterId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Person` that is related to this `Letter`. */
  personByAddressorId?: Maybe<Person>;
  /** Reads a single `Person` that is related to this `Letter`. */
  personByAddresseeId?: Maybe<Person>;
  /** Reads a single `Document` that is related to this `Letter`. */
  documentByDocumentId?: Maybe<Document>;
  /** An edge for our `Letter`. May be used by Relay 1. */
  letterEdge?: Maybe<LettersEdge>;
};


/** The output of our delete `Letter` mutation. */
export type DeleteLetterPayloadLetterEdgeArgs = {
  orderBy?: Maybe<Array<LettersOrderBy>>;
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

/** All input for the `deleteMatterDocumentById` mutation. */
export type DeleteMatterDocumentByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** All input for the `deleteMatterDocument` mutation. */
export type DeleteMatterDocumentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `MatterDocument` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `MatterDocument` mutation. */
export type DeleteMatterDocumentPayload = {
  __typename?: 'DeleteMatterDocumentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `MatterDocument` that was deleted by this mutation. */
  matterDocument?: Maybe<MatterDocument>;
  deletedMatterDocumentId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Document` that is related to this `MatterDocument`. */
  documentByDocumentId?: Maybe<Document>;
  /** Reads a single `Person` that is related to this `MatterDocument`. */
  personByAuthorId?: Maybe<Person>;
  /** An edge for our `MatterDocument`. May be used by Relay 1. */
  matterDocumentEdge?: Maybe<MatterDocumentsEdge>;
};


/** The output of our delete `MatterDocument` mutation. */
export type DeleteMatterDocumentPayloadMatterDocumentEdgeArgs = {
  orderBy?: Maybe<Array<MatterDocumentsOrderBy>>;
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

/** All input for the `deleteMatterTemplateById` mutation. */
export type DeleteMatterTemplateByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** All input for the `deleteMatterTemplate` mutation. */
export type DeleteMatterTemplateInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `MatterTemplate` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `MatterTemplate` mutation. */
export type DeleteMatterTemplatePayload = {
  __typename?: 'DeleteMatterTemplatePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `MatterTemplate` that was deleted by this mutation. */
  matterTemplate?: Maybe<MatterTemplate>;
  deletedMatterTemplateId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `MatterTemplate`. May be used by Relay 1. */
  matterTemplateEdge?: Maybe<MatterTemplatesEdge>;
};


/** The output of our delete `MatterTemplate` mutation. */
export type DeleteMatterTemplatePayloadMatterTemplateEdgeArgs = {
  orderBy?: Maybe<Array<MatterTemplatesOrderBy>>;
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

/** All input for the `deletePublicDocumentById` mutation. */
export type DeletePublicDocumentByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** All input for the `deletePublicDocument` mutation. */
export type DeletePublicDocumentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `PublicDocument` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `PublicDocument` mutation. */
export type DeletePublicDocumentPayload = {
  __typename?: 'DeletePublicDocumentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `PublicDocument` that was deleted by this mutation. */
  publicDocument?: Maybe<PublicDocument>;
  deletedPublicDocumentId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Document` that is related to this `PublicDocument`. */
  documentByDocumentId?: Maybe<Document>;
  /** An edge for our `PublicDocument`. May be used by Relay 1. */
  publicDocumentEdge?: Maybe<PublicDocumentsEdge>;
};


/** The output of our delete `PublicDocument` mutation. */
export type DeletePublicDocumentPayloadPublicDocumentEdgeArgs = {
  orderBy?: Maybe<Array<PublicDocumentsOrderBy>>;
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

/** All input for the `deleteResponseDocumentById` mutation. */
export type DeleteResponseDocumentByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** All input for the `deleteResponseDocument` mutation. */
export type DeleteResponseDocumentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `ResponseDocument` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `ResponseDocument` mutation. */
export type DeleteResponseDocumentPayload = {
  __typename?: 'DeleteResponseDocumentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ResponseDocument` that was deleted by this mutation. */
  responseDocument?: Maybe<ResponseDocument>;
  deletedResponseDocumentId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Document` that is related to this `ResponseDocument`. */
  documentByDocumentId?: Maybe<Document>;
  /** Reads a single `Person` that is related to this `ResponseDocument`. */
  personByAuthorId?: Maybe<Person>;
  /** An edge for our `ResponseDocument`. May be used by Relay 1. */
  responseDocumentEdge?: Maybe<ResponseDocumentsEdge>;
};


/** The output of our delete `ResponseDocument` mutation. */
export type DeleteResponseDocumentPayloadResponseDocumentEdgeArgs = {
  orderBy?: Maybe<Array<ResponseDocumentsOrderBy>>;
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

/** All input for the `deleteSyncById` mutation. */
export type DeleteSyncByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** All input for the `deleteSync` mutation. */
export type DeleteSyncInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Sync` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Sync` mutation. */
export type DeleteSyncPayload = {
  __typename?: 'DeleteSyncPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Sync` that was deleted by this mutation. */
  sync?: Maybe<Sync>;
  deletedSyncId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Sync`. May be used by Relay 1. */
  syncEdge?: Maybe<SyncsEdge>;
};


/** The output of our delete `Sync` mutation. */
export type DeleteSyncPayloadSyncEdgeArgs = {
  orderBy?: Maybe<Array<SyncsOrderBy>>;
};

export type Document = Node & {
  __typename?: 'Document';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['UUID'];
  filename: Scalars['String'];
  documentableTableName: Scalars['String'];
  documentableTableId: Scalars['UUID'];
  documentTemplateId: Scalars['UUID'];
  fileExtension: Scalars['String'];
  createdAt: Scalars['Datetime'];
  updatedAt: Scalars['Datetime'];
  /** Reads a single `DocumentTemplate` that is related to this `Document`. */
  documentTemplateByDocumentTemplateId?: Maybe<DocumentTemplate>;
  /** Reads and enables pagination through a set of `Letter`. */
  lettersByDocumentId: LettersConnection;
  /** Reads and enables pagination through a set of `PublicDocument`. */
  publicDocumentsByDocumentId: PublicDocumentsConnection;
  /** Reads and enables pagination through a set of `MatterDocument`. */
  matterDocumentsByDocumentId: MatterDocumentsConnection;
  /** Reads and enables pagination through a set of `ResponseDocument`. */
  responseDocumentsByDocumentId: ResponseDocumentsConnection;
};


export type DocumentLettersByDocumentIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<LettersOrderBy>>;
  condition?: Maybe<LetterCondition>;
};


export type DocumentPublicDocumentsByDocumentIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<PublicDocumentsOrderBy>>;
  condition?: Maybe<PublicDocumentCondition>;
};


export type DocumentMatterDocumentsByDocumentIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<MatterDocumentsOrderBy>>;
  condition?: Maybe<MatterDocumentCondition>;
};


export type DocumentResponseDocumentsByDocumentIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ResponseDocumentsOrderBy>>;
  condition?: Maybe<ResponseDocumentCondition>;
};

/**
 * A condition to be used against `Document` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type DocumentCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `documentableTableName` field. */
  documentableTableName?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `documentTemplateId` field. */
  documentTemplateId?: Maybe<Scalars['UUID']>;
};

/** An input for mutations affecting `Document` */
export type DocumentInput = {
  id?: Maybe<Scalars['UUID']>;
  filename: Scalars['String'];
  documentableTableName: Scalars['String'];
  documentableTableId: Scalars['UUID'];
  documentTemplateId: Scalars['UUID'];
  fileExtension: Scalars['String'];
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
};

/** Represents an update to a `Document`. Fields that are set will be updated. */
export type DocumentPatch = {
  id?: Maybe<Scalars['UUID']>;
  filename?: Maybe<Scalars['String']>;
  documentableTableName?: Maybe<Scalars['String']>;
  documentableTableId?: Maybe<Scalars['UUID']>;
  documentTemplateId?: Maybe<Scalars['UUID']>;
  fileExtension?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
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
  DocumentableTableNameAsc = 'DOCUMENTABLE_TABLE_NAME_ASC',
  DocumentableTableNameDesc = 'DOCUMENTABLE_TABLE_NAME_DESC',
  DocumentTemplateIdAsc = 'DOCUMENT_TEMPLATE_ID_ASC',
  DocumentTemplateIdDesc = 'DOCUMENT_TEMPLATE_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type DocumentTemplate = Node & {
  __typename?: 'DocumentTemplate';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['UUID'];
  name: Scalars['String'];
  javascriptModule: Scalars['String'];
  /** Reads and enables pagination through a set of `Document`. */
  documentsByDocumentTemplateId: DocumentsConnection;
};


export type DocumentTemplateDocumentsByDocumentTemplateIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<DocumentsOrderBy>>;
  condition?: Maybe<DocumentCondition>;
};

/**
 * A condition to be used against `DocumentTemplate` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type DocumentTemplateCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>;
};

/** An input for mutations affecting `DocumentTemplate` */
export type DocumentTemplateInput = {
  id?: Maybe<Scalars['UUID']>;
  name: Scalars['String'];
  javascriptModule: Scalars['String'];
};

/** Represents an update to a `DocumentTemplate`. Fields that are set will be updated. */
export type DocumentTemplatePatch = {
  id?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  javascriptModule?: Maybe<Scalars['String']>;
};

/** A connection to a list of `DocumentTemplate` values. */
export type DocumentTemplatesConnection = {
  __typename?: 'DocumentTemplatesConnection';
  /** A list of `DocumentTemplate` objects. */
  nodes: Array<DocumentTemplate>;
  /** A list of edges which contains the `DocumentTemplate` and cursor to aid in pagination. */
  edges: Array<DocumentTemplatesEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `DocumentTemplate` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `DocumentTemplate` edge in the connection. */
export type DocumentTemplatesEdge = {
  __typename?: 'DocumentTemplatesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `DocumentTemplate` at the end of the edge. */
  node: DocumentTemplate;
};

/** Methods to use when ordering `DocumentTemplate`. */
export enum DocumentTemplatesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** All input for the `findOrCreateLettersByLobIdentifier` mutation. */
export type FindOrCreateLettersByLobIdentifierInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  lobLettersJson?: Maybe<Scalars['JSON']>;
};

/** The output of our `findOrCreateLettersByLobIdentifier` mutation. */
export type FindOrCreateLettersByLobIdentifierPayload = {
  __typename?: 'FindOrCreateLettersByLobIdentifierPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

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

export type GetTransloaditTokenPayload = {
  __typename?: 'GetTransloaditTokenPayload';
  expires?: Maybe<Scalars['String']>;
  signature?: Maybe<Scalars['String']>;
};


export type Letter = Node & {
  __typename?: 'Letter';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['UUID'];
  addressorId?: Maybe<Scalars['UUID']>;
  addresseeId?: Maybe<Scalars['UUID']>;
  lobIdentifier: Scalars['String'];
  documentId?: Maybe<Scalars['UUID']>;
  lobRecord: Scalars['JSON'];
  /** Reads a single `Person` that is related to this `Letter`. */
  personByAddressorId?: Maybe<Person>;
  /** Reads a single `Person` that is related to this `Letter`. */
  personByAddresseeId?: Maybe<Person>;
  /** Reads a single `Document` that is related to this `Letter`. */
  documentByDocumentId?: Maybe<Document>;
};

/** A condition to be used against `Letter` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type LetterCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `addressorId` field. */
  addressorId?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `addresseeId` field. */
  addresseeId?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `lobIdentifier` field. */
  lobIdentifier?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `documentId` field. */
  documentId?: Maybe<Scalars['UUID']>;
};

/** An input for mutations affecting `Letter` */
export type LetterInput = {
  id?: Maybe<Scalars['UUID']>;
  addressorId?: Maybe<Scalars['UUID']>;
  addresseeId?: Maybe<Scalars['UUID']>;
  lobIdentifier: Scalars['String'];
  documentId?: Maybe<Scalars['UUID']>;
  lobRecord: Scalars['JSON'];
};

/** Represents an update to a `Letter`. Fields that are set will be updated. */
export type LetterPatch = {
  id?: Maybe<Scalars['UUID']>;
  addressorId?: Maybe<Scalars['UUID']>;
  addresseeId?: Maybe<Scalars['UUID']>;
  lobIdentifier?: Maybe<Scalars['String']>;
  documentId?: Maybe<Scalars['UUID']>;
  lobRecord?: Maybe<Scalars['JSON']>;
};

/** A connection to a list of `Letter` values. */
export type LettersConnection = {
  __typename?: 'LettersConnection';
  /** A list of `Letter` objects. */
  nodes: Array<Letter>;
  /** A list of edges which contains the `Letter` and cursor to aid in pagination. */
  edges: Array<LettersEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Letter` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Letter` edge in the connection. */
export type LettersEdge = {
  __typename?: 'LettersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Letter` at the end of the edge. */
  node: Letter;
};

/** Methods to use when ordering `Letter`. */
export enum LettersOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  AddressorIdAsc = 'ADDRESSOR_ID_ASC',
  AddressorIdDesc = 'ADDRESSOR_ID_DESC',
  AddresseeIdAsc = 'ADDRESSEE_ID_ASC',
  AddresseeIdDesc = 'ADDRESSEE_ID_DESC',
  LobIdentifierAsc = 'LOB_IDENTIFIER_ASC',
  LobIdentifierDesc = 'LOB_IDENTIFIER_DESC',
  DocumentIdAsc = 'DOCUMENT_ID_ASC',
  DocumentIdDesc = 'DOCUMENT_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type Matter = Node & {
  __typename?: 'Matter';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['UUID'];
  name: Scalars['String'];
  createdAt: Scalars['Datetime'];
  updatedAt: Scalars['Datetime'];
  primaryContactId?: Maybe<Scalars['UUID']>;
  matterTemplateId: Scalars['UUID'];
  /** Reads a single `Person` that is related to this `Matter`. */
  personByPrimaryContactId?: Maybe<Person>;
};

/** A condition to be used against `Matter` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type MatterCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `primaryContactId` field. */
  primaryContactId?: Maybe<Scalars['UUID']>;
};

export type MatterDocument = Node & {
  __typename?: 'MatterDocument';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['UUID'];
  documentId: Scalars['UUID'];
  authorId: Scalars['UUID'];
  matterId: Scalars['UUID'];
  /** Reads a single `Document` that is related to this `MatterDocument`. */
  documentByDocumentId?: Maybe<Document>;
  /** Reads a single `Person` that is related to this `MatterDocument`. */
  personByAuthorId?: Maybe<Person>;
};

/**
 * A condition to be used against `MatterDocument` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type MatterDocumentCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `documentId` field. */
  documentId?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `authorId` field. */
  authorId?: Maybe<Scalars['UUID']>;
};

/** An input for mutations affecting `MatterDocument` */
export type MatterDocumentInput = {
  id?: Maybe<Scalars['UUID']>;
  documentId: Scalars['UUID'];
  authorId: Scalars['UUID'];
  matterId: Scalars['UUID'];
};

/** Represents an update to a `MatterDocument`. Fields that are set will be updated. */
export type MatterDocumentPatch = {
  id?: Maybe<Scalars['UUID']>;
  documentId?: Maybe<Scalars['UUID']>;
  authorId?: Maybe<Scalars['UUID']>;
  matterId?: Maybe<Scalars['UUID']>;
};

/** A connection to a list of `MatterDocument` values. */
export type MatterDocumentsConnection = {
  __typename?: 'MatterDocumentsConnection';
  /** A list of `MatterDocument` objects. */
  nodes: Array<MatterDocument>;
  /** A list of edges which contains the `MatterDocument` and cursor to aid in pagination. */
  edges: Array<MatterDocumentsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `MatterDocument` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `MatterDocument` edge in the connection. */
export type MatterDocumentsEdge = {
  __typename?: 'MatterDocumentsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `MatterDocument` at the end of the edge. */
  node: MatterDocument;
};

/** Methods to use when ordering `MatterDocument`. */
export enum MatterDocumentsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  DocumentIdAsc = 'DOCUMENT_ID_ASC',
  DocumentIdDesc = 'DOCUMENT_ID_DESC',
  AuthorIdAsc = 'AUTHOR_ID_ASC',
  AuthorIdDesc = 'AUTHOR_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** Represents an update to a `Matter`. Fields that are set will be updated. */
export type MatterPatch = {
  id?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  primaryContactId?: Maybe<Scalars['UUID']>;
  matterTemplateId?: Maybe<Scalars['UUID']>;
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
  PrimaryContactIdAsc = 'PRIMARY_CONTACT_ID_ASC',
  PrimaryContactIdDesc = 'PRIMARY_CONTACT_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type MatterTemplate = Node & {
  __typename?: 'MatterTemplate';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['UUID'];
  name: Scalars['String'];
  javascriptModule: Scalars['String'];
};

/**
 * A condition to be used against `MatterTemplate` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type MatterTemplateCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>;
};

/** An input for mutations affecting `MatterTemplate` */
export type MatterTemplateInput = {
  id?: Maybe<Scalars['UUID']>;
  name: Scalars['String'];
  javascriptModule: Scalars['String'];
};

/** Represents an update to a `MatterTemplate`. Fields that are set will be updated. */
export type MatterTemplatePatch = {
  id?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  javascriptModule?: Maybe<Scalars['String']>;
};

/** A connection to a list of `MatterTemplate` values. */
export type MatterTemplatesConnection = {
  __typename?: 'MatterTemplatesConnection';
  /** A list of `MatterTemplate` objects. */
  nodes: Array<MatterTemplate>;
  /** A list of edges which contains the `MatterTemplate` and cursor to aid in pagination. */
  edges: Array<MatterTemplatesEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `MatterTemplate` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `MatterTemplate` edge in the connection. */
export type MatterTemplatesEdge = {
  __typename?: 'MatterTemplatesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `MatterTemplate` at the end of the edge. */
  node: MatterTemplate;
};

/** Methods to use when ordering `MatterTemplate`. */
export enum MatterTemplatesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `Address`. */
  createAddress?: Maybe<CreateAddressPayload>;
  /** Creates a single `Document`. */
  createDocument?: Maybe<CreateDocumentPayload>;
  /** Creates a single `DocumentTemplate`. */
  createDocumentTemplate?: Maybe<CreateDocumentTemplatePayload>;
  /** Creates a single `Flashcard`. */
  createFlashcard?: Maybe<CreateFlashcardPayload>;
  /** Creates a single `Letter`. */
  createLetter?: Maybe<CreateLetterPayload>;
  /** Creates a single `MatterDocument`. */
  createMatterDocument?: Maybe<CreateMatterDocumentPayload>;
  /** Creates a single `MatterTemplate`. */
  createMatterTemplate?: Maybe<CreateMatterTemplatePayload>;
  /** Creates a single `PublicDocument`. */
  createPublicDocument?: Maybe<CreatePublicDocumentPayload>;
  /** Creates a single `Question`. */
  createQuestion?: Maybe<CreateQuestionPayload>;
  /** Creates a single `Questionnaire`. */
  createQuestionnaire?: Maybe<CreateQuestionnairePayload>;
  /** Creates a single `QuestionnaireResponse`. */
  createQuestionnaireResponse?: Maybe<CreateQuestionnaireResponsePayload>;
  /** Creates a single `Response`. */
  createResponse?: Maybe<CreateResponsePayload>;
  /** Creates a single `ResponseDocument`. */
  createResponseDocument?: Maybe<CreateResponseDocumentPayload>;
  /** Creates a single `Sync`. */
  createSync?: Maybe<CreateSyncPayload>;
  /** Updates a single `Address` using its globally unique id and a patch. */
  updateAddress?: Maybe<UpdateAddressPayload>;
  /** Updates a single `Address` using a unique key and a patch. */
  updateAddressById?: Maybe<UpdateAddressPayload>;
  /** Updates a single `Document` using its globally unique id and a patch. */
  updateDocument?: Maybe<UpdateDocumentPayload>;
  /** Updates a single `Document` using a unique key and a patch. */
  updateDocumentById?: Maybe<UpdateDocumentPayload>;
  /** Updates a single `DocumentTemplate` using its globally unique id and a patch. */
  updateDocumentTemplate?: Maybe<UpdateDocumentTemplatePayload>;
  /** Updates a single `DocumentTemplate` using a unique key and a patch. */
  updateDocumentTemplateById?: Maybe<UpdateDocumentTemplatePayload>;
  /** Updates a single `Flashcard` using its globally unique id and a patch. */
  updateFlashcard?: Maybe<UpdateFlashcardPayload>;
  /** Updates a single `Flashcard` using a unique key and a patch. */
  updateFlashcardById?: Maybe<UpdateFlashcardPayload>;
  /** Updates a single `Letter` using its globally unique id and a patch. */
  updateLetter?: Maybe<UpdateLetterPayload>;
  /** Updates a single `Letter` using a unique key and a patch. */
  updateLetterById?: Maybe<UpdateLetterPayload>;
  /** Updates a single `Matter` using its globally unique id and a patch. */
  updateMatter?: Maybe<UpdateMatterPayload>;
  /** Updates a single `Matter` using a unique key and a patch. */
  updateMatterById?: Maybe<UpdateMatterPayload>;
  /** Updates a single `MatterDocument` using its globally unique id and a patch. */
  updateMatterDocument?: Maybe<UpdateMatterDocumentPayload>;
  /** Updates a single `MatterDocument` using a unique key and a patch. */
  updateMatterDocumentById?: Maybe<UpdateMatterDocumentPayload>;
  /** Updates a single `MatterTemplate` using its globally unique id and a patch. */
  updateMatterTemplate?: Maybe<UpdateMatterTemplatePayload>;
  /** Updates a single `MatterTemplate` using a unique key and a patch. */
  updateMatterTemplateById?: Maybe<UpdateMatterTemplatePayload>;
  /** Updates a single `Person` using its globally unique id and a patch. */
  updatePerson?: Maybe<UpdatePersonPayload>;
  /** Updates a single `Person` using a unique key and a patch. */
  updatePersonById?: Maybe<UpdatePersonPayload>;
  /** Updates a single `PublicDocument` using its globally unique id and a patch. */
  updatePublicDocument?: Maybe<UpdatePublicDocumentPayload>;
  /** Updates a single `PublicDocument` using a unique key and a patch. */
  updatePublicDocumentById?: Maybe<UpdatePublicDocumentPayload>;
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
  /** Updates a single `ResponseDocument` using its globally unique id and a patch. */
  updateResponseDocument?: Maybe<UpdateResponseDocumentPayload>;
  /** Updates a single `ResponseDocument` using a unique key and a patch. */
  updateResponseDocumentById?: Maybe<UpdateResponseDocumentPayload>;
  /** Updates a single `Sync` using its globally unique id and a patch. */
  updateSync?: Maybe<UpdateSyncPayload>;
  /** Updates a single `Sync` using a unique key and a patch. */
  updateSyncById?: Maybe<UpdateSyncPayload>;
  /** Deletes a single `Address` using its globally unique id. */
  deleteAddress?: Maybe<DeleteAddressPayload>;
  /** Deletes a single `Address` using a unique key. */
  deleteAddressById?: Maybe<DeleteAddressPayload>;
  /** Deletes a single `Document` using its globally unique id. */
  deleteDocument?: Maybe<DeleteDocumentPayload>;
  /** Deletes a single `Document` using a unique key. */
  deleteDocumentById?: Maybe<DeleteDocumentPayload>;
  /** Deletes a single `DocumentTemplate` using its globally unique id. */
  deleteDocumentTemplate?: Maybe<DeleteDocumentTemplatePayload>;
  /** Deletes a single `DocumentTemplate` using a unique key. */
  deleteDocumentTemplateById?: Maybe<DeleteDocumentTemplatePayload>;
  /** Deletes a single `Flashcard` using its globally unique id. */
  deleteFlashcard?: Maybe<DeleteFlashcardPayload>;
  /** Deletes a single `Flashcard` using a unique key. */
  deleteFlashcardById?: Maybe<DeleteFlashcardPayload>;
  /** Deletes a single `Letter` using its globally unique id. */
  deleteLetter?: Maybe<DeleteLetterPayload>;
  /** Deletes a single `Letter` using a unique key. */
  deleteLetterById?: Maybe<DeleteLetterPayload>;
  /** Deletes a single `Matter` using its globally unique id. */
  deleteMatter?: Maybe<DeleteMatterPayload>;
  /** Deletes a single `Matter` using a unique key. */
  deleteMatterById?: Maybe<DeleteMatterPayload>;
  /** Deletes a single `MatterDocument` using its globally unique id. */
  deleteMatterDocument?: Maybe<DeleteMatterDocumentPayload>;
  /** Deletes a single `MatterDocument` using a unique key. */
  deleteMatterDocumentById?: Maybe<DeleteMatterDocumentPayload>;
  /** Deletes a single `MatterTemplate` using its globally unique id. */
  deleteMatterTemplate?: Maybe<DeleteMatterTemplatePayload>;
  /** Deletes a single `MatterTemplate` using a unique key. */
  deleteMatterTemplateById?: Maybe<DeleteMatterTemplatePayload>;
  /** Deletes a single `Person` using its globally unique id. */
  deletePerson?: Maybe<DeletePersonPayload>;
  /** Deletes a single `Person` using a unique key. */
  deletePersonById?: Maybe<DeletePersonPayload>;
  /** Deletes a single `PublicDocument` using its globally unique id. */
  deletePublicDocument?: Maybe<DeletePublicDocumentPayload>;
  /** Deletes a single `PublicDocument` using a unique key. */
  deletePublicDocumentById?: Maybe<DeletePublicDocumentPayload>;
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
  /** Deletes a single `ResponseDocument` using its globally unique id. */
  deleteResponseDocument?: Maybe<DeleteResponseDocumentPayload>;
  /** Deletes a single `ResponseDocument` using a unique key. */
  deleteResponseDocumentById?: Maybe<DeleteResponseDocumentPayload>;
  /** Deletes a single `Sync` using its globally unique id. */
  deleteSync?: Maybe<DeleteSyncPayload>;
  /** Deletes a single `Sync` using a unique key. */
  deleteSyncById?: Maybe<DeleteSyncPayload>;
  createPrimaryKeyIdIfNotExists?: Maybe<CreatePrimaryKeyIdIfNotExistsPayload>;
  createRoleIfNotExists?: Maybe<CreateRoleIfNotExistsPayload>;
  findOrCreateLettersByLobIdentifier?: Maybe<FindOrCreateLettersByLobIdentifierPayload>;
  getTransloaditToken?: Maybe<GetTransloaditTokenPayload>;
  createResponseDocumentFromUpload?: Maybe<CreateResponseDocumentFromUploadPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateAddressArgs = {
  input: CreateAddressInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateDocumentArgs = {
  input: CreateDocumentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateDocumentTemplateArgs = {
  input: CreateDocumentTemplateInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateFlashcardArgs = {
  input: CreateFlashcardInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateLetterArgs = {
  input: CreateLetterInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateMatterDocumentArgs = {
  input: CreateMatterDocumentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateMatterTemplateArgs = {
  input: CreateMatterTemplateInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreatePublicDocumentArgs = {
  input: CreatePublicDocumentInput;
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
export type MutationCreateResponseDocumentArgs = {
  input: CreateResponseDocumentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateSyncArgs = {
  input: CreateSyncInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAddressArgs = {
  input: UpdateAddressInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAddressByIdArgs = {
  input: UpdateAddressByIdInput;
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
export type MutationUpdateDocumentTemplateArgs = {
  input: UpdateDocumentTemplateInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateDocumentTemplateByIdArgs = {
  input: UpdateDocumentTemplateByIdInput;
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
export type MutationUpdateLetterArgs = {
  input: UpdateLetterInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateLetterByIdArgs = {
  input: UpdateLetterByIdInput;
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
export type MutationUpdateMatterDocumentArgs = {
  input: UpdateMatterDocumentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMatterDocumentByIdArgs = {
  input: UpdateMatterDocumentByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMatterTemplateArgs = {
  input: UpdateMatterTemplateInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMatterTemplateByIdArgs = {
  input: UpdateMatterTemplateByIdInput;
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
export type MutationUpdatePublicDocumentArgs = {
  input: UpdatePublicDocumentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePublicDocumentByIdArgs = {
  input: UpdatePublicDocumentByIdInput;
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
export type MutationUpdateResponseDocumentArgs = {
  input: UpdateResponseDocumentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateResponseDocumentByIdArgs = {
  input: UpdateResponseDocumentByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSyncArgs = {
  input: UpdateSyncInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSyncByIdArgs = {
  input: UpdateSyncByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAddressArgs = {
  input: DeleteAddressInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAddressByIdArgs = {
  input: DeleteAddressByIdInput;
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
export type MutationDeleteDocumentTemplateArgs = {
  input: DeleteDocumentTemplateInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteDocumentTemplateByIdArgs = {
  input: DeleteDocumentTemplateByIdInput;
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
export type MutationDeleteLetterArgs = {
  input: DeleteLetterInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteLetterByIdArgs = {
  input: DeleteLetterByIdInput;
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
export type MutationDeleteMatterDocumentArgs = {
  input: DeleteMatterDocumentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMatterDocumentByIdArgs = {
  input: DeleteMatterDocumentByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMatterTemplateArgs = {
  input: DeleteMatterTemplateInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMatterTemplateByIdArgs = {
  input: DeleteMatterTemplateByIdInput;
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
export type MutationDeletePublicDocumentArgs = {
  input: DeletePublicDocumentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePublicDocumentByIdArgs = {
  input: DeletePublicDocumentByIdInput;
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
export type MutationDeleteResponseDocumentArgs = {
  input: DeleteResponseDocumentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteResponseDocumentByIdArgs = {
  input: DeleteResponseDocumentByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSyncArgs = {
  input: DeleteSyncInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSyncByIdArgs = {
  input: DeleteSyncByIdInput;
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
export type MutationFindOrCreateLettersByLobIdentifierArgs = {
  input: FindOrCreateLettersByLobIdentifierInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationGetTransloaditTokenArgs = {
  template: Scalars['String'];
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateResponseDocumentFromUploadArgs = {
  input: CreateResponseDocumentFromUploadInput;
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
  flags: Scalars['String'];
  /** Reads and enables pagination through a set of `QuestionnaireResponse`. */
  questionnaireResponsesByPersonId: QuestionnaireResponsesConnection;
  /** Reads and enables pagination through a set of `Matter`. */
  mattersByPrimaryContactId: MattersConnection;
  /** Reads and enables pagination through a set of `Letter`. */
  lettersByAddressorId: LettersConnection;
  /** Reads and enables pagination through a set of `Letter`. */
  lettersByAddresseeId: LettersConnection;
  /** Reads and enables pagination through a set of `Address`. */
  addressesByPersonId: AddressesConnection;
  /** Reads and enables pagination through a set of `MatterDocument`. */
  matterDocumentsByAuthorId: MatterDocumentsConnection;
  /** Reads and enables pagination through a set of `ResponseDocument`. */
  responseDocumentsByAuthorId: ResponseDocumentsConnection;
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


export type PersonLettersByAddressorIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<LettersOrderBy>>;
  condition?: Maybe<LetterCondition>;
};


export type PersonLettersByAddresseeIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<LettersOrderBy>>;
  condition?: Maybe<LetterCondition>;
};


export type PersonAddressesByPersonIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<AddressesOrderBy>>;
  condition?: Maybe<AddressCondition>;
};


export type PersonMatterDocumentsByAuthorIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<MatterDocumentsOrderBy>>;
  condition?: Maybe<MatterDocumentCondition>;
};


export type PersonResponseDocumentsByAuthorIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ResponseDocumentsOrderBy>>;
  condition?: Maybe<ResponseDocumentCondition>;
};

/** Represents an update to a `Person`. Fields that are set will be updated. */
export type PersonPatch = {
  /** The name of a person */
  name?: Maybe<Scalars['String']>;
  sub?: Maybe<Scalars['String']>;
  flags?: Maybe<Scalars['String']>;
};

export type PublicDocument = Node & {
  __typename?: 'PublicDocument';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['UUID'];
  documentId: Scalars['UUID'];
  /** Reads a single `Document` that is related to this `PublicDocument`. */
  documentByDocumentId?: Maybe<Document>;
};

/**
 * A condition to be used against `PublicDocument` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type PublicDocumentCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `documentId` field. */
  documentId?: Maybe<Scalars['UUID']>;
};

/** An input for mutations affecting `PublicDocument` */
export type PublicDocumentInput = {
  id?: Maybe<Scalars['UUID']>;
  documentId: Scalars['UUID'];
};

/** Represents an update to a `PublicDocument`. Fields that are set will be updated. */
export type PublicDocumentPatch = {
  id?: Maybe<Scalars['UUID']>;
  documentId?: Maybe<Scalars['UUID']>;
};

/** A connection to a list of `PublicDocument` values. */
export type PublicDocumentsConnection = {
  __typename?: 'PublicDocumentsConnection';
  /** A list of `PublicDocument` objects. */
  nodes: Array<PublicDocument>;
  /** A list of edges which contains the `PublicDocument` and cursor to aid in pagination. */
  edges: Array<PublicDocumentsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `PublicDocument` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `PublicDocument` edge in the connection. */
export type PublicDocumentsEdge = {
  __typename?: 'PublicDocumentsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `PublicDocument` at the end of the edge. */
  node: PublicDocument;
};

/** Methods to use when ordering `PublicDocument`. */
export enum PublicDocumentsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  DocumentIdAsc = 'DOCUMENT_ID_ASC',
  DocumentIdDesc = 'DOCUMENT_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

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
  /** Reads and enables pagination through a set of `Address`. */
  allAddresses?: Maybe<AddressesConnection>;
  /** Reads and enables pagination through a set of `Document`. */
  allDocuments?: Maybe<DocumentsConnection>;
  /** Reads and enables pagination through a set of `DocumentTemplate`. */
  allDocumentTemplates?: Maybe<DocumentTemplatesConnection>;
  /** Reads and enables pagination through a set of `Flashcard`. */
  allFlashcards?: Maybe<FlashcardsConnection>;
  /** Reads and enables pagination through a set of `Letter`. */
  allLetters?: Maybe<LettersConnection>;
  /** Reads and enables pagination through a set of `MatterDocument`. */
  allMatterDocuments?: Maybe<MatterDocumentsConnection>;
  /** Reads and enables pagination through a set of `MatterTemplate`. */
  allMatterTemplates?: Maybe<MatterTemplatesConnection>;
  /** Reads and enables pagination through a set of `PublicDocument`. */
  allPublicDocuments?: Maybe<PublicDocumentsConnection>;
  /** Reads and enables pagination through a set of `Question`. */
  allQuestions?: Maybe<QuestionsConnection>;
  /** Reads and enables pagination through a set of `Questionnaire`. */
  allQuestionnaires?: Maybe<QuestionnairesConnection>;
  /** Reads and enables pagination through a set of `QuestionnaireResponse`. */
  allQuestionnaireResponses?: Maybe<QuestionnaireResponsesConnection>;
  /** Reads and enables pagination through a set of `Response`. */
  allResponses?: Maybe<ResponsesConnection>;
  /** Reads and enables pagination through a set of `ResponseDocument`. */
  allResponseDocuments?: Maybe<ResponseDocumentsConnection>;
  /** Reads and enables pagination through a set of `Sync`. */
  allSyncs?: Maybe<SyncsConnection>;
  addressById?: Maybe<Address>;
  documentById?: Maybe<Document>;
  documentTemplateById?: Maybe<DocumentTemplate>;
  flashcardById?: Maybe<Flashcard>;
  letterById?: Maybe<Letter>;
  matterById?: Maybe<Matter>;
  matterDocumentById?: Maybe<MatterDocument>;
  matterTemplateById?: Maybe<MatterTemplate>;
  personById?: Maybe<Person>;
  publicDocumentById?: Maybe<PublicDocument>;
  questionById?: Maybe<Question>;
  questionnaireById?: Maybe<Questionnaire>;
  questionnaireResponseById?: Maybe<QuestionnaireResponse>;
  responseById?: Maybe<Response>;
  responseDocumentById?: Maybe<ResponseDocument>;
  syncById?: Maybe<Sync>;
  getCurrentUser?: Maybe<Person>;
  responsePersonMatch?: Maybe<Scalars['Boolean']>;
  /** Reads a single `Address` using its globally unique `ID`. */
  address?: Maybe<Address>;
  /** Reads a single `Document` using its globally unique `ID`. */
  document?: Maybe<Document>;
  /** Reads a single `DocumentTemplate` using its globally unique `ID`. */
  documentTemplate?: Maybe<DocumentTemplate>;
  /** Reads a single `Flashcard` using its globally unique `ID`. */
  flashcard?: Maybe<Flashcard>;
  /** Reads a single `Letter` using its globally unique `ID`. */
  letter?: Maybe<Letter>;
  /** Reads a single `Matter` using its globally unique `ID`. */
  matter?: Maybe<Matter>;
  /** Reads a single `MatterDocument` using its globally unique `ID`. */
  matterDocument?: Maybe<MatterDocument>;
  /** Reads a single `MatterTemplate` using its globally unique `ID`. */
  matterTemplate?: Maybe<MatterTemplate>;
  /** Reads a single `Person` using its globally unique `ID`. */
  person?: Maybe<Person>;
  /** Reads a single `PublicDocument` using its globally unique `ID`. */
  publicDocument?: Maybe<PublicDocument>;
  /** Reads a single `Question` using its globally unique `ID`. */
  question?: Maybe<Question>;
  /** Reads a single `Questionnaire` using its globally unique `ID`. */
  questionnaire?: Maybe<Questionnaire>;
  /** Reads a single `QuestionnaireResponse` using its globally unique `ID`. */
  questionnaireResponse?: Maybe<QuestionnaireResponse>;
  /** Reads a single `Response` using its globally unique `ID`. */
  response?: Maybe<Response>;
  /** Reads a single `ResponseDocument` using its globally unique `ID`. */
  responseDocument?: Maybe<ResponseDocument>;
  /** Reads a single `Sync` using its globally unique `ID`. */
  sync?: Maybe<Sync>;
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAllAddressesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<AddressesOrderBy>>;
  condition?: Maybe<AddressCondition>;
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
export type QueryAllDocumentTemplatesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<DocumentTemplatesOrderBy>>;
  condition?: Maybe<DocumentTemplateCondition>;
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
export type QueryAllLettersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<LettersOrderBy>>;
  condition?: Maybe<LetterCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllMatterDocumentsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<MatterDocumentsOrderBy>>;
  condition?: Maybe<MatterDocumentCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllMatterTemplatesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<MatterTemplatesOrderBy>>;
  condition?: Maybe<MatterTemplateCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllPublicDocumentsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<PublicDocumentsOrderBy>>;
  condition?: Maybe<PublicDocumentCondition>;
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
export type QueryAllResponseDocumentsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ResponseDocumentsOrderBy>>;
  condition?: Maybe<ResponseDocumentCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllSyncsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<SyncsOrderBy>>;
  condition?: Maybe<SyncCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAddressByIdArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryDocumentByIdArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryDocumentTemplateByIdArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFlashcardByIdArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryLetterByIdArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMatterByIdArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMatterDocumentByIdArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMatterTemplateByIdArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPersonByIdArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPublicDocumentByIdArgs = {
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
export type QueryResponseDocumentByIdArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySyncByIdArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryResponsePersonMatchArgs = {
  responseId?: Maybe<Scalars['UUID']>;
  personId?: Maybe<Scalars['UUID']>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAddressArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryDocumentArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryDocumentTemplateArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFlashcardArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryLetterArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMatterArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMatterDocumentArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMatterTemplateArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPersonArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPublicDocumentArgs = {
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


/** The root query type which gives access points into the data universe. */
export type QueryResponseDocumentArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySyncArgs = {
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

export type ResponseDocument = Node & {
  __typename?: 'ResponseDocument';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['UUID'];
  documentId: Scalars['UUID'];
  authorId: Scalars['UUID'];
  responseId: Scalars['UUID'];
  /** Reads a single `Document` that is related to this `ResponseDocument`. */
  documentByDocumentId?: Maybe<Document>;
  /** Reads a single `Person` that is related to this `ResponseDocument`. */
  personByAuthorId?: Maybe<Person>;
};

/**
 * A condition to be used against `ResponseDocument` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type ResponseDocumentCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `documentId` field. */
  documentId?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `authorId` field. */
  authorId?: Maybe<Scalars['UUID']>;
};

/** An input for mutations affecting `ResponseDocument` */
export type ResponseDocumentInput = {
  id?: Maybe<Scalars['UUID']>;
  documentId: Scalars['UUID'];
  authorId: Scalars['UUID'];
  responseId: Scalars['UUID'];
};

/** Represents an update to a `ResponseDocument`. Fields that are set will be updated. */
export type ResponseDocumentPatch = {
  id?: Maybe<Scalars['UUID']>;
  documentId?: Maybe<Scalars['UUID']>;
  authorId?: Maybe<Scalars['UUID']>;
  responseId?: Maybe<Scalars['UUID']>;
};

/** A connection to a list of `ResponseDocument` values. */
export type ResponseDocumentsConnection = {
  __typename?: 'ResponseDocumentsConnection';
  /** A list of `ResponseDocument` objects. */
  nodes: Array<ResponseDocument>;
  /** A list of edges which contains the `ResponseDocument` and cursor to aid in pagination. */
  edges: Array<ResponseDocumentsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `ResponseDocument` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `ResponseDocument` edge in the connection. */
export type ResponseDocumentsEdge = {
  __typename?: 'ResponseDocumentsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `ResponseDocument` at the end of the edge. */
  node: ResponseDocument;
};

/** Methods to use when ordering `ResponseDocument`. */
export enum ResponseDocumentsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  DocumentIdAsc = 'DOCUMENT_ID_ASC',
  DocumentIdDesc = 'DOCUMENT_ID_DESC',
  AuthorIdAsc = 'AUTHOR_ID_ASC',
  AuthorIdDesc = 'AUTHOR_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

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

export type Sync = Node & {
  __typename?: 'Sync';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['UUID'];
  createdAt: Scalars['Datetime'];
  resourceName: Scalars['String'];
};

/** A condition to be used against `Sync` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type SyncCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `resourceName` field. */
  resourceName?: Maybe<Scalars['String']>;
};

/** An input for mutations affecting `Sync` */
export type SyncInput = {
  id?: Maybe<Scalars['UUID']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  resourceName: Scalars['String'];
};

/** Represents an update to a `Sync`. Fields that are set will be updated. */
export type SyncPatch = {
  id?: Maybe<Scalars['UUID']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  resourceName?: Maybe<Scalars['String']>;
};

/** A connection to a list of `Sync` values. */
export type SyncsConnection = {
  __typename?: 'SyncsConnection';
  /** A list of `Sync` objects. */
  nodes: Array<Sync>;
  /** A list of edges which contains the `Sync` and cursor to aid in pagination. */
  edges: Array<SyncsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Sync` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Sync` edge in the connection. */
export type SyncsEdge = {
  __typename?: 'SyncsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Sync` at the end of the edge. */
  node: Sync;
};

/** Methods to use when ordering `Sync`. */
export enum SyncsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  ResourceNameAsc = 'RESOURCE_NAME_ASC',
  ResourceNameDesc = 'RESOURCE_NAME_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** All input for the `updateAddressById` mutation. */
export type UpdateAddressByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Address` being updated. */
  addressPatch: AddressPatch;
  id: Scalars['UUID'];
};

/** All input for the `updateAddress` mutation. */
export type UpdateAddressInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Address` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Address` being updated. */
  addressPatch: AddressPatch;
};

/** The output of our update `Address` mutation. */
export type UpdateAddressPayload = {
  __typename?: 'UpdateAddressPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Address` that was updated by this mutation. */
  address?: Maybe<Address>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Person` that is related to this `Address`. */
  personByPersonId?: Maybe<Person>;
  /** An edge for our `Address`. May be used by Relay 1. */
  addressEdge?: Maybe<AddressesEdge>;
};


/** The output of our update `Address` mutation. */
export type UpdateAddressPayloadAddressEdgeArgs = {
  orderBy?: Maybe<Array<AddressesOrderBy>>;
};

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
  /** Reads a single `DocumentTemplate` that is related to this `Document`. */
  documentTemplateByDocumentTemplateId?: Maybe<DocumentTemplate>;
  /** An edge for our `Document`. May be used by Relay 1. */
  documentEdge?: Maybe<DocumentsEdge>;
};


/** The output of our update `Document` mutation. */
export type UpdateDocumentPayloadDocumentEdgeArgs = {
  orderBy?: Maybe<Array<DocumentsOrderBy>>;
};

/** All input for the `updateDocumentTemplateById` mutation. */
export type UpdateDocumentTemplateByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `DocumentTemplate` being updated. */
  documentTemplatePatch: DocumentTemplatePatch;
  id: Scalars['UUID'];
};

/** All input for the `updateDocumentTemplate` mutation. */
export type UpdateDocumentTemplateInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `DocumentTemplate` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `DocumentTemplate` being updated. */
  documentTemplatePatch: DocumentTemplatePatch;
};

/** The output of our update `DocumentTemplate` mutation. */
export type UpdateDocumentTemplatePayload = {
  __typename?: 'UpdateDocumentTemplatePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `DocumentTemplate` that was updated by this mutation. */
  documentTemplate?: Maybe<DocumentTemplate>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `DocumentTemplate`. May be used by Relay 1. */
  documentTemplateEdge?: Maybe<DocumentTemplatesEdge>;
};


/** The output of our update `DocumentTemplate` mutation. */
export type UpdateDocumentTemplatePayloadDocumentTemplateEdgeArgs = {
  orderBy?: Maybe<Array<DocumentTemplatesOrderBy>>;
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

/** All input for the `updateLetterById` mutation. */
export type UpdateLetterByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Letter` being updated. */
  letterPatch: LetterPatch;
  id: Scalars['UUID'];
};

/** All input for the `updateLetter` mutation. */
export type UpdateLetterInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Letter` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Letter` being updated. */
  letterPatch: LetterPatch;
};

/** The output of our update `Letter` mutation. */
export type UpdateLetterPayload = {
  __typename?: 'UpdateLetterPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Letter` that was updated by this mutation. */
  letter?: Maybe<Letter>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Person` that is related to this `Letter`. */
  personByAddressorId?: Maybe<Person>;
  /** Reads a single `Person` that is related to this `Letter`. */
  personByAddresseeId?: Maybe<Person>;
  /** Reads a single `Document` that is related to this `Letter`. */
  documentByDocumentId?: Maybe<Document>;
  /** An edge for our `Letter`. May be used by Relay 1. */
  letterEdge?: Maybe<LettersEdge>;
};


/** The output of our update `Letter` mutation. */
export type UpdateLetterPayloadLetterEdgeArgs = {
  orderBy?: Maybe<Array<LettersOrderBy>>;
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

/** All input for the `updateMatterDocumentById` mutation. */
export type UpdateMatterDocumentByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `MatterDocument` being updated. */
  matterDocumentPatch: MatterDocumentPatch;
  id: Scalars['UUID'];
};

/** All input for the `updateMatterDocument` mutation. */
export type UpdateMatterDocumentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `MatterDocument` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `MatterDocument` being updated. */
  matterDocumentPatch: MatterDocumentPatch;
};

/** The output of our update `MatterDocument` mutation. */
export type UpdateMatterDocumentPayload = {
  __typename?: 'UpdateMatterDocumentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `MatterDocument` that was updated by this mutation. */
  matterDocument?: Maybe<MatterDocument>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Document` that is related to this `MatterDocument`. */
  documentByDocumentId?: Maybe<Document>;
  /** Reads a single `Person` that is related to this `MatterDocument`. */
  personByAuthorId?: Maybe<Person>;
  /** An edge for our `MatterDocument`. May be used by Relay 1. */
  matterDocumentEdge?: Maybe<MatterDocumentsEdge>;
};


/** The output of our update `MatterDocument` mutation. */
export type UpdateMatterDocumentPayloadMatterDocumentEdgeArgs = {
  orderBy?: Maybe<Array<MatterDocumentsOrderBy>>;
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

/** All input for the `updateMatterTemplateById` mutation. */
export type UpdateMatterTemplateByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `MatterTemplate` being updated. */
  matterTemplatePatch: MatterTemplatePatch;
  id: Scalars['UUID'];
};

/** All input for the `updateMatterTemplate` mutation. */
export type UpdateMatterTemplateInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `MatterTemplate` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `MatterTemplate` being updated. */
  matterTemplatePatch: MatterTemplatePatch;
};

/** The output of our update `MatterTemplate` mutation. */
export type UpdateMatterTemplatePayload = {
  __typename?: 'UpdateMatterTemplatePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `MatterTemplate` that was updated by this mutation. */
  matterTemplate?: Maybe<MatterTemplate>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `MatterTemplate`. May be used by Relay 1. */
  matterTemplateEdge?: Maybe<MatterTemplatesEdge>;
};


/** The output of our update `MatterTemplate` mutation. */
export type UpdateMatterTemplatePayloadMatterTemplateEdgeArgs = {
  orderBy?: Maybe<Array<MatterTemplatesOrderBy>>;
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

/** All input for the `updatePublicDocumentById` mutation. */
export type UpdatePublicDocumentByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `PublicDocument` being updated. */
  publicDocumentPatch: PublicDocumentPatch;
  id: Scalars['UUID'];
};

/** All input for the `updatePublicDocument` mutation. */
export type UpdatePublicDocumentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `PublicDocument` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `PublicDocument` being updated. */
  publicDocumentPatch: PublicDocumentPatch;
};

/** The output of our update `PublicDocument` mutation. */
export type UpdatePublicDocumentPayload = {
  __typename?: 'UpdatePublicDocumentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `PublicDocument` that was updated by this mutation. */
  publicDocument?: Maybe<PublicDocument>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Document` that is related to this `PublicDocument`. */
  documentByDocumentId?: Maybe<Document>;
  /** An edge for our `PublicDocument`. May be used by Relay 1. */
  publicDocumentEdge?: Maybe<PublicDocumentsEdge>;
};


/** The output of our update `PublicDocument` mutation. */
export type UpdatePublicDocumentPayloadPublicDocumentEdgeArgs = {
  orderBy?: Maybe<Array<PublicDocumentsOrderBy>>;
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

/** All input for the `updateResponseDocumentById` mutation. */
export type UpdateResponseDocumentByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `ResponseDocument` being updated. */
  responseDocumentPatch: ResponseDocumentPatch;
  id: Scalars['UUID'];
};

/** All input for the `updateResponseDocument` mutation. */
export type UpdateResponseDocumentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `ResponseDocument` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `ResponseDocument` being updated. */
  responseDocumentPatch: ResponseDocumentPatch;
};

/** The output of our update `ResponseDocument` mutation. */
export type UpdateResponseDocumentPayload = {
  __typename?: 'UpdateResponseDocumentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ResponseDocument` that was updated by this mutation. */
  responseDocument?: Maybe<ResponseDocument>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Document` that is related to this `ResponseDocument`. */
  documentByDocumentId?: Maybe<Document>;
  /** Reads a single `Person` that is related to this `ResponseDocument`. */
  personByAuthorId?: Maybe<Person>;
  /** An edge for our `ResponseDocument`. May be used by Relay 1. */
  responseDocumentEdge?: Maybe<ResponseDocumentsEdge>;
};


/** The output of our update `ResponseDocument` mutation. */
export type UpdateResponseDocumentPayloadResponseDocumentEdgeArgs = {
  orderBy?: Maybe<Array<ResponseDocumentsOrderBy>>;
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

/** All input for the `updateSyncById` mutation. */
export type UpdateSyncByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Sync` being updated. */
  syncPatch: SyncPatch;
  id: Scalars['UUID'];
};

/** All input for the `updateSync` mutation. */
export type UpdateSyncInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Sync` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Sync` being updated. */
  syncPatch: SyncPatch;
};

/** The output of our update `Sync` mutation. */
export type UpdateSyncPayload = {
  __typename?: 'UpdateSyncPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Sync` that was updated by this mutation. */
  sync?: Maybe<Sync>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Sync`. May be used by Relay 1. */
  syncEdge?: Maybe<SyncsEdge>;
};


/** The output of our update `Sync` mutation. */
export type UpdateSyncPayloadSyncEdgeArgs = {
  orderBy?: Maybe<Array<SyncsOrderBy>>;
};


export type AllDocumentTemplatesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllDocumentTemplatesQuery = (
  { __typename?: 'Query' }
  & { allDocumentTemplates?: Maybe<(
    { __typename?: 'DocumentTemplatesConnection' }
    & { nodes: Array<(
      { __typename?: 'DocumentTemplate' }
      & Pick<DocumentTemplate, 'id' | 'name' | 'javascriptModule'>
    )> }
  )> }
);

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

export type AllMatterTemplatesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllMatterTemplatesQuery = (
  { __typename?: 'Query' }
  & { allMatterTemplates?: Maybe<(
    { __typename?: 'MatterTemplatesConnection' }
    & { nodes: Array<(
      { __typename?: 'MatterTemplate' }
      & Pick<MatterTemplate, 'id' | 'name' | 'javascriptModule'>
    )> }
  )> }
);

export type AllQuestionsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllQuestionsQuery = (
  { __typename?: 'Query' }
  & { allQuestions?: Maybe<(
    { __typename?: 'QuestionsConnection' }
    & { nodes: Array<(
      { __typename?: 'Question' }
      & Pick<Question, 'id' | 'options' | 'questionType' | 'prompt'>
    )> }
  )> }
);

export type CreateDocumentTemplateMutationVariables = Exact<{
  name: Scalars['String'];
  javascriptModule: Scalars['String'];
}>;


export type CreateDocumentTemplateMutation = (
  { __typename?: 'Mutation' }
  & { createDocumentTemplate?: Maybe<(
    { __typename?: 'CreateDocumentTemplatePayload' }
    & { documentTemplate?: Maybe<(
      { __typename?: 'DocumentTemplate' }
      & Pick<DocumentTemplate, 'id' | 'name' | 'javascriptModule'>
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
      & Pick<Flashcard, 'id' | 'answer' | 'prompt' | 'createdAt' | 'updatedAt'>
    )> }
  )> }
);

export type CreateMatterTemplateMutationVariables = Exact<{
  name: Scalars['String'];
  javascriptModule: Scalars['String'];
}>;


export type CreateMatterTemplateMutation = (
  { __typename?: 'Mutation' }
  & { createMatterTemplate?: Maybe<(
    { __typename?: 'CreateMatterTemplatePayload' }
    & { matterTemplate?: Maybe<(
      { __typename?: 'MatterTemplate' }
      & Pick<MatterTemplate, 'id' | 'name' | 'javascriptModule'>
    )> }
  )> }
);

export type CreateQuestionMutationVariables = Exact<{
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  questionType: Scalars['String'];
  prompt: Scalars['String'];
}>;


export type CreateQuestionMutation = (
  { __typename?: 'Mutation' }
  & { createQuestion?: Maybe<(
    { __typename?: 'CreateQuestionPayload' }
    & { question?: Maybe<(
      { __typename?: 'Question' }
      & Pick<Question, 'id' | 'options' | 'questionType' | 'prompt'>
    )> }
  )> }
);

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = (
  { __typename?: 'Query' }
  & { getCurrentUser?: Maybe<(
    { __typename?: 'Person' }
    & Pick<Person, 'id' | 'name' | 'email' | 'picture' | 'role' | 'flags'>
  )> }
);

export type DeleteDocumentTemplateByIdMutationVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type DeleteDocumentTemplateByIdMutation = (
  { __typename?: 'Mutation' }
  & { deleteDocumentTemplateById?: Maybe<(
    { __typename?: 'DeleteDocumentTemplatePayload' }
    & { documentTemplate?: Maybe<(
      { __typename?: 'DocumentTemplate' }
      & Pick<DocumentTemplate, 'id'>
    )> }
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

export type DeleteMatterTemplateByIdMutationVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type DeleteMatterTemplateByIdMutation = (
  { __typename?: 'Mutation' }
  & { deleteMatterTemplateById?: Maybe<(
    { __typename?: 'DeleteMatterTemplatePayload' }
    & { matterTemplate?: Maybe<(
      { __typename?: 'MatterTemplate' }
      & Pick<MatterTemplate, 'id'>
    )> }
  )> }
);

export type DeleteQuestionByIdMutationVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type DeleteQuestionByIdMutation = (
  { __typename?: 'Mutation' }
  & { deleteQuestionById?: Maybe<(
    { __typename?: 'DeleteQuestionPayload' }
    & { question?: Maybe<(
      { __typename?: 'Question' }
      & Pick<Question, 'id'>
    )> }
  )> }
);

export type GetTransloaditTokenMutationVariables = Exact<{
  template: Scalars['String'];
}>;


export type GetTransloaditTokenMutation = (
  { __typename?: 'Mutation' }
  & { getTransloaditToken?: Maybe<(
    { __typename?: 'GetTransloaditTokenPayload' }
    & Pick<GetTransloaditTokenPayload, 'expires' | 'signature'>
  )> }
);

export type UpdateDocumentTemplateByIdMutationVariables = Exact<{
  id: Scalars['UUID'];
  name?: Maybe<Scalars['String']>;
  javascriptModule?: Maybe<Scalars['String']>;
}>;


export type UpdateDocumentTemplateByIdMutation = (
  { __typename?: 'Mutation' }
  & { updateDocumentTemplateById?: Maybe<(
    { __typename?: 'UpdateDocumentTemplatePayload' }
    & { documentTemplate?: Maybe<(
      { __typename?: 'DocumentTemplate' }
      & Pick<DocumentTemplate, 'id' | 'name' | 'javascriptModule'>
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

export type UpdateMatterTemplateByIdMutationVariables = Exact<{
  id: Scalars['UUID'];
  name?: Maybe<Scalars['String']>;
  javascriptModule?: Maybe<Scalars['String']>;
}>;


export type UpdateMatterTemplateByIdMutation = (
  { __typename?: 'Mutation' }
  & { updateMatterTemplateById?: Maybe<(
    { __typename?: 'UpdateMatterTemplatePayload' }
    & { matterTemplate?: Maybe<(
      { __typename?: 'MatterTemplate' }
      & Pick<MatterTemplate, 'id' | 'name' | 'javascriptModule'>
    )> }
  )> }
);

export type UpdatePersonByIdMutationVariables = Exact<{
  flags: Scalars['String'];
  id: Scalars['UUID'];
  name: Scalars['String'];
}>;


export type UpdatePersonByIdMutation = (
  { __typename?: 'Mutation' }
  & { updatePersonById?: Maybe<(
    { __typename?: 'UpdatePersonPayload' }
    & { person?: Maybe<(
      { __typename?: 'Person' }
      & Pick<Person, 'id' | 'name' | 'flags'>
    )> }
  )> }
);

export type UpdateQuestionByIdMutationVariables = Exact<{
  id: Scalars['UUID'];
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  questionType?: Maybe<Scalars['String']>;
  prompt?: Maybe<Scalars['String']>;
}>;


export type UpdateQuestionByIdMutation = (
  { __typename?: 'Mutation' }
  & { updateQuestionById?: Maybe<(
    { __typename?: 'UpdateQuestionPayload' }
    & { question?: Maybe<(
      { __typename?: 'Question' }
      & Pick<Question, 'id' | 'options' | 'questionType' | 'prompt'>
    )> }
  )> }
);


export const AllDocumentTemplatesDocument = gql`
    query AllDocumentTemplates {
  allDocumentTemplates(orderBy: NAME_ASC) {
    nodes {
      id
      name
      javascriptModule
    }
  }
}
    `;
export type AllDocumentTemplatesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllDocumentTemplatesQuery, AllDocumentTemplatesQueryVariables>, 'query'>;

    export const AllDocumentTemplatesComponent = (props: AllDocumentTemplatesComponentProps) => (
      <ApolloReactComponents.Query<AllDocumentTemplatesQuery, AllDocumentTemplatesQueryVariables> query={AllDocumentTemplatesDocument} {...props} />
    );
    

/**
 * __useAllDocumentTemplatesQuery__
 *
 * To run a query within a React component, call `useAllDocumentTemplatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllDocumentTemplatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllDocumentTemplatesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllDocumentTemplatesQuery(baseOptions?: Apollo.QueryHookOptions<AllDocumentTemplatesQuery, AllDocumentTemplatesQueryVariables>) {
        return Apollo.useQuery<AllDocumentTemplatesQuery, AllDocumentTemplatesQueryVariables>(AllDocumentTemplatesDocument, baseOptions);
      }
export function useAllDocumentTemplatesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllDocumentTemplatesQuery, AllDocumentTemplatesQueryVariables>) {
          return Apollo.useLazyQuery<AllDocumentTemplatesQuery, AllDocumentTemplatesQueryVariables>(AllDocumentTemplatesDocument, baseOptions);
        }
export type AllDocumentTemplatesQueryHookResult = ReturnType<typeof useAllDocumentTemplatesQuery>;
export type AllDocumentTemplatesLazyQueryHookResult = ReturnType<typeof useAllDocumentTemplatesLazyQuery>;
export type AllDocumentTemplatesQueryResult = Apollo.QueryResult<AllDocumentTemplatesQuery, AllDocumentTemplatesQueryVariables>;
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
export const AllMatterTemplatesDocument = gql`
    query AllMatterTemplates {
  allMatterTemplates(orderBy: NAME_ASC) {
    nodes {
      id
      name
      javascriptModule
    }
  }
}
    `;
export type AllMatterTemplatesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllMatterTemplatesQuery, AllMatterTemplatesQueryVariables>, 'query'>;

    export const AllMatterTemplatesComponent = (props: AllMatterTemplatesComponentProps) => (
      <ApolloReactComponents.Query<AllMatterTemplatesQuery, AllMatterTemplatesQueryVariables> query={AllMatterTemplatesDocument} {...props} />
    );
    

/**
 * __useAllMatterTemplatesQuery__
 *
 * To run a query within a React component, call `useAllMatterTemplatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllMatterTemplatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllMatterTemplatesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllMatterTemplatesQuery(baseOptions?: Apollo.QueryHookOptions<AllMatterTemplatesQuery, AllMatterTemplatesQueryVariables>) {
        return Apollo.useQuery<AllMatterTemplatesQuery, AllMatterTemplatesQueryVariables>(AllMatterTemplatesDocument, baseOptions);
      }
export function useAllMatterTemplatesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllMatterTemplatesQuery, AllMatterTemplatesQueryVariables>) {
          return Apollo.useLazyQuery<AllMatterTemplatesQuery, AllMatterTemplatesQueryVariables>(AllMatterTemplatesDocument, baseOptions);
        }
export type AllMatterTemplatesQueryHookResult = ReturnType<typeof useAllMatterTemplatesQuery>;
export type AllMatterTemplatesLazyQueryHookResult = ReturnType<typeof useAllMatterTemplatesLazyQuery>;
export type AllMatterTemplatesQueryResult = Apollo.QueryResult<AllMatterTemplatesQuery, AllMatterTemplatesQueryVariables>;
export const AllQuestionsDocument = gql`
    query AllQuestions {
  allQuestions(orderBy: PROMPT_ASC) {
    nodes {
      id
      options
      questionType
      prompt
    }
  }
}
    `;
export type AllQuestionsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllQuestionsQuery, AllQuestionsQueryVariables>, 'query'>;

    export const AllQuestionsComponent = (props: AllQuestionsComponentProps) => (
      <ApolloReactComponents.Query<AllQuestionsQuery, AllQuestionsQueryVariables> query={AllQuestionsDocument} {...props} />
    );
    

/**
 * __useAllQuestionsQuery__
 *
 * To run a query within a React component, call `useAllQuestionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllQuestionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllQuestionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllQuestionsQuery(baseOptions?: Apollo.QueryHookOptions<AllQuestionsQuery, AllQuestionsQueryVariables>) {
        return Apollo.useQuery<AllQuestionsQuery, AllQuestionsQueryVariables>(AllQuestionsDocument, baseOptions);
      }
export function useAllQuestionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllQuestionsQuery, AllQuestionsQueryVariables>) {
          return Apollo.useLazyQuery<AllQuestionsQuery, AllQuestionsQueryVariables>(AllQuestionsDocument, baseOptions);
        }
export type AllQuestionsQueryHookResult = ReturnType<typeof useAllQuestionsQuery>;
export type AllQuestionsLazyQueryHookResult = ReturnType<typeof useAllQuestionsLazyQuery>;
export type AllQuestionsQueryResult = Apollo.QueryResult<AllQuestionsQuery, AllQuestionsQueryVariables>;
export const CreateDocumentTemplateDocument = gql`
    mutation CreateDocumentTemplate($name: String!, $javascriptModule: String!) {
  createDocumentTemplate(input: {documentTemplate: {name: $name, javascriptModule: $javascriptModule}}) {
    documentTemplate {
      id
      name
      javascriptModule
    }
  }
}
    `;
export type CreateDocumentTemplateMutationFn = Apollo.MutationFunction<CreateDocumentTemplateMutation, CreateDocumentTemplateMutationVariables>;
export type CreateDocumentTemplateComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateDocumentTemplateMutation, CreateDocumentTemplateMutationVariables>, 'mutation'>;

    export const CreateDocumentTemplateComponent = (props: CreateDocumentTemplateComponentProps) => (
      <ApolloReactComponents.Mutation<CreateDocumentTemplateMutation, CreateDocumentTemplateMutationVariables> mutation={CreateDocumentTemplateDocument} {...props} />
    );
    

/**
 * __useCreateDocumentTemplateMutation__
 *
 * To run a mutation, you first call `useCreateDocumentTemplateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDocumentTemplateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDocumentTemplateMutation, { data, loading, error }] = useCreateDocumentTemplateMutation({
 *   variables: {
 *      name: // value for 'name'
 *      javascriptModule: // value for 'javascriptModule'
 *   },
 * });
 */
export function useCreateDocumentTemplateMutation(baseOptions?: Apollo.MutationHookOptions<CreateDocumentTemplateMutation, CreateDocumentTemplateMutationVariables>) {
        return Apollo.useMutation<CreateDocumentTemplateMutation, CreateDocumentTemplateMutationVariables>(CreateDocumentTemplateDocument, baseOptions);
      }
export type CreateDocumentTemplateMutationHookResult = ReturnType<typeof useCreateDocumentTemplateMutation>;
export type CreateDocumentTemplateMutationResult = Apollo.MutationResult<CreateDocumentTemplateMutation>;
export type CreateDocumentTemplateMutationOptions = Apollo.BaseMutationOptions<CreateDocumentTemplateMutation, CreateDocumentTemplateMutationVariables>;
export const CreateFlashcardDocument = gql`
    mutation CreateFlashcard($answer: String!, $prompt: String!) {
  createFlashcard(input: {flashcard: {answer: $answer, prompt: $prompt}}) {
    flashcard {
      id
      answer
      prompt
      createdAt
      updatedAt
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
export const CreateMatterTemplateDocument = gql`
    mutation CreateMatterTemplate($name: String!, $javascriptModule: String!) {
  createMatterTemplate(input: {matterTemplate: {name: $name, javascriptModule: $javascriptModule}}) {
    matterTemplate {
      id
      name
      javascriptModule
    }
  }
}
    `;
export type CreateMatterTemplateMutationFn = Apollo.MutationFunction<CreateMatterTemplateMutation, CreateMatterTemplateMutationVariables>;
export type CreateMatterTemplateComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateMatterTemplateMutation, CreateMatterTemplateMutationVariables>, 'mutation'>;

    export const CreateMatterTemplateComponent = (props: CreateMatterTemplateComponentProps) => (
      <ApolloReactComponents.Mutation<CreateMatterTemplateMutation, CreateMatterTemplateMutationVariables> mutation={CreateMatterTemplateDocument} {...props} />
    );
    

/**
 * __useCreateMatterTemplateMutation__
 *
 * To run a mutation, you first call `useCreateMatterTemplateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMatterTemplateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMatterTemplateMutation, { data, loading, error }] = useCreateMatterTemplateMutation({
 *   variables: {
 *      name: // value for 'name'
 *      javascriptModule: // value for 'javascriptModule'
 *   },
 * });
 */
export function useCreateMatterTemplateMutation(baseOptions?: Apollo.MutationHookOptions<CreateMatterTemplateMutation, CreateMatterTemplateMutationVariables>) {
        return Apollo.useMutation<CreateMatterTemplateMutation, CreateMatterTemplateMutationVariables>(CreateMatterTemplateDocument, baseOptions);
      }
export type CreateMatterTemplateMutationHookResult = ReturnType<typeof useCreateMatterTemplateMutation>;
export type CreateMatterTemplateMutationResult = Apollo.MutationResult<CreateMatterTemplateMutation>;
export type CreateMatterTemplateMutationOptions = Apollo.BaseMutationOptions<CreateMatterTemplateMutation, CreateMatterTemplateMutationVariables>;
export const CreateQuestionDocument = gql`
    mutation CreateQuestion($options: [String], $questionType: String!, $prompt: String!) {
  createQuestion(input: {question: {options: $options, questionType: $questionType, prompt: $prompt}}) {
    question {
      id
      options
      questionType
      prompt
    }
  }
}
    `;
export type CreateQuestionMutationFn = Apollo.MutationFunction<CreateQuestionMutation, CreateQuestionMutationVariables>;
export type CreateQuestionComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateQuestionMutation, CreateQuestionMutationVariables>, 'mutation'>;

    export const CreateQuestionComponent = (props: CreateQuestionComponentProps) => (
      <ApolloReactComponents.Mutation<CreateQuestionMutation, CreateQuestionMutationVariables> mutation={CreateQuestionDocument} {...props} />
    );
    

/**
 * __useCreateQuestionMutation__
 *
 * To run a mutation, you first call `useCreateQuestionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateQuestionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createQuestionMutation, { data, loading, error }] = useCreateQuestionMutation({
 *   variables: {
 *      options: // value for 'options'
 *      questionType: // value for 'questionType'
 *      prompt: // value for 'prompt'
 *   },
 * });
 */
export function useCreateQuestionMutation(baseOptions?: Apollo.MutationHookOptions<CreateQuestionMutation, CreateQuestionMutationVariables>) {
        return Apollo.useMutation<CreateQuestionMutation, CreateQuestionMutationVariables>(CreateQuestionDocument, baseOptions);
      }
export type CreateQuestionMutationHookResult = ReturnType<typeof useCreateQuestionMutation>;
export type CreateQuestionMutationResult = Apollo.MutationResult<CreateQuestionMutation>;
export type CreateQuestionMutationOptions = Apollo.BaseMutationOptions<CreateQuestionMutation, CreateQuestionMutationVariables>;
export const CurrentUserDocument = gql`
    query CurrentUser {
  getCurrentUser {
    id
    name
    email
    picture
    role
    flags
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
export const DeleteDocumentTemplateByIdDocument = gql`
    mutation DeleteDocumentTemplateById($id: UUID!) {
  deleteDocumentTemplateById(input: {id: $id}) {
    documentTemplate {
      id
    }
  }
}
    `;
export type DeleteDocumentTemplateByIdMutationFn = Apollo.MutationFunction<DeleteDocumentTemplateByIdMutation, DeleteDocumentTemplateByIdMutationVariables>;
export type DeleteDocumentTemplateByIdComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteDocumentTemplateByIdMutation, DeleteDocumentTemplateByIdMutationVariables>, 'mutation'>;

    export const DeleteDocumentTemplateByIdComponent = (props: DeleteDocumentTemplateByIdComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteDocumentTemplateByIdMutation, DeleteDocumentTemplateByIdMutationVariables> mutation={DeleteDocumentTemplateByIdDocument} {...props} />
    );
    

/**
 * __useDeleteDocumentTemplateByIdMutation__
 *
 * To run a mutation, you first call `useDeleteDocumentTemplateByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDocumentTemplateByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteDocumentTemplateByIdMutation, { data, loading, error }] = useDeleteDocumentTemplateByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteDocumentTemplateByIdMutation(baseOptions?: Apollo.MutationHookOptions<DeleteDocumentTemplateByIdMutation, DeleteDocumentTemplateByIdMutationVariables>) {
        return Apollo.useMutation<DeleteDocumentTemplateByIdMutation, DeleteDocumentTemplateByIdMutationVariables>(DeleteDocumentTemplateByIdDocument, baseOptions);
      }
export type DeleteDocumentTemplateByIdMutationHookResult = ReturnType<typeof useDeleteDocumentTemplateByIdMutation>;
export type DeleteDocumentTemplateByIdMutationResult = Apollo.MutationResult<DeleteDocumentTemplateByIdMutation>;
export type DeleteDocumentTemplateByIdMutationOptions = Apollo.BaseMutationOptions<DeleteDocumentTemplateByIdMutation, DeleteDocumentTemplateByIdMutationVariables>;
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
export const DeleteMatterTemplateByIdDocument = gql`
    mutation DeleteMatterTemplateById($id: UUID!) {
  deleteMatterTemplateById(input: {id: $id}) {
    matterTemplate {
      id
    }
  }
}
    `;
export type DeleteMatterTemplateByIdMutationFn = Apollo.MutationFunction<DeleteMatterTemplateByIdMutation, DeleteMatterTemplateByIdMutationVariables>;
export type DeleteMatterTemplateByIdComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteMatterTemplateByIdMutation, DeleteMatterTemplateByIdMutationVariables>, 'mutation'>;

    export const DeleteMatterTemplateByIdComponent = (props: DeleteMatterTemplateByIdComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteMatterTemplateByIdMutation, DeleteMatterTemplateByIdMutationVariables> mutation={DeleteMatterTemplateByIdDocument} {...props} />
    );
    

/**
 * __useDeleteMatterTemplateByIdMutation__
 *
 * To run a mutation, you first call `useDeleteMatterTemplateByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMatterTemplateByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMatterTemplateByIdMutation, { data, loading, error }] = useDeleteMatterTemplateByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteMatterTemplateByIdMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMatterTemplateByIdMutation, DeleteMatterTemplateByIdMutationVariables>) {
        return Apollo.useMutation<DeleteMatterTemplateByIdMutation, DeleteMatterTemplateByIdMutationVariables>(DeleteMatterTemplateByIdDocument, baseOptions);
      }
export type DeleteMatterTemplateByIdMutationHookResult = ReturnType<typeof useDeleteMatterTemplateByIdMutation>;
export type DeleteMatterTemplateByIdMutationResult = Apollo.MutationResult<DeleteMatterTemplateByIdMutation>;
export type DeleteMatterTemplateByIdMutationOptions = Apollo.BaseMutationOptions<DeleteMatterTemplateByIdMutation, DeleteMatterTemplateByIdMutationVariables>;
export const DeleteQuestionByIdDocument = gql`
    mutation DeleteQuestionById($id: UUID!) {
  deleteQuestionById(input: {id: $id}) {
    question {
      id
    }
  }
}
    `;
export type DeleteQuestionByIdMutationFn = Apollo.MutationFunction<DeleteQuestionByIdMutation, DeleteQuestionByIdMutationVariables>;
export type DeleteQuestionByIdComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteQuestionByIdMutation, DeleteQuestionByIdMutationVariables>, 'mutation'>;

    export const DeleteQuestionByIdComponent = (props: DeleteQuestionByIdComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteQuestionByIdMutation, DeleteQuestionByIdMutationVariables> mutation={DeleteQuestionByIdDocument} {...props} />
    );
    

/**
 * __useDeleteQuestionByIdMutation__
 *
 * To run a mutation, you first call `useDeleteQuestionByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteQuestionByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteQuestionByIdMutation, { data, loading, error }] = useDeleteQuestionByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteQuestionByIdMutation(baseOptions?: Apollo.MutationHookOptions<DeleteQuestionByIdMutation, DeleteQuestionByIdMutationVariables>) {
        return Apollo.useMutation<DeleteQuestionByIdMutation, DeleteQuestionByIdMutationVariables>(DeleteQuestionByIdDocument, baseOptions);
      }
export type DeleteQuestionByIdMutationHookResult = ReturnType<typeof useDeleteQuestionByIdMutation>;
export type DeleteQuestionByIdMutationResult = Apollo.MutationResult<DeleteQuestionByIdMutation>;
export type DeleteQuestionByIdMutationOptions = Apollo.BaseMutationOptions<DeleteQuestionByIdMutation, DeleteQuestionByIdMutationVariables>;
export const GetTransloaditTokenDocument = gql`
    mutation GetTransloaditToken($template: String!) {
  getTransloaditToken(template: $template) {
    expires
    signature
  }
}
    `;
export type GetTransloaditTokenMutationFn = Apollo.MutationFunction<GetTransloaditTokenMutation, GetTransloaditTokenMutationVariables>;
export type GetTransloaditTokenComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<GetTransloaditTokenMutation, GetTransloaditTokenMutationVariables>, 'mutation'>;

    export const GetTransloaditTokenComponent = (props: GetTransloaditTokenComponentProps) => (
      <ApolloReactComponents.Mutation<GetTransloaditTokenMutation, GetTransloaditTokenMutationVariables> mutation={GetTransloaditTokenDocument} {...props} />
    );
    

/**
 * __useGetTransloaditTokenMutation__
 *
 * To run a mutation, you first call `useGetTransloaditTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetTransloaditTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getTransloaditTokenMutation, { data, loading, error }] = useGetTransloaditTokenMutation({
 *   variables: {
 *      template: // value for 'template'
 *   },
 * });
 */
export function useGetTransloaditTokenMutation(baseOptions?: Apollo.MutationHookOptions<GetTransloaditTokenMutation, GetTransloaditTokenMutationVariables>) {
        return Apollo.useMutation<GetTransloaditTokenMutation, GetTransloaditTokenMutationVariables>(GetTransloaditTokenDocument, baseOptions);
      }
export type GetTransloaditTokenMutationHookResult = ReturnType<typeof useGetTransloaditTokenMutation>;
export type GetTransloaditTokenMutationResult = Apollo.MutationResult<GetTransloaditTokenMutation>;
export type GetTransloaditTokenMutationOptions = Apollo.BaseMutationOptions<GetTransloaditTokenMutation, GetTransloaditTokenMutationVariables>;
export const UpdateDocumentTemplateByIdDocument = gql`
    mutation UpdateDocumentTemplateById($id: UUID!, $name: String, $javascriptModule: String) {
  updateDocumentTemplateById(input: {documentTemplatePatch: {name: $name, javascriptModule: $javascriptModule}, id: $id}) {
    documentTemplate {
      id
      name
      javascriptModule
    }
  }
}
    `;
export type UpdateDocumentTemplateByIdMutationFn = Apollo.MutationFunction<UpdateDocumentTemplateByIdMutation, UpdateDocumentTemplateByIdMutationVariables>;
export type UpdateDocumentTemplateByIdComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateDocumentTemplateByIdMutation, UpdateDocumentTemplateByIdMutationVariables>, 'mutation'>;

    export const UpdateDocumentTemplateByIdComponent = (props: UpdateDocumentTemplateByIdComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateDocumentTemplateByIdMutation, UpdateDocumentTemplateByIdMutationVariables> mutation={UpdateDocumentTemplateByIdDocument} {...props} />
    );
    

/**
 * __useUpdateDocumentTemplateByIdMutation__
 *
 * To run a mutation, you first call `useUpdateDocumentTemplateByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDocumentTemplateByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDocumentTemplateByIdMutation, { data, loading, error }] = useUpdateDocumentTemplateByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      javascriptModule: // value for 'javascriptModule'
 *   },
 * });
 */
export function useUpdateDocumentTemplateByIdMutation(baseOptions?: Apollo.MutationHookOptions<UpdateDocumentTemplateByIdMutation, UpdateDocumentTemplateByIdMutationVariables>) {
        return Apollo.useMutation<UpdateDocumentTemplateByIdMutation, UpdateDocumentTemplateByIdMutationVariables>(UpdateDocumentTemplateByIdDocument, baseOptions);
      }
export type UpdateDocumentTemplateByIdMutationHookResult = ReturnType<typeof useUpdateDocumentTemplateByIdMutation>;
export type UpdateDocumentTemplateByIdMutationResult = Apollo.MutationResult<UpdateDocumentTemplateByIdMutation>;
export type UpdateDocumentTemplateByIdMutationOptions = Apollo.BaseMutationOptions<UpdateDocumentTemplateByIdMutation, UpdateDocumentTemplateByIdMutationVariables>;
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
export const UpdateMatterTemplateByIdDocument = gql`
    mutation UpdateMatterTemplateById($id: UUID!, $name: String, $javascriptModule: String) {
  updateMatterTemplateById(input: {matterTemplatePatch: {name: $name, javascriptModule: $javascriptModule}, id: $id}) {
    matterTemplate {
      id
      name
      javascriptModule
    }
  }
}
    `;
export type UpdateMatterTemplateByIdMutationFn = Apollo.MutationFunction<UpdateMatterTemplateByIdMutation, UpdateMatterTemplateByIdMutationVariables>;
export type UpdateMatterTemplateByIdComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateMatterTemplateByIdMutation, UpdateMatterTemplateByIdMutationVariables>, 'mutation'>;

    export const UpdateMatterTemplateByIdComponent = (props: UpdateMatterTemplateByIdComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateMatterTemplateByIdMutation, UpdateMatterTemplateByIdMutationVariables> mutation={UpdateMatterTemplateByIdDocument} {...props} />
    );
    

/**
 * __useUpdateMatterTemplateByIdMutation__
 *
 * To run a mutation, you first call `useUpdateMatterTemplateByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMatterTemplateByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMatterTemplateByIdMutation, { data, loading, error }] = useUpdateMatterTemplateByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      javascriptModule: // value for 'javascriptModule'
 *   },
 * });
 */
export function useUpdateMatterTemplateByIdMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMatterTemplateByIdMutation, UpdateMatterTemplateByIdMutationVariables>) {
        return Apollo.useMutation<UpdateMatterTemplateByIdMutation, UpdateMatterTemplateByIdMutationVariables>(UpdateMatterTemplateByIdDocument, baseOptions);
      }
export type UpdateMatterTemplateByIdMutationHookResult = ReturnType<typeof useUpdateMatterTemplateByIdMutation>;
export type UpdateMatterTemplateByIdMutationResult = Apollo.MutationResult<UpdateMatterTemplateByIdMutation>;
export type UpdateMatterTemplateByIdMutationOptions = Apollo.BaseMutationOptions<UpdateMatterTemplateByIdMutation, UpdateMatterTemplateByIdMutationVariables>;
export const UpdatePersonByIdDocument = gql`
    mutation UpdatePersonById($flags: String!, $id: UUID!, $name: String!) {
  updatePersonById(input: {id: $id, personPatch: {flags: $flags, name: $name}}) {
    person {
      id
      name
      flags
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
 *      flags: // value for 'flags'
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
export const UpdateQuestionByIdDocument = gql`
    mutation UpdateQuestionById($id: UUID!, $options: [String], $questionType: String, $prompt: String) {
  updateQuestionById(input: {questionPatch: {options: $options, questionType: $questionType, prompt: $prompt}, id: $id}) {
    question {
      id
      options
      questionType
      prompt
    }
  }
}
    `;
export type UpdateQuestionByIdMutationFn = Apollo.MutationFunction<UpdateQuestionByIdMutation, UpdateQuestionByIdMutationVariables>;
export type UpdateQuestionByIdComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateQuestionByIdMutation, UpdateQuestionByIdMutationVariables>, 'mutation'>;

    export const UpdateQuestionByIdComponent = (props: UpdateQuestionByIdComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateQuestionByIdMutation, UpdateQuestionByIdMutationVariables> mutation={UpdateQuestionByIdDocument} {...props} />
    );
    

/**
 * __useUpdateQuestionByIdMutation__
 *
 * To run a mutation, you first call `useUpdateQuestionByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateQuestionByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateQuestionByIdMutation, { data, loading, error }] = useUpdateQuestionByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *      options: // value for 'options'
 *      questionType: // value for 'questionType'
 *      prompt: // value for 'prompt'
 *   },
 * });
 */
export function useUpdateQuestionByIdMutation(baseOptions?: Apollo.MutationHookOptions<UpdateQuestionByIdMutation, UpdateQuestionByIdMutationVariables>) {
        return Apollo.useMutation<UpdateQuestionByIdMutation, UpdateQuestionByIdMutationVariables>(UpdateQuestionByIdDocument, baseOptions);
      }
export type UpdateQuestionByIdMutationHookResult = ReturnType<typeof useUpdateQuestionByIdMutation>;
export type UpdateQuestionByIdMutationResult = Apollo.MutationResult<UpdateQuestionByIdMutation>;
export type UpdateQuestionByIdMutationOptions = Apollo.BaseMutationOptions<UpdateQuestionByIdMutation, UpdateQuestionByIdMutationVariables>;