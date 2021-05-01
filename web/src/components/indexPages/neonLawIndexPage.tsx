import { Hero } from '../homepage/hero';
import { PublicLayout } from '../layouts/publicLayout';
import { Seo } from '../seo';

export const NeonLawIndexPage = (): JSX.Element => {

  return (
    <PublicLayout>
      <Seo title="Homepage" />
      <Hero />
    </PublicLayout>
  );
};
