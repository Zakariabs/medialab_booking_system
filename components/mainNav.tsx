import * as React from "react";
import Link from 'next/link';

type CardProps = {
  src: string;
  alt: string;
  title: string;
  link: string; // Added link prop
};

const Card: React.FC<CardProps> = ({ src, alt, title, link }) => {
  return (
    <Link href={link}>
      <div className="flex flex-col items-center px-16 pt-10 pb-20 mt-14 bg-red-400 rounded-xl shadow-sm max-w-[310px] cursor-pointer">
        <div className="flex flex-col">
          <img loading="lazy" src={src} alt={alt} className="self-center w-full aspect-square" />
          <h2 className="mt-4 text-center text-xl text-black">{title}</h2>
        </div>
      </div>
    </Link>
  );
};

const MyComponent: React.FC = () => {
  const cardsData = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2232ec1391f825946cdadd64ee1820126067305da7df8966ea6fbada8d55d82d?apiKey=68df3d9a90eb4ff29acb54c0a32a8ffa&",
      alt: "Student of docent",
      title: "Student or Lecturer",
      link: "protected/user" // Link to the user folder
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d2be356d8ed409941efcc7541e4dd04dd9ee21c4d4c761f726b9d6f0652cabc7?apiKey=68df3d9a90eb4ff29acb54c0a32a8ffa&",
      alt: "Admin",
      title: "Admin",
      link: "protected/admin" // Link to the admin folder
    }
  ];

  return (
    <div className="flex flex-col items-center pb-20 mx-auto w-full bg-white rounded-3xl max-w-[480px]">
        <h1 className="mt-10 text-4xl font-bold text-black">Navigation</h1>
      <main className="flex flex-col items-center px-2.5 mt-5 w-full text-center text-xl text-black">
        <hr className="shrink-0 self-stretch h-px border border-solid bg-neutral-200 border-neutral-200" />
        {cardsData.map((card, index) => (
          <Card key={index} src={card.src} alt={card.alt} title={card.title} link={card.link} />
        ))}
      </main>
    </div>
  );
};

export default MyComponent;
