import { useQuery } from "react-query";

export default function useAuth() {
  const query = useQuery(
    "auth",
    async () => await localStorage.getItem("token")
  );
  return query;
}
