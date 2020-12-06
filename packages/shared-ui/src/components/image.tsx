import { graphql, useStaticQuery } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import React from 'react';

interface ImageInterface {
  alt: string;
  src: string;
  aspectRatio: number;
}

export const Image = ({ src, alt, aspectRatio }: ImageInterface) => {
  alert('hey');
  const data = useStaticQuery(
    graphql`
      query {
        images: allFile(filter: {absolutePath: {regex: "/images\//"}}) {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `
  );
  if (!data) {
    return null;
  }
  const image = data.images.edges.find(n => {
    const filename = n.node.relativePath;
    return filename == src;
  });

  const fluid = image.node.childImageSharp.fluid;

  return (
    <GatsbyImage
      fluid={{ ...fluid, aspectRatio }}
      placeholderStyle={{ backgroundColor: 'black' }}
      alt={alt} />
  );
};
