import { Box } from '@chakra-ui/react';
import {
  CreatePublicLetterForm
} from '../../components/forms/createPublicLetterForm';
import { RickieLayout } from '../../components/layouts/rickieLayout';

export const WriteLetter = () => {
  return (
    <RickieLayout>
      <h1>Write Rickie a letter.</h1>
      <p>
        You can also write Rickie by sending a letter to Rickie Slaughter
        #85902, PO Box 650, Indian Spring, NV 89070.
      </p>
      <p>
        Big thanks to our friends at Lob.org for sponsoring letters to Rickie!
      </p>
      <Box marginTop="1em">
        <CreatePublicLetterForm />
      </Box>
    </RickieLayout>
  );
};

// eslint-disable-next-line import/no-default-export
export default WriteLetter;
