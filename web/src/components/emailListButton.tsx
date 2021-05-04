import { Box, Center } from '@chakra-ui/react';
import { Button } from '../components/button';
import { useIntl } from 'react-intl';

export const EmailListButton = () => {
  /* eslint-disable-next-line max-len */
  const newsletterSignupLink = 'https://cdn.forms-content.sg-form.com/f382e1e4-378e-11eb-a485-52be2b98b781';
  const intl = useIntl();

  return (
    <Box marginBottom="10px">
      <Center>
        <Button
          aria-label="Sign up for the Neon Law Monthly Newsletter"
          as="a"
          href={newsletterSignupLink}
          target="_blank"
          rel="noopener noreferrer"
          display={['flex', 'flex', 'none']}
        >
          Join our e-mail list.
        </Button>

        <Button
          aria-label="Sign up for the Neon Law Monthly Newsletter"
          as="a"
          href={newsletterSignupLink}
          target="_blank"
          rel="noopener noreferrer"
          display={['none', 'none', 'flex']}
        >
          {intl.formatMessage({ id: 'footer.email_list' })}
        </Button>
      </Center>
    </Box>
  );
};
