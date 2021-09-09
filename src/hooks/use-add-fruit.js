import { useMutation, useQueryClient } from "react-query";
import { createFruits } from "../service";

export default function useAddFruit() {
  const queryClient = useQueryClient();
  return useMutation("addFruit", createFruits, {
    onSuccess: () => {
      return queryClient.invalidateQueries("fruits");
    },
  });
}
