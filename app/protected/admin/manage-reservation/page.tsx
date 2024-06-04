'use client';

import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { createClient } from '@/utils/supabase/client';
import { Reservation } from '@/types/Reservation';

export default function Page() {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [state, setState] = useState(3);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReservations = async () => {
      const supabase = createClient();
      try {
        const { data, error } = await supabase
          .from('reservations')
          .select('*');

        if (error) {
          throw new Error(error.message);
        }

        setReservations(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col justify-center gap-8 md:gap-10 items-center mt-10 px-4 lg:px-0">
      <div className="flex flex-col gap-4 md:gap-6 w-full md:w-[500px] items-center">
        <h1 className="text-3xl md:text-5xl text-[#EA5D5D] font-bold font-sans">
          Reservations
        </h1>
        <Input
          placeholder="Search"
          className="placeholder-[#EA5D5D] w-full"
        />
      </div>

      {reservations.slice(0, state).map((reservation) => (
        <div
          key={reservation.id}
          className="bg-[#EA5D5D] relative gap-10 min-h-[256px] flex flex-col md:flex-row justify-between p-5 rounded-lg w-full md:w-auto"
        >
          <div className="flex flex-col rounded-lg items-center w-full md:w-[190px] h-[120px] bg-white">
            <div className="bg-[#EA5D5D] px-6 text-center rounded-lg text-white pt-1 mt-1">
              Product ID
            </div>
            <div className="font-bold mt-5">{reservation.kit_id}</div>
          </div>

          <div className="flex flex-col rounded-lg items-center w-full md:w-[190px] h-[120px] bg-white">
            <div className="bg-[#EA5D5D] px-2 text-center rounded-lg text-white pt-1 mt-1">
              Reservation Number
            </div>
            <div className="font-bold mt-5">{reservation.id}</div>
          </div>

          <div className="flex flex-col rounded-lg items-center w-full md:w-[190px] h-[120px] bg-white">
            <div className="bg-[#EA5D5D] px-6 text-center rounded-lg text-white pt-1 mt-1">
              Date
            </div>
            <div className="font-bold mt-5">{new Date(reservation.start_date).toLocaleString()}</div>
          </div>

          <div className="absolute right-0 bottom-0 p-2">
            <Button variant={"secondary"}>
              <Link href={`/reserv/${reservation.id}`}>More Information</Link>
            </Button>
          </div>
        </div>
      ))}

      <Button
        onClick={() => setState((prev) => prev + 1)}
        className="bg-[#EA5D5D] hover:bg-[#d44d4d] text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
      >
      Show More Reservations
      </Button>

      <Button
        onClick={() => setState((prev) => prev + 1)}
        className="bg-[#EA5D5D] hover:bg-[#d44d4d] text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
      >
      Go to Admin Page
      </Button>
    </div>
    
  );
}
