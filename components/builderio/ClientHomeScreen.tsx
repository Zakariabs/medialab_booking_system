import * as React from "react";

type SectionProps = {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  imgClass: string;
  containerClass: string;
};

type MenuItemProps = {
  src: string;
  alt: string;
  text: string;
  imgClass: string;
  containerClass: string;
};

const Section: React.FC<SectionProps> = ({
  src,
  alt,
  title,
  subtitle,
  imgClass,
  containerClass,
}) => (
  <section
    className={`flex overflow-hidden relative flex-col justify-center items-center self-stretch px-16 py-10 w-full aspect-[1.77] fill-teal-300 ${containerClass}`}
  >
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className="object-cover absolute inset-0 w-full h-full"
    />
    <div className="flex relative flex-col items-center max-w-full w-[126px]">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9152ffd1319bee98366085e5cea9da6d8572ca6f6da69e2f211a8d80dea46572?apiKey=48979fe6d3fb43ac802c38ca06ffa6fc&"
        alt="Profile Picture"
        className={`w-24 aspect-[1.01] fill-teal-600 ${imgClass}`}
      />
      <div className="mt-3 text-xs">{subtitle}</div>
      <div className="self-stretch mt-3.5 text-lg font-medium">{title}</div>
    </div>
  </section>
);

const MenuItem: React.FC<MenuItemProps> = ({
  src,
  alt,
  text,
  imgClass,
  containerClass,
}) => (
  <div
    className={`flex gap-5 justify-between px-6 py-1.5 w-full text-xl font-semibold text-center whitespace-nowrap bg-teal-300 rounded-xl border border-teal-300 border-solid max-w-[365px] ${containerClass}`}
    tabIndex={0}
    role="button"
  >
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className={`shrink-0 ${imgClass}`}
    />
    <div className="my-auto">{text}</div>
  </div>
);

const MyComponent: React.FC = () => (
  <div className="flex flex-col items-center pt-4 pb-20 mx-auto w-full text-white bg-white max-w-[480px]">
    <Section
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a0c27bce6dc477f94cdb3d9971664f3ca4a1817a0fba3c61068e69e8e3f90ca?apiKey=48979fe6d3fb43ac802c38ca06ffa6fc&"
      alt="Background Image"
      title="Raphael Dufour"
      subtitle="Welcome,"
      imgClass=""
      containerClass=""
    />
    <MenuItem
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/632f841d14e2bdcfeadb7bc2211ee3725c0565ece3f025a3dfc7fd1efe32b820?apiKey=48979fe6d3fb43ac802c38ca06ffa6fc&"
      alt="Products Icon"
      text="Products"
      imgClass="w-12 aspect-[1.04]"
      containerClass="mt-10"
    />
    <MenuItem
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/314362ee3f2fb27feb0d510b448eaa625509dde6b5588181e473e381078a90b0?apiKey=48979fe6d3fb43ac802c38ca06ffa6fc&"
      alt="Return Icon"
      text="Return"
      imgClass="aspect-[1.09] w-[38px]"
      containerClass="mt-10"
    />
    <MenuItem
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ebf9ec3cca2f4f2a0d29e1058d34ef8b950e37c7ccd331d4606e805f4a9e68c?apiKey=48979fe6d3fb43ac802c38ca06ffa6fc&"
      alt="Contact Us Icon"
      text="Contact us"
      imgClass="aspect-[1.04] w-[47px]"
      containerClass="mt-11"
    />
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/651cb118d88fba3f593b801a61a2d70d1b84bbca9e26d0281907ffc5a12adb68?apiKey=48979fe6d3fb43ac802c38ca06ffa6fc&"
      alt="Erasmushogeschool Brussel"
      className="mt-20 w-full border border-red-400 border-solid shadow-sm aspect-[2.27] max-w-[290px]"
    />
    <div className="mt-5 text-xs text-center text-black">
      Erasmushogeschool Brussel
    </div>
  </div>
);

export default MyComponent;