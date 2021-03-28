import { ListItem, UnorderedList } from '@chakra-ui/react';

export const MatterDocumentsList = ({ matterDocuments }) => {
  return (
    <UnorderedList spacing={3}>
      {matterDocuments.map((matterDocument, index) => {
        const { filename } = matterDocument.document;

        return (
          <ListItem key={index}>
            {filename}
          </ListItem>
        );}
      )}
    </UnorderedList>
  );
};
