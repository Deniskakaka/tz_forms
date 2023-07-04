import { useEffect, useState } from "react";
import { Field } from "../field/Field";
import { useNavigate } from "react-router-dom";
import { Button } from "../button/Button";

export const FormGenerator = () => {
  const [keyword, setKeyWord] = useState("");
  const [location, setLocation] = useState("");
  const [leads, setLeads] = useState("10");

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  const onChangeKeyWord = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyWord(event.target.value);
  };

  const onChangeLocation = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  const onChangeLeads = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLeads(event.target.value);
  };

  const onSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
  };

  return (
    <div className="wrapper_generator">
      <h1>Lead Generator</h1>
      <p>To get started, i need all the following information</p>
      <form>
        <div className="generator_item">
          <Field
            classStyle="filedFormGenerator"
            type="text"
            title="Keywords:"
            placeholder=""
            value={keyword}
            onChange={onChangeKeyWord}
          />
          <span>Example:Restaurant, Hotel</span>
        </div>
        <div className="generator_item">
          <Field
            classStyle="filedFormGenerator"
            type="text"
            title="Location:"
            placeholder=""
            value={location}
            onChange={onChangeLocation}
          />
          <span>Example: Boston</span>
        </div>
        <div className="generator_item">
          <h3>Leads num:</h3>
          <select className="leads_num" value={leads} onChange={onChangeLeads}>
            <option>10</option>
            <option>20</option>
            <option>30</option>
            <option>40</option>
            <option>50</option>
          </select>
        </div>
        <Button text="Submit" func={onSubmit} />
      </form>
    </div>
  );
};
