import React from "react";

export default props => {
  const {
    show,
    toggle,
    username,
    email,
    password,
    onChange,
    onSubmit,
    onClick,
    submitButtonText,
    backButtonText,
    passwordAsk,
    title,
    userData
  } = props;

  const showRegister = !show && !toggle;
  console.log("register user form props", userData);
  return (
    showRegister && (
      <div className="user-form-container" id="register-container">
        <div className="inner-form-container">
          <form id="register-form">
            <div id="x">X</div>
            <img src="https://i.imgur.com/ypBE1hi.png" alt="" />
            <h2>{title}</h2>
            <div className="text-input-container">
              <div className="text-input">
                <input
                  type="text"
                  onChange={onChange}
                  name="email"
                  id="email"
                  value={email}
                  placeholder="Email"
                />
              </div>
              <div className="text-input">
                <input
                  type="text"
                  onChange={onChange}
                  name="username"
                  id="username"
                  value={userData ? userData.user : username}
                  placeholder="Username"
                />
              </div>
            </div>
            <button type="submit" onClick={onSubmit}>
              Submit Edit
            </button>
          </form>
          <div className="login-bottom">
            <div id="hover" onClick={onClick} />
          </div>
        </div>
      </div>
    )
  );
};
