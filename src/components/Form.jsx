import React from "react";
import map from "lodash/fp/map";
import entries from "lodash/fp/entries";
import flow from "lodash/fp/flow";

const POSITIONS = [
  { id: "", text: "" },
  { id: "Engineer", text: "Engineer" },
  { id: "Lawyer", text: "Lawyer" },
  { id: "Doctor", text: "Doctor" },
  { id: "Nurse", text: "Nurse" }
];

const LANGUAGES = [
  { id: "", text: "" },
  { id: "JavaScript", text: "JavaScript" },
  { id: "Java", text: "Java" },
  { id: "Go", text: "Go" },
  { id: "Scala", text: "Scala" }
];

function Dropdown(props) {
  const { title, options, value, onChange } = props;

  const getOptions = ([i, opt]) => (
    <option key={opt.id} value={opt.id}>
      {opt.text}
    </option>
  );

  return (
    <div className="form-group">
      <label>{title}</label>
      <select
        className="form-control"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {flow(entries, map(getOptions))(options)}
      </select>
    </div>
  );
}

function Textbox(props) {
  const { title, value, onChange } = props;

  return (
    <div className="form-group">
      <label>{title}</label>
      <input
        className="form-control"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

function Form(props) {
  const { state, onChange } = props;
  
  return (
    <form>
      <Dropdown value={state['position']} onChange={onChange('position')} title="Select Position" options={POSITIONS} />
      <Textbox value={state['name']} onChange={onChange('name')} title="Name" />
      <Dropdown value={state['language']} onChange={onChange('language')} title="Language" options={LANGUAGES} />
      <Textbox value={state['salary']} onChange={onChange('salary')} title="Salary" />
    </form>
  );
}

export default Form;
