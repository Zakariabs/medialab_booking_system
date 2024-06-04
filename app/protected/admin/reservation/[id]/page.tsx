// app/protected/(admin)/reservation/[id]/page.tsx
import { createClient } from '@/utils/supabase/server';
import { Reservation } from '@/types/Reservation';

export default async function Page({ params: { id } }: { params: { id: string } }) {
  const supabase = createClient();
  const { data: reservation, error } = await supabase
    .from('reservations')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    return <div>Error: {error.message}</div>;
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
    </div>
  );
}
