import React from "react";
import "./InputField.css";
const InputField = ({
  setLetter,
  letter,
  CreateNotes,
  describe,
  setDescribe,
}) => {
  return (
    <div className="InputField">
      <div className="card">
        <section>
          <h1 style={{ textAlign: "center" }}>Notes!</h1>
        </section>
        <div className="box">
          <input
            maxLength={25}
            value={letter}
            type="text"
            required
            onChange={(e) => setLetter(e.target.value)}
          />
          <span>Title</span>
          <i></i>
        </div>
        <div className="box">
          <input
            maxLength={55}
            value={describe}
            type="text"
            required
            onChange={(e) => setDescribe(e.target.value)}
          />
          <span>Description</span>
          <i></i>
        </div>
        <button
          type="button"
          disabled={letter.length && describe.length ? false : true}
          className={
            letter.length && describe.length ? "submit-btn" : "submit-btn-off"
          }
          onClick={() => CreateNotes()}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default InputField;

{
  /* <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" /> */
}
