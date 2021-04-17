import { Icon, SpecialZoomLevel, Viewer, Worker } from '@react-pdf-viewer/core';
import { Box } from '@chakra-ui/react';
import { PortalLayout } from '../../../../../components/layouts/portalLayout';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { useRouter } from 'next/router';

const AdminMattersDocumentDetail = () => {
  const router = useRouter();
  const { documentId } = router.query;

  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: defaultTabs => defaultTabs.concat({
      content: (
        <div style={{ textAlign: 'center', width: '100%' }}>
          Notes are listed here
        </div>
      ),
      icon: (
        <Icon size={16}>
          {/* eslint-disable-next-line max-len */}
          <path d='M23.5,17a1,1,0,0,1-1,1h-11l-4,4V18h-6a1,1,0,0,1-1-1V3a1,1,0,0,1,1-1h21a1,1,0,0,1,1,1Z' />
          <path d='M5.5 12L18.5 12' />
          <path d='M5.5 7L18.5 7' />
        </Icon>
      ),
      title: <>Notes</>,
    }),
  });
  console.log(documentId);

  return (
    <PortalLayout>
      <Worker
        workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js"
      >
        <Box height="1000px">
          <Box height="100%">
            <Viewer
              fileUrl='/pdfs/65-main.pdf'
              defaultScale={SpecialZoomLevel.PageFit}
              plugins={[
                defaultLayoutPluginInstance,
              ]}
            />
          </Box>
        </Box>
      </Worker>
    </PortalLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default AdminMattersDocumentDetail;
