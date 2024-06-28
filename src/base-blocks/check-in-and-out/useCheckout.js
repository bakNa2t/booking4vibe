import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiForBooking";
import toast from "react-hot-toast";

export default function useCheckout() {
  const queryClient = useQueryClient();
  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),
    onSuccess: (data) => {
      toast.success(`Checked out booking #${data.id} successfully`);
      queryClient.invalidateQueries({ active: true });
    },
    onError: () => toast.error("There was an error checking out the booking"),
  });

  return { checkout, isCheckingOut };
}
