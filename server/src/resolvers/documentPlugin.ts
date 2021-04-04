import { gql, makeExtendSchemaPlugin } from 'graphile-utils';
import { Storage } from '@google-cloud/storage';


export const documentPlugin = makeExtendSchemaPlugin(() => {
  const storage = new Storage({ keyFilename: '/credentials/credentials.json' });

  return {
    resolvers: {
      Document: {
        downloadUrl: async (document) => {
          const { filename } = document;

          const options = {
            action: 'read',
            expires: Date.now() + 15 * 60 * 1000,
            version: 'v4',
          };

          let bucketName;
          if (process.env.ENVIRONMENT === 'production') {
            bucketName = 'neon-law-production-private-assets';
          } else {
            bucketName = 'neon-law-staging-private-assets';
          }

          const [url] = await storage
            .bucket(bucketName)
            .file(filename)
            .getSignedUrl(options as any);

          return url;
        },
      },
    },
    typeDefs: gql`
      extend type Document {
        downloadUrl: String
      }
    `,
  };
});
