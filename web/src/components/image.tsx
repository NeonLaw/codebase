import { Box } from '@chakra-ui/react';
import React from 'react';
interface ImageInterface {
  alt: string;
  src: string;
  aspectRatio: number;
}

export const Image = ({ src, alt, aspectRatio }: ImageInterface) => {
  return (
    <Box>
      {src} {alt} {aspectRatio}
    </Box>
  );
  // const data = useStaticQuery(
  //   graphql`
  //     query {
  //       images: allFile(filter: {absolutePath: {regex: "/images\//"}}) {
  //         edges {
  //           node {
  //             relativePath
  //             name
  //             childImageSharp {
  //               fluid {
  //                 ...GatsbyImageSharpFluid
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `
  // );
  // const image = data.images.edges.find(n => {
  //   const filename = n.node.relativePath;
  //   return filename == src;
  // });

  // const fluid = image.node.childImageSharp.fluid;

  // return (
  //   <GatsbyImage
  //     fluid={{ ...fluid, aspectRatio }}
  //     placeholderStyle={{ backgroundColor: 'black' }}
  //     alt={alt} />
  // );
};
