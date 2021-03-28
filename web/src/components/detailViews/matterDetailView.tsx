import { Box, Heading, Skeleton, Text } from '@chakra-ui/react';
import {
  MatterDocumentsList
} from '../../components/lists/matterDocumentsList';
import { convertSlateToPlaintext } from '../../utils/slate';
import { useMatterByIdQuery } from '../../utils/api';

export const MatterDetailView = ({ id }) => {
  const { data, loading } = useMatterByIdQuery({ variables: { id }});

  if (loading)  {
    return <Skeleton height="20px" />;
  }

  if (data) {
    return (
      <Box>
        <Heading>{data.matter.name}</Heading>
        <Text>
          {data.matter.description &&
          convertSlateToPlaintext(data.matter.description)}
        </Text>
        <Heading as="h3">Documents</Heading>
        <MatterDocumentsList matterDocuments={data.matter.matterDocuments} />
      </Box>
    );
  }

  return null;
};
