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
