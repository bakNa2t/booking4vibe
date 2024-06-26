import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiForBooking";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useCheckin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: ({ bookingId, breakfast }) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
        ...breakfast,
      }),
    onSuccess: (data) => {
      toast.success(`Checked in booking #${data.id} successfully`);
      queryClient.invalidateQueries({ active: true });
      navigate("/");
    },
    onError: () => toast.error("There was an error checking in the booking"),
  });

  return { checkin, isCheckingIn };
}
