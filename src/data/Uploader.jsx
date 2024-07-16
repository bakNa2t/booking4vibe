import { useState } from "react";
import { isFuture, isPast, isToday } from "date-fns";
import supabase from "../services/supabase";

import Button from "../ui-blocks/Button";

import { bookings } from "./data-bookings";
import { apartments } from "./data-apartments";
import { guests } from "./data-guests";
import { subtractDates } from "../utils/utilsFunctions";

// const originalSettings = {
//   minBookingLength: 3,
//   maxBookingLength: 30,
//   maxGuestsPerBooking: 10,
//   breakfastPrice: 15,
// };

async function deleteGuests() {
  const { error } = await supabase.from("guests").delete().gt("id", 0);
  if (error) console.log(error.message);
}

async function deleteApartments() {
  const { error } = await supabase.from("apartments").delete().gt("id", 0);
  if (error) console.log(error.message);
}

async function deleteBookings() {
  const { error } = await supabase.from("bookings").delete().gt("id", 0);
  if (error) console.log(error.message);
}

async function createGuests() {
  const { error } = await supabase.from("guests").insert(guests);
  if (error) console.log(error.message);
}

async function createApartments() {
  const { error } = await supabase.from("apartments").insert(apartments);
  if (error) console.log(error.message);
}

async function createBookings() {
  // Bookings need a guestId and a apartmentId. We can't tell Supabase IDs for each object, it will calculate them on its own. So it might be different for different people, especially after multiple uploads. Therefore, we need to first get all guestIds and apartmentIds, and then replace the original IDs in the booking data with the actual ones from the DB
  const { data: guestsIds } = await supabase
    .from("guests")
    .select("id")
    .order("id");
  const allGuestIds = guestsIds.map((apartment) => apartment.id);
  const { data: apartmentsIds } = await supabase
    .from("apartments")
    .select("id")
    .order("id");
  const allApartmentIds = apartmentsIds.map((apartment) => apartment.id);

  const finalBookings = bookings.map((booking) => {
    // Here relying on the order of cabins, as they don't have and ID yet
    const apartment = apartments.at(booking.apartmentId - 1);
    const quantityNights = subtractDates(booking.endDay, booking.startDay);
    const apartmentPrice =
      quantityNights * (apartment.regularPrice - apartment.discount);
    const extrasPrice = booking.hasBreakfast
      ? quantityNights * 15 * booking.quantityGuests
      : 0; // hardcoded breakfast price
    const totalPrice = apartmentPrice + extrasPrice;

    let status;
    if (isPast(new Date(booking.endDay)) && !isToday(new Date(booking.endDay)))
      status = "checked-out";
    if (
      isFuture(new Date(booking.startDay)) ||
      isToday(new Date(booking.startDay))
    )
      status = "unconfirmed";
    if (
      (isFuture(new Date(booking.endDay)) ||
        isToday(new Date(booking.endDay))) &&
      isPast(new Date(booking.startDay)) &&
      !isToday(new Date(booking.startDay))
    )
      status = "checked-in";

    return {
      ...booking,
      quantityNights,
      apartmentPrice,
      extrasPrice,
      totalPrice,
      guestId: allGuestIds.at(booking.guestId - 1),
      apartmentId: allApartmentIds.at(booking.apartmentId - 1),
      status,
    };
  });

  console.log(finalBookings);

  const { error } = await supabase.from("bookings").insert(finalBookings);
  if (error) console.log(error.message);
}

function Uploader() {
  const [isLoading, setIsLoading] = useState(false);

  async function uploadAll() {
    setIsLoading(true);
    // Bookings need to be deleted FIRST
    await deleteBookings();
    await deleteGuests();
    await deleteApartments();

    // Bookings need to be created LAST
    await createGuests();
    await createApartments();
    await createBookings();

    setIsLoading(false);
  }

  async function uploadBookings() {
    setIsLoading(true);
    await deleteBookings();
    await createBookings();
    setIsLoading(false);
  }

  return (
    <div
      style={{
        marginTop: "auto",
        padding: "8px",
        backgroundColor: "var(--color-emerald-100)",
        borderRadius: "5px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <h3>SAMPLE DATA</h3>

      <Button onClick={uploadAll} variation="secondary" disabled={isLoading}>
        Upload ALL
      </Button>

      <Button
        onClick={uploadBookings}
        variation="secondary"
        disabled={isLoading}
      >
        Upload bookings ONLY
      </Button>
    </div>
  );
}

export default Uploader;
