import {
  Box,
  Button,
  Heading,
  Kbd,
  Skeleton,
  Text,
  useDisclosure
} from '@chakra-ui/react';
import { AdminOnly } from '../adminOnly';
import { CreateMatterContactModal } from '../modals/createMatterContactModal';
import { MatterContactsTable } from '../tables/matterContactsTable';
import { MatterDocumentsTable } from '../tables/matterDocumentsTable';
import { UpdateMatterModal } from '../modals/updateMatterModal';
import { convertSlateToPlaintext } from '../../utils/slate';
import { gutters } from '../../styles/neonLaw';
import { useMatterByIdQuery } from '../../utils/api';
import { useState } from 'react';

export const MatterDetailView = ({ id }) => {
  const { data, loading } = useMatterByIdQuery({ variables: { id }});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showUpdateModal, changeShowUpdateModal] = useState(true);

  if (loading)  {
    return <Skeleton height="20px" />;
  }

  if (data) {
    return (
      <Box>
        <Heading>{data.matter.name}</Heading>
        {data.matter.description && (<Text>
          {convertSlateToPlaintext(data.matter.description)}
        </Text>)}
        <Heading as="h3">Documents</Heading>
        <MatterDocumentsTable
          matterDocuments={data.matter.matterDocuments.nodes}
        />
        <Heading as="h3">Contacts</Heading>
        <MatterContactsTable
          primaryContact={data.matter.primaryContact}
          matterContacts={data.matter.matterContacts.nodes}
        />
        <AdminOnly>
          <Button
            flash={true}
            marginBottom={gutters.xSmall}
            onClick={() => {
              changeShowUpdateModal(false);
              onOpen();
            }}
          >
              Create Matter Contact&nbsp;
            <Kbd
              background="inherit"
              border="1px solid #bbb"
              transition="all .2s"
            >
               C
            </Kbd>
          </Button>
          <Button
            flash={true}
            marginBottom={gutters.xSmall}
            onClick={() => {
              changeShowUpdateModal(true);
              onOpen();
            }}
          >
              Update Matter
          </Button>
          <CreateMatterContactModal
            isOpen={isOpen}
            onClose={onClose}
          />
          <UpdateMatterModal
            isOpen={isOpen && showUpdateModal}
            currentValues={data.matter}
            onClose={onClose}
          />
        </AdminOnly>
      </Box>
    );
  }

  return null;
};
