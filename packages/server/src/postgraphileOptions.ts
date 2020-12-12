import { PostGraphileOptions, makePluginHook } from 'postgraphile';
import GraphilePro from '@graphile/pro';
import PgPubsub from '@graphile/pg-pubsub';
import { fileUploadsPlugin } from './resolvers/fileUploads';
import newrelic from 'newrelic';

const pluginHook = makePluginHook([
  PgPubsub,

  ...(process.env.GRAPHILE_LICENSE ? [GraphilePro] : []),
]);

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
  appendPlugins: [fileUploadsPlugin],
  defaultPaginationCap:
    parseInt(process.env.GRAPHQL_PAGINATION_CAP || '', 10) || 50,
  disableQueryLog: false,
  dynamicJson: true,
  enableCors: true,
  enableQueryBatching: true,
  enhanceGraphiql: process.env.SHOW_GRAPHIQL === 'true' ? true : false,
  exposeGraphQLCost:
    (parseInt(process.env.HIDE_QUERY_COST || '', 10) || 0) < 1,
  extendedErrors: ['errcode'],
  graphiql: process.env.SHOW_GRAPHIQL === 'true' ? true : false,
  graphiqlRoute: '/api/graphiql',
  graphqlCostLimit:
    parseInt(process.env.GRAPHQL_COST_LIMIT || '', 10) || 30000,
  graphqlDepthLimit:
    parseInt(process.env.GRAPHQL_DEPTH_LIMIT || '', 10) || 12,
  graphqlRoute: '/api/graphql',
  ignoreIndexes: false,
  ignoreRBAC: false,
  legacyRelations: 'omit' as const,
  pgSettings: async (request: any) => {
    const settings: any = {};
    const traceId = request['X-Trace-Id'];

    if (request.user) {
      const { role, id } = request.authenticatedPerson;
      settings['role'] = role;
      settings['person.id'] = id;
      settings['application_name'] = `${id}-${role}-${traceId}`;
    } else {
      settings['role'] = 'anonymous';
      settings['application_name'] = traceId;
    }


    if (process.env.NODE_ENV === 'production') {
      newrelic.setTransactionName(settings['application_name']);
    }

    return settings;
  },
  pluginHook,
  retryOnInitFail: true,
  setofFunctionsContainNulls: false,
  showErrorStack: true
};
