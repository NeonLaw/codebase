import { NeonLawIndexPage } from '../components/indexPages/neonLawIndexPage';

const Home = () => {
  return <NeonLawIndexPage />;
};

/* eslint-disable-next-line import/no-default-export */
export default Home;

export const getServerSideProps = async ({ req }) => {
  const host = req.headers.host;

  if (host === 'www.justiceforrickieslaughter.com') {
    return {
      redirect: {
        destination:
          'https://www.neonlaw.com/pro-bono/justice-for-rickie-slaughter',
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
