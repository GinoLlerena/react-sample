import React, { useState } from "react";
import Form from "./components/Form";
import ProgressBar from "./components/ProgressBar";
import curry from "lodash/fp/curry"
import "./styles.scss";

const defaultData = {
  position:'',
  salary:'',
  language:'',
  name:''
}

export default function App() {

  const [state, setState] = useState(defaultData);
  const onChange = (key, value) => {
      setState(data => ({...data, [key]: value}))
  }
  const onChangeCurrying = curry(onChange)
  const onCancel = () => setState(defaultData)

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className='container'>
        <ProgressBar state={state} />
        <Form state={state} onChange={onChangeCurrying} />
        <button type="button" onClick={onCancel} className="btn btn-primary float-left">Cancel</button>
        <button type="button"  className="btn btn-primary float-right">Submit</button>
      </div>

    </div>
  );
}
