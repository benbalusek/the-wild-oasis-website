import DateSelector from "@/app/_components/DateSelector";
import ReservationForm from "@/app/_components/ReservationForm";
import LoginMessage from "@/app/_components/LoginMessage";
import {
  getBookedDatesByCabinId,
  getCabin,
  getSettings,
} from "@/app/_lib/data-service";
import { auth } from "@/app/_lib/auth";

async function Reservation({ cabin, user }) {
  const [cabinData, settings, bookedDates] = await Promise.all([
    getCabin(cabin.id),
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);
  const session = await auth();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 border border-primary-800 min-h-[400px]">
      <DateSelector
        settings={settings}
        bookedDates={bookedDates}
        cabin={cabin}
      />
      {session?.user ? (
        <ReservationForm cabin={cabin} user={session.user} />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}

export default Reservation;
