"use client"
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import data from "./data";
import Link from "next/link";

export default function Page() {

  const[state,setState]=useState(3)




  return (
    <div className="flex flex-col justify-center gap-8 md:gap-10 items-center mt-10 px-4 lg:flex ">
      <div className="flex flex-col gap-4 md:gap-6 w-full md:w-[500px] items-center">
        <h1 className="text-3xl md:text-5xl text-[#EA5D5D] font-bold font-sans">
          Reservations
        </h1>
        <Input
          placeholder="Search"
          className="placeholder-[#EA5D5D] w-full"
        />
      </div>
        
      {

        
        data.slice(0,state).map((elmm,i)=>(
      <div className="bg-[#EA5D5D] relative  gap-10 min-h-[256px] flex justify-between p-5 rounded-lg">
       
        <div key={i} className="flex flex-col rounded-lg items-center w-[190px] h-[120px] bg-white">
          <div className="bg-[#EA5D5D] px-6 text-center rounded-lg text-white pt-1 mt-1 ">
            Product ID
          </div>
         <text className="font-bold mt-5">{elmm.Porduct_id}</text> 
        </div>

        <div key={i} className="flex flex-col rounded-lg items-center w-[190px] h-[120px] bg-white">
     
          <div className="bg-[#EA5D5D] px-2 text-center rounded-lg tetx-xs text-white pt-1 mt-1 ">
           Resrvation Number
          </div>
          <text className="font-bold mt-5">{elmm.Reservation_Number}</text> 

        </div>
        <div key={i} className="flex flex-col rounded-lg items-center  w-[190px]  h-[120px] bg-white">
     
          <div className="bg-[#EA5D5D] px-6 text-center rounded-lg text-white pt-1 mt-1 ">
            Date
          </div>
          <text className="font-bold mt-5">{elmm.Date}</text> 

        </div>
        
    <div className="absolute right-0 bottom-0 p-2">
        <Button variant={"secondary"} > 
       <Link href={`/reserv/${elmm.Porduct_id}`}>
       More Information

       </Link> 
        </Button>
      </div>
    </div>

        ))
      }

      <Button onClick={(()=>setState((pre)=>pre+1))}>Add Product</Button>
    </div>
  );
}
