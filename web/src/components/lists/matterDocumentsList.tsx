import { Box, ListItem, UnorderedList } from '@chakra-ui/react';

export const MatterDocumentsList = ({ matterDocuments }) => {
  return (
    <UnorderedList spacing={3}>
      {matterDocuments.map((matterDocument, index) => {
        return (
          <Box
            key={index}
            as="a"
            href={matterDocument.document.downloadUrl}
            target="_blank"
            rel="noreferrer">
            <ListItem>
              {matterDocument.document.filename} by
                &nbsp;{matterDocument.author.name}
                &nbsp;which is a
                &nbsp;{matterDocument.document.documentTemplate.name}.
            </ListItem>
          </Box>
        );}
      )}
    </UnorderedList>
  );
};
