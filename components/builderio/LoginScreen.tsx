import * as React from "react";

type ImageProps = {
  src: string;
  alt: string;
  className: string;
};

const ImageComponent: React.FC<ImageProps> = ({ src, alt, className }) => (
  <img loading="lazy" src={src} alt={alt} className={className} />
);

export default function MyComponent() {
  return (
    <div className="flex flex-col pb-20 mx-auto w-full bg-white max-w-[480px]">
      <header className="flex gap-5 justify-between items-start px-5 py-4 w-full bg-white">
        <span className="text-sm font-black tracking-tight text-center text-black">
          9:41
        </span>
        <div className="flex gap-3">
          <div className="flex gap-1.5">
            <ImageComponent
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec3caf53d278af6358e862aa6c0b1412d736521010abc9ea038d64461e84e684?apiKey=48979fe6d3fb43ac802c38ca06ffa6fc&"
              alt=""
              className="shrink-0 aspect-[1.79] fill-black w-[18px]"
            />
            <ImageComponent
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/01fb31caa45f54e7afefd4958d6a7ed29ca1695f1e490a668fa769a1e814ad6d?apiKey=48979fe6d3fb43ac802c38ca06ffa6fc&"
              alt=""
              className="shrink-0 w-4 aspect-[1.59] fill-black "
            />
          </div>
          <ImageComponent
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fa050528a73dac95d286974d2c9c620135545f51e065f141d5a3a3ffd54a7d5?apiKey=48979fe6d3fb43ac802c38ca06ffa6fc&"
            alt=""
            className="shrink-0 aspect-[2.22] w-[22px] "
          />
        </div>
      </header>
      <main className="flex flex-col px-9 mt-16 w-full text-xs text-teal-300">
        <h1 className="self-center text-4xl font-bold text-center">Login</h1>
        <form className="flex flex-col mt-16">
          <label htmlFor="emailInput" className="text-teal-300">
            EHB email:
          </label>
          <input
            type="email"
            id="emailInput"
            placeholder="Enter your email"
            aria-label="Enter your email"
            className="shrink-0 mt-2 w-80 max-w-full rounded-lg border border-solid bg-neutral-200 bg-opacity-60 border-neutral-200 h-[50px]"
          />
          <label htmlFor="passwordInput" className="mt-14 text-teal-300">
            Password:
          </label>
          <input
            type="password"
            id="passwordInput"
            placeholder="Enter your password"
            aria-label="Enter your password"
            className="shrink-0 mt-2 w-80 max-w-full rounded-lg border border-solid bg-neutral-200 bg-opacity-60 border-neutral-200 h-[50px]"
          />
          <div className="flex gap-2 self-start mt-3.5 leading-[127%]">
            <input
              type="checkbox"
              id="rememberMe"
              className="shrink-0 w-3.5 h-3.5 bg-white rounded-sm border border-solid"
            />
            <label htmlFor="rememberMe" className="text-teal-300">
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="justify-center items-center self-center px-16 py-4 mt-20 max-w-full text-lg leading-4 text-white whitespace-nowrap bg-teal-300 rounded-lg w-[241px]"
          >
            Login
          </button>
        </form>
        <p className="mt-9 text-xs leading-4 text-center">
          By logging into an account you are agreeing with our{" "}
          <a href="#" className="text-teal-300">
            Terms and Conditions
          </a>{" "}
          and{" "}
          <a href="#" className="text-teal-300">
            Privacy Statement
          </a>
        </p>
      </main>
    </div>
  );
}