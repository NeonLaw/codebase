import { Image } from '@chakra-ui/react';

interface BackgroundImageProps {
  src: string;
}

export const BackgroundImage = ({ src }: BackgroundImageProps) => (
  <Image
    minH="300px"
    backgroundSize="cover"
    backgroundPosition="center"
    backgroundImage={`url(/images/${src})`}
  />
);
