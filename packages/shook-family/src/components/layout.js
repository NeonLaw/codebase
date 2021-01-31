import './layout.css';
import Header from './header';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <>
      <Header siteTitle={'Shook Family'} />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0 1.0875rem 1.45rem',
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: '2rem',
          }}
        >
          © {new Date().getFullYear()}, Built with
          {' '}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  );
};

/* eslint-disable-next-line */
export default Layout;
