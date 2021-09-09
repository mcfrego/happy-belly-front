import { useMutation, useQueryClient } from "react-query";
import { updateFruit } from "../service";

export default function useUpdateFruit() {
  const queryClient = useQueryClient();
  return useMutation("updateFruit", updateFruit, {
    onSuccess: () => {
      return queryClient.invalidateQueries(["fruits", "count"]);
    },
  });
}
