import "./style.css";

export function Fab(props) {
  const { status, setStatus } = props;
  const onClickFab = () => {
    setStatus(!status);
  };

  return (
    <div className="fab" onClick={onClickFab}>
      {status ? "OPEN" : "CLOSED"}
    </div>
  );
}
