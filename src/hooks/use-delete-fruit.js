import { useMutation, useQueryClient } from "react-query";
import { deleteFruit } from "../service";

export default function useDeleteFruit() {
  const queryClient = useQueryClient();
  return useMutation("deleteFruit", deleteFruit, {
    onSuccess: () => {
      return queryClient.invalidateQueries("fruits");
    },
  });
}
