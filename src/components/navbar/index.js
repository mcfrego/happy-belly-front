import "./style.css";
import useAuth from "../../hooks/use-auth";
import { NavbarLogged } from "./navbar-logged";
import { NavbarNotLogged } from "./navbar-not-logged";

export function Navbar() {
  const { data, isLoading } = useAuth();

  if (isLoading) return null;

  if (data) return <NavbarLogged />;
  return <NavbarNotLogged />;
}
