"use client";
import Link from "next/link";
import React from "react";

export default function Home() {
  const data = [
    { label: "Products", link: "/Inventory" },
    { label: "Return", link: "/Return" }, 
    { label: "Contact Us", link: "/Contact" }, 
  ];
return (
    <>
        <div className="felx justify-center">
            <div className="bg-[url('/bg.svg')] -mt-10 bg-no-repeat w-full h-[222px] flex items-center justify-center">
                <div className="flex  font-medium flex-col justify-center text-white items-center ">
                    <text>Welcome</text>
                    <text className="text-xl font-italic bg-cyan-500">User Name Here</text>
                </div>
            </div>

            <div className="flex justify-around mt-10 flex-col gap-10">
                {data.map((elm, i) => (
                    <div
                        key={i}
                        className="p-5 rounded-lg cursor-pointer text-center font-semibold bg-cyan-500" // Adjust the color here
                    >
                        <Link href={elm.link}>
                            <a className="text-white">{elm.label}</a>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    </>
);
}