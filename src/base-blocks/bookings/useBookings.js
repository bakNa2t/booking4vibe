import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiForBooking";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // Filter bookings by status
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };

  // Sorting bookings by day or amount
  const sortByRaw = searchParams.get("sortBy") || "startDay-asc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  // Updating pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isLoading,
    data: { data: bookings, count } = {},
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  // Pre-fetch next page
  queryClient.prefetchQuery({
    queryKey: ["bookings", filter, sortBy, page + 1],
    queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
  });

  return { isLoading, bookings, count, error };
}
