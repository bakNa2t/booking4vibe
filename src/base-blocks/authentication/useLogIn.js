import { useMutation /*, useQueryClient*/ } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { login as loginApi } from "../../services/apiAuth";

export function useLogIn() {
  // const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: () => {
      // queryClient.setQueryData(["user"], user);
      navigate("/dashboard");
    },
    onError: (error) => {
      console.log("ERROR", error);
      toast.error("Email or password is incorrect");
    },
  });

  return { login, isLoading };
}
