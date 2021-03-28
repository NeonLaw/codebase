import { ListItem, UnorderedList } from '@chakra-ui/react';

export const MatterDocumentsList = ({ matterDocuments }) => {
  return (
    <UnorderedList spacing={3}>
      {matterDocuments.map((matterDocument, index) => {
        return (
          <ListItem key={index}>
            {matterDocument.document.filename} by {matterDocument.author.name}
            &nbsp;which is a {matterDocument.document.documentTemplate.name}
          </ListItem>
        );}
      )}
    </UnorderedList>
  );
};
