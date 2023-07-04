import { useState } from "react";
import { Field } from "../field/Field";
import { Link, useNavigate } from "react-router-dom";
import {
  validationEmail,
  validationName,
  validatePassword,
} from "../../helper";
import { Button } from "../button/Button";

export const FormSingIn = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [validForm, setValidForm] = useState({
    email: true,
    name: true,
    password: true,
  });

  const navigate = useNavigate();

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const validField = (
    value: string,
    key: keyof typeof validForm,
    func: (value: string) => boolean
  ): boolean => {
    setValidForm({
      ...validForm,
      [key]: func(value),
    });

    return func(value);
  };

  const validEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    validField(event.target.value, "email", validationEmail);
  };

  const validName = (event: React.ChangeEvent<HTMLInputElement>) => {
    validField(event.target.value, "name", validationName);
  };

  const validPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    validField(event.target.value, "password", validatePassword);
  };

  const onSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    const users = JSON.parse(localStorage.getItem("users") as string);

    if (
      validField(email, "email", validationEmail) &&
      validField(name, "name", validationName) &&
      validField(password, "password", validatePassword)
    ) {
      if (
        users &&
        users.some(
          (user: { name: string; email: string; password: string }) =>
            user.email === email
        )
      ) {
        setValidForm({
          ...validForm,
          email: false,
        });
      } else {
        if (localStorage.getItem("users")) {
          const users = JSON.parse(localStorage.getItem("users") as string);

          users.push({ email: email, name: name, password: password });

          localStorage.setItem("users", JSON.stringify(users));
        } else {
          localStorage.setItem(
            "users",
            JSON.stringify([{ email: email, name: name, password: password }])
          );
        }

        navigate("/");
      }
    }
  };

  return (
    <form className="form">
      <Field
        classStyle="filed"
        type="text"
        title="Email"
        placeholder="Enter email"
        value={email}
        onChange={onChangeEmail}
        onBlur={validEmail}
        error={validForm.email}
        textError="invalid email or this email busy"
      />
      <Field
        classStyle="filed"
        type="text"
        title="Name"
        placeholder="Enter name"
        value={name}
        onChange={onChangeName}
        onBlur={validName}
        error={validForm.name}
        textError="minimum 3 letters or Unacceptable symbols"
      />
      <Field
        classStyle="filed"
        type="password"
        title="Password"
        placeholder="Password"
        value={password}
        onChange={onChangePassword}
        onBlur={validPassword}
        error={validForm.password}
        textError="password must contain one uppercase letter and one lowercase letter"
      />
      <Button text="Sing in" func={onSubmit} />
      <p>
        Already have no account? <Link to="/">Login</Link>
      </p>
    </form>
  );
};
