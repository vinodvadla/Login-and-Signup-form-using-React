import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./signup.css";
import { useState } from "react";
function App() {
  let [name, setname] = useState("");
  let [mail, setmail] = useState("");
  let [pass, setpass] = useState("");
  let [cpass, setcpass] = useState("");
  let [check, setcheck] = useState(false);
  let [data, setdata] = useState([]);
  const changeName = (e) => {
    setname(e.target.value);
    console.log(name);
  };
  const changeMail = (e) => {
    setmail(e.target.value);
    console.log(mail);
  };
  const changePass = (e) => {
    setpass(e.target.value);
    console.log(pass);
  };
  const changeConfirm = (e) => {
    setcpass(e.target.value);
    console.log(cpass);
  };

  const checkvals = (e) => {
    e.preventDefault();
    if (name === "") {
      alert("Your name must be filled");
    }
    if (mail === "") {
      alert("Your Mail not be Empty");
    }
    if (pass === "") {
      alert("Please Create Your password");
    }
    if (check !== true) {
      alert("Please confirm terms and conditions");
    }
    if (cpass === "") {
      alert("please confirm your password");
    } else {
      if (pass !== cpass) {
        alert("plese confirm password is incorrect");
      }
    }

    if (
      check === true &&
      pass === cpass &&
      pass !== "" &&
      cpass !== "" &&
      name !== "" &&
      mail !== ""
    ) {
      let dt = {
        Name: name,
        Mail: mail,
        password: pass,
      };
      setdata([...data, dt]);
      setcpass("");
      setname("");
      setmail("");
      setpass("");
    }
    {
      console.log(data);
    }
  };
  const changeCheck = () => {
    if (check === false) {
      setcheck(true);
      console.log(check);
    } else {
      setcheck(false);
      console.log(check);
    }
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Signup
              name={name}
              mail={mail}
              pass={pass}
              cpass={cpass}
              changeName={changeName}
              changeMail={changeMail}
              changePass={changePass}
              changeCpass={changeConfirm}
              checkvals={checkvals}
              changeCheck={changeCheck}
            />
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
