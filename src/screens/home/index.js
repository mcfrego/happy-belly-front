import "./style.css";
import { Navbar, Fruitlist } from "../../components/";
import useAuth from "../../hooks/use-auth";

export function Home() {
  const { data, isLoading } = useAuth();

  return (
    <div className="container">
      <Navbar logged={data} />
      <div className="body">
        <p>This is home</p>
        <Fruitlist />
      </div>
    </div>
  );
}
