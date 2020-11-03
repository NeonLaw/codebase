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
  locality: Scalars['String'];
  administrativeAreaLevel1: Scalars['String'];
  postalCode: Scalars['String'];
  country: Scalars['String'];
  personId: Scalars['UUID'];
  lobIdentifier: Scalars['String'];
  lobRecord: Scalars['JSON'];
};

/** A condition to be used against `Address` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type AddressCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>;
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
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** An input for mutations affecting `Address` */
export type AddressInput = {
  id?: Maybe<Scalars['UUID']>;
  route?: Maybe<Scalars['String']>;
  streetNumber?: Maybe<Scalars['String']>;
  locality?: Maybe<Scalars['String']>;
  administrativeAreaLevel1?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  personId: Scalars['UUID'];
  lobIdentifier: Scalars['String'];
  lobRecord: Scalars['JSON'];
};

/** Represents an update to a `Address`. Fields that are set will be updated. */
export type AddressPatch = {
  id?: Maybe<Scalars['UUID']>;
  route?: Maybe<Scalars['String']>;
  streetNumber?: Maybe<Scalars['String']>;
  locality?: Maybe<Scalars['String']>;
  administrativeAreaLevel1?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  personId?: Maybe<Scalars['UUID']>;
  lobIdentifier?: Maybe<Scalars['String']>;
  lobRecord?: Maybe<Scalars['JSON']>;
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
  /** An edge for our `Letter`. May be used by Relay 1. */
  letterEdge?: Maybe<LettersEdge>;
};


/** The output of our create `Letter` mutation. */
export type CreateLetterPayloadLetterEdgeArgs = {
  orderBy?: Maybe<Array<LettersOrderBy>>;
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

/** All input for the create `PrivateDocument` mutation. */
export type CreatePrivateDocumentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `PrivateDocument` to be created by this mutation. */
  privateDocument: PrivateDocumentInput;
};

/** The output of our create `PrivateDocument` mutation. */
export type CreatePrivateDocumentPayload = {
  __typename?: 'CreatePrivateDocumentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `PrivateDocument` that was created by this mutation. */
  privateDocument?: Maybe<PrivateDocument>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `PrivateDocument`. May be used by Relay 1. */
  privateDocumentEdge?: Maybe<PrivateDocumentsEdge>;
};


/** The output of our create `PrivateDocument` mutation. */
export type CreatePrivateDocumentPayloadPrivateDocumentEdgeArgs = {
  orderBy?: Maybe<Array<PrivateDocumentsOrderBy>>;
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

/** All input for the create `Upload` mutation. */
export type CreateUploadInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Upload` to be created by this mutation. */
  upload: UploadInput;
};

/** The output of our create `Upload` mutation. */
export type CreateUploadPayload = {
  __typename?: 'CreateUploadPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Upload` that was created by this mutation. */
  upload?: Maybe<Upload>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Upload`. May be used by Relay 1. */
  uploadEdge?: Maybe<UploadsEdge>;
};


/** The output of our create `Upload` mutation. */
export type CreateUploadPayloadUploadEdgeArgs = {
  orderBy?: Maybe<Array<UploadsOrderBy>>;
};

/** All input for the create `Writing` mutation. */
export type CreateWritingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Writing` to be created by this mutation. */
  writing: WritingInput;
};

/** The output of our create `Writing` mutation. */
export type CreateWritingPayload = {
  __typename?: 'CreateWritingPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Writing` that was created by this mutation. */
  writing?: Maybe<Writing>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Writing`. May be used by Relay 1. */
  writingEdge?: Maybe<WritingsEdge>;
};


/** The output of our create `Writing` mutation. */
export type CreateWritingPayloadWritingEdgeArgs = {
  orderBy?: Maybe<Array<WritingsOrderBy>>;
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

/** All input for the `deletePrivateDocumentById` mutation. */
export type DeletePrivateDocumentByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** All input for the `deletePrivateDocument` mutation. */
export type DeletePrivateDocumentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `PrivateDocument` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `PrivateDocument` mutation. */
export type DeletePrivateDocumentPayload = {
  __typename?: 'DeletePrivateDocumentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `PrivateDocument` that was deleted by this mutation. */
  privateDocument?: Maybe<PrivateDocument>;
  deletedPrivateDocumentId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `PrivateDocument`. May be used by Relay 1. */
  privateDocumentEdge?: Maybe<PrivateDocumentsEdge>;
};


/** The output of our delete `PrivateDocument` mutation. */
export type DeletePrivateDocumentPayloadPrivateDocumentEdgeArgs = {
  orderBy?: Maybe<Array<PrivateDocumentsOrderBy>>;
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

/** All input for the `deleteUploadById` mutation. */
export type DeleteUploadByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** All input for the `deleteUpload` mutation. */
export type DeleteUploadInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Upload` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Upload` mutation. */
export type DeleteUploadPayload = {
  __typename?: 'DeleteUploadPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Upload` that was deleted by this mutation. */
  upload?: Maybe<Upload>;
  deletedUploadId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Upload`. May be used by Relay 1. */
  uploadEdge?: Maybe<UploadsEdge>;
};


/** The output of our delete `Upload` mutation. */
export type DeleteUploadPayloadUploadEdgeArgs = {
  orderBy?: Maybe<Array<UploadsOrderBy>>;
};

/** All input for the `deleteWritingById` mutation. */
export type DeleteWritingByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** All input for the `deleteWriting` mutation. */
export type DeleteWritingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Writing` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Writing` mutation. */
export type DeleteWritingPayload = {
  __typename?: 'DeleteWritingPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Writing` that was deleted by this mutation. */
  writing?: Maybe<Writing>;
  deletedWritingId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Writing`. May be used by Relay 1. */
  writingEdge?: Maybe<WritingsEdge>;
};


/** The output of our delete `Writing` mutation. */
export type DeleteWritingPayloadWritingEdgeArgs = {
  orderBy?: Maybe<Array<WritingsOrderBy>>;
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
};

/** An input for mutations affecting `Document` */
export type DocumentInput = {
  id?: Maybe<Scalars['UUID']>;
  filename: Scalars['String'];
  documentableTableName: Scalars['String'];
  documentableTableId: Scalars['UUID'];
  documentTemplateId: Scalars['UUID'];
  fileExtension: Scalars['String'];
};

/** Represents an update to a `Document`. Fields that are set will be updated. */
export type DocumentPatch = {
  id?: Maybe<Scalars['UUID']>;
  filename?: Maybe<Scalars['String']>;
  documentableTableName?: Maybe<Scalars['String']>;
  documentableTableId?: Maybe<Scalars['UUID']>;
  documentTemplateId?: Maybe<Scalars['UUID']>;
  fileExtension?: Maybe<Scalars['String']>;
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
};

/**
 * A condition to be used against `DocumentTemplate` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type DocumentTemplateCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>;
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


export type Letter = Node & {
  __typename?: 'Letter';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['UUID'];
  addressorId: Scalars['UUID'];
  addresseeId: Scalars['UUID'];
  lobIdentifier: Scalars['String'];
  documentId: Scalars['UUID'];
  lobRecord: Scalars['JSON'];
  /** Reads a single `Person` that is related to this `Letter`. */
  personByAddressorId?: Maybe<Person>;
  /** Reads a single `Person` that is related to this `Letter`. */
  personByAddresseeId?: Maybe<Person>;
};

/** A condition to be used against `Letter` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type LetterCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `addressorId` field. */
  addressorId?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `addresseeId` field. */
  addresseeId?: Maybe<Scalars['UUID']>;
};

/** An input for mutations affecting `Letter` */
export type LetterInput = {
  id?: Maybe<Scalars['UUID']>;
  addressorId: Scalars['UUID'];
  addresseeId: Scalars['UUID'];
  lobIdentifier: Scalars['String'];
  documentId: Scalars['UUID'];
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

/** Represents an update to a `Matter`. Fields that are set will be updated. */
export type MatterPatch = {
  id?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
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
  PrimaryContactIdAsc = 'PRIMARY_CONTACT_ID_ASC',
  PrimaryContactIdDesc = 'PRIMARY_CONTACT_ID_DESC',
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
  /** Creates a single `PrivateDocument`. */
  createPrivateDocument?: Maybe<CreatePrivateDocumentPayload>;
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
  /** Creates a single `Upload`. */
  createUpload?: Maybe<CreateUploadPayload>;
  /** Creates a single `Writing`. */
  createWriting?: Maybe<CreateWritingPayload>;
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
  /** Updates a single `Person` using its globally unique id and a patch. */
  updatePerson?: Maybe<UpdatePersonPayload>;
  /** Updates a single `Person` using a unique key and a patch. */
  updatePersonById?: Maybe<UpdatePersonPayload>;
  /** Updates a single `PrivateDocument` using its globally unique id and a patch. */
  updatePrivateDocument?: Maybe<UpdatePrivateDocumentPayload>;
  /** Updates a single `PrivateDocument` using a unique key and a patch. */
  updatePrivateDocumentById?: Maybe<UpdatePrivateDocumentPayload>;
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
  /** Updates a single `Upload` using its globally unique id and a patch. */
  updateUpload?: Maybe<UpdateUploadPayload>;
  /** Updates a single `Upload` using a unique key and a patch. */
  updateUploadById?: Maybe<UpdateUploadPayload>;
  /** Updates a single `Writing` using its globally unique id and a patch. */
  updateWriting?: Maybe<UpdateWritingPayload>;
  /** Updates a single `Writing` using a unique key and a patch. */
  updateWritingById?: Maybe<UpdateWritingPayload>;
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
  /** Deletes a single `Person` using its globally unique id. */
  deletePerson?: Maybe<DeletePersonPayload>;
  /** Deletes a single `Person` using a unique key. */
  deletePersonById?: Maybe<DeletePersonPayload>;
  /** Deletes a single `PrivateDocument` using its globally unique id. */
  deletePrivateDocument?: Maybe<DeletePrivateDocumentPayload>;
  /** Deletes a single `PrivateDocument` using a unique key. */
  deletePrivateDocumentById?: Maybe<DeletePrivateDocumentPayload>;
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
  /** Deletes a single `Upload` using its globally unique id. */
  deleteUpload?: Maybe<DeleteUploadPayload>;
  /** Deletes a single `Upload` using a unique key. */
  deleteUploadById?: Maybe<DeleteUploadPayload>;
  /** Deletes a single `Writing` using its globally unique id. */
  deleteWriting?: Maybe<DeleteWritingPayload>;
  /** Deletes a single `Writing` using a unique key. */
  deleteWritingById?: Maybe<DeleteWritingPayload>;
  createPrimaryKeyIdIfNotExists?: Maybe<CreatePrimaryKeyIdIfNotExistsPayload>;
  createRoleIfNotExists?: Maybe<CreateRoleIfNotExistsPayload>;
  getSignedUploadUrl?: Maybe<GetSignedUploadUrlPayload>;
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
export type MutationCreatePrivateDocumentArgs = {
  input: CreatePrivateDocumentInput;
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
export type MutationCreateUploadArgs = {
  input: CreateUploadInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateWritingArgs = {
  input: CreateWritingInput;
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
export type MutationUpdatePersonArgs = {
  input: UpdatePersonInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePersonByIdArgs = {
  input: UpdatePersonByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePrivateDocumentArgs = {
  input: UpdatePrivateDocumentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePrivateDocumentByIdArgs = {
  input: UpdatePrivateDocumentByIdInput;
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
export type MutationUpdateUploadArgs = {
  input: UpdateUploadInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUploadByIdArgs = {
  input: UpdateUploadByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateWritingArgs = {
  input: UpdateWritingInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateWritingByIdArgs = {
  input: UpdateWritingByIdInput;
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
export type MutationDeletePersonArgs = {
  input: DeletePersonInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePersonByIdArgs = {
  input: DeletePersonByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePrivateDocumentArgs = {
  input: DeletePrivateDocumentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePrivateDocumentByIdArgs = {
  input: DeletePrivateDocumentByIdInput;
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
export type MutationDeleteUploadArgs = {
  input: DeleteUploadInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUploadByIdArgs = {
  input: DeleteUploadByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteWritingArgs = {
  input: DeleteWritingInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteWritingByIdArgs = {
  input: DeleteWritingByIdInput;
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
  /** Reads and enables pagination through a set of `Letter`. */
  lettersByAddressorId: LettersConnection;
  /** Reads and enables pagination through a set of `Letter`. */
  lettersByAddresseeId: LettersConnection;
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

/** Represents an update to a `Person`. Fields that are set will be updated. */
export type PersonPatch = {
  /** The name of a person */
  name?: Maybe<Scalars['String']>;
  sub?: Maybe<Scalars['String']>;
};

export type PrivateDocument = Node & {
  __typename?: 'PrivateDocument';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['UUID'];
  documentId: Scalars['UUID'];
  personId: Scalars['UUID'];
  matterId: Scalars['UUID'];
};

/**
 * A condition to be used against `PrivateDocument` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type PrivateDocumentCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>;
};

/** An input for mutations affecting `PrivateDocument` */
export type PrivateDocumentInput = {
  id?: Maybe<Scalars['UUID']>;
  documentId: Scalars['UUID'];
  personId: Scalars['UUID'];
  matterId: Scalars['UUID'];
};

/** Represents an update to a `PrivateDocument`. Fields that are set will be updated. */
export type PrivateDocumentPatch = {
  id?: Maybe<Scalars['UUID']>;
  documentId?: Maybe<Scalars['UUID']>;
  personId?: Maybe<Scalars['UUID']>;
  matterId?: Maybe<Scalars['UUID']>;
};

/** A connection to a list of `PrivateDocument` values. */
export type PrivateDocumentsConnection = {
  __typename?: 'PrivateDocumentsConnection';
  /** A list of `PrivateDocument` objects. */
  nodes: Array<PrivateDocument>;
  /** A list of edges which contains the `PrivateDocument` and cursor to aid in pagination. */
  edges: Array<PrivateDocumentsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `PrivateDocument` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `PrivateDocument` edge in the connection. */
export type PrivateDocumentsEdge = {
  __typename?: 'PrivateDocumentsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `PrivateDocument` at the end of the edge. */
  node: PrivateDocument;
};

/** Methods to use when ordering `PrivateDocument`. */
export enum PrivateDocumentsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type PublicDocument = Node & {
  __typename?: 'PublicDocument';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['UUID'];
  documentId: Scalars['UUID'];
};

/**
 * A condition to be used against `PublicDocument` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type PublicDocumentCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>;
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
  /** Reads and enables pagination through a set of `PrivateDocument`. */
  allPrivateDocuments?: Maybe<PrivateDocumentsConnection>;
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
  /** Reads and enables pagination through a set of `Upload`. */
  allUploads?: Maybe<UploadsConnection>;
  /** Reads and enables pagination through a set of `Writing`. */
  allWritings?: Maybe<WritingsConnection>;
  addressById?: Maybe<Address>;
  documentById?: Maybe<Document>;
  documentTemplateById?: Maybe<DocumentTemplate>;
  flashcardById?: Maybe<Flashcard>;
  letterById?: Maybe<Letter>;
  matterById?: Maybe<Matter>;
  personById?: Maybe<Person>;
  privateDocumentById?: Maybe<PrivateDocument>;
  publicDocumentById?: Maybe<PublicDocument>;
  questionById?: Maybe<Question>;
  questionnaireById?: Maybe<Questionnaire>;
  questionnaireResponseById?: Maybe<QuestionnaireResponse>;
  responseById?: Maybe<Response>;
  uploadById?: Maybe<Upload>;
  writingById?: Maybe<Writing>;
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
  /** Reads a single `Person` using its globally unique `ID`. */
  person?: Maybe<Person>;
  /** Reads a single `PrivateDocument` using its globally unique `ID`. */
  privateDocument?: Maybe<PrivateDocument>;
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
  /** Reads a single `Upload` using its globally unique `ID`. */
  upload?: Maybe<Upload>;
  /** Reads a single `Writing` using its globally unique `ID`. */
  writing?: Maybe<Writing>;
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
export type QueryAllPrivateDocumentsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<PrivateDocumentsOrderBy>>;
  condition?: Maybe<PrivateDocumentCondition>;
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
export type QueryAllUploadsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<UploadsOrderBy>>;
  condition?: Maybe<UploadCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllWritingsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<WritingsOrderBy>>;
  condition?: Maybe<WritingCondition>;
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
export type QueryPersonByIdArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPrivateDocumentByIdArgs = {
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
export type QueryUploadByIdArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryWritingByIdArgs = {
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
export type QueryPersonArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPrivateDocumentArgs = {
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
export type QueryUploadArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryWritingArgs = {
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

/** All input for the `updatePrivateDocumentById` mutation. */
export type UpdatePrivateDocumentByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `PrivateDocument` being updated. */
  privateDocumentPatch: PrivateDocumentPatch;
  id: Scalars['UUID'];
};

/** All input for the `updatePrivateDocument` mutation. */
export type UpdatePrivateDocumentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `PrivateDocument` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `PrivateDocument` being updated. */
  privateDocumentPatch: PrivateDocumentPatch;
};

/** The output of our update `PrivateDocument` mutation. */
export type UpdatePrivateDocumentPayload = {
  __typename?: 'UpdatePrivateDocumentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `PrivateDocument` that was updated by this mutation. */
  privateDocument?: Maybe<PrivateDocument>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `PrivateDocument`. May be used by Relay 1. */
  privateDocumentEdge?: Maybe<PrivateDocumentsEdge>;
};


/** The output of our update `PrivateDocument` mutation. */
export type UpdatePrivateDocumentPayloadPrivateDocumentEdgeArgs = {
  orderBy?: Maybe<Array<PrivateDocumentsOrderBy>>;
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

/** All input for the `updateUploadById` mutation. */
export type UpdateUploadByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Upload` being updated. */
  uploadPatch: UploadPatch;
  id: Scalars['UUID'];
};

/** All input for the `updateUpload` mutation. */
export type UpdateUploadInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Upload` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Upload` being updated. */
  uploadPatch: UploadPatch;
};

/** The output of our update `Upload` mutation. */
export type UpdateUploadPayload = {
  __typename?: 'UpdateUploadPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Upload` that was updated by this mutation. */
  upload?: Maybe<Upload>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Upload`. May be used by Relay 1. */
  uploadEdge?: Maybe<UploadsEdge>;
};


/** The output of our update `Upload` mutation. */
export type UpdateUploadPayloadUploadEdgeArgs = {
  orderBy?: Maybe<Array<UploadsOrderBy>>;
};

/** All input for the `updateWritingById` mutation. */
export type UpdateWritingByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Writing` being updated. */
  writingPatch: WritingPatch;
  id: Scalars['UUID'];
};

/** All input for the `updateWriting` mutation. */
export type UpdateWritingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Writing` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Writing` being updated. */
  writingPatch: WritingPatch;
};

/** The output of our update `Writing` mutation. */
export type UpdateWritingPayload = {
  __typename?: 'UpdateWritingPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Writing` that was updated by this mutation. */
  writing?: Maybe<Writing>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Writing`. May be used by Relay 1. */
  writingEdge?: Maybe<WritingsEdge>;
};


/** The output of our update `Writing` mutation. */
export type UpdateWritingPayloadWritingEdgeArgs = {
  orderBy?: Maybe<Array<WritingsOrderBy>>;
};

export type Upload = Node & {
  __typename?: 'Upload';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['UUID'];
  documentId: Scalars['UUID'];
  personId: Scalars['UUID'];
  responseId: Scalars['UUID'];
};

/** A condition to be used against `Upload` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type UploadCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>;
};

/** An input for mutations affecting `Upload` */
export type UploadInput = {
  id?: Maybe<Scalars['UUID']>;
  documentId: Scalars['UUID'];
  personId: Scalars['UUID'];
  responseId: Scalars['UUID'];
};

/** Represents an update to a `Upload`. Fields that are set will be updated. */
export type UploadPatch = {
  id?: Maybe<Scalars['UUID']>;
  documentId?: Maybe<Scalars['UUID']>;
  personId?: Maybe<Scalars['UUID']>;
  responseId?: Maybe<Scalars['UUID']>;
};

/** A connection to a list of `Upload` values. */
export type UploadsConnection = {
  __typename?: 'UploadsConnection';
  /** A list of `Upload` objects. */
  nodes: Array<Upload>;
  /** A list of edges which contains the `Upload` and cursor to aid in pagination. */
  edges: Array<UploadsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Upload` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Upload` edge in the connection. */
export type UploadsEdge = {
  __typename?: 'UploadsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Upload` at the end of the edge. */
  node: Upload;
};

/** Methods to use when ordering `Upload`. */
export enum UploadsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}


export type Writing = Node & {
  __typename?: 'Writing';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['UUID'];
  documentId: Scalars['UUID'];
  personId: Scalars['UUID'];
  mdx: Scalars['String'];
};

/** A condition to be used against `Writing` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type WritingCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>;
};

/** An input for mutations affecting `Writing` */
export type WritingInput = {
  id?: Maybe<Scalars['UUID']>;
  documentId: Scalars['UUID'];
  personId: Scalars['UUID'];
  mdx: Scalars['String'];
};

/** Represents an update to a `Writing`. Fields that are set will be updated. */
export type WritingPatch = {
  id?: Maybe<Scalars['UUID']>;
  documentId?: Maybe<Scalars['UUID']>;
  personId?: Maybe<Scalars['UUID']>;
  mdx?: Maybe<Scalars['String']>;
};

/** A connection to a list of `Writing` values. */
export type WritingsConnection = {
  __typename?: 'WritingsConnection';
  /** A list of `Writing` objects. */
  nodes: Array<Writing>;
  /** A list of edges which contains the `Writing` and cursor to aid in pagination. */
  edges: Array<WritingsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Writing` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Writing` edge in the connection. */
export type WritingsEdge = {
  __typename?: 'WritingsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Writing` at the end of the edge. */
  node: Writing;
};

/** Methods to use when ordering `Writing`. */
export enum WritingsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

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