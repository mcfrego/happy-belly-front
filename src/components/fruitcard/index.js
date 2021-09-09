import "./style.css";

export function Fruitcard(props) {
  const { name, size } = props;

  return (
    <div className="card">
      <p>{name}</p>
      <p>{size}</p>
    </div>
  );
}
