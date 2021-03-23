import { NeonLawIndexPage } from '../components/indexPages/neonLawIndexPage';

const Home = ({ host }) => {

  if (host === 'www.justiceforrickieslaughter.com') {
    window.location.replace(
      'https://www.neonlaw.com/pro-bono/justice-for-rickie-slaughter'
    );
    return null;
  }

  if (host === 'www.deleteyourdata.com') {
    window.location.replace('https://www.neonlaw.com/delete-your-data');
    return null;
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
