import "./style.css";
import useFruitCount from "../../hooks/use-fruit-count";

const countStates = {
  sad: {
    icon: "",
    text: "Your belly is sad!",
  },
  soso: {
    icon: "",
    text: "Your belly is so so ...",
  },
  happy: {
    icon: "",
    text: "Your belly is happy!",
  },
};

export function Count() {
  const { data } = useFruitCount();

  let status;
  if (parseInt(data) < 1) status = "sad";
  else if (parseInt(data) > 4) status = "happy";
  else status = "soso";

  return (
    <div className={`${status} count`}>
      <p>{countStates[status].text}</p>
    </div>
  );
}
