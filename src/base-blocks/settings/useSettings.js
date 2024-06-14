import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiForSettings";

export function useSettings() {
  const {
    isLoading,
    error,
    ddata: settings,
  } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });

  return { isLoading, error, settings };
}
