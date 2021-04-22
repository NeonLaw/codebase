import { PortalLayout } from '../../../../../components/layouts/portalLayout';
import { useRouter } from 'next/router';

const PersonScreen = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <PortalLayout>
      {id}
    </PortalLayout>
  );
};

// eslint-disable-next-line import/no-default-export
export default PersonScreen;
