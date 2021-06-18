import { Box } from '@chakra-ui/layout';
import { Container } from '@neonlaw/components';
import {
  DocumentTemplateTable
} from '../components/tables/documentTemplateTable';
import { PublicLayout } from '../components/layouts/publicLayout';
import { gutters } from '../styles/neonLaw';
import styled from '@emotion/styled';
import { useAllDocumentTemplatesQuery } from '../utils/api';
import { useDisclosure } from '@chakra-ui/hooks';

const StyledDocumentTemplatesPage = styled.div`
  h1 {
    margin-bottom: ${gutters.small};
  }

  .questions-container {
    margin-bottom: ${gutters.medium};
  }
`;

const DocumentTemplatesPage = () => {
  const { onOpen } = useDisclosure();
  const { loading, data, error } = useAllDocumentTemplatesQuery();

  return (
    <StyledDocumentTemplatesPage>
      <PublicLayout>
        <Container>
          <Box padding="9rem 0 4rem">
            <h1>Document Templates</h1>
            <div className="questions-container">
              <DocumentTemplateTable
                loading={loading}
                data={data}
                error={error}
                onRowClick={() => {
                  onOpen();
                }}
              />
            </div>
          </Box>
        </Container>
      </PublicLayout>
    </StyledDocumentTemplatesPage>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default DocumentTemplatesPage;
