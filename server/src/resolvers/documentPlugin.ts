import { gql, makeExtendSchemaPlugin } from 'graphile-utils';
import { Storage } from '@google-cloud/storage';


export const documentPlugin = makeExtendSchemaPlugin(() => {
  const storage = new Storage({ keyFilename: '/credentials/credentials.json' });

  return {
    resolvers: {
      Document: {
        downloadUrl: async (document) => {
          const { gcpUrl } = document;

          if (!gcpUrl) {
            return null;
          }

          const options = {
            action: 'read',
            expires: Date.now() + 15 * 60 * 1000,
            version: 'v4',
          };

          const bucketName = gcpUrl.match(
            /^https:\/\/(.*).storage.googleapis.com/
          )[1];
          const filename = gcpUrl.match(
            /^https:\/\/.*.storage.googleapis.com\/(.*)$/
          )[1];

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
        downloadUrl: String @requires(columns: ["gcp_url"])
      }
    `,
  };
});
