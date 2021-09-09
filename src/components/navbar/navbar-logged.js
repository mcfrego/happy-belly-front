import useLogout from "../../hooks/use-logout";
import { Count } from "../count";

export function NavbarLogged() {
  const { mutate: logout } = useLogout();
  const onButtonClick = () => logout();

  return (
    <nav className="navbar navbar-logged">
      <Count />
      <button onClick={onButtonClick}>LOG OUT</button>
    </nav>
  );
}
