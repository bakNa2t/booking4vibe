import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditApartment } from "../../services/apiApartments";
import toast from "react-hot-toast";

export function useApartmentsCreating() {
  const queryClient = useQueryClient();

  //Create new apartment
  const { mutate: createApartment, isLoading: isCreating } = useMutation({
    mutationFn: createEditApartment,
    onSuccess: () => {
      toast.success("New apartment created successfully");
      queryClient.invalidateQueries({
        queryKey: ["apartments"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createApartment, isCreating };
}
