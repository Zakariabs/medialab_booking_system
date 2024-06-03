


import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const AllDone: NextPage = () => {
  const router = useRouter();

  const onReturnButtonImageClick = useCallback(() => {
    // Please sync "ClientHomeScreen" to the project
  }, []);

  const onClickHereTextClick = useCallback(() => {
    router.push("/all-done1");
  }, [router]);

  return (
    <div className="w-full relative bg-neutral-white h-[852px] overflow-hidden text-justify text-smi-6 text-neutral-white font-poppins">
      <b className="absolute top-[52px] left-[90px] text-21xl inline-block font-pridi text-mediumturquoise text-center w-[214px] h-[65px]">
        All Done
      </b>
      <img
        className="absolute top-[374px] left-[-149px] w-[692.4px] h-[626.3px] object-contain"
        alt=""
        src="/ellipse-12.svg"
      />
      <img
        className="absolute top-[-27px] left-[-133px] w-[753.3px] h-[714px] object-contain"
        alt=""
        src="/ellipse-13.svg"
      />
      <div className="absolute top-[235px] left-[49px] font-black inline-block w-[305px] h-[95px]">
        <p className="m-0">&nbsp;</p>
        <p className="m-0">{`Your reservation has been well received and will be confirmed by one of our staff members as soon as possible. In case of any problems of the reservation, you will be kept informed via `}</p>
      </div>
      <div className="absolute top-[400px] left-[59px] text-base font-black text-center inline-block w-[286px] h-[17px]">
        Raphael.dufour@student.ehb.be
      </div>
      <div className="absolute top-[729px] left-[61px] font-black inline-block w-[282px] h-[26px]">
        change your mind and still wish to cancel ?
      </div>
      <img
        className="absolute top-[558px] left-[170px] w-[63.1px] h-[57px] object-contain cursor-pointer"
        alt=""
        src="/returnbutton1@2x.png"
        onClick={onReturnButtonImageClick}
      />
      <div className="absolute top-[757px] left-[143px] rounded-3xs bg-neutral-white w-[118px] h-[26px]" />
      <div
        className="absolute top-[761px] left-[169px] font-black text-mediumturquoise inline-block w-[77px] h-[22px] cursor-pointer"
        onClick={onClickHereTextClick}
      >
        Click here
      </div>
    </div>
  );
};

export default AllDone;
