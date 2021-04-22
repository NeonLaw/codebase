import { Box } from '@chakra-ui/react';
import { CreateLetterForm } from '../../components/forms/createLetterForm';
import { RickieLayout } from '../../components/layouts/rickieLayout';

export const WriteLetter = () => {
  return (
    <RickieLayout>
      <h1>Write Rickie a letter.</h1>
      <p>
        Big thanks to our friends at Lob.org for sponsoring letters to Rickie!
      </p>
      <Box marginTop="1em">
        <CreateLetterForm />
      </Box>
    </RickieLayout>
  );
};

// eslint-disable-next-line import/no-default-export
export default WriteLetter;
