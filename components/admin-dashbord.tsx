import Link from "next/link";
import React from "react";

export default function Header() {
  let data = [
    { label: "Manage reservation", link: "/manage-reservation" },
    { label: "Manager Users", link: "/manage-users" },
    { label: "Manage Products", link: "/manage-products" },
  ];

  return (
    <>
      <div className="felx justify-center">
        <div className="bg-[url('/bg.svg')] -mt-10 bg-no-repeat w-full h-[222px] flex items-center justify-center">
          <div className="flex font-medium flex-col justify-center text-white items-center">
            <text>welcome</text>
            <text className="text-xl">Admin Name Here</text>
          </div>
        </div>

        <div className="flex justify-around mt-10 flex-col gap-10">
          {data.map((elm, i) => (
            <div
              key={i}
              className="p-5 rounded-lg cursor-pointer text-center font-semibold bg-[#ea5d5d]"
            >
              <Link href={elm.link}>
                <text className="text-white">{elm.label}</text>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
