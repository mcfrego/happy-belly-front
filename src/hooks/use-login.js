import { useMutation, useQueryClient } from "react-query";
import { login } from "../service";

export default function useLogin() {
  const queryClient = useQueryClient();
  return useMutation("login", login, {
    onSuccess: () => {
      return queryClient.invalidateQueries("auth");
    },
  });
}
