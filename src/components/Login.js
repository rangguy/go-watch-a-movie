import { useState } from "react";
import Input from "./form/Input";
import { useNavigate, useOutletContext } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setJwtToken, setAlertMessage, setAlertClassName } =
    useOutletContext();

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("email/pass", email, password);

    if (email === "admin@mail.com") {
      setJwtToken("abc");
      setAlertMessage("");
      setAlertClassName("d-none");
      navigate("/");
    } else {
      setAlertClassName("alert-danger");
      setAlertMessage("Invalid Credentials");
    }
  };

  return (
    <div className="col-md-6 offset-md-3">
      <h2>Login</h2>
      <hr />

      <form onSubmit={handleSubmit}>
        <Input
          title="Email Address"
          type="email"
          className="form-control"
          name="email"
          id="email"
          autoComplete="email-new"
          onChange={(event) => setEmail(event.target.value)}
        />

        <Input
          title="Password"
          type="password"
          className="form-control"
          name="password"
          id="password"
          autoComplete="password-new"
          onChange={(event) => setPassword(event.target.value)}
        />

        <hr />

        <Input type="submit" className="btn btn-primary" value="Login" />
      </form>
    </div>
  );
};

export default Login;
