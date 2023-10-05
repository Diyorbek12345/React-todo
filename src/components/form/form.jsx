import React from "react";
import style from "./form.module.css"

export const Form = ({ setData, edit, id, close }) => {
  const [inputs, setInputs] = React.useState({ firstName: "", lastName: "" });

  const changeInput = (e) => {
    setInputs((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const submit = (e) => {
    e.preventDefault();
    if (edit) {
      setData((p) =>
        p.map((item) => (item.id == id ? { ...inputs, id } : item))
      );
      close();

      return;
    }
    setData((p) => [...p, { ...inputs, id: Date.now() }]);
    setInputs({ firstName: "", lastName: "" });
  };

  return (
    <form onSubmit={submit}>
      <div className={style.wrapper}>
        <input
          className={style.input}
          onChange={changeInput}
          value={inputs.firstName}
          type="text"
          name="firstName"
          placeholder="Enter..."
        />
      </div>
      <div className={style.wrapper1}>
        <input
          className={style.input1}
          onChange={changeInput}
          value={inputs.lastName}
          type="text"
          name="lastName"
          placeholder="Enter..."
        />
      </div>

      <button className={style.btn} type="submit">
        Send
      </button>
    </form>
  );
};
