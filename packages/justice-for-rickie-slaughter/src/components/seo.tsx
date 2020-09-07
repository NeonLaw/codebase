import { graphql, useStaticQuery } from 'gatsby';

import { Helmet } from 'react-helmet';
import { Location } from '@reach/router';
import React from 'react';
import { useSiteMetadata } from './hooks';

interface SeoProps {
  description?: string;
  lang?: string;
  meta?: any[];
  title?: string;
  image?: string;
}

export const Seo: React.FC<SeoProps> = ({
  description = '',
  lang = 'en',
  meta = [],
  title,
  image,
}) => {
  const {
    title: metaTitle,
    description: metaDescription,
    siteUrl,
  } = useSiteMetadata();

  description = description || metaDescription;
  title = title || metaTitle;
  const data = useStaticQuery(
    graphql`
      query {
        images: allFile(filter: {absolutePath: {regex: "/images\//"}}) {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fixed {
                  src
                }
              }
            }
          }
        }
      }
    `
  );

  // Find the fixed URL for the image
  image = data.images.edges.find((n) => {
    const filename = n.node.relativePath;
    return filename == image;
  })?.node.childImageSharp.fixed.src;

  image = image === undefined ? siteUrl + '/images/logo.png' : siteUrl + image;

  return (
    <Location>
      {({ location }) => (
        <Helmet
          htmlAttributes={{
            lang,
          }}
          title={title}
          titleTemplate={`%s | ${metaTitle}`}
          meta={[
            {
              content: description,
              name: 'description',
            },
            {
              content: `${title} | ${metaTitle}`,
              property: 'og:title',
            },
            {
              content: `${siteUrl}${location.pathname}`,
              property: 'og:url',
            },
            {
              content: description,
              property: 'og:description',
            },
            {
              content: 'Justice For Rickie Slaughter',
              property: 'og:site_name',
            },
            {
              content: 'website',
              property: 'og:type',
            },
            {
              content: image,
              property: 'og:image',
            },
            {
              content: '@NeonLaw',
              name: 'twitter:creator',
            },
          ].concat(meta)}
        >
          <link rel="stylesheet" href="/leaflet.css" />
        </Helmet>
      )}
    </Location>
  );
};
