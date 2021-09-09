import "./style.css";
import useFruitCount from "../../hooks/use-fruit-count";

const countStates = {
  sad: "Your belly is sad!",
  soso: "Your belly is so so!",
  happy: "Your belly is happy!",
};

export function Count() {
  const { data, isLoading } = useFruitCount();

  let status;
  if (parseInt(data) < 1) status = "sad";
  else if (parseInt(data) > 4) status = "happy";
  else status = "soso";

  if (isLoading) return <div className="count"></div>;

  return (
    <div className={`${status} count`}>
      <p>{parseInt(data) + " fruits eaten today."}</p>
      <p>{countStates[status]}</p>
    </div>
  );
}
