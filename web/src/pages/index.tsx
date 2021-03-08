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
    case process.env.NEXT_PUBLIC_JUSTICE_FOR_RICKIE_SLAUGHTER_URL:
      return <JusticeForRickieSlaughterIndexPage />;
    case process.env.NEXT_PUBLIC_DELETE_YOUR_DATA_URL:
      return <DeleteYourDataIndexPage />;
    case process.env.NEXT_PUBLIC_DELETE_THEIR_DATA_URL:
      return <DeleteTheirDataIndexPage />;
    case process.env.NEXT_PUBLIC_SHOOK_FAMILY_URL:
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
