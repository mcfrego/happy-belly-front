import { useState } from "react";
import "./style.css";
import useUpdateFruit from "../../hooks/use-update-fruit";

export function Fruitcard(props) {
  const { name, size, id, logged } = props;
  const { mutate: update } = useUpdateFruit();

  const [open, setOpen] = useState(false);
  const onCardClicked = () => {
    if (logged) setOpen(!open);
  };
  const onButtonClicked = () => {
    update({
      id: id,
      status: "eat",
      body: {},
    });
  };

  return (
    <div className={open ? "card opencard" : "card"} onClick={onCardClicked}>
      {open && <button onClick={onButtonClicked}>Eat it!</button>}
      <div className="innercard">
        <p>{name}</p>
        <p>{size}</p>
      </div>
    </div>
  );
}
