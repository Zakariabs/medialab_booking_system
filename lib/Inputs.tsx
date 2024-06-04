import { Input } from '@/components/ui/input';
import React from 'react';

export default function Inputs({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div className='flex flex-col'>
      <label className='mb-1 font-semibold text-gray-500'>{label}</label>
      <div className='w-96'>
        <Input placeholder={placeholder} className='border rounded-md' />
      </div>
    </div>
  );
}
