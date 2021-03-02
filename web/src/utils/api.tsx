import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
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
  /** A universally unique identifier as defined by [RFC 4122](https://tools.ietf.org/html/rfc4122). */
  UUID: any;
  /**
   * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
   */
  Datetime: string;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { [key: string]: any };
};

/** All input for the `addQuestionToEndOfQuestionnaire` mutation. */
export type AddQuestionToEndOfQuestionnaireInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  questionId?: Maybe<Scalars['UUID']>;
  questionnaireId?: Maybe<Scalars['UUID']>;
};

/** The output of our `addQuestionToEndOfQuestionnaire` mutation. */
export type AddQuestionToEndOfQuestionnairePayload = {
  __typename?: 'AddQuestionToEndOfQuestionnairePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  questionnaires?: Maybe<Array<Questionnaire>>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `addRelatedQuestionRelationship` mutation. */
export type AddRelatedQuestionRelationshipInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  firstQuestionId?: Maybe<Scalars['UUID']>;
  secondQuestionId?: Maybe<Scalars['UUID']>;
};

/** The output of our `addRelatedQuestionRelationship` mutation. */
export type AddRelatedQuestionRelationshipPayload = {
  __typename?: 'AddRelatedQuestionRelationshipPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  questions?: Maybe<Array<Question>>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
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

/** All input for the create `MatterContact` mutation. */
export type CreateMatterContactInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `MatterContact` to be created by this mutation. */
  matterContact: MatterContactInput;
};

/** The output of our create `MatterContact` mutation. */
export type CreateMatterContactPayload = {
  __typename?: 'CreateMatterContactPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `MatterContact` that was created by this mutation. */
  matterContact?: Maybe<MatterContact>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `MatterContact`. May be used by Relay 1. */
  matterContactEdge?: Maybe<MatterContactsEdge>;
};


/** The output of our create `MatterContact` mutation. */
export type CreateMatterContactPayloadMatterContactEdgeArgs = {
  orderBy?: Maybe<Array<MatterContactsOrderBy>>;
};

/** All input for the `createMatterDocumentFromUploadUrl` mutation. */
export type CreateMatterDocumentFromUploadUrlInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  matterId?: Maybe<Scalars['UUID']>;
  matterDocumentTemplateId?: Maybe<Scalars['UUID']>;
  uploadDocumentUrl?: Maybe<Scalars['String']>;
};

/** The output of our `createMatterDocumentFromUploadUrl` mutation. */
export type CreateMatterDocumentFromUploadUrlPayload = {
  __typename?: 'CreateMatterDocumentFromUploadUrlPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
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


/** The output of our `createMatterDocumentFromUploadUrl` mutation. */
export type CreateMatterDocumentFromUploadUrlPayloadMatterDocumentEdgeArgs = {
  orderBy?: Maybe<Array<MatterDocumentsOrderBy>>;
};

/** All input for the create `MatterDocumentTemplate` mutation. */
export type CreateMatterDocumentTemplateInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `MatterDocumentTemplate` to be created by this mutation. */
  matterDocumentTemplate: MatterDocumentTemplateInput;
};

/** The output of our create `MatterDocumentTemplate` mutation. */
export type CreateMatterDocumentTemplatePayload = {
  __typename?: 'CreateMatterDocumentTemplatePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `MatterDocumentTemplate` that was created by this mutation. */
  matterDocumentTemplate?: Maybe<MatterDocumentTemplate>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `MatterDocumentTemplate`. May be used by Relay 1. */
  matterDocumentTemplateEdge?: Maybe<MatterDocumentTemplatesEdge>;
};


/** The output of our create `MatterDocumentTemplate` mutation. */
export type CreateMatterDocumentTemplatePayloadMatterDocumentTemplateEdgeArgs = {
  orderBy?: Maybe<Array<MatterDocumentTemplatesOrderBy>>;
};

/** All input for the create `Matter` mutation. */
export type CreateMatterInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Matter` to be created by this mutation. */
  matter: MatterInput;
};

/** The output of our create `Matter` mutation. */
export type CreateMatterPayload = {
  __typename?: 'CreateMatterPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Matter` that was created by this mutation. */
  matter?: Maybe<Matter>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Person` that is related to this `Matter`. */
  personByPrimaryContactId?: Maybe<Person>;
  /** Reads a single `MatterTemplate` that is related to this `Matter`. */
  matterTemplateByMatterTemplateId?: Maybe<MatterTemplate>;
  /** An edge for our `Matter`. May be used by Relay 1. */
  matterEdge?: Maybe<MattersEdge>;
};


/** The output of our create `Matter` mutation. */
export type CreateMatterPayloadMatterEdgeArgs = {
  orderBy?: Maybe<Array<MattersOrderBy>>;
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
  /** Reads a single `MatterTemplate` that is related to this `Questionnaire`. */
  matterTemplateByMatterTemplateId?: Maybe<MatterTemplate>;
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

/** All input for the `createRelationship` mutation. */
export type CreateRelationshipInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  relationship?: Maybe<Scalars['String']>;
  fromId?: Maybe<Scalars['UUID']>;
  fromType?: Maybe<Scalars['String']>;
  toId?: Maybe<Scalars['UUID']>;
  toType?: Maybe<Scalars['String']>;
};

/** The output of our `createRelationship` mutation. */
export type CreateRelationshipPayload = {
  __typename?: 'CreateRelationshipPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  string?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
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

export type CurrentUserMatter = {
  __typename?: 'CurrentUserMatter';
  id?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  primaryContactId?: Maybe<Scalars['UUID']>;
  matterTemplateId?: Maybe<Scalars['UUID']>;
  matterTemplateName?: Maybe<Scalars['String']>;
  matterTemplateCategory?: Maybe<Scalars['String']>;
};

/** A connection to a list of `CurrentUserMatter` values. */
export type CurrentUserMattersConnection = {
  __typename?: 'CurrentUserMattersConnection';
  /** A list of `CurrentUserMatter` objects. */
  nodes: Array<CurrentUserMatter>;
  /** A list of edges which contains the `CurrentUserMatter` and cursor to aid in pagination. */
  edges: Array<CurrentUserMattersEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `CurrentUserMatter` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `CurrentUserMatter` edge in the connection. */
export type CurrentUserMattersEdge = {
  __typename?: 'CurrentUserMattersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `CurrentUserMatter` at the end of the edge. */
  node: CurrentUserMatter;
};

/** Methods to use when ordering `CurrentUserMatter`. */
export enum CurrentUserMattersOrderBy {
  Natural = 'NATURAL'
}



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
  /** An edge for our `Document`. May be used by Relay 1. */
  documentEdge?: Maybe<DocumentsEdge>;
};


/** The output of our delete `Document` mutation. */
export type DeleteDocumentPayloadDocumentEdgeArgs = {
  orderBy?: Maybe<Array<DocumentsOrderBy>>;
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

/** All input for the `deleteMatterContactById` mutation. */
export type DeleteMatterContactByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** All input for the `deleteMatterContact` mutation. */
export type DeleteMatterContactInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `MatterContact` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `MatterContact` mutation. */
export type DeleteMatterContactPayload = {
  __typename?: 'DeleteMatterContactPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `MatterContact` that was deleted by this mutation. */
  matterContact?: Maybe<MatterContact>;
  deletedMatterContactId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `MatterContact`. May be used by Relay 1. */
  matterContactEdge?: Maybe<MatterContactsEdge>;
};


/** The output of our delete `MatterContact` mutation. */
export type DeleteMatterContactPayloadMatterContactEdgeArgs = {
  orderBy?: Maybe<Array<MatterContactsOrderBy>>;
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

/** All input for the `deleteMatterDocumentTemplateById` mutation. */
export type DeleteMatterDocumentTemplateByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** All input for the `deleteMatterDocumentTemplate` mutation. */
export type DeleteMatterDocumentTemplateInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `MatterDocumentTemplate` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `MatterDocumentTemplate` mutation. */
export type DeleteMatterDocumentTemplatePayload = {
  __typename?: 'DeleteMatterDocumentTemplatePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `MatterDocumentTemplate` that was deleted by this mutation. */
  matterDocumentTemplate?: Maybe<MatterDocumentTemplate>;
  deletedMatterDocumentTemplateId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `MatterDocumentTemplate`. May be used by Relay 1. */
  matterDocumentTemplateEdge?: Maybe<MatterDocumentTemplatesEdge>;
};


/** The output of our delete `MatterDocumentTemplate` mutation. */
export type DeleteMatterDocumentTemplatePayloadMatterDocumentTemplateEdgeArgs = {
  orderBy?: Maybe<Array<MatterDocumentTemplatesOrderBy>>;
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
  /** Reads a single `MatterTemplate` that is related to this `Matter`. */
  matterTemplateByMatterTemplateId?: Maybe<MatterTemplate>;
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
  /** Reads a single `MatterTemplate` that is related to this `Questionnaire`. */
  matterTemplateByMatterTemplateId?: Maybe<MatterTemplate>;
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

export type Document = Node & {
  __typename?: 'Document';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['UUID'];
  filename: Scalars['String'];
  documentableTableName: Scalars['String'];
  createdAt: Scalars['Datetime'];
  updatedAt: Scalars['Datetime'];
  /** Reads and enables pagination through a set of `MatterDocument`. */
  matterDocumentsByDocumentId: MatterDocumentsConnection;
  /** Reads and enables pagination through a set of `ResponseDocument`. */
  responseDocumentsByDocumentId: ResponseDocumentsConnection;
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
  addressorId: Scalars['UUID'];
  addresseeId: Scalars['UUID'];
  lobIdentifier?: Maybe<Scalars['String']>;
  body: Scalars['JSON'];
  createdAt?: Maybe<Scalars['Datetime']>;
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
  /** Checks for equality with the object’s `lobIdentifier` field. */
  lobIdentifier?: Maybe<Scalars['String']>;
};

/** An input for mutations affecting `Letter` */
export type LetterInput = {
  id?: Maybe<Scalars['UUID']>;
  addressorId: Scalars['UUID'];
  addresseeId: Scalars['UUID'];
  lobIdentifier?: Maybe<Scalars['String']>;
  body: Scalars['JSON'];
  createdAt?: Maybe<Scalars['Datetime']>;
};

/** Represents an update to a `Letter`. Fields that are set will be updated. */
export type LetterPatch = {
  id?: Maybe<Scalars['UUID']>;
  addressorId?: Maybe<Scalars['UUID']>;
  addresseeId?: Maybe<Scalars['UUID']>;
  lobIdentifier?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['JSON']>;
  createdAt?: Maybe<Scalars['Datetime']>;
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
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A legal matter, managed by Neon Law admin. */
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
  /** Reads a single `MatterTemplate` that is related to this `Matter`. */
  matterTemplateByMatterTemplateId?: Maybe<MatterTemplate>;
};

/** A condition to be used against `Matter` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type MatterCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `primaryContactId` field. */
  primaryContactId?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `matterTemplateId` field. */
  matterTemplateId?: Maybe<Scalars['UUID']>;
};

export type MatterContact = Node & {
  __typename?: 'MatterContact';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['UUID'];
  contactId: Scalars['UUID'];
  matterId: Scalars['UUID'];
  createdAt: Scalars['Datetime'];
  updatedAt: Scalars['Datetime'];
  role: Scalars['String'];
};

/**
 * A condition to be used against `MatterContact` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type MatterContactCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>;
};

/** An input for mutations affecting `MatterContact` */
export type MatterContactInput = {
  id?: Maybe<Scalars['UUID']>;
  contactId: Scalars['UUID'];
  matterId: Scalars['UUID'];
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  role: Scalars['String'];
};

/** Represents an update to a `MatterContact`. Fields that are set will be updated. */
export type MatterContactPatch = {
  id?: Maybe<Scalars['UUID']>;
  contactId?: Maybe<Scalars['UUID']>;
  matterId?: Maybe<Scalars['UUID']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  role?: Maybe<Scalars['String']>;
};

/** A connection to a list of `MatterContact` values. */
export type MatterContactsConnection = {
  __typename?: 'MatterContactsConnection';
  /** A list of `MatterContact` objects. */
  nodes: Array<MatterContact>;
  /** A list of edges which contains the `MatterContact` and cursor to aid in pagination. */
  edges: Array<MatterContactsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `MatterContact` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `MatterContact` edge in the connection. */
export type MatterContactsEdge = {
  __typename?: 'MatterContactsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `MatterContact` at the end of the edge. */
  node: MatterContact;
};

/** Methods to use when ordering `MatterContact`. */
export enum MatterContactsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type MatterDocument = Node & {
  __typename?: 'MatterDocument';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['UUID'];
  documentId: Scalars['UUID'];
  authorId: Scalars['UUID'];
  matterId: Scalars['UUID'];
  matterDocumentTemplateId: Scalars['UUID'];
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

export type MatterDocumentTemplate = Node & {
  __typename?: 'MatterDocumentTemplate';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['UUID'];
  name: Scalars['String'];
  description: Scalars['String'];
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
};

/**
 * A condition to be used against `MatterDocumentTemplate` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type MatterDocumentTemplateCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>;
};

/** An input for mutations affecting `MatterDocumentTemplate` */
export type MatterDocumentTemplateInput = {
  id?: Maybe<Scalars['UUID']>;
  name: Scalars['String'];
  description: Scalars['String'];
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
};

/** Represents an update to a `MatterDocumentTemplate`. Fields that are set will be updated. */
export type MatterDocumentTemplatePatch = {
  id?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
};

/** A connection to a list of `MatterDocumentTemplate` values. */
export type MatterDocumentTemplatesConnection = {
  __typename?: 'MatterDocumentTemplatesConnection';
  /** A list of `MatterDocumentTemplate` objects. */
  nodes: Array<MatterDocumentTemplate>;
  /** A list of edges which contains the `MatterDocumentTemplate` and cursor to aid in pagination. */
  edges: Array<MatterDocumentTemplatesEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `MatterDocumentTemplate` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `MatterDocumentTemplate` edge in the connection. */
export type MatterDocumentTemplatesEdge = {
  __typename?: 'MatterDocumentTemplatesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `MatterDocumentTemplate` at the end of the edge. */
  node: MatterDocumentTemplate;
};

/** Methods to use when ordering `MatterDocumentTemplate`. */
export enum MatterDocumentTemplatesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** An input for mutations affecting `Matter` */
export type MatterInput = {
  id?: Maybe<Scalars['UUID']>;
  name: Scalars['String'];
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  primaryContactId?: Maybe<Scalars['UUID']>;
  matterTemplateId: Scalars['UUID'];
};

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
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  PrimaryContactIdAsc = 'PRIMARY_CONTACT_ID_ASC',
  PrimaryContactIdDesc = 'PRIMARY_CONTACT_ID_DESC',
  MatterTemplateIdAsc = 'MATTER_TEMPLATE_ID_ASC',
  MatterTemplateIdDesc = 'MATTER_TEMPLATE_ID_DESC',
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
  category: Scalars['String'];
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  active: Scalars['Boolean'];
  /** Reads and enables pagination through a set of `Questionnaire`. */
  questionnairesByMatterTemplateId: QuestionnairesConnection;
  /** Reads and enables pagination through a set of `Matter`. */
  mattersByMatterTemplateId: MattersConnection;
};


export type MatterTemplateQuestionnairesByMatterTemplateIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<QuestionnairesOrderBy>>;
  condition?: Maybe<QuestionnaireCondition>;
};


export type MatterTemplateMattersByMatterTemplateIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<MattersOrderBy>>;
  condition?: Maybe<MatterCondition>;
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
  /** Checks for equality with the object’s `category` field. */
  category?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `active` field. */
  active?: Maybe<Scalars['Boolean']>;
};

/** An input for mutations affecting `MatterTemplate` */
export type MatterTemplateInput = {
  id?: Maybe<Scalars['UUID']>;
  name: Scalars['String'];
  javascriptModule: Scalars['String'];
  category?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  active?: Maybe<Scalars['Boolean']>;
};

/** Represents an update to a `MatterTemplate`. Fields that are set will be updated. */
export type MatterTemplatePatch = {
  id?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  javascriptModule?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  active?: Maybe<Scalars['Boolean']>;
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
  CategoryAsc = 'CATEGORY_ASC',
  CategoryDesc = 'CATEGORY_DESC',
  ActiveAsc = 'ACTIVE_ASC',
  ActiveDesc = 'ACTIVE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `Address`. */
  createAddress?: Maybe<CreateAddressPayload>;
  /** Creates a single `Letter`. */
  createLetter?: Maybe<CreateLetterPayload>;
  /** Creates a single `Matter`. */
  createMatter?: Maybe<CreateMatterPayload>;
  /** Creates a single `MatterContact`. */
  createMatterContact?: Maybe<CreateMatterContactPayload>;
  /** Creates a single `MatterDocumentTemplate`. */
  createMatterDocumentTemplate?: Maybe<CreateMatterDocumentTemplatePayload>;
  /** Creates a single `MatterTemplate`. */
  createMatterTemplate?: Maybe<CreateMatterTemplatePayload>;
  /** Creates a single `Question`. */
  createQuestion?: Maybe<CreateQuestionPayload>;
  /** Creates a single `Questionnaire`. */
  createQuestionnaire?: Maybe<CreateQuestionnairePayload>;
  /** Creates a single `QuestionnaireResponse`. */
  createQuestionnaireResponse?: Maybe<CreateQuestionnaireResponsePayload>;
  /** Creates a single `Response`. */
  createResponse?: Maybe<CreateResponsePayload>;
  /** Updates a single `Address` using its globally unique id and a patch. */
  updateAddress?: Maybe<UpdateAddressPayload>;
  /** Updates a single `Address` using a unique key and a patch. */
  updateAddressById?: Maybe<UpdateAddressPayload>;
  /** Updates a single `Letter` using its globally unique id and a patch. */
  updateLetter?: Maybe<UpdateLetterPayload>;
  /** Updates a single `Letter` using a unique key and a patch. */
  updateLetterById?: Maybe<UpdateLetterPayload>;
  /** Updates a single `Matter` using its globally unique id and a patch. */
  updateMatter?: Maybe<UpdateMatterPayload>;
  /** Updates a single `Matter` using a unique key and a patch. */
  updateMatterById?: Maybe<UpdateMatterPayload>;
  /** Updates a single `MatterContact` using its globally unique id and a patch. */
  updateMatterContact?: Maybe<UpdateMatterContactPayload>;
  /** Updates a single `MatterContact` using a unique key and a patch. */
  updateMatterContactById?: Maybe<UpdateMatterContactPayload>;
  /** Updates a single `MatterDocumentTemplate` using its globally unique id and a patch. */
  updateMatterDocumentTemplate?: Maybe<UpdateMatterDocumentTemplatePayload>;
  /** Updates a single `MatterDocumentTemplate` using a unique key and a patch. */
  updateMatterDocumentTemplateById?: Maybe<UpdateMatterDocumentTemplatePayload>;
  /** Updates a single `MatterTemplate` using its globally unique id and a patch. */
  updateMatterTemplate?: Maybe<UpdateMatterTemplatePayload>;
  /** Updates a single `MatterTemplate` using a unique key and a patch. */
  updateMatterTemplateById?: Maybe<UpdateMatterTemplatePayload>;
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
  /** Deletes a single `Address` using its globally unique id. */
  deleteAddress?: Maybe<DeleteAddressPayload>;
  /** Deletes a single `Address` using a unique key. */
  deleteAddressById?: Maybe<DeleteAddressPayload>;
  /** Deletes a single `Document` using its globally unique id. */
  deleteDocument?: Maybe<DeleteDocumentPayload>;
  /** Deletes a single `Document` using a unique key. */
  deleteDocumentById?: Maybe<DeleteDocumentPayload>;
  /** Deletes a single `Letter` using its globally unique id. */
  deleteLetter?: Maybe<DeleteLetterPayload>;
  /** Deletes a single `Letter` using a unique key. */
  deleteLetterById?: Maybe<DeleteLetterPayload>;
  /** Deletes a single `Matter` using its globally unique id. */
  deleteMatter?: Maybe<DeleteMatterPayload>;
  /** Deletes a single `Matter` using a unique key. */
  deleteMatterById?: Maybe<DeleteMatterPayload>;
  /** Deletes a single `MatterContact` using its globally unique id. */
  deleteMatterContact?: Maybe<DeleteMatterContactPayload>;
  /** Deletes a single `MatterContact` using a unique key. */
  deleteMatterContactById?: Maybe<DeleteMatterContactPayload>;
  /** Deletes a single `MatterDocument` using its globally unique id. */
  deleteMatterDocument?: Maybe<DeleteMatterDocumentPayload>;
  /** Deletes a single `MatterDocument` using a unique key. */
  deleteMatterDocumentById?: Maybe<DeleteMatterDocumentPayload>;
  /** Deletes a single `MatterDocumentTemplate` using its globally unique id. */
  deleteMatterDocumentTemplate?: Maybe<DeleteMatterDocumentTemplatePayload>;
  /** Deletes a single `MatterDocumentTemplate` using a unique key. */
  deleteMatterDocumentTemplateById?: Maybe<DeleteMatterDocumentTemplatePayload>;
  /** Deletes a single `MatterTemplate` using its globally unique id. */
  deleteMatterTemplate?: Maybe<DeleteMatterTemplatePayload>;
  /** Deletes a single `MatterTemplate` using a unique key. */
  deleteMatterTemplateById?: Maybe<DeleteMatterTemplatePayload>;
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
  /** Deletes a single `ResponseDocument` using its globally unique id. */
  deleteResponseDocument?: Maybe<DeleteResponseDocumentPayload>;
  /** Deletes a single `ResponseDocument` using a unique key. */
  deleteResponseDocumentById?: Maybe<DeleteResponseDocumentPayload>;
  addQuestionToEndOfQuestionnaire?: Maybe<AddQuestionToEndOfQuestionnairePayload>;
  addRelatedQuestionRelationship?: Maybe<AddRelatedQuestionRelationshipPayload>;
  createMatterDocumentFromUploadUrl?: Maybe<CreateMatterDocumentFromUploadUrlPayload>;
  createPrimaryKeyIdIfNotExists?: Maybe<CreatePrimaryKeyIdIfNotExistsPayload>;
  createRelationship?: Maybe<CreateRelationshipPayload>;
  createRoleIfNotExists?: Maybe<CreateRoleIfNotExistsPayload>;
  updateQuestionnaireFromNeo4J?: Maybe<UpdateQuestionnaireFromNeo4JPayload>;
  getTransloaditToken?: Maybe<GetTransloaditTokenPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateAddressArgs = {
  input: CreateAddressInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateLetterArgs = {
  input: CreateLetterInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateMatterArgs = {
  input: CreateMatterInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateMatterContactArgs = {
  input: CreateMatterContactInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateMatterDocumentTemplateArgs = {
  input: CreateMatterDocumentTemplateInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateMatterTemplateArgs = {
  input: CreateMatterTemplateInput;
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
export type MutationUpdateAddressArgs = {
  input: UpdateAddressInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAddressByIdArgs = {
  input: UpdateAddressByIdInput;
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
export type MutationUpdateMatterContactArgs = {
  input: UpdateMatterContactInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMatterContactByIdArgs = {
  input: UpdateMatterContactByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMatterDocumentTemplateArgs = {
  input: UpdateMatterDocumentTemplateInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMatterDocumentTemplateByIdArgs = {
  input: UpdateMatterDocumentTemplateByIdInput;
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
export type MutationDeleteMatterContactArgs = {
  input: DeleteMatterContactInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMatterContactByIdArgs = {
  input: DeleteMatterContactByIdInput;
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
export type MutationDeleteMatterDocumentTemplateArgs = {
  input: DeleteMatterDocumentTemplateInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMatterDocumentTemplateByIdArgs = {
  input: DeleteMatterDocumentTemplateByIdInput;
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
export type MutationAddQuestionToEndOfQuestionnaireArgs = {
  input: AddQuestionToEndOfQuestionnaireInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationAddRelatedQuestionRelationshipArgs = {
  input: AddRelatedQuestionRelationshipInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateMatterDocumentFromUploadUrlArgs = {
  input: CreateMatterDocumentFromUploadUrlInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreatePrimaryKeyIdIfNotExistsArgs = {
  input: CreatePrimaryKeyIdIfNotExistsInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateRelationshipArgs = {
  input: CreateRelationshipInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateRoleIfNotExistsArgs = {
  input: CreateRoleIfNotExistsInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateQuestionnaireFromNeo4JArgs = {
  input: UpdateQuestionnaireFromNeo4JInput;
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

/** A connection to a list of `Person` values. */
export type PeopleConnection = {
  __typename?: 'PeopleConnection';
  /** A list of `Person` objects. */
  nodes: Array<Person>;
  /** A list of edges which contains the `Person` and cursor to aid in pagination. */
  edges: Array<PeopleEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Person` you could get from the connection. */
  totalCount: Scalars['Int'];
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

/** A condition to be used against `Person` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type PersonCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `email` field. */
  email?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `sub` field. */
  sub?: Maybe<Scalars['String']>;
};

/** Represents an update to a `Person`. Fields that are set will be updated. */
export type PersonPatch = {
  /** The name of a person */
  name?: Maybe<Scalars['String']>;
  sub?: Maybe<Scalars['String']>;
  flags?: Maybe<Scalars['String']>;
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
  /** Reads and enables pagination through a set of `Address`. */
  allAddresses?: Maybe<AddressesConnection>;
  /** Reads and enables pagination through a set of `CurrentUserMatter`. */
  allCurrentUserMatters?: Maybe<CurrentUserMattersConnection>;
  /** Reads and enables pagination through a set of `Letter`. */
  allLetters?: Maybe<LettersConnection>;
  /** Reads and enables pagination through a set of `Matter`. */
  allMatters?: Maybe<MattersConnection>;
  /** Reads and enables pagination through a set of `MatterContact`. */
  allMatterContacts?: Maybe<MatterContactsConnection>;
  /** Reads and enables pagination through a set of `MatterDocumentTemplate`. */
  allMatterDocumentTemplates?: Maybe<MatterDocumentTemplatesConnection>;
  /** Reads and enables pagination through a set of `MatterTemplate`. */
  allMatterTemplates?: Maybe<MatterTemplatesConnection>;
  /** Reads and enables pagination through a set of `Person`. */
  allPeople?: Maybe<PeopleConnection>;
  /** Reads and enables pagination through a set of `Question`. */
  allQuestions?: Maybe<QuestionsConnection>;
  /** Reads and enables pagination through a set of `Questionnaire`. */
  allQuestionnaires?: Maybe<QuestionnairesConnection>;
  /** Reads and enables pagination through a set of `QuestionnaireResponse`. */
  allQuestionnaireResponses?: Maybe<QuestionnaireResponsesConnection>;
  /** Reads and enables pagination through a set of `Response`. */
  allResponses?: Maybe<ResponsesConnection>;
  addressById?: Maybe<Address>;
  documentById?: Maybe<Document>;
  letterById?: Maybe<Letter>;
  matterById?: Maybe<Matter>;
  matterContactById?: Maybe<MatterContact>;
  matterDocumentById?: Maybe<MatterDocument>;
  matterDocumentTemplateById?: Maybe<MatterDocumentTemplate>;
  matterTemplateById?: Maybe<MatterTemplate>;
  personById?: Maybe<Person>;
  questionById?: Maybe<Question>;
  questionnaireById?: Maybe<Questionnaire>;
  questionnaireResponseById?: Maybe<QuestionnaireResponse>;
  responseById?: Maybe<Response>;
  responseDocumentById?: Maybe<ResponseDocument>;
  getCurrentUser?: Maybe<Person>;
  responsePersonMatch?: Maybe<Scalars['Boolean']>;
  /** Reads a single `Address` using its globally unique `ID`. */
  address?: Maybe<Address>;
  /** Reads a single `Document` using its globally unique `ID`. */
  document?: Maybe<Document>;
  /** Reads a single `Letter` using its globally unique `ID`. */
  letter?: Maybe<Letter>;
  /** Reads a single `Matter` using its globally unique `ID`. */
  matter?: Maybe<Matter>;
  /** Reads a single `MatterContact` using its globally unique `ID`. */
  matterContact?: Maybe<MatterContact>;
  /** Reads a single `MatterDocument` using its globally unique `ID`. */
  matterDocument?: Maybe<MatterDocument>;
  /** Reads a single `MatterDocumentTemplate` using its globally unique `ID`. */
  matterDocumentTemplate?: Maybe<MatterDocumentTemplate>;
  /** Reads a single `MatterTemplate` using its globally unique `ID`. */
  matterTemplate?: Maybe<MatterTemplate>;
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
  /** Reads a single `ResponseDocument` using its globally unique `ID`. */
  responseDocument?: Maybe<ResponseDocument>;
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
export type QueryAllCurrentUserMattersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<CurrentUserMattersOrderBy>>;
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
export type QueryAllMattersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<MattersOrderBy>>;
  condition?: Maybe<MatterCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllMatterContactsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<MatterContactsOrderBy>>;
  condition?: Maybe<MatterContactCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllMatterDocumentTemplatesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<MatterDocumentTemplatesOrderBy>>;
  condition?: Maybe<MatterDocumentTemplateCondition>;
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
export type QueryAllPeopleArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<PeopleOrderBy>>;
  condition?: Maybe<PersonCondition>;
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
export type QueryAddressByIdArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryDocumentByIdArgs = {
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
export type QueryMatterContactByIdArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMatterDocumentByIdArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMatterDocumentTemplateByIdArgs = {
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
export type QueryLetterArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMatterArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMatterContactArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMatterDocumentArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMatterDocumentTemplateArgs = {
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
  helpText?: Maybe<Scalars['JSON']>;
  /** Reads and enables pagination through a set of `Response`. */
  responsesByQuestionId: ResponsesConnection;
  isLinkedToQuestionnaire?: Maybe<Scalars['Boolean']>;
  relatedQuestions?: Maybe<Array<Maybe<Question>>>;
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
  helpText?: Maybe<Scalars['JSON']>;
};

export type Questionnaire = Node & {
  __typename?: 'Questionnaire';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['UUID'];
  /** The name of the questionnaire */
  name: Scalars['String'];
  createdAt: Scalars['Datetime'];
  updatedAt: Scalars['Datetime'];
  matterTemplateId: Scalars['UUID'];
  questionTree: Scalars['JSON'];
  /** Reads a single `MatterTemplate` that is related to this `Questionnaire`. */
  matterTemplateByMatterTemplateId?: Maybe<MatterTemplate>;
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
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `matterTemplateId` field. */
  matterTemplateId?: Maybe<Scalars['UUID']>;
};

/** An input for mutations affecting `Questionnaire` */
export type QuestionnaireInput = {
  /** The name of the questionnaire */
  name: Scalars['String'];
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  matterTemplateId: Scalars['UUID'];
  questionTree?: Maybe<Scalars['JSON']>;
};

/** Represents an update to a `Questionnaire`. Fields that are set will be updated. */
export type QuestionnairePatch = {
  id?: Maybe<Scalars['UUID']>;
  /** The name of the questionnaire */
  name?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  matterTemplateId?: Maybe<Scalars['UUID']>;
  questionTree?: Maybe<Scalars['JSON']>;
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
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  MatterTemplateIdAsc = 'MATTER_TEMPLATE_ID_ASC',
  MatterTemplateIdDesc = 'MATTER_TEMPLATE_ID_DESC',
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
  helpText?: Maybe<Scalars['JSON']>;
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
  answer: Scalars['JSON'];
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
  responseId: Scalars['UUID'];
  /** Reads a single `Document` that is related to this `ResponseDocument`. */
  documentByDocumentId?: Maybe<Document>;
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
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** An input for mutations affecting `Response` */
export type ResponseInput = {
  questionnaireResponseId: Scalars['UUID'];
  questionId: Scalars['UUID'];
  answer: Scalars['JSON'];
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
};

/** Represents an update to a `Response`. Fields that are set will be updated. */
export type ResponsePatch = {
  id?: Maybe<Scalars['UUID']>;
  questionnaireResponseId?: Maybe<Scalars['UUID']>;
  questionId?: Maybe<Scalars['UUID']>;
  answer?: Maybe<Scalars['JSON']>;
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
  /** Reads a single `Person` that is related to this `Address`. */
  personByPersonId?: Maybe<Person>;
  /** An edge for our `Address`. May be used by Relay 1. */
  addressEdge?: Maybe<AddressesEdge>;
};


/** The output of our update `Address` mutation. */
export type UpdateAddressPayloadAddressEdgeArgs = {
  orderBy?: Maybe<Array<AddressesOrderBy>>;
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

/** All input for the `updateMatterContactById` mutation. */
export type UpdateMatterContactByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `MatterContact` being updated. */
  matterContactPatch: MatterContactPatch;
  id: Scalars['UUID'];
};

/** All input for the `updateMatterContact` mutation. */
export type UpdateMatterContactInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `MatterContact` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `MatterContact` being updated. */
  matterContactPatch: MatterContactPatch;
};

/** The output of our update `MatterContact` mutation. */
export type UpdateMatterContactPayload = {
  __typename?: 'UpdateMatterContactPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `MatterContact` that was updated by this mutation. */
  matterContact?: Maybe<MatterContact>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `MatterContact`. May be used by Relay 1. */
  matterContactEdge?: Maybe<MatterContactsEdge>;
};


/** The output of our update `MatterContact` mutation. */
export type UpdateMatterContactPayloadMatterContactEdgeArgs = {
  orderBy?: Maybe<Array<MatterContactsOrderBy>>;
};

/** All input for the `updateMatterDocumentTemplateById` mutation. */
export type UpdateMatterDocumentTemplateByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `MatterDocumentTemplate` being updated. */
  matterDocumentTemplatePatch: MatterDocumentTemplatePatch;
  id: Scalars['UUID'];
};

/** All input for the `updateMatterDocumentTemplate` mutation. */
export type UpdateMatterDocumentTemplateInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `MatterDocumentTemplate` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `MatterDocumentTemplate` being updated. */
  matterDocumentTemplatePatch: MatterDocumentTemplatePatch;
};

/** The output of our update `MatterDocumentTemplate` mutation. */
export type UpdateMatterDocumentTemplatePayload = {
  __typename?: 'UpdateMatterDocumentTemplatePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `MatterDocumentTemplate` that was updated by this mutation. */
  matterDocumentTemplate?: Maybe<MatterDocumentTemplate>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `MatterDocumentTemplate`. May be used by Relay 1. */
  matterDocumentTemplateEdge?: Maybe<MatterDocumentTemplatesEdge>;
};


/** The output of our update `MatterDocumentTemplate` mutation. */
export type UpdateMatterDocumentTemplatePayloadMatterDocumentTemplateEdgeArgs = {
  orderBy?: Maybe<Array<MatterDocumentTemplatesOrderBy>>;
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
  /** Reads a single `MatterTemplate` that is related to this `Matter`. */
  matterTemplateByMatterTemplateId?: Maybe<MatterTemplate>;
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

/** All input for the `updateQuestionnaireFromNeo4J` mutation. */
export type UpdateQuestionnaireFromNeo4JInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  questionnaireId?: Maybe<Scalars['UUID']>;
};

/** The output of our `updateQuestionnaireFromNeo4J` mutation. */
export type UpdateQuestionnaireFromNeo4JPayload = {
  __typename?: 'UpdateQuestionnaireFromNeo4JPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  questionnaire?: Maybe<Questionnaire>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `MatterTemplate` that is related to this `Questionnaire`. */
  matterTemplateByMatterTemplateId?: Maybe<MatterTemplate>;
  /** An edge for our `Questionnaire`. May be used by Relay 1. */
  questionnaireEdge?: Maybe<QuestionnairesEdge>;
};


/** The output of our `updateQuestionnaireFromNeo4J` mutation. */
export type UpdateQuestionnaireFromNeo4JPayloadQuestionnaireEdgeArgs = {
  orderBy?: Maybe<Array<QuestionnairesOrderBy>>;
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
  /** Reads a single `MatterTemplate` that is related to this `Questionnaire`. */
  matterTemplateByMatterTemplateId?: Maybe<MatterTemplate>;
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


export type AllActiveMatterTemplatesByCategoryQueryVariables = Exact<{
  category: Scalars['String'];
}>;


export type AllActiveMatterTemplatesByCategoryQuery = (
  { __typename?: 'Query' }
  & { allMatterTemplates?: Maybe<(
    { __typename?: 'MatterTemplatesConnection' }
    & { nodes: Array<(
      { __typename?: 'MatterTemplate' }
      & Pick<MatterTemplate, 'id' | 'name' | 'javascriptModule' | 'category'>
      & { questionnairesByMatterTemplateId: (
        { __typename?: 'QuestionnairesConnection' }
        & { nodes: Array<(
          { __typename?: 'Questionnaire' }
          & Pick<Questionnaire, 'id' | 'name'>
        )> }
      ) }
    )> }
  )> }
);

export type AllAddressesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllAddressesQuery = (
  { __typename?: 'Query' }
  & { allAddresses?: Maybe<(
    { __typename?: 'AddressesConnection' }
    & { nodes: Array<(
      { __typename?: 'Address' }
      & Pick<Address, 'id' | 'name'>
    )> }
  )> }
);

export type AllCurrentUserMattersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCurrentUserMattersQuery = (
  { __typename?: 'Query' }
  & { allCurrentUserMatters?: Maybe<(
    { __typename?: 'CurrentUserMattersConnection' }
    & { nodes: Array<(
      { __typename?: 'CurrentUserMatter' }
      & Pick<CurrentUserMatter, 'id' | 'primaryContactId' | 'matterTemplateId' | 'matterTemplateName' | 'matterTemplateCategory'>
    )> }
  )> }
);

export type AllMatterDocumentTemplatesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllMatterDocumentTemplatesQuery = (
  { __typename?: 'Query' }
  & { allMatterDocumentTemplates?: Maybe<(
    { __typename?: 'MatterDocumentTemplatesConnection' }
    & { nodes: Array<(
      { __typename?: 'MatterDocumentTemplate' }
      & Pick<MatterDocumentTemplate, 'id' | 'name' | 'description'>
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
      & Pick<MatterTemplate, 'id' | 'name' | 'javascriptModule' | 'category'>
    )> }
  )> }
);

export type AllMattersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllMattersQuery = (
  { __typename?: 'Query' }
  & { allMatters?: Maybe<(
    { __typename?: 'MattersConnection' }
    & { nodes: Array<(
      { __typename?: 'Matter' }
      & Pick<Matter, 'id' | 'name' | 'createdAt' | 'updatedAt'>
      & { personByPrimaryContactId?: Maybe<(
        { __typename?: 'Person' }
        & Pick<Person, 'id' | 'name' | 'email'>
      )>, matterTemplateByMatterTemplateId?: Maybe<(
        { __typename?: 'MatterTemplate' }
        & Pick<MatterTemplate, 'id' | 'name' | 'category'>
      )> }
    )> }
  )> }
);

export type AllPeopleQueryVariables = Exact<{ [key: string]: never; }>;


export type AllPeopleQuery = (
  { __typename?: 'Query' }
  & { allPeople?: Maybe<(
    { __typename?: 'PeopleConnection' }
    & { nodes: Array<(
      { __typename?: 'Person' }
      & Pick<Person, 'id' | 'name' | 'email'>
    )> }
  )> }
);

export type AllQuestionnairesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllQuestionnairesQuery = (
  { __typename?: 'Query' }
  & { allQuestionnaires?: Maybe<(
    { __typename?: 'QuestionnairesConnection' }
    & { nodes: Array<(
      { __typename?: 'Questionnaire' }
      & Pick<Questionnaire, 'id' | 'name' | 'createdAt' | 'updatedAt'>
      & { matterTemplateByMatterTemplateId?: Maybe<(
        { __typename?: 'MatterTemplate' }
        & Pick<MatterTemplate, 'id' | 'name' | 'category'>
      )> }
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
      & Pick<Question, 'id' | 'options' | 'questionType' | 'prompt' | 'helpText'>
    )> }
  )> }
);

export type CreateLetterMutationVariables = Exact<{
  body: Scalars['JSON'];
  addressorId: Scalars['UUID'];
  addresseeId: Scalars['UUID'];
}>;


export type CreateLetterMutation = (
  { __typename?: 'Mutation' }
  & { createLetter?: Maybe<(
    { __typename?: 'CreateLetterPayload' }
    & { letter?: Maybe<(
      { __typename?: 'Letter' }
      & Pick<Letter, 'id' | 'createdAt' | 'body' | 'addressorId' | 'addresseeId'>
    )> }
  )> }
);

export type CreateMatterMutationVariables = Exact<{
  name: Scalars['String'];
  matterTemplateId: Scalars['UUID'];
  primaryContactId: Scalars['UUID'];
}>;


export type CreateMatterMutation = (
  { __typename?: 'Mutation' }
  & { createMatter?: Maybe<(
    { __typename?: 'CreateMatterPayload' }
    & { matter?: Maybe<(
      { __typename?: 'Matter' }
      & Pick<Matter, 'id' | 'createdAt' | 'updatedAt'>
    )> }
  )> }
);

export type CreateMatterDocumentFromUploadUrlMutationVariables = Exact<{
  matterDocumentTemplateId: Scalars['UUID'];
  matterId: Scalars['UUID'];
  uploadDocumentUrl: Scalars['String'];
}>;


export type CreateMatterDocumentFromUploadUrlMutation = (
  { __typename?: 'Mutation' }
  & { createMatterDocumentFromUploadUrl?: Maybe<(
    { __typename?: 'CreateMatterDocumentFromUploadUrlPayload' }
    & { matterDocument?: Maybe<(
      { __typename?: 'MatterDocument' }
      & Pick<MatterDocument, 'id'>
    )> }
  )> }
);

export type CreateMatterDocumentTemplateMutationVariables = Exact<{
  name: Scalars['String'];
  description: Scalars['String'];
}>;


export type CreateMatterDocumentTemplateMutation = (
  { __typename?: 'Mutation' }
  & { createMatterDocumentTemplate?: Maybe<(
    { __typename?: 'CreateMatterDocumentTemplatePayload' }
    & { matterDocumentTemplate?: Maybe<(
      { __typename?: 'MatterDocumentTemplate' }
      & Pick<MatterDocumentTemplate, 'id' | 'name' | 'description'>
    )> }
  )> }
);

export type CreateMatterTemplateMutationVariables = Exact<{
  name: Scalars['String'];
  javascriptModule: Scalars['String'];
  category: Scalars['String'];
}>;


export type CreateMatterTemplateMutation = (
  { __typename?: 'Mutation' }
  & { createMatterTemplate?: Maybe<(
    { __typename?: 'CreateMatterTemplatePayload' }
    & { matterTemplate?: Maybe<(
      { __typename?: 'MatterTemplate' }
      & Pick<MatterTemplate, 'id' | 'name' | 'javascriptModule' | 'category'>
    )> }
  )> }
);

export type CreateQuestionMutationVariables = Exact<{
  options?: Maybe<Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>>;
  questionType: Scalars['String'];
  prompt: Scalars['String'];
  helpText?: Maybe<Scalars['JSON']>;
}>;


export type CreateQuestionMutation = (
  { __typename?: 'Mutation' }
  & { createQuestion?: Maybe<(
    { __typename?: 'CreateQuestionPayload' }
    & { question?: Maybe<(
      { __typename?: 'Question' }
      & Pick<Question, 'id' | 'options' | 'questionType' | 'prompt' | 'helpText'>
    )> }
  )> }
);

export type CreateQuestionnaireMutationVariables = Exact<{
  name: Scalars['String'];
  matterTemplateId: Scalars['UUID'];
}>;


export type CreateQuestionnaireMutation = (
  { __typename?: 'Mutation' }
  & { createQuestionnaire?: Maybe<(
    { __typename?: 'CreateQuestionnairePayload' }
    & { questionnaire?: Maybe<(
      { __typename?: 'Questionnaire' }
      & Pick<Questionnaire, 'id' | 'createdAt' | 'updatedAt'>
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

export type DeleteMatterByIdMutationVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type DeleteMatterByIdMutation = (
  { __typename?: 'Mutation' }
  & { deleteMatterById?: Maybe<(
    { __typename?: 'DeleteMatterPayload' }
    & { matter?: Maybe<(
      { __typename?: 'Matter' }
      & Pick<Matter, 'id'>
    )> }
  )> }
);

export type DeleteMatterDocumentTemplateByIdMutationVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type DeleteMatterDocumentTemplateByIdMutation = (
  { __typename?: 'Mutation' }
  & { deleteMatterDocumentTemplateById?: Maybe<(
    { __typename?: 'DeleteMatterDocumentTemplatePayload' }
    & { matterDocumentTemplate?: Maybe<(
      { __typename?: 'MatterDocumentTemplate' }
      & Pick<MatterDocumentTemplate, 'id'>
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

export type DeleteQuestionnaireByIdMutationVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type DeleteQuestionnaireByIdMutation = (
  { __typename?: 'Mutation' }
  & { deleteQuestionnaireById?: Maybe<(
    { __typename?: 'DeleteQuestionnairePayload' }
    & { questionnaire?: Maybe<(
      { __typename?: 'Questionnaire' }
      & Pick<Questionnaire, 'id'>
    )> }
  )> }
);

export type GetTransloaditTokenMutationVariables = Exact<{ [key: string]: never; }>;


export type GetTransloaditTokenMutation = (
  { __typename?: 'Mutation' }
  & { getTransloaditToken?: Maybe<(
    { __typename?: 'GetTransloaditTokenPayload' }
    & Pick<GetTransloaditTokenPayload, 'expires' | 'signature'>
  )> }
);

export type MatterByIdQueryVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type MatterByIdQuery = (
  { __typename?: 'Query' }
  & { matterById?: Maybe<(
    { __typename?: 'Matter' }
    & Pick<Matter, 'id' | 'name'>
    & { personByPrimaryContactId?: Maybe<(
      { __typename?: 'Person' }
      & Pick<Person, 'id' | 'name'>
    )>, matterTemplateByMatterTemplateId?: Maybe<(
      { __typename?: 'MatterTemplate' }
      & Pick<MatterTemplate, 'id' | 'name' | 'category'>
    )> }
  )> }
);

export type QuestionByIdQueryVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type QuestionByIdQuery = (
  { __typename?: 'Query' }
  & { questionById?: Maybe<(
    { __typename?: 'Question' }
    & Pick<Question, 'id' | 'prompt' | 'helpText' | 'questionType'>
    & { relatedQuestions?: Maybe<Array<Maybe<(
      { __typename?: 'Question' }
      & Pick<Question, 'id' | 'prompt'>
    )>>> }
  )> }
);

export type QuestionnaireByIdQueryVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type QuestionnaireByIdQuery = (
  { __typename?: 'Query' }
  & { questionnaireById?: Maybe<(
    { __typename?: 'Questionnaire' }
    & Pick<Questionnaire, 'id' | 'name' | 'questionTree'>
  )> }
);

export type UpdateMatterByIdMutationVariables = Exact<{
  id: Scalars['UUID'];
  name: Scalars['String'];
}>;


export type UpdateMatterByIdMutation = (
  { __typename?: 'Mutation' }
  & { updateMatterById?: Maybe<(
    { __typename?: 'UpdateMatterPayload' }
    & { matter?: Maybe<(
      { __typename?: 'Matter' }
      & Pick<Matter, 'id' | 'name' | 'updatedAt'>
    )> }
  )> }
);

export type UpdateMatterDocumentTemplateByIdMutationVariables = Exact<{
  id: Scalars['UUID'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
}>;


export type UpdateMatterDocumentTemplateByIdMutation = (
  { __typename?: 'Mutation' }
  & { updateMatterDocumentTemplateById?: Maybe<(
    { __typename?: 'UpdateMatterDocumentTemplatePayload' }
    & { matterDocumentTemplate?: Maybe<(
      { __typename?: 'MatterDocumentTemplate' }
      & Pick<MatterDocumentTemplate, 'id' | 'name' | 'description'>
    )> }
  )> }
);

export type UpdateMatterTemplateByIdMutationVariables = Exact<{
  id: Scalars['UUID'];
  name?: Maybe<Scalars['String']>;
  javascriptModule?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
}>;


export type UpdateMatterTemplateByIdMutation = (
  { __typename?: 'Mutation' }
  & { updateMatterTemplateById?: Maybe<(
    { __typename?: 'UpdateMatterTemplatePayload' }
    & { matterTemplate?: Maybe<(
      { __typename?: 'MatterTemplate' }
      & Pick<MatterTemplate, 'id' | 'name' | 'javascriptModule' | 'category'>
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
  options?: Maybe<Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>>;
  questionType?: Maybe<Scalars['String']>;
  prompt?: Maybe<Scalars['String']>;
  helpText?: Maybe<Scalars['JSON']>;
}>;


export type UpdateQuestionByIdMutation = (
  { __typename?: 'Mutation' }
  & { updateQuestionById?: Maybe<(
    { __typename?: 'UpdateQuestionPayload' }
    & { question?: Maybe<(
      { __typename?: 'Question' }
      & Pick<Question, 'id' | 'options' | 'questionType' | 'prompt' | 'helpText'>
    )> }
  )> }
);

export type UpdateQuestionnaireByIdMutationVariables = Exact<{
  id: Scalars['UUID'];
  name?: Maybe<Scalars['String']>;
}>;


export type UpdateQuestionnaireByIdMutation = (
  { __typename?: 'Mutation' }
  & { updateQuestionnaireById?: Maybe<(
    { __typename?: 'UpdateQuestionnairePayload' }
    & { questionnaire?: Maybe<(
      { __typename?: 'Questionnaire' }
      & Pick<Questionnaire, 'id' | 'name'>
    )> }
  )> }
);

export type UpdateQuestionnaireFromNeo4JMutationVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type UpdateQuestionnaireFromNeo4JMutation = (
  { __typename?: 'Mutation' }
  & { updateQuestionnaireFromNeo4J?: Maybe<(
    { __typename?: 'UpdateQuestionnaireFromNeo4JPayload' }
    & { questionnaire?: Maybe<(
      { __typename?: 'Questionnaire' }
      & Pick<Questionnaire, 'id' | 'name'>
    )> }
  )> }
);


export const AllActiveMatterTemplatesByCategoryDocument = gql`
    query AllActiveMatterTemplatesByCategory($category: String!) {
  allMatterTemplates(condition: {category: $category, active: true}, orderBy: NAME_ASC) {
    nodes {
      id
      name
      javascriptModule
      category
      questionnairesByMatterTemplateId {
        nodes {
          id
          name
        }
      }
    }
  }
}
    `;

/**
 * __useAllActiveMatterTemplatesByCategoryQuery__
 *
 * To run a query within a React component, call `useAllActiveMatterTemplatesByCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllActiveMatterTemplatesByCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllActiveMatterTemplatesByCategoryQuery({
 *   variables: {
 *      category: // value for 'category'
 *   },
 * });
 */
export function useAllActiveMatterTemplatesByCategoryQuery(baseOptions: Apollo.QueryHookOptions<AllActiveMatterTemplatesByCategoryQuery, AllActiveMatterTemplatesByCategoryQueryVariables>) {
        return Apollo.useQuery<AllActiveMatterTemplatesByCategoryQuery, AllActiveMatterTemplatesByCategoryQueryVariables>(AllActiveMatterTemplatesByCategoryDocument, baseOptions);
      }
export function useAllActiveMatterTemplatesByCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllActiveMatterTemplatesByCategoryQuery, AllActiveMatterTemplatesByCategoryQueryVariables>) {
          return Apollo.useLazyQuery<AllActiveMatterTemplatesByCategoryQuery, AllActiveMatterTemplatesByCategoryQueryVariables>(AllActiveMatterTemplatesByCategoryDocument, baseOptions);
        }
export type AllActiveMatterTemplatesByCategoryQueryHookResult = ReturnType<typeof useAllActiveMatterTemplatesByCategoryQuery>;
export type AllActiveMatterTemplatesByCategoryLazyQueryHookResult = ReturnType<typeof useAllActiveMatterTemplatesByCategoryLazyQuery>;
export type AllActiveMatterTemplatesByCategoryQueryResult = Apollo.QueryResult<AllActiveMatterTemplatesByCategoryQuery, AllActiveMatterTemplatesByCategoryQueryVariables>;
export const AllAddressesDocument = gql`
    query AllAddresses {
  allAddresses {
    nodes {
      id
      name
    }
  }
}
    `;

/**
 * __useAllAddressesQuery__
 *
 * To run a query within a React component, call `useAllAddressesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllAddressesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllAddressesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllAddressesQuery(baseOptions?: Apollo.QueryHookOptions<AllAddressesQuery, AllAddressesQueryVariables>) {
        return Apollo.useQuery<AllAddressesQuery, AllAddressesQueryVariables>(AllAddressesDocument, baseOptions);
      }
export function useAllAddressesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllAddressesQuery, AllAddressesQueryVariables>) {
          return Apollo.useLazyQuery<AllAddressesQuery, AllAddressesQueryVariables>(AllAddressesDocument, baseOptions);
        }
export type AllAddressesQueryHookResult = ReturnType<typeof useAllAddressesQuery>;
export type AllAddressesLazyQueryHookResult = ReturnType<typeof useAllAddressesLazyQuery>;
export type AllAddressesQueryResult = Apollo.QueryResult<AllAddressesQuery, AllAddressesQueryVariables>;
export const AllCurrentUserMattersDocument = gql`
    query AllCurrentUserMatters {
  allCurrentUserMatters {
    nodes {
      id
      primaryContactId
      matterTemplateId
      matterTemplateName
      matterTemplateCategory
    }
  }
}
    `;

/**
 * __useAllCurrentUserMattersQuery__
 *
 * To run a query within a React component, call `useAllCurrentUserMattersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllCurrentUserMattersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllCurrentUserMattersQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllCurrentUserMattersQuery(baseOptions?: Apollo.QueryHookOptions<AllCurrentUserMattersQuery, AllCurrentUserMattersQueryVariables>) {
        return Apollo.useQuery<AllCurrentUserMattersQuery, AllCurrentUserMattersQueryVariables>(AllCurrentUserMattersDocument, baseOptions);
      }
export function useAllCurrentUserMattersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllCurrentUserMattersQuery, AllCurrentUserMattersQueryVariables>) {
          return Apollo.useLazyQuery<AllCurrentUserMattersQuery, AllCurrentUserMattersQueryVariables>(AllCurrentUserMattersDocument, baseOptions);
        }
export type AllCurrentUserMattersQueryHookResult = ReturnType<typeof useAllCurrentUserMattersQuery>;
export type AllCurrentUserMattersLazyQueryHookResult = ReturnType<typeof useAllCurrentUserMattersLazyQuery>;
export type AllCurrentUserMattersQueryResult = Apollo.QueryResult<AllCurrentUserMattersQuery, AllCurrentUserMattersQueryVariables>;
export const AllMatterDocumentTemplatesDocument = gql`
    query AllMatterDocumentTemplates {
  allMatterDocumentTemplates(orderBy: NAME_ASC) {
    nodes {
      id
      name
      description
    }
  }
}
    `;

/**
 * __useAllMatterDocumentTemplatesQuery__
 *
 * To run a query within a React component, call `useAllMatterDocumentTemplatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllMatterDocumentTemplatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllMatterDocumentTemplatesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllMatterDocumentTemplatesQuery(baseOptions?: Apollo.QueryHookOptions<AllMatterDocumentTemplatesQuery, AllMatterDocumentTemplatesQueryVariables>) {
        return Apollo.useQuery<AllMatterDocumentTemplatesQuery, AllMatterDocumentTemplatesQueryVariables>(AllMatterDocumentTemplatesDocument, baseOptions);
      }
export function useAllMatterDocumentTemplatesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllMatterDocumentTemplatesQuery, AllMatterDocumentTemplatesQueryVariables>) {
          return Apollo.useLazyQuery<AllMatterDocumentTemplatesQuery, AllMatterDocumentTemplatesQueryVariables>(AllMatterDocumentTemplatesDocument, baseOptions);
        }
export type AllMatterDocumentTemplatesQueryHookResult = ReturnType<typeof useAllMatterDocumentTemplatesQuery>;
export type AllMatterDocumentTemplatesLazyQueryHookResult = ReturnType<typeof useAllMatterDocumentTemplatesLazyQuery>;
export type AllMatterDocumentTemplatesQueryResult = Apollo.QueryResult<AllMatterDocumentTemplatesQuery, AllMatterDocumentTemplatesQueryVariables>;
export const AllMatterTemplatesDocument = gql`
    query AllMatterTemplates {
  allMatterTemplates(orderBy: NAME_ASC) {
    nodes {
      id
      name
      javascriptModule
      category
    }
  }
}
    `;

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
export const AllMattersDocument = gql`
    query AllMatters {
  allMatters(orderBy: UPDATED_AT_ASC) {
    nodes {
      id
      personByPrimaryContactId {
        id
        name
        email
      }
      matterTemplateByMatterTemplateId {
        id
        name
        category
      }
      name
      createdAt
      updatedAt
    }
  }
}
    `;

/**
 * __useAllMattersQuery__
 *
 * To run a query within a React component, call `useAllMattersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllMattersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllMattersQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllMattersQuery(baseOptions?: Apollo.QueryHookOptions<AllMattersQuery, AllMattersQueryVariables>) {
        return Apollo.useQuery<AllMattersQuery, AllMattersQueryVariables>(AllMattersDocument, baseOptions);
      }
export function useAllMattersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllMattersQuery, AllMattersQueryVariables>) {
          return Apollo.useLazyQuery<AllMattersQuery, AllMattersQueryVariables>(AllMattersDocument, baseOptions);
        }
export type AllMattersQueryHookResult = ReturnType<typeof useAllMattersQuery>;
export type AllMattersLazyQueryHookResult = ReturnType<typeof useAllMattersLazyQuery>;
export type AllMattersQueryResult = Apollo.QueryResult<AllMattersQuery, AllMattersQueryVariables>;
export const AllPeopleDocument = gql`
    query AllPeople {
  allPeople(orderBy: EMAIL_ASC) {
    nodes {
      id
      name
      email
    }
  }
}
    `;

/**
 * __useAllPeopleQuery__
 *
 * To run a query within a React component, call `useAllPeopleQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllPeopleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllPeopleQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllPeopleQuery(baseOptions?: Apollo.QueryHookOptions<AllPeopleQuery, AllPeopleQueryVariables>) {
        return Apollo.useQuery<AllPeopleQuery, AllPeopleQueryVariables>(AllPeopleDocument, baseOptions);
      }
export function useAllPeopleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllPeopleQuery, AllPeopleQueryVariables>) {
          return Apollo.useLazyQuery<AllPeopleQuery, AllPeopleQueryVariables>(AllPeopleDocument, baseOptions);
        }
export type AllPeopleQueryHookResult = ReturnType<typeof useAllPeopleQuery>;
export type AllPeopleLazyQueryHookResult = ReturnType<typeof useAllPeopleLazyQuery>;
export type AllPeopleQueryResult = Apollo.QueryResult<AllPeopleQuery, AllPeopleQueryVariables>;
export const AllQuestionnairesDocument = gql`
    query AllQuestionnaires {
  allQuestionnaires(orderBy: UPDATED_AT_ASC) {
    nodes {
      id
      matterTemplateByMatterTemplateId {
        id
        name
        category
      }
      name
      createdAt
      updatedAt
    }
  }
}
    `;

/**
 * __useAllQuestionnairesQuery__
 *
 * To run a query within a React component, call `useAllQuestionnairesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllQuestionnairesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllQuestionnairesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllQuestionnairesQuery(baseOptions?: Apollo.QueryHookOptions<AllQuestionnairesQuery, AllQuestionnairesQueryVariables>) {
        return Apollo.useQuery<AllQuestionnairesQuery, AllQuestionnairesQueryVariables>(AllQuestionnairesDocument, baseOptions);
      }
export function useAllQuestionnairesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllQuestionnairesQuery, AllQuestionnairesQueryVariables>) {
          return Apollo.useLazyQuery<AllQuestionnairesQuery, AllQuestionnairesQueryVariables>(AllQuestionnairesDocument, baseOptions);
        }
export type AllQuestionnairesQueryHookResult = ReturnType<typeof useAllQuestionnairesQuery>;
export type AllQuestionnairesLazyQueryHookResult = ReturnType<typeof useAllQuestionnairesLazyQuery>;
export type AllQuestionnairesQueryResult = Apollo.QueryResult<AllQuestionnairesQuery, AllQuestionnairesQueryVariables>;
export const AllQuestionsDocument = gql`
    query AllQuestions {
  allQuestions(orderBy: PROMPT_ASC) {
    nodes {
      id
      options
      questionType
      prompt
      helpText
    }
  }
}
    `;

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
export const CreateLetterDocument = gql`
    mutation CreateLetter($body: JSON!, $addressorId: UUID!, $addresseeId: UUID!) {
  createLetter(input: {letter: {body: $body, addressorId: $addressorId, addresseeId: $addresseeId}}) {
    letter {
      id
      createdAt
      body
      addressorId
      addresseeId
    }
  }
}
    `;
export type CreateLetterMutationFn = Apollo.MutationFunction<CreateLetterMutation, CreateLetterMutationVariables>;

/**
 * __useCreateLetterMutation__
 *
 * To run a mutation, you first call `useCreateLetterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLetterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLetterMutation, { data, loading, error }] = useCreateLetterMutation({
 *   variables: {
 *      body: // value for 'body'
 *      addressorId: // value for 'addressorId'
 *      addresseeId: // value for 'addresseeId'
 *   },
 * });
 */
export function useCreateLetterMutation(baseOptions?: Apollo.MutationHookOptions<CreateLetterMutation, CreateLetterMutationVariables>) {
        return Apollo.useMutation<CreateLetterMutation, CreateLetterMutationVariables>(CreateLetterDocument, baseOptions);
      }
export type CreateLetterMutationHookResult = ReturnType<typeof useCreateLetterMutation>;
export type CreateLetterMutationResult = Apollo.MutationResult<CreateLetterMutation>;
export type CreateLetterMutationOptions = Apollo.BaseMutationOptions<CreateLetterMutation, CreateLetterMutationVariables>;
export const CreateMatterDocument = gql`
    mutation CreateMatter($name: String!, $matterTemplateId: UUID!, $primaryContactId: UUID!) {
  createMatter(input: {matter: {name: $name, matterTemplateId: $matterTemplateId, primaryContactId: $primaryContactId}}) {
    matter {
      id
      createdAt
      updatedAt
    }
  }
}
    `;
export type CreateMatterMutationFn = Apollo.MutationFunction<CreateMatterMutation, CreateMatterMutationVariables>;

/**
 * __useCreateMatterMutation__
 *
 * To run a mutation, you first call `useCreateMatterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMatterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMatterMutation, { data, loading, error }] = useCreateMatterMutation({
 *   variables: {
 *      name: // value for 'name'
 *      matterTemplateId: // value for 'matterTemplateId'
 *      primaryContactId: // value for 'primaryContactId'
 *   },
 * });
 */
export function useCreateMatterMutation(baseOptions?: Apollo.MutationHookOptions<CreateMatterMutation, CreateMatterMutationVariables>) {
        return Apollo.useMutation<CreateMatterMutation, CreateMatterMutationVariables>(CreateMatterDocument, baseOptions);
      }
export type CreateMatterMutationHookResult = ReturnType<typeof useCreateMatterMutation>;
export type CreateMatterMutationResult = Apollo.MutationResult<CreateMatterMutation>;
export type CreateMatterMutationOptions = Apollo.BaseMutationOptions<CreateMatterMutation, CreateMatterMutationVariables>;
export const CreateMatterDocumentFromUploadUrlDocument = gql`
    mutation CreateMatterDocumentFromUploadUrl($matterDocumentTemplateId: UUID!, $matterId: UUID!, $uploadDocumentUrl: String!) {
  createMatterDocumentFromUploadUrl(input: {matterDocumentTemplateId: $matterDocumentTemplateId, matterId: $matterId, uploadDocumentUrl: $uploadDocumentUrl}) {
    matterDocument {
      id
    }
  }
}
    `;
export type CreateMatterDocumentFromUploadUrlMutationFn = Apollo.MutationFunction<CreateMatterDocumentFromUploadUrlMutation, CreateMatterDocumentFromUploadUrlMutationVariables>;

/**
 * __useCreateMatterDocumentFromUploadUrlMutation__
 *
 * To run a mutation, you first call `useCreateMatterDocumentFromUploadUrlMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMatterDocumentFromUploadUrlMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMatterDocumentFromUploadUrlMutation, { data, loading, error }] = useCreateMatterDocumentFromUploadUrlMutation({
 *   variables: {
 *      matterDocumentTemplateId: // value for 'matterDocumentTemplateId'
 *      matterId: // value for 'matterId'
 *      uploadDocumentUrl: // value for 'uploadDocumentUrl'
 *   },
 * });
 */
export function useCreateMatterDocumentFromUploadUrlMutation(baseOptions?: Apollo.MutationHookOptions<CreateMatterDocumentFromUploadUrlMutation, CreateMatterDocumentFromUploadUrlMutationVariables>) {
        return Apollo.useMutation<CreateMatterDocumentFromUploadUrlMutation, CreateMatterDocumentFromUploadUrlMutationVariables>(CreateMatterDocumentFromUploadUrlDocument, baseOptions);
      }
export type CreateMatterDocumentFromUploadUrlMutationHookResult = ReturnType<typeof useCreateMatterDocumentFromUploadUrlMutation>;
export type CreateMatterDocumentFromUploadUrlMutationResult = Apollo.MutationResult<CreateMatterDocumentFromUploadUrlMutation>;
export type CreateMatterDocumentFromUploadUrlMutationOptions = Apollo.BaseMutationOptions<CreateMatterDocumentFromUploadUrlMutation, CreateMatterDocumentFromUploadUrlMutationVariables>;
export const CreateMatterDocumentTemplateDocument = gql`
    mutation CreateMatterDocumentTemplate($name: String!, $description: String!) {
  createMatterDocumentTemplate(input: {matterDocumentTemplate: {name: $name, description: $description}}) {
    matterDocumentTemplate {
      id
      name
      description
    }
  }
}
    `;
export type CreateMatterDocumentTemplateMutationFn = Apollo.MutationFunction<CreateMatterDocumentTemplateMutation, CreateMatterDocumentTemplateMutationVariables>;

/**
 * __useCreateMatterDocumentTemplateMutation__
 *
 * To run a mutation, you first call `useCreateMatterDocumentTemplateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMatterDocumentTemplateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMatterDocumentTemplateMutation, { data, loading, error }] = useCreateMatterDocumentTemplateMutation({
 *   variables: {
 *      name: // value for 'name'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useCreateMatterDocumentTemplateMutation(baseOptions?: Apollo.MutationHookOptions<CreateMatterDocumentTemplateMutation, CreateMatterDocumentTemplateMutationVariables>) {
        return Apollo.useMutation<CreateMatterDocumentTemplateMutation, CreateMatterDocumentTemplateMutationVariables>(CreateMatterDocumentTemplateDocument, baseOptions);
      }
export type CreateMatterDocumentTemplateMutationHookResult = ReturnType<typeof useCreateMatterDocumentTemplateMutation>;
export type CreateMatterDocumentTemplateMutationResult = Apollo.MutationResult<CreateMatterDocumentTemplateMutation>;
export type CreateMatterDocumentTemplateMutationOptions = Apollo.BaseMutationOptions<CreateMatterDocumentTemplateMutation, CreateMatterDocumentTemplateMutationVariables>;
export const CreateMatterTemplateDocument = gql`
    mutation CreateMatterTemplate($name: String!, $javascriptModule: String!, $category: String!) {
  createMatterTemplate(input: {matterTemplate: {name: $name, javascriptModule: $javascriptModule, category: $category}}) {
    matterTemplate {
      id
      name
      javascriptModule
      category
    }
  }
}
    `;
export type CreateMatterTemplateMutationFn = Apollo.MutationFunction<CreateMatterTemplateMutation, CreateMatterTemplateMutationVariables>;

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
 *      category: // value for 'category'
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
    mutation CreateQuestion($options: [String], $questionType: String!, $prompt: String!, $helpText: JSON) {
  createQuestion(input: {question: {options: $options, questionType: $questionType, prompt: $prompt, helpText: $helpText}}) {
    question {
      id
      options
      questionType
      prompt
      helpText
    }
  }
}
    `;
export type CreateQuestionMutationFn = Apollo.MutationFunction<CreateQuestionMutation, CreateQuestionMutationVariables>;

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
 *      helpText: // value for 'helpText'
 *   },
 * });
 */
export function useCreateQuestionMutation(baseOptions?: Apollo.MutationHookOptions<CreateQuestionMutation, CreateQuestionMutationVariables>) {
        return Apollo.useMutation<CreateQuestionMutation, CreateQuestionMutationVariables>(CreateQuestionDocument, baseOptions);
      }
export type CreateQuestionMutationHookResult = ReturnType<typeof useCreateQuestionMutation>;
export type CreateQuestionMutationResult = Apollo.MutationResult<CreateQuestionMutation>;
export type CreateQuestionMutationOptions = Apollo.BaseMutationOptions<CreateQuestionMutation, CreateQuestionMutationVariables>;
export const CreateQuestionnaireDocument = gql`
    mutation CreateQuestionnaire($name: String!, $matterTemplateId: UUID!) {
  createQuestionnaire(input: {questionnaire: {name: $name, matterTemplateId: $matterTemplateId}}) {
    questionnaire {
      id
      createdAt
      updatedAt
    }
  }
}
    `;
export type CreateQuestionnaireMutationFn = Apollo.MutationFunction<CreateQuestionnaireMutation, CreateQuestionnaireMutationVariables>;

/**
 * __useCreateQuestionnaireMutation__
 *
 * To run a mutation, you first call `useCreateQuestionnaireMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateQuestionnaireMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createQuestionnaireMutation, { data, loading, error }] = useCreateQuestionnaireMutation({
 *   variables: {
 *      name: // value for 'name'
 *      matterTemplateId: // value for 'matterTemplateId'
 *   },
 * });
 */
export function useCreateQuestionnaireMutation(baseOptions?: Apollo.MutationHookOptions<CreateQuestionnaireMutation, CreateQuestionnaireMutationVariables>) {
        return Apollo.useMutation<CreateQuestionnaireMutation, CreateQuestionnaireMutationVariables>(CreateQuestionnaireDocument, baseOptions);
      }
export type CreateQuestionnaireMutationHookResult = ReturnType<typeof useCreateQuestionnaireMutation>;
export type CreateQuestionnaireMutationResult = Apollo.MutationResult<CreateQuestionnaireMutation>;
export type CreateQuestionnaireMutationOptions = Apollo.BaseMutationOptions<CreateQuestionnaireMutation, CreateQuestionnaireMutationVariables>;
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
export const DeleteMatterByIdDocument = gql`
    mutation DeleteMatterById($id: UUID!) {
  deleteMatterById(input: {id: $id}) {
    matter {
      id
    }
  }
}
    `;
export type DeleteMatterByIdMutationFn = Apollo.MutationFunction<DeleteMatterByIdMutation, DeleteMatterByIdMutationVariables>;

/**
 * __useDeleteMatterByIdMutation__
 *
 * To run a mutation, you first call `useDeleteMatterByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMatterByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMatterByIdMutation, { data, loading, error }] = useDeleteMatterByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteMatterByIdMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMatterByIdMutation, DeleteMatterByIdMutationVariables>) {
        return Apollo.useMutation<DeleteMatterByIdMutation, DeleteMatterByIdMutationVariables>(DeleteMatterByIdDocument, baseOptions);
      }
export type DeleteMatterByIdMutationHookResult = ReturnType<typeof useDeleteMatterByIdMutation>;
export type DeleteMatterByIdMutationResult = Apollo.MutationResult<DeleteMatterByIdMutation>;
export type DeleteMatterByIdMutationOptions = Apollo.BaseMutationOptions<DeleteMatterByIdMutation, DeleteMatterByIdMutationVariables>;
export const DeleteMatterDocumentTemplateByIdDocument = gql`
    mutation DeleteMatterDocumentTemplateById($id: UUID!) {
  deleteMatterDocumentTemplateById(input: {id: $id}) {
    matterDocumentTemplate {
      id
    }
  }
}
    `;
export type DeleteMatterDocumentTemplateByIdMutationFn = Apollo.MutationFunction<DeleteMatterDocumentTemplateByIdMutation, DeleteMatterDocumentTemplateByIdMutationVariables>;

/**
 * __useDeleteMatterDocumentTemplateByIdMutation__
 *
 * To run a mutation, you first call `useDeleteMatterDocumentTemplateByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMatterDocumentTemplateByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMatterDocumentTemplateByIdMutation, { data, loading, error }] = useDeleteMatterDocumentTemplateByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteMatterDocumentTemplateByIdMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMatterDocumentTemplateByIdMutation, DeleteMatterDocumentTemplateByIdMutationVariables>) {
        return Apollo.useMutation<DeleteMatterDocumentTemplateByIdMutation, DeleteMatterDocumentTemplateByIdMutationVariables>(DeleteMatterDocumentTemplateByIdDocument, baseOptions);
      }
export type DeleteMatterDocumentTemplateByIdMutationHookResult = ReturnType<typeof useDeleteMatterDocumentTemplateByIdMutation>;
export type DeleteMatterDocumentTemplateByIdMutationResult = Apollo.MutationResult<DeleteMatterDocumentTemplateByIdMutation>;
export type DeleteMatterDocumentTemplateByIdMutationOptions = Apollo.BaseMutationOptions<DeleteMatterDocumentTemplateByIdMutation, DeleteMatterDocumentTemplateByIdMutationVariables>;
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
export const DeleteQuestionnaireByIdDocument = gql`
    mutation DeleteQuestionnaireById($id: UUID!) {
  deleteQuestionnaireById(input: {id: $id}) {
    questionnaire {
      id
    }
  }
}
    `;
export type DeleteQuestionnaireByIdMutationFn = Apollo.MutationFunction<DeleteQuestionnaireByIdMutation, DeleteQuestionnaireByIdMutationVariables>;

/**
 * __useDeleteQuestionnaireByIdMutation__
 *
 * To run a mutation, you first call `useDeleteQuestionnaireByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteQuestionnaireByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteQuestionnaireByIdMutation, { data, loading, error }] = useDeleteQuestionnaireByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteQuestionnaireByIdMutation(baseOptions?: Apollo.MutationHookOptions<DeleteQuestionnaireByIdMutation, DeleteQuestionnaireByIdMutationVariables>) {
        return Apollo.useMutation<DeleteQuestionnaireByIdMutation, DeleteQuestionnaireByIdMutationVariables>(DeleteQuestionnaireByIdDocument, baseOptions);
      }
export type DeleteQuestionnaireByIdMutationHookResult = ReturnType<typeof useDeleteQuestionnaireByIdMutation>;
export type DeleteQuestionnaireByIdMutationResult = Apollo.MutationResult<DeleteQuestionnaireByIdMutation>;
export type DeleteQuestionnaireByIdMutationOptions = Apollo.BaseMutationOptions<DeleteQuestionnaireByIdMutation, DeleteQuestionnaireByIdMutationVariables>;
export const GetTransloaditTokenDocument = gql`
    mutation GetTransloaditToken {
  getTransloaditToken {
    expires
    signature
  }
}
    `;
export type GetTransloaditTokenMutationFn = Apollo.MutationFunction<GetTransloaditTokenMutation, GetTransloaditTokenMutationVariables>;

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
 *   },
 * });
 */
export function useGetTransloaditTokenMutation(baseOptions?: Apollo.MutationHookOptions<GetTransloaditTokenMutation, GetTransloaditTokenMutationVariables>) {
        return Apollo.useMutation<GetTransloaditTokenMutation, GetTransloaditTokenMutationVariables>(GetTransloaditTokenDocument, baseOptions);
      }
export type GetTransloaditTokenMutationHookResult = ReturnType<typeof useGetTransloaditTokenMutation>;
export type GetTransloaditTokenMutationResult = Apollo.MutationResult<GetTransloaditTokenMutation>;
export type GetTransloaditTokenMutationOptions = Apollo.BaseMutationOptions<GetTransloaditTokenMutation, GetTransloaditTokenMutationVariables>;
export const MatterByIdDocument = gql`
    query MatterById($id: UUID!) {
  matterById(id: $id) {
    id
    name
    personByPrimaryContactId {
      id
      name
    }
    matterTemplateByMatterTemplateId {
      id
      name
      category
    }
  }
}
    `;

/**
 * __useMatterByIdQuery__
 *
 * To run a query within a React component, call `useMatterByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useMatterByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMatterByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMatterByIdQuery(baseOptions: Apollo.QueryHookOptions<MatterByIdQuery, MatterByIdQueryVariables>) {
        return Apollo.useQuery<MatterByIdQuery, MatterByIdQueryVariables>(MatterByIdDocument, baseOptions);
      }
export function useMatterByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MatterByIdQuery, MatterByIdQueryVariables>) {
          return Apollo.useLazyQuery<MatterByIdQuery, MatterByIdQueryVariables>(MatterByIdDocument, baseOptions);
        }
export type MatterByIdQueryHookResult = ReturnType<typeof useMatterByIdQuery>;
export type MatterByIdLazyQueryHookResult = ReturnType<typeof useMatterByIdLazyQuery>;
export type MatterByIdQueryResult = Apollo.QueryResult<MatterByIdQuery, MatterByIdQueryVariables>;
export const QuestionByIdDocument = gql`
    query QuestionById($id: UUID!) {
  questionById(id: $id) {
    id
    prompt
    helpText
    questionType
    relatedQuestions {
      id
      prompt
    }
  }
}
    `;

/**
 * __useQuestionByIdQuery__
 *
 * To run a query within a React component, call `useQuestionByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuestionByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuestionByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useQuestionByIdQuery(baseOptions: Apollo.QueryHookOptions<QuestionByIdQuery, QuestionByIdQueryVariables>) {
        return Apollo.useQuery<QuestionByIdQuery, QuestionByIdQueryVariables>(QuestionByIdDocument, baseOptions);
      }
export function useQuestionByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QuestionByIdQuery, QuestionByIdQueryVariables>) {
          return Apollo.useLazyQuery<QuestionByIdQuery, QuestionByIdQueryVariables>(QuestionByIdDocument, baseOptions);
        }
export type QuestionByIdQueryHookResult = ReturnType<typeof useQuestionByIdQuery>;
export type QuestionByIdLazyQueryHookResult = ReturnType<typeof useQuestionByIdLazyQuery>;
export type QuestionByIdQueryResult = Apollo.QueryResult<QuestionByIdQuery, QuestionByIdQueryVariables>;
export const QuestionnaireByIdDocument = gql`
    query QuestionnaireById($id: UUID!) {
  questionnaireById(id: $id) {
    id
    name
    questionTree
  }
}
    `;

/**
 * __useQuestionnaireByIdQuery__
 *
 * To run a query within a React component, call `useQuestionnaireByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuestionnaireByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuestionnaireByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useQuestionnaireByIdQuery(baseOptions: Apollo.QueryHookOptions<QuestionnaireByIdQuery, QuestionnaireByIdQueryVariables>) {
        return Apollo.useQuery<QuestionnaireByIdQuery, QuestionnaireByIdQueryVariables>(QuestionnaireByIdDocument, baseOptions);
      }
export function useQuestionnaireByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QuestionnaireByIdQuery, QuestionnaireByIdQueryVariables>) {
          return Apollo.useLazyQuery<QuestionnaireByIdQuery, QuestionnaireByIdQueryVariables>(QuestionnaireByIdDocument, baseOptions);
        }
export type QuestionnaireByIdQueryHookResult = ReturnType<typeof useQuestionnaireByIdQuery>;
export type QuestionnaireByIdLazyQueryHookResult = ReturnType<typeof useQuestionnaireByIdLazyQuery>;
export type QuestionnaireByIdQueryResult = Apollo.QueryResult<QuestionnaireByIdQuery, QuestionnaireByIdQueryVariables>;
export const UpdateMatterByIdDocument = gql`
    mutation UpdateMatterById($id: UUID!, $name: String!) {
  updateMatterById(input: {id: $id, matterPatch: {name: $name}}) {
    matter {
      id
      name
      updatedAt
    }
  }
}
    `;
export type UpdateMatterByIdMutationFn = Apollo.MutationFunction<UpdateMatterByIdMutation, UpdateMatterByIdMutationVariables>;

/**
 * __useUpdateMatterByIdMutation__
 *
 * To run a mutation, you first call `useUpdateMatterByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMatterByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMatterByIdMutation, { data, loading, error }] = useUpdateMatterByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useUpdateMatterByIdMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMatterByIdMutation, UpdateMatterByIdMutationVariables>) {
        return Apollo.useMutation<UpdateMatterByIdMutation, UpdateMatterByIdMutationVariables>(UpdateMatterByIdDocument, baseOptions);
      }
export type UpdateMatterByIdMutationHookResult = ReturnType<typeof useUpdateMatterByIdMutation>;
export type UpdateMatterByIdMutationResult = Apollo.MutationResult<UpdateMatterByIdMutation>;
export type UpdateMatterByIdMutationOptions = Apollo.BaseMutationOptions<UpdateMatterByIdMutation, UpdateMatterByIdMutationVariables>;
export const UpdateMatterDocumentTemplateByIdDocument = gql`
    mutation UpdateMatterDocumentTemplateById($id: UUID!, $name: String, $description: String) {
  updateMatterDocumentTemplateById(input: {matterDocumentTemplatePatch: {name: $name, description: $description}, id: $id}) {
    matterDocumentTemplate {
      id
      name
      description
    }
  }
}
    `;
export type UpdateMatterDocumentTemplateByIdMutationFn = Apollo.MutationFunction<UpdateMatterDocumentTemplateByIdMutation, UpdateMatterDocumentTemplateByIdMutationVariables>;

/**
 * __useUpdateMatterDocumentTemplateByIdMutation__
 *
 * To run a mutation, you first call `useUpdateMatterDocumentTemplateByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMatterDocumentTemplateByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMatterDocumentTemplateByIdMutation, { data, loading, error }] = useUpdateMatterDocumentTemplateByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useUpdateMatterDocumentTemplateByIdMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMatterDocumentTemplateByIdMutation, UpdateMatterDocumentTemplateByIdMutationVariables>) {
        return Apollo.useMutation<UpdateMatterDocumentTemplateByIdMutation, UpdateMatterDocumentTemplateByIdMutationVariables>(UpdateMatterDocumentTemplateByIdDocument, baseOptions);
      }
export type UpdateMatterDocumentTemplateByIdMutationHookResult = ReturnType<typeof useUpdateMatterDocumentTemplateByIdMutation>;
export type UpdateMatterDocumentTemplateByIdMutationResult = Apollo.MutationResult<UpdateMatterDocumentTemplateByIdMutation>;
export type UpdateMatterDocumentTemplateByIdMutationOptions = Apollo.BaseMutationOptions<UpdateMatterDocumentTemplateByIdMutation, UpdateMatterDocumentTemplateByIdMutationVariables>;
export const UpdateMatterTemplateByIdDocument = gql`
    mutation UpdateMatterTemplateById($id: UUID!, $name: String, $javascriptModule: String, $category: String) {
  updateMatterTemplateById(input: {matterTemplatePatch: {name: $name, javascriptModule: $javascriptModule, category: $category}, id: $id}) {
    matterTemplate {
      id
      name
      javascriptModule
      category
    }
  }
}
    `;
export type UpdateMatterTemplateByIdMutationFn = Apollo.MutationFunction<UpdateMatterTemplateByIdMutation, UpdateMatterTemplateByIdMutationVariables>;

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
 *      category: // value for 'category'
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
    mutation UpdateQuestionById($id: UUID!, $options: [String], $questionType: String, $prompt: String, $helpText: JSON) {
  updateQuestionById(input: {questionPatch: {options: $options, questionType: $questionType, prompt: $prompt, helpText: $helpText}, id: $id}) {
    question {
      id
      options
      questionType
      prompt
      helpText
    }
  }
}
    `;
export type UpdateQuestionByIdMutationFn = Apollo.MutationFunction<UpdateQuestionByIdMutation, UpdateQuestionByIdMutationVariables>;

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
 *      helpText: // value for 'helpText'
 *   },
 * });
 */
export function useUpdateQuestionByIdMutation(baseOptions?: Apollo.MutationHookOptions<UpdateQuestionByIdMutation, UpdateQuestionByIdMutationVariables>) {
        return Apollo.useMutation<UpdateQuestionByIdMutation, UpdateQuestionByIdMutationVariables>(UpdateQuestionByIdDocument, baseOptions);
      }
export type UpdateQuestionByIdMutationHookResult = ReturnType<typeof useUpdateQuestionByIdMutation>;
export type UpdateQuestionByIdMutationResult = Apollo.MutationResult<UpdateQuestionByIdMutation>;
export type UpdateQuestionByIdMutationOptions = Apollo.BaseMutationOptions<UpdateQuestionByIdMutation, UpdateQuestionByIdMutationVariables>;
export const UpdateQuestionnaireByIdDocument = gql`
    mutation UpdateQuestionnaireById($id: UUID!, $name: String) {
  updateQuestionnaireById(input: {questionnairePatch: {name: $name}, id: $id}) {
    questionnaire {
      id
      name
    }
  }
}
    `;
export type UpdateQuestionnaireByIdMutationFn = Apollo.MutationFunction<UpdateQuestionnaireByIdMutation, UpdateQuestionnaireByIdMutationVariables>;

/**
 * __useUpdateQuestionnaireByIdMutation__
 *
 * To run a mutation, you first call `useUpdateQuestionnaireByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateQuestionnaireByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateQuestionnaireByIdMutation, { data, loading, error }] = useUpdateQuestionnaireByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useUpdateQuestionnaireByIdMutation(baseOptions?: Apollo.MutationHookOptions<UpdateQuestionnaireByIdMutation, UpdateQuestionnaireByIdMutationVariables>) {
        return Apollo.useMutation<UpdateQuestionnaireByIdMutation, UpdateQuestionnaireByIdMutationVariables>(UpdateQuestionnaireByIdDocument, baseOptions);
      }
export type UpdateQuestionnaireByIdMutationHookResult = ReturnType<typeof useUpdateQuestionnaireByIdMutation>;
export type UpdateQuestionnaireByIdMutationResult = Apollo.MutationResult<UpdateQuestionnaireByIdMutation>;
export type UpdateQuestionnaireByIdMutationOptions = Apollo.BaseMutationOptions<UpdateQuestionnaireByIdMutation, UpdateQuestionnaireByIdMutationVariables>;
export const UpdateQuestionnaireFromNeo4JDocument = gql`
    mutation UpdateQuestionnaireFromNeo4J($id: UUID!) {
  updateQuestionnaireFromNeo4J(input: {questionnaireId: $id}) {
    questionnaire {
      id
      name
    }
  }
}
    `;
export type UpdateQuestionnaireFromNeo4JMutationFn = Apollo.MutationFunction<UpdateQuestionnaireFromNeo4JMutation, UpdateQuestionnaireFromNeo4JMutationVariables>;

/**
 * __useUpdateQuestionnaireFromNeo4JMutation__
 *
 * To run a mutation, you first call `useUpdateQuestionnaireFromNeo4JMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateQuestionnaireFromNeo4JMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateQuestionnaireFromNeo4JMutation, { data, loading, error }] = useUpdateQuestionnaireFromNeo4JMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateQuestionnaireFromNeo4JMutation(baseOptions?: Apollo.MutationHookOptions<UpdateQuestionnaireFromNeo4JMutation, UpdateQuestionnaireFromNeo4JMutationVariables>) {
        return Apollo.useMutation<UpdateQuestionnaireFromNeo4JMutation, UpdateQuestionnaireFromNeo4JMutationVariables>(UpdateQuestionnaireFromNeo4JDocument, baseOptions);
      }
export type UpdateQuestionnaireFromNeo4JMutationHookResult = ReturnType<typeof useUpdateQuestionnaireFromNeo4JMutation>;
export type UpdateQuestionnaireFromNeo4JMutationResult = Apollo.MutationResult<UpdateQuestionnaireFromNeo4JMutation>;
export type UpdateQuestionnaireFromNeo4JMutationOptions = Apollo.BaseMutationOptions<UpdateQuestionnaireFromNeo4JMutation, UpdateQuestionnaireFromNeo4JMutationVariables>;