import { JWE, JWK } from 'jose';
import hkdf from 'futoin-hkdf';

const BYTE_LENGTH = 32;
const ENCRYPTION_INFO = 'JWE CEK';
const options = { hash: 'SHA-256' };

const deriveKey = (secret) => hkdf(
  secret,
  BYTE_LENGTH,
  { info: ENCRYPTION_INFO, ...options }
);

export const encrypt = (arg) => {
  const { secret, ...thingToEncrypt } = arg;
  const key = JWK.asKey(deriveKey(secret));
  const epochNow = (Date.now() / 1000) | 0;
  return Promise.resolve(JWE.encrypt(
    JSON.stringify(thingToEncrypt),
    key,
    {
      alg: 'dir',
      enc: 'A256GCM',
      exp: epochNow + 7 * 24 * 60 * 60,
      iat: epochNow,
      uat: epochNow,
    }
  ));
};
