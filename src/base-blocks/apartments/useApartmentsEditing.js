import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditApartment } from "../../services/apiApartments";

export function useApartmentsEditing() {
  const queryClient = useQueryClient();

  //Edit existing apartment
  const { mutate: editApartment, isLoading: isEditing } = useMutation({
    mutationFn: ({ newApartmentData, id }) =>
      createEditApartment(newApartmentData, id),
    onSuccess: () => {
      toast.success("Apartment updated successfully");
      queryClient.invalidateQueries({
        queryKey: ["apartments"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { editApartment, isEditing };
}
