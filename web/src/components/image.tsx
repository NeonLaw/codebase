import React from 'react';
interface ImageInterface {
  alt: string;
  src: string;
  aspectRatio: number;
}

export const Image = ({ src, alt,}: ImageInterface) => {
  return (
    <img src={`/images/${src}`} alt={alt}/>
  );
};
