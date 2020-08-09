/* eslint-disable */
// @ts-nocheck
/* eslint-enable */
import speech from '@google-cloud/speech';
import fs from 'fs'

export const transcribeAudio = async (
  gcsUri: string,
  encoding: string = 'MP3',
): Promise<string> => {
  const client = new speech.v1p1beta1.SpeechClient();

  const sampleRateHertz = 16000;
  const languageCode = 'en-US';

  const config = {
    encoding,
    languageCode: languageCode,
    sampleRateHertz: sampleRateHertz,
  };
  const audio = {
    uri: gcsUri,
  };

  const request = {
    audio,
    config,
  };

  // Detects speech in the audio file
  const [response] = await client.recognize(request);
  console.log(JSON.stringify(response));
  const transcription = response.results
    .map(result => result.alternatives[0].transcript)
    .join('\n');
  console.log('Transcription: ', transcription);

  return 'true';
};
