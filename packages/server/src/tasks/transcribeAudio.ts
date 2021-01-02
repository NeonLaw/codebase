
/* eslint-disable */
// @ts-nocheck
/* eslint-enable */
import speech from '@google-cloud/speech';

export const transcribeAudio = async (payload, helpers): Promise<string> => {
  const { gcsUri } = payload;
  const encoding = 'MP3';

  helpers.logger.info(`Transcribing ${gcsUri} in ${encoding}`);

  const client = new speech.v1p1beta1.SpeechClient();

  const sampleRateHertz = 16000;
  const languageCode = 'en-US';

  const config = {
    encoding,
    languageCode: languageCode,
    model: 'phone_call',
    sampleRateHertz: sampleRateHertz,
    useEnhanced: true,
  };
  const audio = {
    uri: gcsUri,
  };

  const request = {
    audio,
    config,
  };

  // Detects speech in the audio file
  const [operation] = await client.longRunningRecognize(request);
  // Get a Promise representation of the final result of the job
  const [response] = await operation.promise();
  console.log(JSON.stringify(response));
  const transcription = response.results
    .map(result => result.alternatives[0].transcript)
    .join('\n');

  // TODO save in DB
  console.log(`Transcription: ${transcription}`);

  return 'true';
};
