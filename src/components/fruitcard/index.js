import { useState } from "react";
import "./style.css";
import useUpdateFruit from "../../hooks/use-update-fruit";
import useDeleteFruit from "../../hooks/use-delete-fruit";

export function Fruitcard(props) {
  const { name, size, id, logged, isEdit } = props;
  const { mutate: updateFruit } = useUpdateFruit();
  const { mutate: deleteFruit } = useDeleteFruit();

  const [updateName, setUpdateName] = useState(name);
  const onNameChange = (event) => {
    setUpdateName(event.target.value);
  };
  const [updateSize, setUpdateSize] = useState(size);
  const onSizeChange = (event) => {
    setUpdateSize(event.target.value);
  };

  const [open, setOpen] = useState(false);
  const onCardClicked = () => {
    if (logged) setOpen(!open);
  };
  const onButtonClicked = () => {
    updateFruit({
      id,
      status: "eat",
      body: {},
    });
  };
  const onDeleteClicked = () => {
    deleteFruit({ id });
  };
  const onUpdateClicked = () => {
    updateFruit({
      id,
      status: "update",
      body: { name: updateName, size: updateSize },
    });
  };

  return (
    <div
      className={open || isEdit ? "card opencard" : "card"}
      onClick={onCardClicked}
    >
      {!isEdit && open && <button onClick={onButtonClicked}>Eat it!</button>}
      {isEdit ? (
        <div className="innercard">
          <label>
            <p>Name</p>
            <input value={updateName} onChange={onNameChange} />
          </label>
          <label>
            <p>Size</p>
            <select value={updateSize} onChange={onSizeChange}>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="big">Big</option>
            </select>
          </label>
          <p className="button-text" onClick={onUpdateClicked}>
            Save
          </p>
          <p className="button-text" onClick={onDeleteClicked}>
            Delete
          </p>
        </div>
      ) : (
        <div className="innercard">
          <p>{name}</p>
          <p>{size}</p>
        </div>
      )}
    </div>
  );
}
