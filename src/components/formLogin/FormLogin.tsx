import { useEffect, useState } from "react";
import { Field } from "../field/Field";
import { Link, useNavigate } from "react-router-dom";
import {
  generateToken,
  validatePassword,
  validationName,
  verificationName,
} from "../../helper";
import { Button } from "../button/Button";
import { useFormValidation } from "../../hooks/ValidForm";

export const FormLogin = () => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [listUsers, setListUsers] = useState<
    { name: string; email: string; password: string }[]
  >([]);
  const { validForm, validateField, setFieldValue } = useFormValidation();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("users")) {
      setListUsers(JSON.parse(localStorage.getItem("users") as string));
    }
  }, [navigate]);

  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const validName = (event: React.ChangeEvent<HTMLInputElement>) => {
    validateField(event.target.value, "name", validationName);
  };

  const validPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    validateField(event.target.value, "password", validatePassword);
  };

  const onSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    setFieldValue(!!verificationName(name, listUsers), "name");
    setFieldValue(
      verificationName(name, listUsers)
        ? verificationName(name, listUsers).password === password
        : false,
      "password"
    );

    const user = verificationName(name, listUsers);
    if (!!user) {
      if (user.password === password) {
        localStorage.setItem("token", generateToken());
        navigate("/generator");
      }
    }
  };

  return (
    <form className="form">
      <h2>Login</h2>
      <Field
        classStyle="filed"
        type="text"
        title="Name"
        placeholder="Enter name"
        value={name}
        onChange={onChangeName}
        onBlur={validName}
        error={validForm.name}
        textError="Name was not found"
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
        textError="Password is not correct or user not found"
      />
      <Button text="Login" func={onSubmit} />
      <p>
        Already have account? <Link to="/singIn">Sing in</Link>
      </p>
    </form>
  );
};
