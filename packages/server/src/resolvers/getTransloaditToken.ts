import * as crypto from 'crypto';

export const getTransloaditToken = async (): Promise<any> => {
  const utcDateString = (ms) => {
    return new Date(ms)
      .toISOString()
      .replace(/-/g, '/')
      .replace(/T/, ' ')
      .replace(/\.\d+Z$/, '+00:00');
  };

  // expire 1 hour from now (this must be milliseconds)
  const expires    = utcDateString((+new Date()) + 1 * 60 * 60 * 1000);
  const authKey    = process.env.TRANSLOADIT_KEY as string;
  const authSecret = process.env.TRANSLOADIT_SECRET as string;
  const templateId = process.env.TRANSLOADIT_PDF_TEMPLATE_ID as string;

  const transloaditTokenParams = JSON.stringify({
    auth: {
      expires,
      key: authKey,
    },
    template_id: templateId,
  });

  const signature = crypto
    .createHmac('sha1', authSecret)
    .update(Buffer.from(transloaditTokenParams, 'utf-8'))
    .digest('hex');

  return { expires, signature };
};
