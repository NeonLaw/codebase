import { Hero } from '../components/homepage/hero';
import { PublicLayout } from '../components/layouts/publicLayout';
import { Seo } from '../components/seo';

const NeonLawIndexPage = (): JSX.Element => {
  return (
    <PublicLayout>
      <Seo title="Homepage" />
      <Hero />
    </PublicLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default NeonLawIndexPage;

export const getServerSideProps = async ({ req }) => {
  const host = req.headers.host;

  if (host === 'www.justiceforrickieslaughter.com') {
    return {
      redirect: {
        destination:
          'https://www.neonlaw.com/justice-for-rickie-slaughter',
        permanent: true,
      }
    };
  }

  if (host === 'www.deleteyourdata.com') {
    return {
      redirect: {
        destination: 'https://www.neonlaw.com/delete-your-data',
        permanent: true,
      }
    };
  }

  return {
    props: {}
  };
};
