import { useQuery } from "react-query";

import { getFruits } from "../service";

export default function useFruits() {
  const query = useQuery("fruits", getFruits);
  return query;
}
