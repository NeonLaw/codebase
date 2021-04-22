import { Box, ListItem, UnorderedList } from '@chakra-ui/react';
import { AdminOnly } from '../adminOnly';
import { FaPencilAlt } from 'react-icons/fa';
import Link from 'next/link';

export const MatterContactsList = ({ primaryContact, matterContacts }) => {
  return (
    <UnorderedList spacing={3}>
      <ListItem key="begin">
        {primaryContact.name} is the primary contact.
        <AdminOnly>
          &nbsp;
          <Link href={`/portal/admin/people/${primaryContact.id}`}>
            <Box cursor="pointer" display="inline" as={FaPencilAlt} />
          </Link>
        </AdminOnly>
      </ListItem>
      {matterContacts.map((matterContact, index) => {
        return (
          <ListItem key={index}>
            {matterContact.contact.name} is a {matterContact.role}.
            <AdminOnly>
              <Link href={`/portal/admin/people/${matterContact.contact.id}`}>
                <Box as={FaPencilAlt} />
              </Link>
            </AdminOnly>
          </ListItem>
        );}
      )}
    </UnorderedList>
  );
};
