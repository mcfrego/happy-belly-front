import { useQueryClient, useMutation } from "react-query";

async function logout() {
  return await localStorage.removeItem("token");
}

export default function useLogout() {
  const queryClient = useQueryClient();
  return useMutation("logout", logout, {
    onSuccess: () => {
      return queryClient.invalidateQueries("auth");
    },
  });
}
