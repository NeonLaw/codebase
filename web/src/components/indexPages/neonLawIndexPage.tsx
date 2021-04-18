import {
  Box,
  Center,
  Flex,
  Heading,
  IconButton,
  Spacer,
  Text,
  VStack,
} from '@chakra-ui/react';

import { Seo } from '../seo';
import { Hero } from '../homepage/hero';
import { PublicLayout } from '../layouts/publicLayout';

export const NeonLawIndexPage = (): JSX.Element => {

  // const nextSectionRef = useRef(null);

  return (
    <PublicLayout>
      <Seo title="Homepage" />
      <Hero />
      {/* <Flex marginTop="-3em" width="100%">
        <IconButton
          aria-label="Learn More"
          margin="0 auto"
          icon={<ChevronDownIcon />}
          onClick={() => {
            nextSectionRef.current.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      </Flex> */}
    </PublicLayout>
  );
};
