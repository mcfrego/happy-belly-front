import "./style.css";

export function Fab(props) {
  const { status, setStatus } = props;
  const onClickFab = () => {
    setStatus(!status);
  };

  return (
    <div className="fab" onClick={onClickFab}>
      {status ? (
        <img
          alt="open"
          src="https://img.icons8.com/material-outlined/50/000000/fridge-with-open-door.png"
        />
      ) : (
        <img
          alt="closed"
          src="https://img.icons8.com/material-outlined/50/000000/fridge.png"
        />
      )}
    </div>
  );
}
