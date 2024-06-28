import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiForBooking";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useCheckout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),
    onSuccess: (data) => {
      toast.success(`Checked out booking #${data.id} successfully`);
      queryClient.invalidateQueries({ active: true });
      navigate("/");
    },
    onError: () => toast.error("There was an error checking out the booking"),
  });

  return { checkout, isCheckingOut };
}
