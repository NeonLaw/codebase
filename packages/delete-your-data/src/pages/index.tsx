import FAQs from '../components/index/faqs';
import Hero from '../components/hero';
import IndexLayout from '../layouts';
import React from 'react';

const HomePage = () => (
  <IndexLayout>
    <Hero />
    <FAQs />
  </IndexLayout>
);

export default HomePage;
