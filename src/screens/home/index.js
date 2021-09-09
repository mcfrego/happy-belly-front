import "./style.css";
import { Navbar, Fruitlist, Fab, FruitAdd } from "../../components/";
import useAuth from "../../hooks/use-auth";
import { useState } from "react/cjs/react.development";

export function Home() {
  const { data } = useAuth();
  const [fabState, setFabState] = useState(false);

  return (
    <div className="container">
      <Navbar logged={data} />
      <div className="body">
        {fabState ? <FruitAdd /> : <p>This is what's inside your fridge!</p>}
        <Fruitlist logged={data} isEdit={fabState} />
        {data && <Fab status={fabState} setStatus={setFabState} />}
      </div>
    </div>
  );
}
