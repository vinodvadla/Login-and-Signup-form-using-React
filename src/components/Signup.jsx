import React from "react";
import { Link } from "react-router-dom";
const Signup = (props) => {
  return (
    <div className="myapp">
      <div className="sign-up">
        <div className="heading">
          <h2>Signup</h2>
        </div>
        <div className="main">
          <input
            type="text"
            placeholder="Enter your Name"
            className="input"
            value={props.name}
            onChange={props.changeName}
          />
          <input
            type="text"
            placeholder="Enter your E-mail"
            className="input"
            value={props.mail}
            onChange={props.changeMail}
          />
          <input
            type="text"
            placeholder="Create Password"
            className="input"
            value={props.pass}
            onChange={props.changePass}
          />
          <input
            type="text"
            placeholder="Confirm Password"
            className="input"
            value={props.cpass}
            onChange={props.changeCpass}
          />

          <label htmlFor="checkbox" className="ckeck">
            <input type="checkbox" onChange={props.changeCheck}/>
            Accept terms & conditions !
          </label>
          <button className="btn" onClick={props.checkvals}>SignUp</button>
          <label htmlFor="login">
            Already have an accout ?<Link to="/login">Login</Link>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Signup;
