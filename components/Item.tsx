// app/protected/(admin)/reservation/[id]/page.tsx
'use client';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Reservation } from '@/types/Reservation';
import { supabase } from '@/lib/supabaseClient';

export default function Page() {
  const router = useRouter();
  const { id } = router.query;
  const [reservation, setReservation] = useState<Reservation | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchReservation = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('reservations')
          .select('*')
          .eq('id', id)
          .single();

        if (error) {
          throw new Error(error.message);
        }

        setReservation(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReservation();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!reservation) {
    return <div>Reservation not found</div>;
  }

  return (
    <div>
      <h1>Reservation Details</h1>
      <p>ID: {reservation.id}</p>
      <p>User ID: {reservation.user_id}</p>
      <p>Kit ID: {reservation.kit_id}</p>
      <p>Start Date: {new Date(reservation.start_date).toLocaleString()}</p>
      <p>End Date: {new Date(reservation.end_date).toLocaleString()}</p>
      {/* Add more reservation details here */}
    </div>
  );
}
