import "./style.css";
import useFruits from "../../hooks/use-fruits";
import { Fruitcard } from "..";

export function Fruitlist(props) {
  const { logged, isEdit } = props;
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
      {data.map(({ name, size, id }) => (
        <Fruitcard
          key={id}
          id={id}
          name={name}
          size={size}
          logged={logged}
          isEdit={isEdit}
        />
      ))}
    </div>
  );
}
