import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";

import { Home } from "./screens";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}
