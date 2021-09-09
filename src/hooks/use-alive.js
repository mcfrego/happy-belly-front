import { useQuery } from "react-query";

import { alive } from "../service";

export default function useAlive() {
  const query = useQuery("alive", alive);
  return query;
}
