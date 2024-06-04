// app/make-reservation/page.tsx
import ReservationForm from '../../../../components/ReservationForm';
import { supabase } from '../../../../lib/supabaseClient';
import { redirect } from 'next/navigation';

export default async function MakeReservationPage() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect('/login');
  }

  return (
    <div>
      <h1>Make a Reservation</h1>
      <ReservationForm />
    </div>
  );
}
