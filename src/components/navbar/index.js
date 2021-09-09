import "./style.css";
import { NavbarLogged } from "./navbar-logged";
import { NavbarNotLogged } from "./navbar-not-logged";

export function Navbar({ logged }) {
  return logged ? <NavbarLogged /> : <NavbarNotLogged />;
}
