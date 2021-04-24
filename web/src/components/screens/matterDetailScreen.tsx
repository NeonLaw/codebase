import {
  MatterDetailView
} from '../detailViews/matterDetailView';
import { PortalLayout } from '../layouts/portalLayout';
import { useRouter } from 'next/router';

export const MatterDetailScreen = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <PortalLayout>
      <MatterDetailView id={id} />
    </PortalLayout>
  );
};
