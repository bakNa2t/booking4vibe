import { useQuery } from "@tanstack/react-query";
import { getStaysActivityPerDay } from "../../services/apiForBooking";

export function useActivityPerDay() {
  const { data: daysActivity, isLoading } = useQuery({
    queryFn: getStaysActivityPerDay,
    queryKey: ["activity-per-day"],
  });

  return { daysActivity, isLoading };
}
