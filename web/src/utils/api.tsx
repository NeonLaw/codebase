import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
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

export type AccountingBill = Node & {
  __typename?: 'AccountingBill';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['UUID'];
};

/**
 * A condition to be used against `AccountingBill` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type AccountingBillCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>;
};

/** An input for mutations affecting `AccountingBill` */
export type AccountingBillInput = {
  id?: Maybe<Scalars['UUID']>;
};

/** Represents an update to a `AccountingBill`. Fields that are set will be updated. */
export type AccountingBillPatch = {
  id?: Maybe<Scalars['UUID']>;
};

/** A connection to a list of `AccountingBill` values. */
export type AccountingBillsConnection = {
  __typename?: 'AccountingBillsConnection';
  /** A list of `AccountingBill` objects. */
  nodes: Array<AccountingBill>;
  /** A list of edges which contains the `AccountingBill` and cursor to aid in pagination. */
  edges: Array<AccountingBillsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `AccountingBill` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `AccountingBill` edge in the connection. */
export type AccountingBillsEdge = {
  __typename?: 'AccountingBillsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `AccountingBill` at the end of the edge. */
  node: AccountingBill;
};

/** Methods to use when ordering `AccountingBill`. */
export enum AccountingBillsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

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
  person?: Maybe<Person>;
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

/** All input for the create `AccountingBill` mutation. */
export type CreateAccountingBillInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `AccountingBill` to be created by this mutation. */
  accountingBill: AccountingBillInput;
};

/** The output of our create `AccountingBill` mutation. */
export type CreateAccountingBillPayload = {
  __typename?: 'CreateAccountingBillPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `AccountingBill` that was created by this mutation. */
  accountingBill?: Maybe<AccountingBill>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `AccountingBill`. May be used by Relay 1. */
  accountingBillEdge?: Maybe<AccountingBillsEdge>;
};


/** The output of our create `AccountingBill` mutation. */
export type CreateAccountingBillPayloadAccountingBillEdgeArgs = {
  orderBy?: Maybe<Array<AccountingBillsOrderBy>>;
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
  person?: Maybe<Person>;
  /** An edge for our `Address`. May be used by Relay 1. */
  addressEdge?: Maybe<AddressesEdge>;
};


/** The output of our create `Address` mutation. */
export type CreateAddressPayloadAddressEdgeArgs = {
  orderBy?: Maybe<Array<AddressesOrderBy>>;
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
  document?: Maybe<Document>;
  /** Reads a single `Person` that is related to this `MatterDocument`. */
  author?: Maybe<Person>;
  /** An edge for our `MatterDocument`. May be used by Relay 1. */
  matterDocumentEdge?: Maybe<MatterDocumentsEdge>;
};


/** The output of our `createMatterDocumentFromUploadUrl` mutation. */
export type CreateMatterDocumentFromUploadUrlPayloadMatterDocumentEdgeArgs = {
  orderBy?: Maybe<Array<MatterDocumentsOrderBy>>;
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
  primaryContact?: Maybe<Person>;
  /** Reads a single `MatterTemplate` that is related to this `Matter`. */
  matterTemplate?: Maybe<MatterTemplate>;
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
  matterTemplate?: Maybe<MatterTemplate>;
  /** An edge for our `Questionnaire`. May be used by Relay 1. */
  questionnaireEdge?: Maybe<QuestionnairesEdge>;
};


/** The output of our create `Questionnaire` mutation. */
export type CreateQuestionnairePayloadQuestionnaireEdgeArgs = {
  orderBy?: Maybe<Array<QuestionnairesOrderBy>>;
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
  /** Reads a single `Question` that is related to this `Response`. */
  question?: Maybe<Question>;
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



/** All input for the `deleteAccountingBillByNodeId` mutation. */
export type DeleteAccountingBillByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `AccountingBill` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteAccountingBill` mutation. */
export type DeleteAccountingBillInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** The output of our delete `AccountingBill` mutation. */
export type DeleteAccountingBillPayload = {
  __typename?: 'DeleteAccountingBillPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `AccountingBill` that was deleted by this mutation. */
  accountingBill?: Maybe<AccountingBill>;
  deletedBillNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `AccountingBill`. May be used by Relay 1. */
  accountingBillEdge?: Maybe<AccountingBillsEdge>;
};


/** The output of our delete `AccountingBill` mutation. */
export type DeleteAccountingBillPayloadAccountingBillEdgeArgs = {
  orderBy?: Maybe<Array<AccountingBillsOrderBy>>;
};

/** All input for the `deleteAddressByNodeId` mutation. */
export type DeleteAddressByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Address` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteAddress` mutation. */
export type DeleteAddressInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
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
  deletedAddressNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Person` that is related to this `Address`. */
  person?: Maybe<Person>;
  /** An edge for our `Address`. May be used by Relay 1. */
  addressEdge?: Maybe<AddressesEdge>;
};


/** The output of our delete `Address` mutation. */
export type DeleteAddressPayloadAddressEdgeArgs = {
  orderBy?: Maybe<Array<AddressesOrderBy>>;
};

/** All input for the `deleteDocumentByNodeId` mutation. */
export type DeleteDocumentByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Document` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteDocument` mutation. */
export type DeleteDocumentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
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
  deletedDocumentNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Document`. May be used by Relay 1. */
  documentEdge?: Maybe<DocumentsEdge>;
};


/** The output of our delete `Document` mutation. */
export type DeleteDocumentPayloadDocumentEdgeArgs = {
  orderBy?: Maybe<Array<DocumentsOrderBy>>;
};

/** All input for the `deleteDocumentTemplateByNodeId` mutation. */
export type DeleteDocumentTemplateByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `DocumentTemplate` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteDocumentTemplate` mutation. */
export type DeleteDocumentTemplateInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
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
  deletedDocumentTemplateNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `DocumentTemplate`. May be used by Relay 1. */
  documentTemplateEdge?: Maybe<DocumentTemplatesEdge>;
};


/** The output of our delete `DocumentTemplate` mutation. */
export type DeleteDocumentTemplatePayloadDocumentTemplateEdgeArgs = {
  orderBy?: Maybe<Array<DocumentTemplatesOrderBy>>;
};

/** All input for the `deleteLetterByNodeId` mutation. */
export type DeleteLetterByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Letter` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteLetter` mutation. */
export type DeleteLetterInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
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
  deletedLetterNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Letter`. May be used by Relay 1. */
  letterEdge?: Maybe<LettersEdge>;
};


/** The output of our delete `Letter` mutation. */
export type DeleteLetterPayloadLetterEdgeArgs = {
  orderBy?: Maybe<Array<LettersOrderBy>>;
};

/** All input for the `deleteMatterByNodeId` mutation. */
export type DeleteMatterByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Matter` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteMatterContactByNodeId` mutation. */
export type DeleteMatterContactByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `MatterContact` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteMatterContact` mutation. */
export type DeleteMatterContactInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
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
  deletedMatterContactNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `MatterContact`. May be used by Relay 1. */
  matterContactEdge?: Maybe<MatterContactsEdge>;
};


/** The output of our delete `MatterContact` mutation. */
export type DeleteMatterContactPayloadMatterContactEdgeArgs = {
  orderBy?: Maybe<Array<MatterContactsOrderBy>>;
};

/** All input for the `deleteMatterDocumentByNodeId` mutation. */
export type DeleteMatterDocumentByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `MatterDocument` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteMatterDocument` mutation. */
export type DeleteMatterDocumentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
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
  deletedMatterDocumentNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Document` that is related to this `MatterDocument`. */
  document?: Maybe<Document>;
  /** Reads a single `Person` that is related to this `MatterDocument`. */
  author?: Maybe<Person>;
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
  id: Scalars['UUID'];
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
  deletedMatterNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Person` that is related to this `Matter`. */
  primaryContact?: Maybe<Person>;
  /** Reads a single `MatterTemplate` that is related to this `Matter`. */
  matterTemplate?: Maybe<MatterTemplate>;
  /** An edge for our `Matter`. May be used by Relay 1. */
  matterEdge?: Maybe<MattersEdge>;
};


/** The output of our delete `Matter` mutation. */
export type DeleteMatterPayloadMatterEdgeArgs = {
  orderBy?: Maybe<Array<MattersOrderBy>>;
};

/** All input for the `deleteMatterTemplateByNodeId` mutation. */
export type DeleteMatterTemplateByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `MatterTemplate` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteMatterTemplate` mutation. */
export type DeleteMatterTemplateInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
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
  deletedMatterTemplateNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `MatterTemplate`. May be used by Relay 1. */
  matterTemplateEdge?: Maybe<MatterTemplatesEdge>;
};


/** The output of our delete `MatterTemplate` mutation. */
export type DeleteMatterTemplatePayloadMatterTemplateEdgeArgs = {
  orderBy?: Maybe<Array<MatterTemplatesOrderBy>>;
};

/** All input for the `deletePersonByNodeId` mutation. */
export type DeletePersonByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Person` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deletePerson` mutation. */
export type DeletePersonInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
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
  deletedPersonNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Person`. May be used by Relay 1. */
  personEdge?: Maybe<PeopleEdge>;
};


/** The output of our delete `Person` mutation. */
export type DeletePersonPayloadPersonEdgeArgs = {
  orderBy?: Maybe<Array<PeopleOrderBy>>;
};

/** All input for the `deleteQuestionByNodeId` mutation. */
export type DeleteQuestionByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Question` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteQuestion` mutation. */
export type DeleteQuestionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** All input for the `deleteQuestionnaireByNodeId` mutation. */
export type DeleteQuestionnaireByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Questionnaire` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteQuestionnaire` mutation. */
export type DeleteQuestionnaireInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
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
  deletedQuestionnaireNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `MatterTemplate` that is related to this `Questionnaire`. */
  matterTemplate?: Maybe<MatterTemplate>;
  /** An edge for our `Questionnaire`. May be used by Relay 1. */
  questionnaireEdge?: Maybe<QuestionnairesEdge>;
};


/** The output of our delete `Questionnaire` mutation. */
export type DeleteQuestionnairePayloadQuestionnaireEdgeArgs = {
  orderBy?: Maybe<Array<QuestionnairesOrderBy>>;
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
  deletedQuestionNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Question`. May be used by Relay 1. */
  questionEdge?: Maybe<QuestionsEdge>;
};


/** The output of our delete `Question` mutation. */
export type DeleteQuestionPayloadQuestionEdgeArgs = {
  orderBy?: Maybe<Array<QuestionsOrderBy>>;
};

/** All input for the `deleteResponseByNodeId` mutation. */
export type DeleteResponseByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Response` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteResponseDocumentByNodeId` mutation. */
export type DeleteResponseDocumentByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `ResponseDocument` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteResponseDocument` mutation. */
export type DeleteResponseDocumentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
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
  deletedResponseDocumentNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Document` that is related to this `ResponseDocument`. */
  document?: Maybe<Document>;
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
  id: Scalars['UUID'];
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
  deletedResponseNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Question` that is related to this `Response`. */
  question?: Maybe<Question>;
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
  documentTemplateId?: Maybe<Scalars['UUID']>;
  /** Reads and enables pagination through a set of `MatterDocument`. */
  matterDocuments: MatterDocumentsConnection;
  /** Reads and enables pagination through a set of `ResponseDocument`. */
  responseDocuments: ResponseDocumentsConnection;
};


export type DocumentMatterDocumentsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<MatterDocumentsOrderBy>>;
  condition?: Maybe<MatterDocumentCondition>;
};


export type DocumentResponseDocumentsArgs = {
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

export type DocumentTemplate = Node & {
  __typename?: 'DocumentTemplate';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['UUID'];
  name: Scalars['String'];
  description: Scalars['String'];
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
  description: Scalars['String'];
};

/** Represents an update to a `DocumentTemplate`. Fields that are set will be updated. */
export type DocumentTemplatePatch = {
  id?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
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
  lobIdentifier?: Maybe<Scalars['String']>;
  body: Scalars['JSON'];
  createdAt?: Maybe<Scalars['Datetime']>;
  addresseeId: Scalars['UUID'];
  addressorId: Scalars['UUID'];
};

/** A condition to be used against `Letter` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type LetterCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `lobIdentifier` field. */
  lobIdentifier?: Maybe<Scalars['String']>;
};

/** An input for mutations affecting `Letter` */
export type LetterInput = {
  id?: Maybe<Scalars['UUID']>;
  lobIdentifier?: Maybe<Scalars['String']>;
  body: Scalars['JSON'];
  createdAt?: Maybe<Scalars['Datetime']>;
  addresseeId: Scalars['UUID'];
  addressorId: Scalars['UUID'];
};

/** Represents an update to a `Letter`. Fields that are set will be updated. */
export type LetterPatch = {
  id?: Maybe<Scalars['UUID']>;
  lobIdentifier?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['JSON']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  addresseeId?: Maybe<Scalars['UUID']>;
  addressorId?: Maybe<Scalars['UUID']>;
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
  primaryContact?: Maybe<Person>;
  /** Reads a single `MatterTemplate` that is related to this `Matter`. */
  matterTemplate?: Maybe<MatterTemplate>;
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
  document?: Maybe<Document>;
  /** Reads a single `Person` that is related to this `MatterDocument`. */
  author?: Maybe<Person>;
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
  questionnaires: QuestionnairesConnection;
  /** Reads and enables pagination through a set of `Matter`. */
  matters: MattersConnection;
};


export type MatterTemplateQuestionnairesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<QuestionnairesOrderBy>>;
  condition?: Maybe<QuestionnaireCondition>;
};


export type MatterTemplateMattersArgs = {
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
  /** Creates a single `DocumentTemplate`. */
  createDocumentTemplate?: Maybe<CreateDocumentTemplatePayload>;
  /** Creates a single `Letter`. */
  createLetter?: Maybe<CreateLetterPayload>;
  /** Creates a single `Matter`. */
  createMatter?: Maybe<CreateMatterPayload>;
  /** Creates a single `MatterContact`. */
  createMatterContact?: Maybe<CreateMatterContactPayload>;
  /** Creates a single `MatterTemplate`. */
  createMatterTemplate?: Maybe<CreateMatterTemplatePayload>;
  /** Creates a single `Question`. */
  createQuestion?: Maybe<CreateQuestionPayload>;
  /** Creates a single `Questionnaire`. */
  createQuestionnaire?: Maybe<CreateQuestionnairePayload>;
  /** Creates a single `Response`. */
  createResponse?: Maybe<CreateResponsePayload>;
  /** Creates a single `AccountingBill`. */
  createAccountingBill?: Maybe<CreateAccountingBillPayload>;
  /** Updates a single `Address` using its globally unique id and a patch. */
  updateAddressByNodeId?: Maybe<UpdateAddressPayload>;
  /** Updates a single `Address` using a unique key and a patch. */
  updateAddress?: Maybe<UpdateAddressPayload>;
  /** Updates a single `DocumentTemplate` using its globally unique id and a patch. */
  updateDocumentTemplateByNodeId?: Maybe<UpdateDocumentTemplatePayload>;
  /** Updates a single `DocumentTemplate` using a unique key and a patch. */
  updateDocumentTemplate?: Maybe<UpdateDocumentTemplatePayload>;
  /** Updates a single `Letter` using its globally unique id and a patch. */
  updateLetterByNodeId?: Maybe<UpdateLetterPayload>;
  /** Updates a single `Letter` using a unique key and a patch. */
  updateLetter?: Maybe<UpdateLetterPayload>;
  /** Updates a single `Matter` using its globally unique id and a patch. */
  updateMatterByNodeId?: Maybe<UpdateMatterPayload>;
  /** Updates a single `Matter` using a unique key and a patch. */
  updateMatter?: Maybe<UpdateMatterPayload>;
  /** Updates a single `MatterContact` using its globally unique id and a patch. */
  updateMatterContactByNodeId?: Maybe<UpdateMatterContactPayload>;
  /** Updates a single `MatterContact` using a unique key and a patch. */
  updateMatterContact?: Maybe<UpdateMatterContactPayload>;
  /** Updates a single `MatterTemplate` using its globally unique id and a patch. */
  updateMatterTemplateByNodeId?: Maybe<UpdateMatterTemplatePayload>;
  /** Updates a single `MatterTemplate` using a unique key and a patch. */
  updateMatterTemplate?: Maybe<UpdateMatterTemplatePayload>;
  /** Updates a single `Person` using its globally unique id and a patch. */
  updatePersonByNodeId?: Maybe<UpdatePersonPayload>;
  /** Updates a single `Person` using a unique key and a patch. */
  updatePerson?: Maybe<UpdatePersonPayload>;
  /** Updates a single `Question` using its globally unique id and a patch. */
  updateQuestionByNodeId?: Maybe<UpdateQuestionPayload>;
  /** Updates a single `Question` using a unique key and a patch. */
  updateQuestion?: Maybe<UpdateQuestionPayload>;
  /** Updates a single `Questionnaire` using its globally unique id and a patch. */
  updateQuestionnaireByNodeId?: Maybe<UpdateQuestionnairePayload>;
  /** Updates a single `Questionnaire` using a unique key and a patch. */
  updateQuestionnaire?: Maybe<UpdateQuestionnairePayload>;
  /** Updates a single `Response` using its globally unique id and a patch. */
  updateResponseByNodeId?: Maybe<UpdateResponsePayload>;
  /** Updates a single `Response` using a unique key and a patch. */
  updateResponse?: Maybe<UpdateResponsePayload>;
  /** Updates a single `AccountingBill` using its globally unique id and a patch. */
  updateAccountingBillByNodeId?: Maybe<UpdateAccountingBillPayload>;
  /** Updates a single `AccountingBill` using a unique key and a patch. */
  updateAccountingBill?: Maybe<UpdateAccountingBillPayload>;
  /** Deletes a single `Address` using its globally unique id. */
  deleteAddressByNodeId?: Maybe<DeleteAddressPayload>;
  /** Deletes a single `Address` using a unique key. */
  deleteAddress?: Maybe<DeleteAddressPayload>;
  /** Deletes a single `Document` using its globally unique id. */
  deleteDocumentByNodeId?: Maybe<DeleteDocumentPayload>;
  /** Deletes a single `Document` using a unique key. */
  deleteDocument?: Maybe<DeleteDocumentPayload>;
  /** Deletes a single `DocumentTemplate` using its globally unique id. */
  deleteDocumentTemplateByNodeId?: Maybe<DeleteDocumentTemplatePayload>;
  /** Deletes a single `DocumentTemplate` using a unique key. */
  deleteDocumentTemplate?: Maybe<DeleteDocumentTemplatePayload>;
  /** Deletes a single `Letter` using its globally unique id. */
  deleteLetterByNodeId?: Maybe<DeleteLetterPayload>;
  /** Deletes a single `Letter` using a unique key. */
  deleteLetter?: Maybe<DeleteLetterPayload>;
  /** Deletes a single `Matter` using its globally unique id. */
  deleteMatterByNodeId?: Maybe<DeleteMatterPayload>;
  /** Deletes a single `Matter` using a unique key. */
  deleteMatter?: Maybe<DeleteMatterPayload>;
  /** Deletes a single `MatterContact` using its globally unique id. */
  deleteMatterContactByNodeId?: Maybe<DeleteMatterContactPayload>;
  /** Deletes a single `MatterContact` using a unique key. */
  deleteMatterContact?: Maybe<DeleteMatterContactPayload>;
  /** Deletes a single `MatterDocument` using its globally unique id. */
  deleteMatterDocumentByNodeId?: Maybe<DeleteMatterDocumentPayload>;
  /** Deletes a single `MatterDocument` using a unique key. */
  deleteMatterDocument?: Maybe<DeleteMatterDocumentPayload>;
  /** Deletes a single `MatterTemplate` using its globally unique id. */
  deleteMatterTemplateByNodeId?: Maybe<DeleteMatterTemplatePayload>;
  /** Deletes a single `MatterTemplate` using a unique key. */
  deleteMatterTemplate?: Maybe<DeleteMatterTemplatePayload>;
  /** Deletes a single `Person` using its globally unique id. */
  deletePersonByNodeId?: Maybe<DeletePersonPayload>;
  /** Deletes a single `Person` using a unique key. */
  deletePerson?: Maybe<DeletePersonPayload>;
  /** Deletes a single `Question` using its globally unique id. */
  deleteQuestionByNodeId?: Maybe<DeleteQuestionPayload>;
  /** Deletes a single `Question` using a unique key. */
  deleteQuestion?: Maybe<DeleteQuestionPayload>;
  /** Deletes a single `Questionnaire` using its globally unique id. */
  deleteQuestionnaireByNodeId?: Maybe<DeleteQuestionnairePayload>;
  /** Deletes a single `Questionnaire` using a unique key. */
  deleteQuestionnaire?: Maybe<DeleteQuestionnairePayload>;
  /** Deletes a single `Response` using its globally unique id. */
  deleteResponseByNodeId?: Maybe<DeleteResponsePayload>;
  /** Deletes a single `Response` using a unique key. */
  deleteResponse?: Maybe<DeleteResponsePayload>;
  /** Deletes a single `ResponseDocument` using its globally unique id. */
  deleteResponseDocumentByNodeId?: Maybe<DeleteResponseDocumentPayload>;
  /** Deletes a single `ResponseDocument` using a unique key. */
  deleteResponseDocument?: Maybe<DeleteResponseDocumentPayload>;
  /** Deletes a single `AccountingBill` using its globally unique id. */
  deleteAccountingBillByNodeId?: Maybe<DeleteAccountingBillPayload>;
  /** Deletes a single `AccountingBill` using a unique key. */
  deleteAccountingBill?: Maybe<DeleteAccountingBillPayload>;
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
export type MutationCreateDocumentTemplateArgs = {
  input: CreateDocumentTemplateInput;
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
export type MutationCreateResponseArgs = {
  input: CreateResponseInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateAccountingBillArgs = {
  input: CreateAccountingBillInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAddressByNodeIdArgs = {
  input: UpdateAddressByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAddressArgs = {
  input: UpdateAddressInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateDocumentTemplateByNodeIdArgs = {
  input: UpdateDocumentTemplateByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateDocumentTemplateArgs = {
  input: UpdateDocumentTemplateInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateLetterByNodeIdArgs = {
  input: UpdateLetterByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateLetterArgs = {
  input: UpdateLetterInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMatterByNodeIdArgs = {
  input: UpdateMatterByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMatterArgs = {
  input: UpdateMatterInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMatterContactByNodeIdArgs = {
  input: UpdateMatterContactByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMatterContactArgs = {
  input: UpdateMatterContactInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMatterTemplateByNodeIdArgs = {
  input: UpdateMatterTemplateByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMatterTemplateArgs = {
  input: UpdateMatterTemplateInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePersonByNodeIdArgs = {
  input: UpdatePersonByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePersonArgs = {
  input: UpdatePersonInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateQuestionByNodeIdArgs = {
  input: UpdateQuestionByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateQuestionArgs = {
  input: UpdateQuestionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateQuestionnaireByNodeIdArgs = {
  input: UpdateQuestionnaireByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateQuestionnaireArgs = {
  input: UpdateQuestionnaireInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateResponseByNodeIdArgs = {
  input: UpdateResponseByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateResponseArgs = {
  input: UpdateResponseInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAccountingBillByNodeIdArgs = {
  input: UpdateAccountingBillByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAccountingBillArgs = {
  input: UpdateAccountingBillInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAddressByNodeIdArgs = {
  input: DeleteAddressByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAddressArgs = {
  input: DeleteAddressInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteDocumentByNodeIdArgs = {
  input: DeleteDocumentByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteDocumentArgs = {
  input: DeleteDocumentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteDocumentTemplateByNodeIdArgs = {
  input: DeleteDocumentTemplateByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteDocumentTemplateArgs = {
  input: DeleteDocumentTemplateInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteLetterByNodeIdArgs = {
  input: DeleteLetterByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteLetterArgs = {
  input: DeleteLetterInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMatterByNodeIdArgs = {
  input: DeleteMatterByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMatterArgs = {
  input: DeleteMatterInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMatterContactByNodeIdArgs = {
  input: DeleteMatterContactByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMatterContactArgs = {
  input: DeleteMatterContactInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMatterDocumentByNodeIdArgs = {
  input: DeleteMatterDocumentByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMatterDocumentArgs = {
  input: DeleteMatterDocumentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMatterTemplateByNodeIdArgs = {
  input: DeleteMatterTemplateByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMatterTemplateArgs = {
  input: DeleteMatterTemplateInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePersonByNodeIdArgs = {
  input: DeletePersonByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePersonArgs = {
  input: DeletePersonInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteQuestionByNodeIdArgs = {
  input: DeleteQuestionByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteQuestionArgs = {
  input: DeleteQuestionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteQuestionnaireByNodeIdArgs = {
  input: DeleteQuestionnaireByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteQuestionnaireArgs = {
  input: DeleteQuestionnaireInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteResponseByNodeIdArgs = {
  input: DeleteResponseByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteResponseArgs = {
  input: DeleteResponseInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteResponseDocumentByNodeIdArgs = {
  input: DeleteResponseDocumentByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteResponseDocumentArgs = {
  input: DeleteResponseDocumentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAccountingBillByNodeIdArgs = {
  input: DeleteAccountingBillByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAccountingBillArgs = {
  input: DeleteAccountingBillInput;
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
  /** Reads and enables pagination through a set of `Matter`. */
  mattersByPrimaryContactId: MattersConnection;
  /** Reads and enables pagination through a set of `Address`. */
  addresses: AddressesConnection;
  /** Reads and enables pagination through a set of `MatterDocument`. */
  authoredMatterDocuments: MatterDocumentsConnection;
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


export type PersonAddressesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<AddressesOrderBy>>;
  condition?: Maybe<AddressCondition>;
};


export type PersonAuthoredMatterDocumentsArgs = {
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
  addresses?: Maybe<AddressesConnection>;
  /** Reads and enables pagination through a set of `CurrentUserMatter`. */
  currentUserMatters?: Maybe<CurrentUserMattersConnection>;
  /** Reads and enables pagination through a set of `DocumentTemplate`. */
  documentTemplates?: Maybe<DocumentTemplatesConnection>;
  /** Reads and enables pagination through a set of `Letter`. */
  letters?: Maybe<LettersConnection>;
  /** Reads and enables pagination through a set of `Matter`. */
  matters?: Maybe<MattersConnection>;
  /** Reads and enables pagination through a set of `MatterContact`. */
  matterContacts?: Maybe<MatterContactsConnection>;
  /** Reads and enables pagination through a set of `MatterTemplate`. */
  matterTemplates?: Maybe<MatterTemplatesConnection>;
  /** Reads and enables pagination through a set of `Person`. */
  people?: Maybe<PeopleConnection>;
  /** Reads and enables pagination through a set of `Question`. */
  questions?: Maybe<QuestionsConnection>;
  /** Reads and enables pagination through a set of `Questionnaire`. */
  questionnaires?: Maybe<QuestionnairesConnection>;
  /** Reads and enables pagination through a set of `Response`. */
  responses?: Maybe<ResponsesConnection>;
  /** Reads and enables pagination through a set of `AccountingBill`. */
  accountingBills?: Maybe<AccountingBillsConnection>;
  address?: Maybe<Address>;
  document?: Maybe<Document>;
  documentTemplate?: Maybe<DocumentTemplate>;
  letter?: Maybe<Letter>;
  matter?: Maybe<Matter>;
  matterContact?: Maybe<MatterContact>;
  matterDocument?: Maybe<MatterDocument>;
  matterTemplate?: Maybe<MatterTemplate>;
  person?: Maybe<Person>;
  question?: Maybe<Question>;
  questionnaire?: Maybe<Questionnaire>;
  response?: Maybe<Response>;
  responseDocument?: Maybe<ResponseDocument>;
  accountingBill?: Maybe<AccountingBill>;
  getCurrentUser?: Maybe<Person>;
  responsePersonMatch?: Maybe<Scalars['Boolean']>;
  /** Reads a single `Address` using its globally unique `ID`. */
  addressByNodeId?: Maybe<Address>;
  /** Reads a single `Document` using its globally unique `ID`. */
  documentByNodeId?: Maybe<Document>;
  /** Reads a single `DocumentTemplate` using its globally unique `ID`. */
  documentTemplateByNodeId?: Maybe<DocumentTemplate>;
  /** Reads a single `Letter` using its globally unique `ID`. */
  letterByNodeId?: Maybe<Letter>;
  /** Reads a single `Matter` using its globally unique `ID`. */
  matterByNodeId?: Maybe<Matter>;
  /** Reads a single `MatterContact` using its globally unique `ID`. */
  matterContactByNodeId?: Maybe<MatterContact>;
  /** Reads a single `MatterDocument` using its globally unique `ID`. */
  matterDocumentByNodeId?: Maybe<MatterDocument>;
  /** Reads a single `MatterTemplate` using its globally unique `ID`. */
  matterTemplateByNodeId?: Maybe<MatterTemplate>;
  /** Reads a single `Person` using its globally unique `ID`. */
  personByNodeId?: Maybe<Person>;
  /** Reads a single `Question` using its globally unique `ID`. */
  questionByNodeId?: Maybe<Question>;
  /** Reads a single `Questionnaire` using its globally unique `ID`. */
  questionnaireByNodeId?: Maybe<Questionnaire>;
  /** Reads a single `Response` using its globally unique `ID`. */
  responseByNodeId?: Maybe<Response>;
  /** Reads a single `ResponseDocument` using its globally unique `ID`. */
  responseDocumentByNodeId?: Maybe<ResponseDocument>;
  /** Reads a single `AccountingBill` using its globally unique `ID`. */
  accountingBillByNodeId?: Maybe<AccountingBill>;
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAddressesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<AddressesOrderBy>>;
  condition?: Maybe<AddressCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryCurrentUserMattersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<CurrentUserMattersOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryDocumentTemplatesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<DocumentTemplatesOrderBy>>;
  condition?: Maybe<DocumentTemplateCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryLettersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<LettersOrderBy>>;
  condition?: Maybe<LetterCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryMattersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<MattersOrderBy>>;
  condition?: Maybe<MatterCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryMatterContactsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<MatterContactsOrderBy>>;
  condition?: Maybe<MatterContactCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryMatterTemplatesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<MatterTemplatesOrderBy>>;
  condition?: Maybe<MatterTemplateCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryPeopleArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<PeopleOrderBy>>;
  condition?: Maybe<PersonCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryQuestionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<QuestionsOrderBy>>;
  condition?: Maybe<QuestionCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryQuestionnairesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<QuestionnairesOrderBy>>;
  condition?: Maybe<QuestionnaireCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryResponsesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ResponsesOrderBy>>;
  condition?: Maybe<ResponseCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAccountingBillsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<AccountingBillsOrderBy>>;
  condition?: Maybe<AccountingBillCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAddressArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryDocumentArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryDocumentTemplateArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryLetterArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMatterArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMatterContactArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMatterDocumentArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMatterTemplateArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPersonArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryQuestionArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryQuestionnaireArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryResponseArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryResponseDocumentArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAccountingBillArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryResponsePersonMatchArgs = {
  responseId?: Maybe<Scalars['UUID']>;
  personId?: Maybe<Scalars['UUID']>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAddressByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryDocumentByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryDocumentTemplateByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryLetterByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMatterByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMatterContactByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMatterDocumentByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMatterTemplateByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPersonByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryQuestionByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryQuestionnaireByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryResponseByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryResponseDocumentByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAccountingBillByNodeIdArgs = {
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
  responses: ResponsesConnection;
  isLinkedToQuestionnaire?: Maybe<Scalars['Boolean']>;
  relatedQuestions?: Maybe<Array<Maybe<Question>>>;
};


export type QuestionResponsesArgs = {
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
  matterTemplate?: Maybe<MatterTemplate>;
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
  questionId: Scalars['UUID'];
  answer: Scalars['JSON'];
  createdAt: Scalars['Datetime'];
  updatedAt: Scalars['Datetime'];
  personId: Scalars['UUID'];
  /** Reads a single `Question` that is related to this `Response`. */
  question?: Maybe<Question>;
};

/**
 * A condition to be used against `Response` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type ResponseCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>;
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
  document?: Maybe<Document>;
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
  questionId: Scalars['UUID'];
  answer: Scalars['JSON'];
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  personId: Scalars['UUID'];
};

/** Represents an update to a `Response`. Fields that are set will be updated. */
export type ResponsePatch = {
  id?: Maybe<Scalars['UUID']>;
  questionId?: Maybe<Scalars['UUID']>;
  answer?: Maybe<Scalars['JSON']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  personId?: Maybe<Scalars['UUID']>;
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
  QuestionIdAsc = 'QUESTION_ID_ASC',
  QuestionIdDesc = 'QUESTION_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** All input for the `updateAccountingBillByNodeId` mutation. */
export type UpdateAccountingBillByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `AccountingBill` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `AccountingBill` being updated. */
  patch: AccountingBillPatch;
};

/** All input for the `updateAccountingBill` mutation. */
export type UpdateAccountingBillInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `AccountingBill` being updated. */
  patch: AccountingBillPatch;
  id: Scalars['UUID'];
};

/** The output of our update `AccountingBill` mutation. */
export type UpdateAccountingBillPayload = {
  __typename?: 'UpdateAccountingBillPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `AccountingBill` that was updated by this mutation. */
  accountingBill?: Maybe<AccountingBill>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `AccountingBill`. May be used by Relay 1. */
  accountingBillEdge?: Maybe<AccountingBillsEdge>;
};


/** The output of our update `AccountingBill` mutation. */
export type UpdateAccountingBillPayloadAccountingBillEdgeArgs = {
  orderBy?: Maybe<Array<AccountingBillsOrderBy>>;
};

/** All input for the `updateAddressByNodeId` mutation. */
export type UpdateAddressByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Address` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Address` being updated. */
  patch: AddressPatch;
};

/** All input for the `updateAddress` mutation. */
export type UpdateAddressInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Address` being updated. */
  patch: AddressPatch;
  id: Scalars['UUID'];
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
  person?: Maybe<Person>;
  /** An edge for our `Address`. May be used by Relay 1. */
  addressEdge?: Maybe<AddressesEdge>;
};


/** The output of our update `Address` mutation. */
export type UpdateAddressPayloadAddressEdgeArgs = {
  orderBy?: Maybe<Array<AddressesOrderBy>>;
};

/** All input for the `updateDocumentTemplateByNodeId` mutation. */
export type UpdateDocumentTemplateByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `DocumentTemplate` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `DocumentTemplate` being updated. */
  patch: DocumentTemplatePatch;
};

/** All input for the `updateDocumentTemplate` mutation. */
export type UpdateDocumentTemplateInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `DocumentTemplate` being updated. */
  patch: DocumentTemplatePatch;
  id: Scalars['UUID'];
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

/** All input for the `updateLetterByNodeId` mutation. */
export type UpdateLetterByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Letter` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Letter` being updated. */
  patch: LetterPatch;
};

/** All input for the `updateLetter` mutation. */
export type UpdateLetterInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Letter` being updated. */
  patch: LetterPatch;
  id: Scalars['UUID'];
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
  /** An edge for our `Letter`. May be used by Relay 1. */
  letterEdge?: Maybe<LettersEdge>;
};


/** The output of our update `Letter` mutation. */
export type UpdateLetterPayloadLetterEdgeArgs = {
  orderBy?: Maybe<Array<LettersOrderBy>>;
};

/** All input for the `updateMatterByNodeId` mutation. */
export type UpdateMatterByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Matter` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Matter` being updated. */
  patch: MatterPatch;
};

/** All input for the `updateMatterContactByNodeId` mutation. */
export type UpdateMatterContactByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `MatterContact` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `MatterContact` being updated. */
  patch: MatterContactPatch;
};

/** All input for the `updateMatterContact` mutation. */
export type UpdateMatterContactInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `MatterContact` being updated. */
  patch: MatterContactPatch;
  id: Scalars['UUID'];
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

/** All input for the `updateMatter` mutation. */
export type UpdateMatterInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Matter` being updated. */
  patch: MatterPatch;
  id: Scalars['UUID'];
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
  primaryContact?: Maybe<Person>;
  /** Reads a single `MatterTemplate` that is related to this `Matter`. */
  matterTemplate?: Maybe<MatterTemplate>;
  /** An edge for our `Matter`. May be used by Relay 1. */
  matterEdge?: Maybe<MattersEdge>;
};


/** The output of our update `Matter` mutation. */
export type UpdateMatterPayloadMatterEdgeArgs = {
  orderBy?: Maybe<Array<MattersOrderBy>>;
};

/** All input for the `updateMatterTemplateByNodeId` mutation. */
export type UpdateMatterTemplateByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `MatterTemplate` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `MatterTemplate` being updated. */
  patch: MatterTemplatePatch;
};

/** All input for the `updateMatterTemplate` mutation. */
export type UpdateMatterTemplateInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `MatterTemplate` being updated. */
  patch: MatterTemplatePatch;
  id: Scalars['UUID'];
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

/** All input for the `updatePersonByNodeId` mutation. */
export type UpdatePersonByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Person` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Person` being updated. */
  patch: PersonPatch;
};

/** All input for the `updatePerson` mutation. */
export type UpdatePersonInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Person` being updated. */
  patch: PersonPatch;
  id: Scalars['UUID'];
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

/** All input for the `updateQuestionByNodeId` mutation. */
export type UpdateQuestionByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Question` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Question` being updated. */
  patch: QuestionPatch;
};

/** All input for the `updateQuestion` mutation. */
export type UpdateQuestionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Question` being updated. */
  patch: QuestionPatch;
  id: Scalars['UUID'];
};

/** All input for the `updateQuestionnaireByNodeId` mutation. */
export type UpdateQuestionnaireByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Questionnaire` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Questionnaire` being updated. */
  patch: QuestionnairePatch;
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
  matterTemplate?: Maybe<MatterTemplate>;
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
  /** An object where the defined keys will be set on the `Questionnaire` being updated. */
  patch: QuestionnairePatch;
  id: Scalars['UUID'];
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
  matterTemplate?: Maybe<MatterTemplate>;
  /** An edge for our `Questionnaire`. May be used by Relay 1. */
  questionnaireEdge?: Maybe<QuestionnairesEdge>;
};


/** The output of our update `Questionnaire` mutation. */
export type UpdateQuestionnairePayloadQuestionnaireEdgeArgs = {
  orderBy?: Maybe<Array<QuestionnairesOrderBy>>;
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

/** All input for the `updateResponseByNodeId` mutation. */
export type UpdateResponseByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Response` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Response` being updated. */
  patch: ResponsePatch;
};

/** All input for the `updateResponse` mutation. */
export type UpdateResponseInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Response` being updated. */
  patch: ResponsePatch;
  id: Scalars['UUID'];
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
  /** Reads a single `Question` that is related to this `Response`. */
  question?: Maybe<Question>;
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
  & { matterTemplates?: Maybe<(
    { __typename?: 'MatterTemplatesConnection' }
    & { nodes: Array<(
      { __typename?: 'MatterTemplate' }
      & Pick<MatterTemplate, 'id' | 'name' | 'javascriptModule' | 'category'>
      & { questionnaires: (
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
  & { addresses?: Maybe<(
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
  & { currentUserMatters?: Maybe<(
    { __typename?: 'CurrentUserMattersConnection' }
    & { nodes: Array<(
      { __typename?: 'CurrentUserMatter' }
      & Pick<CurrentUserMatter, 'id' | 'primaryContactId' | 'matterTemplateId' | 'matterTemplateName' | 'matterTemplateCategory'>
    )> }
  )> }
);

export type AllDocumentTemplatesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllDocumentTemplatesQuery = (
  { __typename?: 'Query' }
  & { documentTemplates?: Maybe<(
    { __typename?: 'DocumentTemplatesConnection' }
    & { nodes: Array<(
      { __typename?: 'DocumentTemplate' }
      & Pick<DocumentTemplate, 'id' | 'name' | 'description'>
    )> }
  )> }
);

export type AllMatterTemplatesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllMatterTemplatesQuery = (
  { __typename?: 'Query' }
  & { matterTemplates?: Maybe<(
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
  & { matters?: Maybe<(
    { __typename?: 'MattersConnection' }
    & { nodes: Array<(
      { __typename?: 'Matter' }
      & Pick<Matter, 'id' | 'name' | 'createdAt' | 'updatedAt'>
      & { primaryContact?: Maybe<(
        { __typename?: 'Person' }
        & Pick<Person, 'id' | 'name' | 'email'>
      )>, matterTemplate?: Maybe<(
        { __typename?: 'MatterTemplate' }
        & Pick<MatterTemplate, 'id' | 'name' | 'category'>
      )> }
    )> }
  )> }
);

export type AllPeopleQueryVariables = Exact<{ [key: string]: never; }>;


export type AllPeopleQuery = (
  { __typename?: 'Query' }
  & { people?: Maybe<(
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
  & { questionnaires?: Maybe<(
    { __typename?: 'QuestionnairesConnection' }
    & { nodes: Array<(
      { __typename?: 'Questionnaire' }
      & Pick<Questionnaire, 'id' | 'name' | 'createdAt' | 'updatedAt'>
      & { matterTemplate?: Maybe<(
        { __typename?: 'MatterTemplate' }
        & Pick<MatterTemplate, 'id' | 'name' | 'category'>
      )> }
    )> }
  )> }
);

export type AllQuestionsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllQuestionsQuery = (
  { __typename?: 'Query' }
  & { questions?: Maybe<(
    { __typename?: 'QuestionsConnection' }
    & { nodes: Array<(
      { __typename?: 'Question' }
      & Pick<Question, 'id' | 'options' | 'questionType' | 'prompt' | 'helpText'>
    )> }
  )> }
);

export type CreateDocumentTemplateMutationVariables = Exact<{
  name: Scalars['String'];
  description: Scalars['String'];
}>;


export type CreateDocumentTemplateMutation = (
  { __typename?: 'Mutation' }
  & { createDocumentTemplate?: Maybe<(
    { __typename?: 'CreateDocumentTemplatePayload' }
    & { documentTemplate?: Maybe<(
      { __typename?: 'DocumentTemplate' }
      & Pick<DocumentTemplate, 'id' | 'name' | 'description'>
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

export type DeleteDocumentTemplateByIdMutationVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type DeleteDocumentTemplateByIdMutation = (
  { __typename?: 'Mutation' }
  & { deleteDocumentTemplate?: Maybe<(
    { __typename?: 'DeleteDocumentTemplatePayload' }
    & { documentTemplate?: Maybe<(
      { __typename?: 'DocumentTemplate' }
      & Pick<DocumentTemplate, 'id'>
    )> }
  )> }
);

export type DeleteMatterByIdMutationVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type DeleteMatterByIdMutation = (
  { __typename?: 'Mutation' }
  & { deleteMatter?: Maybe<(
    { __typename?: 'DeleteMatterPayload' }
    & { matter?: Maybe<(
      { __typename?: 'Matter' }
      & Pick<Matter, 'id'>
    )> }
  )> }
);

export type DeleteMatterTemplateByIdMutationVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type DeleteMatterTemplateByIdMutation = (
  { __typename?: 'Mutation' }
  & { deleteMatterTemplate?: Maybe<(
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
  & { deleteQuestion?: Maybe<(
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
  & { deleteQuestionnaire?: Maybe<(
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
  & { matter?: Maybe<(
    { __typename?: 'Matter' }
    & Pick<Matter, 'id' | 'name'>
    & { primaryContact?: Maybe<(
      { __typename?: 'Person' }
      & Pick<Person, 'id' | 'name'>
    )>, matterTemplate?: Maybe<(
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
  & { question?: Maybe<(
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
  & { questionnaire?: Maybe<(
    { __typename?: 'Questionnaire' }
    & Pick<Questionnaire, 'id' | 'name' | 'questionTree'>
  )> }
);

export type UpdateDocumentTemplateByIdMutationVariables = Exact<{
  id: Scalars['UUID'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
}>;


export type UpdateDocumentTemplateByIdMutation = (
  { __typename?: 'Mutation' }
  & { updateDocumentTemplate?: Maybe<(
    { __typename?: 'UpdateDocumentTemplatePayload' }
    & { documentTemplate?: Maybe<(
      { __typename?: 'DocumentTemplate' }
      & Pick<DocumentTemplate, 'id' | 'name' | 'description'>
    )> }
  )> }
);

export type UpdateMatterByIdMutationVariables = Exact<{
  id: Scalars['UUID'];
  name: Scalars['String'];
}>;


export type UpdateMatterByIdMutation = (
  { __typename?: 'Mutation' }
  & { updateMatter?: Maybe<(
    { __typename?: 'UpdateMatterPayload' }
    & { matter?: Maybe<(
      { __typename?: 'Matter' }
      & Pick<Matter, 'id' | 'name' | 'updatedAt'>
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
  & { updateMatterTemplate?: Maybe<(
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
  & { updatePerson?: Maybe<(
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
  & { updateQuestion?: Maybe<(
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
  & { updateQuestionnaire?: Maybe<(
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
  matterTemplates(condition: {category: $category, active: true}, orderBy: NAME_ASC) {
    nodes {
      id
      name
      javascriptModule
      category
      questionnaires {
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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllActiveMatterTemplatesByCategoryQuery, AllActiveMatterTemplatesByCategoryQueryVariables>(AllActiveMatterTemplatesByCategoryDocument, options);
      }
export function useAllActiveMatterTemplatesByCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllActiveMatterTemplatesByCategoryQuery, AllActiveMatterTemplatesByCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllActiveMatterTemplatesByCategoryQuery, AllActiveMatterTemplatesByCategoryQueryVariables>(AllActiveMatterTemplatesByCategoryDocument, options);
        }
export type AllActiveMatterTemplatesByCategoryQueryHookResult = ReturnType<typeof useAllActiveMatterTemplatesByCategoryQuery>;
export type AllActiveMatterTemplatesByCategoryLazyQueryHookResult = ReturnType<typeof useAllActiveMatterTemplatesByCategoryLazyQuery>;
export type AllActiveMatterTemplatesByCategoryQueryResult = Apollo.QueryResult<AllActiveMatterTemplatesByCategoryQuery, AllActiveMatterTemplatesByCategoryQueryVariables>;
export const AllAddressesDocument = gql`
    query AllAddresses {
  addresses {
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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllAddressesQuery, AllAddressesQueryVariables>(AllAddressesDocument, options);
      }
export function useAllAddressesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllAddressesQuery, AllAddressesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllAddressesQuery, AllAddressesQueryVariables>(AllAddressesDocument, options);
        }
export type AllAddressesQueryHookResult = ReturnType<typeof useAllAddressesQuery>;
export type AllAddressesLazyQueryHookResult = ReturnType<typeof useAllAddressesLazyQuery>;
export type AllAddressesQueryResult = Apollo.QueryResult<AllAddressesQuery, AllAddressesQueryVariables>;
export const AllCurrentUserMattersDocument = gql`
    query AllCurrentUserMatters {
  currentUserMatters {
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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllCurrentUserMattersQuery, AllCurrentUserMattersQueryVariables>(AllCurrentUserMattersDocument, options);
      }
export function useAllCurrentUserMattersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllCurrentUserMattersQuery, AllCurrentUserMattersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllCurrentUserMattersQuery, AllCurrentUserMattersQueryVariables>(AllCurrentUserMattersDocument, options);
        }
export type AllCurrentUserMattersQueryHookResult = ReturnType<typeof useAllCurrentUserMattersQuery>;
export type AllCurrentUserMattersLazyQueryHookResult = ReturnType<typeof useAllCurrentUserMattersLazyQuery>;
export type AllCurrentUserMattersQueryResult = Apollo.QueryResult<AllCurrentUserMattersQuery, AllCurrentUserMattersQueryVariables>;
export const AllDocumentTemplatesDocument = gql`
    query AllDocumentTemplates {
  documentTemplates {
    nodes {
      id
      name
      description
    }
  }
}
    `;

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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllDocumentTemplatesQuery, AllDocumentTemplatesQueryVariables>(AllDocumentTemplatesDocument, options);
      }
export function useAllDocumentTemplatesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllDocumentTemplatesQuery, AllDocumentTemplatesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllDocumentTemplatesQuery, AllDocumentTemplatesQueryVariables>(AllDocumentTemplatesDocument, options);
        }
export type AllDocumentTemplatesQueryHookResult = ReturnType<typeof useAllDocumentTemplatesQuery>;
export type AllDocumentTemplatesLazyQueryHookResult = ReturnType<typeof useAllDocumentTemplatesLazyQuery>;
export type AllDocumentTemplatesQueryResult = Apollo.QueryResult<AllDocumentTemplatesQuery, AllDocumentTemplatesQueryVariables>;
export const AllMatterTemplatesDocument = gql`
    query AllMatterTemplates {
  matterTemplates(orderBy: NAME_ASC) {
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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllMatterTemplatesQuery, AllMatterTemplatesQueryVariables>(AllMatterTemplatesDocument, options);
      }
export function useAllMatterTemplatesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllMatterTemplatesQuery, AllMatterTemplatesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllMatterTemplatesQuery, AllMatterTemplatesQueryVariables>(AllMatterTemplatesDocument, options);
        }
export type AllMatterTemplatesQueryHookResult = ReturnType<typeof useAllMatterTemplatesQuery>;
export type AllMatterTemplatesLazyQueryHookResult = ReturnType<typeof useAllMatterTemplatesLazyQuery>;
export type AllMatterTemplatesQueryResult = Apollo.QueryResult<AllMatterTemplatesQuery, AllMatterTemplatesQueryVariables>;
export const AllMattersDocument = gql`
    query AllMatters {
  matters(orderBy: UPDATED_AT_ASC) {
    nodes {
      id
      primaryContact {
        id
        name
        email
      }
      matterTemplate {
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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllMattersQuery, AllMattersQueryVariables>(AllMattersDocument, options);
      }
export function useAllMattersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllMattersQuery, AllMattersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllMattersQuery, AllMattersQueryVariables>(AllMattersDocument, options);
        }
export type AllMattersQueryHookResult = ReturnType<typeof useAllMattersQuery>;
export type AllMattersLazyQueryHookResult = ReturnType<typeof useAllMattersLazyQuery>;
export type AllMattersQueryResult = Apollo.QueryResult<AllMattersQuery, AllMattersQueryVariables>;
export const AllPeopleDocument = gql`
    query AllPeople {
  people(orderBy: EMAIL_ASC) {
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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllPeopleQuery, AllPeopleQueryVariables>(AllPeopleDocument, options);
      }
export function useAllPeopleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllPeopleQuery, AllPeopleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllPeopleQuery, AllPeopleQueryVariables>(AllPeopleDocument, options);
        }
export type AllPeopleQueryHookResult = ReturnType<typeof useAllPeopleQuery>;
export type AllPeopleLazyQueryHookResult = ReturnType<typeof useAllPeopleLazyQuery>;
export type AllPeopleQueryResult = Apollo.QueryResult<AllPeopleQuery, AllPeopleQueryVariables>;
export const AllQuestionnairesDocument = gql`
    query AllQuestionnaires {
  questionnaires(orderBy: UPDATED_AT_ASC) {
    nodes {
      id
      matterTemplate {
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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllQuestionnairesQuery, AllQuestionnairesQueryVariables>(AllQuestionnairesDocument, options);
      }
export function useAllQuestionnairesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllQuestionnairesQuery, AllQuestionnairesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllQuestionnairesQuery, AllQuestionnairesQueryVariables>(AllQuestionnairesDocument, options);
        }
export type AllQuestionnairesQueryHookResult = ReturnType<typeof useAllQuestionnairesQuery>;
export type AllQuestionnairesLazyQueryHookResult = ReturnType<typeof useAllQuestionnairesLazyQuery>;
export type AllQuestionnairesQueryResult = Apollo.QueryResult<AllQuestionnairesQuery, AllQuestionnairesQueryVariables>;
export const AllQuestionsDocument = gql`
    query AllQuestions {
  questions(orderBy: PROMPT_ASC) {
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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllQuestionsQuery, AllQuestionsQueryVariables>(AllQuestionsDocument, options);
      }
export function useAllQuestionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllQuestionsQuery, AllQuestionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllQuestionsQuery, AllQuestionsQueryVariables>(AllQuestionsDocument, options);
        }
export type AllQuestionsQueryHookResult = ReturnType<typeof useAllQuestionsQuery>;
export type AllQuestionsLazyQueryHookResult = ReturnType<typeof useAllQuestionsLazyQuery>;
export type AllQuestionsQueryResult = Apollo.QueryResult<AllQuestionsQuery, AllQuestionsQueryVariables>;
export const CreateDocumentTemplateDocument = gql`
    mutation CreateDocumentTemplate($name: String!, $description: String!) {
  createDocumentTemplate(input: {documentTemplate: {name: $name, description: $description}}) {
    documentTemplate {
      id
      name
      description
    }
  }
}
    `;
export type CreateDocumentTemplateMutationFn = Apollo.MutationFunction<CreateDocumentTemplateMutation, CreateDocumentTemplateMutationVariables>;

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
 *      description: // value for 'description'
 *   },
 * });
 */
export function useCreateDocumentTemplateMutation(baseOptions?: Apollo.MutationHookOptions<CreateDocumentTemplateMutation, CreateDocumentTemplateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateDocumentTemplateMutation, CreateDocumentTemplateMutationVariables>(CreateDocumentTemplateDocument, options);
      }
export type CreateDocumentTemplateMutationHookResult = ReturnType<typeof useCreateDocumentTemplateMutation>;
export type CreateDocumentTemplateMutationResult = Apollo.MutationResult<CreateDocumentTemplateMutation>;
export type CreateDocumentTemplateMutationOptions = Apollo.BaseMutationOptions<CreateDocumentTemplateMutation, CreateDocumentTemplateMutationVariables>;
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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateLetterMutation, CreateLetterMutationVariables>(CreateLetterDocument, options);
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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMatterMutation, CreateMatterMutationVariables>(CreateMatterDocument, options);
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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMatterDocumentFromUploadUrlMutation, CreateMatterDocumentFromUploadUrlMutationVariables>(CreateMatterDocumentFromUploadUrlDocument, options);
      }
export type CreateMatterDocumentFromUploadUrlMutationHookResult = ReturnType<typeof useCreateMatterDocumentFromUploadUrlMutation>;
export type CreateMatterDocumentFromUploadUrlMutationResult = Apollo.MutationResult<CreateMatterDocumentFromUploadUrlMutation>;
export type CreateMatterDocumentFromUploadUrlMutationOptions = Apollo.BaseMutationOptions<CreateMatterDocumentFromUploadUrlMutation, CreateMatterDocumentFromUploadUrlMutationVariables>;
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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMatterTemplateMutation, CreateMatterTemplateMutationVariables>(CreateMatterTemplateDocument, options);
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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateQuestionMutation, CreateQuestionMutationVariables>(CreateQuestionDocument, options);
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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateQuestionnaireMutation, CreateQuestionnaireMutationVariables>(CreateQuestionnaireDocument, options);
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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
      }
export function useCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
        }
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserQueryResult = Apollo.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;
export const DeleteDocumentTemplateByIdDocument = gql`
    mutation DeleteDocumentTemplateById($id: UUID!) {
  deleteDocumentTemplate(input: {id: $id}) {
    documentTemplate {
      id
    }
  }
}
    `;
export type DeleteDocumentTemplateByIdMutationFn = Apollo.MutationFunction<DeleteDocumentTemplateByIdMutation, DeleteDocumentTemplateByIdMutationVariables>;

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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteDocumentTemplateByIdMutation, DeleteDocumentTemplateByIdMutationVariables>(DeleteDocumentTemplateByIdDocument, options);
      }
export type DeleteDocumentTemplateByIdMutationHookResult = ReturnType<typeof useDeleteDocumentTemplateByIdMutation>;
export type DeleteDocumentTemplateByIdMutationResult = Apollo.MutationResult<DeleteDocumentTemplateByIdMutation>;
export type DeleteDocumentTemplateByIdMutationOptions = Apollo.BaseMutationOptions<DeleteDocumentTemplateByIdMutation, DeleteDocumentTemplateByIdMutationVariables>;
export const DeleteMatterByIdDocument = gql`
    mutation DeleteMatterById($id: UUID!) {
  deleteMatter(input: {id: $id}) {
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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteMatterByIdMutation, DeleteMatterByIdMutationVariables>(DeleteMatterByIdDocument, options);
      }
export type DeleteMatterByIdMutationHookResult = ReturnType<typeof useDeleteMatterByIdMutation>;
export type DeleteMatterByIdMutationResult = Apollo.MutationResult<DeleteMatterByIdMutation>;
export type DeleteMatterByIdMutationOptions = Apollo.BaseMutationOptions<DeleteMatterByIdMutation, DeleteMatterByIdMutationVariables>;
export const DeleteMatterTemplateByIdDocument = gql`
    mutation DeleteMatterTemplateById($id: UUID!) {
  deleteMatterTemplate(input: {id: $id}) {
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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteMatterTemplateByIdMutation, DeleteMatterTemplateByIdMutationVariables>(DeleteMatterTemplateByIdDocument, options);
      }
export type DeleteMatterTemplateByIdMutationHookResult = ReturnType<typeof useDeleteMatterTemplateByIdMutation>;
export type DeleteMatterTemplateByIdMutationResult = Apollo.MutationResult<DeleteMatterTemplateByIdMutation>;
export type DeleteMatterTemplateByIdMutationOptions = Apollo.BaseMutationOptions<DeleteMatterTemplateByIdMutation, DeleteMatterTemplateByIdMutationVariables>;
export const DeleteQuestionByIdDocument = gql`
    mutation DeleteQuestionById($id: UUID!) {
  deleteQuestion(input: {id: $id}) {
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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteQuestionByIdMutation, DeleteQuestionByIdMutationVariables>(DeleteQuestionByIdDocument, options);
      }
export type DeleteQuestionByIdMutationHookResult = ReturnType<typeof useDeleteQuestionByIdMutation>;
export type DeleteQuestionByIdMutationResult = Apollo.MutationResult<DeleteQuestionByIdMutation>;
export type DeleteQuestionByIdMutationOptions = Apollo.BaseMutationOptions<DeleteQuestionByIdMutation, DeleteQuestionByIdMutationVariables>;
export const DeleteQuestionnaireByIdDocument = gql`
    mutation DeleteQuestionnaireById($id: UUID!) {
  deleteQuestionnaire(input: {id: $id}) {
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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteQuestionnaireByIdMutation, DeleteQuestionnaireByIdMutationVariables>(DeleteQuestionnaireByIdDocument, options);
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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GetTransloaditTokenMutation, GetTransloaditTokenMutationVariables>(GetTransloaditTokenDocument, options);
      }
export type GetTransloaditTokenMutationHookResult = ReturnType<typeof useGetTransloaditTokenMutation>;
export type GetTransloaditTokenMutationResult = Apollo.MutationResult<GetTransloaditTokenMutation>;
export type GetTransloaditTokenMutationOptions = Apollo.BaseMutationOptions<GetTransloaditTokenMutation, GetTransloaditTokenMutationVariables>;
export const MatterByIdDocument = gql`
    query MatterById($id: UUID!) {
  matter(id: $id) {
    id
    name
    primaryContact {
      id
      name
    }
    matterTemplate {
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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MatterByIdQuery, MatterByIdQueryVariables>(MatterByIdDocument, options);
      }
export function useMatterByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MatterByIdQuery, MatterByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MatterByIdQuery, MatterByIdQueryVariables>(MatterByIdDocument, options);
        }
export type MatterByIdQueryHookResult = ReturnType<typeof useMatterByIdQuery>;
export type MatterByIdLazyQueryHookResult = ReturnType<typeof useMatterByIdLazyQuery>;
export type MatterByIdQueryResult = Apollo.QueryResult<MatterByIdQuery, MatterByIdQueryVariables>;
export const QuestionByIdDocument = gql`
    query QuestionById($id: UUID!) {
  question(id: $id) {
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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QuestionByIdQuery, QuestionByIdQueryVariables>(QuestionByIdDocument, options);
      }
export function useQuestionByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QuestionByIdQuery, QuestionByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QuestionByIdQuery, QuestionByIdQueryVariables>(QuestionByIdDocument, options);
        }
export type QuestionByIdQueryHookResult = ReturnType<typeof useQuestionByIdQuery>;
export type QuestionByIdLazyQueryHookResult = ReturnType<typeof useQuestionByIdLazyQuery>;
export type QuestionByIdQueryResult = Apollo.QueryResult<QuestionByIdQuery, QuestionByIdQueryVariables>;
export const QuestionnaireByIdDocument = gql`
    query QuestionnaireById($id: UUID!) {
  questionnaire(id: $id) {
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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QuestionnaireByIdQuery, QuestionnaireByIdQueryVariables>(QuestionnaireByIdDocument, options);
      }
export function useQuestionnaireByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QuestionnaireByIdQuery, QuestionnaireByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QuestionnaireByIdQuery, QuestionnaireByIdQueryVariables>(QuestionnaireByIdDocument, options);
        }
export type QuestionnaireByIdQueryHookResult = ReturnType<typeof useQuestionnaireByIdQuery>;
export type QuestionnaireByIdLazyQueryHookResult = ReturnType<typeof useQuestionnaireByIdLazyQuery>;
export type QuestionnaireByIdQueryResult = Apollo.QueryResult<QuestionnaireByIdQuery, QuestionnaireByIdQueryVariables>;
export const UpdateDocumentTemplateByIdDocument = gql`
    mutation UpdateDocumentTemplateById($id: UUID!, $name: String, $description: String) {
  updateDocumentTemplate(input: {patch: {name: $name, description: $description}, id: $id}) {
    documentTemplate {
      id
      name
      description
    }
  }
}
    `;
export type UpdateDocumentTemplateByIdMutationFn = Apollo.MutationFunction<UpdateDocumentTemplateByIdMutation, UpdateDocumentTemplateByIdMutationVariables>;

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
 *      description: // value for 'description'
 *   },
 * });
 */
export function useUpdateDocumentTemplateByIdMutation(baseOptions?: Apollo.MutationHookOptions<UpdateDocumentTemplateByIdMutation, UpdateDocumentTemplateByIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateDocumentTemplateByIdMutation, UpdateDocumentTemplateByIdMutationVariables>(UpdateDocumentTemplateByIdDocument, options);
      }
export type UpdateDocumentTemplateByIdMutationHookResult = ReturnType<typeof useUpdateDocumentTemplateByIdMutation>;
export type UpdateDocumentTemplateByIdMutationResult = Apollo.MutationResult<UpdateDocumentTemplateByIdMutation>;
export type UpdateDocumentTemplateByIdMutationOptions = Apollo.BaseMutationOptions<UpdateDocumentTemplateByIdMutation, UpdateDocumentTemplateByIdMutationVariables>;
export const UpdateMatterByIdDocument = gql`
    mutation UpdateMatterById($id: UUID!, $name: String!) {
  updateMatter(input: {id: $id, patch: {name: $name}}) {
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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMatterByIdMutation, UpdateMatterByIdMutationVariables>(UpdateMatterByIdDocument, options);
      }
export type UpdateMatterByIdMutationHookResult = ReturnType<typeof useUpdateMatterByIdMutation>;
export type UpdateMatterByIdMutationResult = Apollo.MutationResult<UpdateMatterByIdMutation>;
export type UpdateMatterByIdMutationOptions = Apollo.BaseMutationOptions<UpdateMatterByIdMutation, UpdateMatterByIdMutationVariables>;
export const UpdateMatterTemplateByIdDocument = gql`
    mutation UpdateMatterTemplateById($id: UUID!, $name: String, $javascriptModule: String, $category: String) {
  updateMatterTemplate(input: {patch: {name: $name, javascriptModule: $javascriptModule, category: $category}, id: $id}) {
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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMatterTemplateByIdMutation, UpdateMatterTemplateByIdMutationVariables>(UpdateMatterTemplateByIdDocument, options);
      }
export type UpdateMatterTemplateByIdMutationHookResult = ReturnType<typeof useUpdateMatterTemplateByIdMutation>;
export type UpdateMatterTemplateByIdMutationResult = Apollo.MutationResult<UpdateMatterTemplateByIdMutation>;
export type UpdateMatterTemplateByIdMutationOptions = Apollo.BaseMutationOptions<UpdateMatterTemplateByIdMutation, UpdateMatterTemplateByIdMutationVariables>;
export const UpdatePersonByIdDocument = gql`
    mutation UpdatePersonById($flags: String!, $id: UUID!, $name: String!) {
  updatePerson(input: {id: $id, patch: {flags: $flags, name: $name}}) {
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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePersonByIdMutation, UpdatePersonByIdMutationVariables>(UpdatePersonByIdDocument, options);
      }
export type UpdatePersonByIdMutationHookResult = ReturnType<typeof useUpdatePersonByIdMutation>;
export type UpdatePersonByIdMutationResult = Apollo.MutationResult<UpdatePersonByIdMutation>;
export type UpdatePersonByIdMutationOptions = Apollo.BaseMutationOptions<UpdatePersonByIdMutation, UpdatePersonByIdMutationVariables>;
export const UpdateQuestionByIdDocument = gql`
    mutation UpdateQuestionById($id: UUID!, $options: [String], $questionType: String, $prompt: String, $helpText: JSON) {
  updateQuestion(input: {patch: {options: $options, questionType: $questionType, prompt: $prompt, helpText: $helpText}, id: $id}) {
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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateQuestionByIdMutation, UpdateQuestionByIdMutationVariables>(UpdateQuestionByIdDocument, options);
      }
export type UpdateQuestionByIdMutationHookResult = ReturnType<typeof useUpdateQuestionByIdMutation>;
export type UpdateQuestionByIdMutationResult = Apollo.MutationResult<UpdateQuestionByIdMutation>;
export type UpdateQuestionByIdMutationOptions = Apollo.BaseMutationOptions<UpdateQuestionByIdMutation, UpdateQuestionByIdMutationVariables>;
export const UpdateQuestionnaireByIdDocument = gql`
    mutation UpdateQuestionnaireById($id: UUID!, $name: String) {
  updateQuestionnaire(input: {patch: {name: $name}, id: $id}) {
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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateQuestionnaireByIdMutation, UpdateQuestionnaireByIdMutationVariables>(UpdateQuestionnaireByIdDocument, options);
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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateQuestionnaireFromNeo4JMutation, UpdateQuestionnaireFromNeo4JMutationVariables>(UpdateQuestionnaireFromNeo4JDocument, options);
      }
export type UpdateQuestionnaireFromNeo4JMutationHookResult = ReturnType<typeof useUpdateQuestionnaireFromNeo4JMutation>;
export type UpdateQuestionnaireFromNeo4JMutationResult = Apollo.MutationResult<UpdateQuestionnaireFromNeo4JMutation>;
export type UpdateQuestionnaireFromNeo4JMutationOptions = Apollo.BaseMutationOptions<UpdateQuestionnaireFromNeo4JMutation, UpdateQuestionnaireFromNeo4JMutationVariables>;