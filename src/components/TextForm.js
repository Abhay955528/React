import React, { useState } from "react";

export default function TextForm(props) {
  let [currnetValue, nextValue] = useState("");

  const changetoUpperCase = () => {
    const inputValue = currnetValue.toUpperCase();
    nextValue(inputValue);
  };

  const changetoLowerCase = () => {
    const inputValue = currnetValue.toLowerCase();
    nextValue(inputValue);
  };

  const clearText = () => {
    let clear = " ";
    nextValue(clear);
  };

  const changetoFont = () => {
    let style = currnetValue.split(" ").length;
    console.log(style);
    nextValue(style);
  };

  const handelerOnChange = (event) => {
    nextValue(event.target.value);
  };

  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control" id="myBox" rows="8" value={currnetValue} onChange={handelerOnChange}></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={changetoUpperCase} >Convert to UpperCase</button>
      <button className="btn btn-primary mx-1" onClick={changetoLowerCase} >Convert to LowerCase</button>
      <button className="btn btn-primary mx-1" onClick={clearText} >Clear Text</button>
      <button className="btn btn-primary mx-1" onClick={changetoFont} >Change to italic</button>
    </div>

    <div className="conatiner">
      <h1>your text summary</h1>
      <p>{currnetValue.split(" ").length} words and {currnetValue.length} Character</p>
      <p>{0.008 * currnetValue.split(" ").length} Minutes read </p>
    </div>
    </>
  );
}
