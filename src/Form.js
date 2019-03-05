import React from "react";

import useForm from "./useForm";

const form = () => {
  const login = () => {
    console.log(values);
  };

  const { values, handleChange, handleSubmit } = useForm(login);

  return (
    <div className="section is-fullheight">
      <div className="container">
        <div className="column is-4 is-offset-4">
          <div className="box">
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label className="label">Email Address</label>
                <div className="control">
                  <input onChange={handleChange} className="input" type="email" name="email" required />
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input onChange={handleChange} className="input" type="password" name="password" required />
                </div>
              </div>
              <button type="submit" className="button is-block is-info is-fullwidth">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default form;
