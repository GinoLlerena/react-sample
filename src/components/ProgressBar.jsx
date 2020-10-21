import React from "react";
import flow from "lodash/fp/flow";
import filter from "lodash/fp/filter";
import get from "lodash/fp/get";
import keys from "lodash/fp/keys";
import curry from "lodash/fp/curry";

function ProgressBar(props) {
  const { state } = props;

  const getValidItem = (state, key) => state[key]?.length > 0;
  const getValidItemCurrying = curry(getValidItem);

  const tot = flow(
    keys,
    filter(getValidItemCurrying(state)),
    get("length")
  )(state);

  return (
    <div className="progressbar">
      <div className={tot >= 1 ? "progressbar-item" : "default"}></div>
      <div className={tot >= 2 ? "progressbar-item" : "default"}></div>
      <div className={tot >= 3 ? "progressbar-item" : "default"}></div>
      <div className={tot === 4 ? "progressbar-item": "default"}></div>
    </div>
  );
}

export default ProgressBar;
