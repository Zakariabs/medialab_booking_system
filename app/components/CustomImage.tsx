import Image from 'next/image';
import React from 'react';

//definieert de types voor de props die de component zal krijgen
interface CustomImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

//functional component dat de elementen daarbinnenin als props neemt
const CustomImage: React.FC<CustomImageProps> = ({ src, alt, width, height }) => {
    // gaat de image renderen met de gegeven props 
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      // zorgt ervoor dat de image zijn aspect ratio
      layout="responsive"
    />
  );
};

export default CustomImage;
