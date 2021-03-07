import {
  DeleteTheirDataIndexPage
} from '../components/indexPages/deleteTheirDataIndexPage';
import {
  DeleteYourDataIndexPage
} from '../components/indexPages/deleteYourDataIndexPage';
import {
  JusticeForRickieSlaughterIndexPage
} from '../components/indexPages/justiceForRickieSlaughterIndexPage';
import { NeonLawIndexPage } from '../components/indexPages/neonLawIndexPage';
import {
  ShookFamilyIndexPage
} from '../components/indexPages/shookFamilyIndexPage';

const Home = ({ host }): JSX.Element => {
  switch(host) {
    case 'www.justiceforrickieslaughter.com':
      return <JusticeForRickieSlaughterIndexPage />;
    case 'www.deleteyourdata.com':
      return <DeleteYourDataIndexPage />;
    case 'www.deletetheirdata.com':
      return <DeleteTheirDataIndexPage />;
    case 'www.shook.family':
      return <ShookFamilyIndexPage />;
    default:
      return <NeonLawIndexPage />;
  }
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
