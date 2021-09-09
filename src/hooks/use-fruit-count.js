import { useQuery } from "react-query";

import { getFruitCount } from "../service";

export default function useFruitCount() {
  const query = useQuery("count", getFruitCount);
  return query;
}
