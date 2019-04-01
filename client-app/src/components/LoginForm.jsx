import React from "react";

export default props => {
  const { toggle, show, email, password, onChange, onSubmit, onClick } = props;
  const showLogin = !show && toggle;
  return (
    showLogin && (
      <div className="user-form-container">
        <div className="inner-form-container">
          <form>
            <div id="x" onClick={() => props.history.push(`/`)}>
              X
            </div>
            <img src="https://i.imgur.com/ypBE1hi.png" alt="" />
            <h2>Log in</h2>
            <div>
              <input
                type="text"
                onChange={onChange}
                name="email"
                id="email"
                value={email}
                placeholder="Email"
              />
            </div>
            <div>
              <input
                type="password"
                onChange={onChange}
                name="password"
                id="password"
                value={password}
                placeholder="Password"
              />
            </div>
            <button type="submit" onClick={onSubmit}>
              Sign In
            </button>
          </form>
          <div className="login-bottom">
            <div id="hover" type="submit" onClick={onClick}>
              Not a member? <u>Sign Up!</u>
            </div>
            <h5>or</h5>
            <div id="hover">Continue without login</div>
          </div>
        </div>
      </div>
    )
  );
};
