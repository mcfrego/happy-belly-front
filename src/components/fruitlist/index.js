import useFruits from "../../hooks/use-fruits";
import { Fruitcard } from "..";
import "./style.css";

export function Fruitlist(props) {
  const { logged, isEdit } = props;
  const { data } = useFruits();

  return (
    <div className="list">
      {data && data.length ? (
        <p>This is what's inside your fridge!</p>
      ) : (
        <p>There is nothing inside your fridge!</p>
      )}

      {data &&
        data
          .map(({ name, size, id }) => (
            <Fruitcard
              key={id}
              id={id}
              name={name}
              size={size}
              logged={logged}
              isEdit={isEdit}
            />
          ))
          .reverse()}
    </div>
  );
}
