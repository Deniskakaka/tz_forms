import { useState } from "react";
import { Field } from "../field/Field";
import { Button } from "../button/Button";

type Props = {
  title: string;
};

export const FormMailVerifier: React.FC<Props> = ({ title }) => {
  const [email, setEmail] = useState("");

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
  };

  return (
    <div className="wrapper">
      <h1>{title}</h1>
      <form className="form_verifier">
        <label>
          <span>Choose .xlsx File: </span>
          <input type="file" />
        </label>
        <Button text="Upload emails and start Verification" func={onSubmit} />
        <Field
          classStyle="verifier_field "
          type="text"
          title="Email:"
          placeholder=""
          value={email}
          onChange={onChangeEmail}
        />
        <Button text="Validate email" func={onSubmit} />
      </form>
    </div>
  );
};
