import "./style.css";
import { useState } from "react";
import useAddFruit from "../../hooks/use-add-fruit";

export function FruitAdd() {
  const { mutate: add } = useAddFruit();
  const onButtonClicked = () => {
    add({ name: newName, size: newSize, qty: newQty });
  };

  const [newName, setNewName] = useState("");
  const onNameChange = (event) => {
    setNewName(event.target.value);
  };
  const [newSize, setNewSize] = useState("small");
  const onSizeChange = (event) => {
    setNewSize(event.target.value);
  };
  const [newQty, setNewQty] = useState(1);
  const onQtyChange = (event) => {
    setNewQty(event.target.value);
  };

  return (
    <div className="add-fruit-container">
      <p className="add-fruit-title">Add on more fruit to your fridge</p>
      <div className="add-fruit-inputs">
        <label>
          <p>Name</p>
          <input placeholder="eg. strawberry" onChange={onNameChange} />
        </label>
        <label>
          <p>Size</p>
          <select placeholder="Size" onChange={onSizeChange}>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="big">Big</option>
          </select>
        </label>
        <label>
          <p>Qty.</p>
          <input type="number" value={newQty} onChange={onQtyChange} />
        </label>
      </div>
      <button onClick={onButtonClicked}>Add it!</button>
    </div>
  );
}
