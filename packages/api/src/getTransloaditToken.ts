import * as crypto from 'crypto';


interface GetTransloaditTokenParams {
  personUuid: string;
  template: 'pdf' | 'image';
}

export const getTransloaditToken = async (
  params: GetTransloaditTokenParams
): Promise<any> => {
  const { personUuid, template } = params;

  const utcDateString = (ms) => {
    return new Date(ms)
      .toISOString()
      .replace(/-/g, '/')
      .replace(/T/, ' ')
      .replace(/\.\d+Z$/, '+00:00');
  };

  // expire 1 hour from now (this must be milliseconds)
  const expires         = utcDateString((+new Date()) + 1 * 60 * 60 * 1000);
  const authKey         = process.env.TRANSLOADIT_KEY as string;
  const authSecret      = process.env.TRANSLOADIT_SECRET as string;
  const apiUrl          = process.env.API_URL as string;
  const pdfTemplateId   = process.env.TRANSLOADIT_PDF_TEMPLATE_ID as string;
  const imageTemplateId = process.env.TRANSLOADIT_IMAGE_TEMPLATE_ID as string;

  const templateId = template === 'pdf' ? pdfTemplateId : imageTemplateId;

  const transloaditTokenParams = JSON.stringify({
    auth: {
      expires: expires,
      key: authKey,
    },
    notify_url: `${apiUrl}/api/process-transloadit-notifications`,
    person_id: personUuid,
    template_id: templateId,
  });

  const signature = crypto
    .createHmac('sha1', authSecret)
    .update(Buffer.from(transloaditTokenParams, 'utf-8'))
    .digest('hex');

  return { expires, signature };
};

// (async () => {
//   await getSignedUploadUrl({
//     filename: 'yes',
//     personUuid: '1',
//     uploadBucketName: 'neon-law-production-production-assets'
//   });
// })();
