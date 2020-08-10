import { Storage } from '@google-cloud/storage';

interface GetSignedUploadUrlParams {
  personUuid: string;
  filename: string;
}

export const getSignedUploadUrl = async (
  params: GetSignedUploadUrlParams
): Promise<string> => {
  const { filename, personUuid } = params;
  const uploadBucketName = 'neon-law-production' as string;
  const storage = new Storage();

  const action = 'write' as const;
  const version = 'v4' as const;

  const options = {
    action,
    contentType: 'application/octet-stream',
    expires: Date.now() + 15 * 60 * 1000, // 15 minutes
    version,
  };

  const [url] = await storage
    .bucket(uploadBucketName)
    .file(`${personUuid}/${filename}`)
    .getSignedUrl(options);

  console.log(url);

  return url;
};

// (async () => {
//   await getSignedUploadUrl({
//     filename: 'yes',
//     personUuid: '1',
//     uploadBucketName: 'neon-law-production-production-assets'
//   });
// })();
