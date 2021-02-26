import {
  DeleteYourDataLayout
} from '../../components/layouts/deleteYourDataLayout';
import { FAQs } from '../../components/deleteYourData/faqs';
import { Hero } from '../../components/deleteYourData/hero';
import React from 'react';
import { Seo } from '../../components/seo';

const HomePage = () => {
  const title = 'Delete Their Data';
  const description =
    'Neon Law will help your company respond to data deletion requests';

  return (
    <DeleteYourDataLayout>
      <Seo title={title} description={description} />
      <Hero />
      <FAQs />
    </DeleteYourDataLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default HomePage;
