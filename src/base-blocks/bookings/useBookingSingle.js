import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getBooking } from "../../services/apiForBooking";

export function useBookingSingle() {
  const { bookingId } = useParams();

  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ["booking"],
    queryFn: () => getBooking(bookingId),
    retry: false,
  });
  return { isLoading, booking, error };
}
