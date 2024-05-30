
"use client";
import React, { useState } from "react";
import { Checkbox } from "@nextui-org/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function ReturnPage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [defects, setDefects] = useState<boolean>(false);

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const handleDefectsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDefects(event.target.checked);
  };

  return (
    <div className="flex flex-col items-center gap-10 mt-28">
      <h1 className="text-2xl font-bold mb-6">Return Product</h1>
      {"Sony CamRecorder"}
      <div className="max-w-sm w-full">
        <div className="rounded-lg border-2 border-cyan-500 p-4">
          <img
            alt="Product Image"
            className="mx-auto"
            height="150"
            src="https://via.placeholder.com/200"
            style={{
              aspectRatio: "200/150",
              objectFit: "cover",
            }}
            width="200"
          />
          <div className="mt-4 text-center">
            <p className="font-bold">Product Title</p>
            <p className="text-sm">Product Description</p>
            <button className="mt-2 bg-red-500 text-white py-1 px-3 rounded">
              Select
            </button>
          </div>
        </div>
      </div>
      <div className="w-full max-w-md mt-10">
        <h2 className="text-xl font-bold mb-4">Return Details</h2>
        <label>
        <Checkbox
          isSelected={defects}
          onChange={handleDefectsChange}
          color="primary"
          size="lg"/>
          {"Are there any defects?"}
        </label>
        <div className="mt-4">
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            inline
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>
        <button className="mt-6 bg-green-500 text-white py-2 px-4 rounded">
          Submit Return
        </button>
      </div>
    </div>
  );
}
