import useLogin from "../../hooks/use-login";
import { useState } from "react";

export function NavbarNotLogged() {
  const { mutate: login } = useLogin();
  const onButtonClick = () => {
    if (email && password) login({ email, password });
  };

  // TODO to quite default value
  // const [email, setEmail] = useState("momo@2coders.es");
  const [email, setEmail] = useState("");
  const onEmailChange = (event) => setEmail(event.target.value);

  // TODO to quite default value
  // const [password, setPassword] = useState("isitenough");
  const [password, setPassword] = useState("");
  const onPasswordChange = (event) => setPassword(event.target.value);

  return (
    <nav className="navbar ">
      <div className="navbar-inner navbar-not-logged">
        <p>U are not logged. Come on in to feed your belly</p>
        <div className="login">
          <label>
            <p>email</p>
            <input type="text" value={email} onChange={onEmailChange} />
          </label>

          <label>
            <p>Password</p>
            <input
              type="password"
              value={password}
              onChange={onPasswordChange}
            />
          </label>

          <button onClick={onButtonClick}>
            <p>Log in</p>
          </button>
        </div>
      </div>
    </nav>
  );
}
