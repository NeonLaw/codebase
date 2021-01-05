import { RiDeleteBinLine, RiHammerLine, RiLock2Line } from 'react-icons/ri';

import { FAQProps } from './faq';
import React from 'react';
import { VscRocket } from 'react-icons/vsc';

export const faqs: FAQProps[] = [
  {
    icon: <VscRocket />,
    text: (
      <>
        Sign up with the link above, or e-mail us at{' '}
        <a href="mailto:support@neonlaw.com">support@neonlaw.com</a>, or contact
        us in the chat below. Once logged in, let us know where you want your
        data deleted and we will take it from there.
      </>
    ),
    title: 'How can I start?',
  },
  {
    icon: <RiHammerLine />,
    text: (
      <>
        Our team of lawyers make data deletion requests on your behalf based on
        your jurisdiction. For instance, if you&apos;re in Europe, we will make
        data deletion requests under the GDPR, if you&apos;re in Nevada, we will
        use the Nevada Privacy Act, or if you&apos;re in California, we will
        draw from the CCPA.
      </>
    ),
    title: 'How do you do this?',
  },
  {
    icon: <RiLock2Line />,
    text: (
      <>
        We use industry-standard encryption and best software practices to keep
        your data safe. While we can&apos;t guarantee your data is 100% safe
        (and frankly, <strong>no one</strong> can), we can guarantee we&apos;re
        doing everything we can.
      </>
    ),
    title: 'Is my data safe?',
  },
  {
    icon: <RiDeleteBinLine />,
    text: (
      <>
        Of course, our code is{' '}
        <a
          href="https://github.com/neonlaw/codebase"
          target="_blank"
          rel="noreferrer"
        >
          open source
        </a>{' '}
        so you can verify that our use of PostgreSQL cascading foreign keys
        deletes your data, and our logging code does not log any PII you ever
        added to our system. The only thing we can&apos;t do is continue to
        delete your data after you delete your account.
      </>
    ),
    title: 'Can I delete my data from deleteyourdata.com?',
  },
];
