import { ListItem, UnorderedList } from '@chakra-ui/react';

export const MatterContactsList = ({ matterContacts }) => {
  return (
    <UnorderedList spacing={3}>
      {matterContacts.map((matterContact, index) => {
        return (
          <ListItem key={index}>
            {matterContact.contact.name} is a {matterContact.role}
          </ListItem>
        );}
      )}
    </UnorderedList>
  );
};
