import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import data from './data';

interface User {
  id: string | number;
  email: string;
  items: number;
  role: string;
}

export default function Page() {
const [searchTerm, setSearchTerm] = useState<string>('');
const [filteredData, setFilteredData] = useState<User[]>(data);

useEffect(() => {
    const result = data.filter((user) =>
        user.id.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.items.toString().includes(searchTerm.toLowerCase()) ||
        user.role.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(result);
}, [searchTerm]);

const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
};

let label = ["User ID", "Email", "#Items", "Role", "Info"];

  return (
    <div className="flex flex-col gap-8 md:gap-10 items-center mt-10 px-4 lg:flex">
      <div className="flex flex-col gap-4 md:gap-6 w-full md:w-[500px] items-center">
        <h1 className="text-3xl md:text-5xl text-[#EA5D5D] font-bold font-sans">User List</h1>
        <Input
          placeholder="Search"
          className="placeholder-[#EA5D5D] w-full"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="overflow-x-auto w-full flex justify-center">
        <table className="table-auto text-sm border-collapse font-bold border bg-[#EA5D5D]">
          <thead>
            <tr>
              {label.map((elm, index) => (
                <th key={index} className="border border-gray-400">
                  <div className="bg-white py-4 px-1 md:p-6 rounded-xl">{elm}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((elm, index) => (
              <tr key={index}>
                <td className="px-2 md:px-4 py-2 border border-gray-400">{elm.id}</td>
                <td className="px-2 md:px-4 py-2 border border-gray-400">{elm.email}</td>
                <td className="px-2 md:px-4 py-2 border border-gray-400">{elm.items}</td>
                <td className="px-2 md:px-4 py-2 border border-gray-400">{elm.role}</td>
                <td className="px-2 md:px-4 py-2 border border-gray-400">
                  <Button className="text-[#EA5D5D]" variant={'secondary'} size={"sm"}>{">"}</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
