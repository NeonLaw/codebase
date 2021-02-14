import React from 'react';

interface SeoProps {
  description?: string;
  lang?: string;
  meta?: any[];
  title?: string;
  image?: string;
}

export const Seo: React.FC<SeoProps> = (props: SeoProps) => {
  console.log(props);
  return null;

  // const siteUrl = 'https://www.neonlaw.com';
  // const metaTitle = 'title';


  // // Find the fixed URL for the image
  // image = data.images.edges.find(n => {
  //   const filename = n.node.relativePath;
  //   return filename == image;
  // })?.node.childImageSharp.fixed.src;

  // image = (image === undefined) ?
  //   siteUrl + '/images/logo.png' :
  //   siteUrl + image;

  // return (
  //   <Location>
  //     {({ location }) => (
  //       <Helmet
  //         htmlAttributes={{
  //           lang,
  //         }}
  //         title={title}
  //         titleTemplate={`%s | ${metaTitle}`}
  //         meta={[
  //           {
  //             content: description,
  //             name: 'description',
  //           },
  //           {
  //             content: `${title} | ${metaTitle}`,
  //             property: 'og:title',
  //           },
  //           {
  //             content: `${siteUrl}${location.pathname}`,
  //             property: 'og:url',
  //           },
  //           {
  //             content: description,
  //             property: 'og:description',
  //           },
  //           {
  //             content: 'Neon Law',
  //             property: 'og:site_name',
  //           },
  //           {
  //             content: 'website',
  //             property: 'og:type',
  //           },
  //           {
  //             content: image,
  //             property: 'og:image',
  //           },
  //           {
  //             content: '@NeonLaw',
  //             name: 'twitter:creator',
  //           },
  //         ].concat(meta)}
  //       />
  //     )}
  //   </Location>
  // );
};
