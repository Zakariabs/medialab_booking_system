import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";

export default function Header() {
  const data = [
    { label: "Manage Reservation", link: "http://localhost:3000/protected/admin/manage-reservation" },
    { label: "Manage Users", link: "http://localhost:3000/protected/admin/manage-users" },
    { label: "Manage Products", link: "http://localhost:3000//admin/manage-products" },
    { label: "Return Home", link: "/protected"}
  ];

  return (
    <>
        <div className="felx justify-center"> 
            <div className="bg-[url('/bg.svg')] -mt-10 bg-no-repeat w-full h-[222px] flex items-center justify-center"> 
                <div className="flex  font-medium flex-col justify-center text-black items-center "> 
                    <text>Welcome</text> 
                    <text className="text-xl font-italic bg-red-500">Admin</text> 
                </div>
            </div>

            <div className="flex justify-around mt-10 flex-col gap-10"> 
                {data.map((elm, i) => ( // Mapping over the data array to render elements dynamically.
                    <div
                        key={i}
                        className="p-5 rounded-lg cursor-pointer text-center font-semibold bg-red-500" //div element with class names and styles for padding, border radius, cursor style, text alignment, and background color.
                    >
                        <Link href={elm.link}> 
                            <span className="text-white">{elm.label}</span> 
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    </>
);
}
