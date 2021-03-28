import { Box, Heading, Skeleton, Text } from '@chakra-ui/react';
import { convertSlateToPlaintext } from '../../utils/slate';
import { useMatterByIdQuery } from '../../utils/api';

export const MatterDocumentsList = ({ matterId }) => {
  const { data, loading } = useMatterByIdQuery({ variables: { id: matterId }});

  if (loading)  {
    return <Skeleton height="20px" />;
  }

  if (data) {
    return (
      <Box>
        <Heading as="h3">Documents</Heading>
        <Text>
          {data.matter.description &&
          convertSlateToPlaintext(data.matter.description)}
        </Text>
      </Box>
    );
  }

  return null;
};
