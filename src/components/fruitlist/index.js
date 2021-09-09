import "./style.css";
import useFruits from "../../hooks/use-fruits";
import { Fruitcard } from "..";

export function Fruitlist() {
  const { data, isLoading } = useFruits();

  if (isLoading)
    return (
      <div>
        <p>Loading</p>
      </div>
    );

  if (!data)
    return (
      <div>
        <p>No items</p>
      </div>
    );

  return (
    <div className="list">
      {data.map(({ name, size }, index) => (
        <Fruitcard key={index} name={name} size={size} />
      ))}
    </div>
  );
}
