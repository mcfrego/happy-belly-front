import "./style.css";
import { NavbarLogged } from "./navbar-logged";
import { NavbarNotLogged } from "./navbar-not-logged";

export function Navbar({ logged }) {
  if (logged) return <NavbarLogged />;
  return <NavbarNotLogged />;
}
