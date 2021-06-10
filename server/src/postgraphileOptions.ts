import { PostGraphileOptions, makePluginHook } from 'postgraphile';
import GraphilePro from '@graphile/pro';
import PgPubsub from '@graphile/pg-pubsub';
import PgSimplifyInflectorPlugin from '@graphile-contrib/pg-simplify-inflector';
import { documentPlugin } from './resolvers/documentPlugin';
import { fileUploadsPlugin } from './resolvers/fileUploadsPlugin';
import { makeAddInflectorsPlugin } from 'graphile-utils';
import { publicLetterPlugin } from './resolvers/publicLetterPlugin';
import { questionPlugin } from './resolvers/questionPlugin';
import { searchQueriesPlugin } from './resolvers/searchQueriesPlugin';
import { slatePlugin } from './slateTypes';

const tracingPlugin = {
  withPostGraphileContext: (originalContext) => {
    return (options, callback) => {
      // add tracing callback here
      // context.pgClient gets reference
      return originalContext(options, callback);
    };
  }
};

const pluginHook = makePluginHook([
  PgPubsub,
  // interested in a Postgraphile license? Join the Discord channel!
  // https://discord.com/invite/graphile
  ...(process.env.GRAPHILE_LICENSE ? [GraphilePro] : []),
  tracingPlugin,
]);

const schemaInflectorsPlugin = makeAddInflectorsPlugin(inflectors => {
  const { _tableName: oldTableName } = inflectors;

  return {
    _tableName(table) {
      if (table.namespaceName !== 'public') {
        return this.coerceToGraphQLName(
          `${table.namespaceName}-` +
          `${table.tags.name || table.type.tags.name || table.name}`
        );
      }
      return oldTableName.call(this, table);
    },
  };
}, true);

export const postgraphileOptions: PostGraphileOptions = {
  async additionalGraphQLContextFromRequest(request) {
    if (request.authenticatedPerson && request.authenticatedPerson.id) {
      const { id, role } = request.authenticatedPerson;
      return {
        authenticatedPerson: { id, role },
      };
    }

    return {};
  },
  allowExplain: process.env.SHOW_GRAPHIQL === 'true' ? true : false,
  appendPlugins: [
    PgSimplifyInflectorPlugin,
    schemaInflectorsPlugin,
    documentPlugin,
    fileUploadsPlugin,
    publicLetterPlugin,
    questionPlugin,
    searchQueriesPlugin,
    slatePlugin
  ],
  defaultPaginationCap:
    parseInt(process.env.GRAPHQL_PAGINATION_CAP || '', 10) || 50,
  disableQueryLog: false,
  dynamicJson: true,
  enableCors: true,
  enableQueryBatching: true,
  enhanceGraphiql: true,
  exposeGraphQLCost:
    (parseInt(process.env.HIDE_QUERY_COST || '', 10) || 0) < 1,
  extendedErrors: ['errcode'],
  graphiql: true,
  graphiqlRoute: '/graphiql',
  graphqlCostLimit:
    parseInt(process.env.GRAPHQL_COST_LIMIT || '', 10) || 30000,
  graphqlDepthLimit:
    parseInt(process.env.GRAPHQL_DEPTH_LIMIT || '', 10) || 12,
  graphqlRoute: '/graphql',
  ignoreIndexes: false,
  ignoreRBAC: false,
  legacyRelations: 'omit' as const,
  pgSettings: async (request: any) => {
    const settings: any = {};
    const traceId = request['X-Trace-Id'];

    if (request.authenticatedPerson) {
      const { role, id } = request.authenticatedPerson;
      settings['role'] = role;
      settings['person.id'] = id;
      settings['application_name'] = `${id}-${role}-${traceId}`;
    } else {
      settings['role'] = 'anonymous';
      settings['application_name'] = traceId;
    }

    return settings;
  },
  pluginHook,
  retryOnInitFail: true,
  setofFunctionsContainNulls: false,
  showErrorStack: true
};
