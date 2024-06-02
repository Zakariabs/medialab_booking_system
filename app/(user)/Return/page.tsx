
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
        <div className="w-full max-w-md mt-10">
            <h2 className="text-xl font-bold mb-4">Return Details</h2>
            <label>
                <input
                    type="checkbox"
                    checked={defects}
                    onChange={handleDefectsChange}
                />
                {"Are there any defects?"}
            </label>
            <div className="mt-4">
                <input
                    type="text"
                    placeholder="Product Name"
                    className="w-full border border-gray-300 rounded-lg p-2"
                />
            </div>
            <div className="mt-4">
                <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    inline
                    className="w-full border border-gray-300 rounded-lg p-2"
                />
            </div>
            <button className="mt-6 bg-cyan-500 text-white py-2 px-4 rounded">
                Submit Return
            </button>
        </div>
    </div>
);
}
