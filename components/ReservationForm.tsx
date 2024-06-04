// app/components/ReservationForm.tsx
'use client';

import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';

const ReservationForm = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from('reservations')
      .insert([{ name, date }]);

    if (error) {
      setMessage(`Error: ${error.message}`);
    } else {
      setMessage('Reservation made successfully!');
      setName('');
      setDate('');
      router.push('/reservations');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <Button type="submit">Make Reservation</Button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default ReservationForm;
