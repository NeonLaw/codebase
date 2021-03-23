import { NeonLawIndexPage } from '../components/indexPages/neonLawIndexPage';
import { useRouter } from 'next/router';

const Home = ({ host }) => {
  const router = useRouter();

  if (host === 'www.justiceforrickieslaughter.com') {
    router.push('/pro-bono/justice-for-rickie-slaughter');
    return;
  }

  if (host === 'www.deleteyourdata.com') {
    router.push('/delete-your-data');
    return;
  }

  return <NeonLawIndexPage />;
};

/* eslint-disable-next-line import/no-default-export */
export default Home;

export const getServerSideProps = async ({ req, res }) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1, stale-while-revalidate=59'
  );

  return {
    props: {
      host: req.headers.host
    }
  };
};
