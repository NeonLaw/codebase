import { Box } from '@chakra-ui/react';
import {
  CreatePublicLetterForm
} from '../../components/forms/createPublicLetterForm';
import { RickieLayout } from '../../components/layouts/rickieLayout';
import { Tiptap } from '../../components/tiptap/Tiptap';

export const WriteLetter = () => {
  return (
    <RickieLayout>
      <h1>Write Rickie a letter.</h1>
      <p>
        Big thanks to our friends at Lob.org for sponsoring letters to Rickie!
      </p>
      <Box marginTop="1em">
        <Tiptap />
      </Box>

      <Box marginTop="1em">
        <CreatePublicLetterForm />
      </Box>
    </RickieLayout>
  );
};

// eslint-disable-next-line import/no-default-export
export default WriteLetter;
