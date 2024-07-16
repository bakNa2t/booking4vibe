import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { signup } from "../../services/apiAuth";

export function useSignUpRegisterPage() {
  const navigate = useNavigate();

  const { mutate: signupNewUser, isLoading } = useMutation({
    mutationFn: signup,
    onSuccess: () => {
      toast.success(
        // "Account created successfully. Please, verify the new account in your email."
        "Account created successfully. Please, log in to your account."
      );
      navigate("/login", { replace: true });
    },
  });

  return { signupNewUser, isLoading };
}
