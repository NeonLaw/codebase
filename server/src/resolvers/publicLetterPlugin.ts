import { gql, makeExtendSchemaPlugin } from 'graphile-utils';
import { verify } from 'hcaptcha';

export const publicLetterPlugin = makeExtendSchemaPlugin((build) => {
  const { pgSql: sql } = build;

  return {
    resolvers: {
      Mutation: {
        createPublicLetter: async (
          _query,
          { input: { captchaToken, letter }},
          { pgClient, logger },
          resolveInfo
        ) => {
          const secret = process.env.HCAPTCHA_SECRET_KEY as string;

          await verify(secret, captchaToken)
            .then((data) => logger.info(data))
            .catch((error) => { throw new Error(error); });

          const {
            rows: [createdLetter],
          } = await pgClient.query(
            'INSERT INTO letter (body, addresseeId, addressorId) '+
            'VALUES ($1, $2, $3) RETURNING *',
            [letter.body, letter.addresseeId, letter.addressorId]
          );

          const [
            row,
          ] = await resolveInfo.graphile.selectGraphQLResultFromTable(
            sql.fragment`letter`,
            (tableAlias, queryBuilder) => {
              queryBuilder.where(
                sql.fragment`${tableAlias}.id = ${sql.value(createdLetter.id)}`
              );
            }
          );

          return {
            data: row,
            query: build.$$isQuery,
          };
        },
      },
    },
    typeDefs: gql`
      input PublicLetterInput {
        addresseeId: UUID!
        addressorId: UUID!
        body: JSON!
      }

      input CreatePublicLetterInput {
        clientMutationId: UUID
        letter: PublicLetterInput!
        captchaToken: String!
      }
      extend type Mutation {
        createPublicLetter(input: CreatePublicLetterInput!): Letter
      }
    `,
  };
});
