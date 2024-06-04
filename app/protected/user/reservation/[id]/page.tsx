"use client"
import { Product } from "@/types/dummyTypes";
import { Button } from "@/components/ui/button";

import React, { useEffect, useState } from "react";

import Link from "next/link";
import { Calendar } from "@/components/ui/calendar";

async function getAsingleProduct(id: number) {
  try {
    let res = await fetch(`https://dummyjson.com/products/${id}`);
    if (res.ok) {
      let r = await res.json();
      return r;
    }
  } catch (e) {
    console.log(e);
  }
}

export default function Page({ params }: { params: { id: any } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [date, setDate] = useState<Date | undefined>();

  useEffect(() => {
    getAsingleProduct(params.id).then((data) => {
      setProduct(data);
    });
  }, [params.id]);

  return (
    <div className="bg-gray-100 flex flex-col justify-center items-center  ">

        <text className="text-4xl my-10 font-bold ">{product?.title}</text>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border mb-4"
        />
        <div className="text-left mb-2">
          <h2 className="text-lg font-semibold mb-1">Availability</h2>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">{product?.title}</h3>
          <p className="mb-2">Reservation: <span className="font-medium">{date?.toDateString() || 'Select a date'}</span></p>
          <p>Return Date: <span className="font-medium">{date?.toDateString() || 'Select a date'}</span></p>
        </div>
      </div>

        <Link href={`/order/${product?.id}`} className="mt-5" >
          <Button variant={"destructive"} size={"lg"}>Confirm</Button>
        </Link>
    </div>
  );
}
