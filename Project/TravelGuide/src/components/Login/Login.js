import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import SIgn_img from "./SIgn_img";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });

  const [data, setData] = useState([]);
  console.log(inpval);

  const getdata = (e) => {
    // console.log(e.target.value);

    const { value, name } = e.target;
    // console.log(value,name);

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const getuserArr = localStorage.getItem("travelguide");
    console.log(getuserArr);

    const { email, password } = inpval;
    if (email === "") {
      toast.error("email field is requred", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.error("plz enter valid email addres", {
        position: "top-center",
      });
    } else if (password === "") {
      toast.error("password field is requred", {
        position: "top-center",
      });
    } else if (password.length < 5) {
      toast.error("password length greater five", {
        position: "top-center",
      });
    } else {
      if (getuserArr && getuserArr.length) {
        const userdata = JSON.parse(getuserArr);
        const userlogin = userdata.filter((el, k) => {
          return el.email === email && el.password === password;
        });

        if (userlogin.length === 0) {
          alert("invalid details");
        } else {
          console.log("user login succesfulyy");

          localStorage.setItem("user_login", JSON.stringify(userlogin));

          history("/packages");
        }
      }
    }
  };

  return (
    <>
      <div className="login-form-container">
        <i class="fas fa-time" id="form-close"></i>
        <form>
          <h1>Login Here</h1>
          <input
            type="email"
            name="email"
            onChange={getdata}
            placeholder="Enter email"
            class="box"
          />
          <input
            type="password"
            name="password"
            onChange={getdata}
            placeholder="Password"
            class="box"
          />
          <input onClick={addData} type="submit" class="btn" />
          {/* <input type="checkbox" id="remember" /> */}
          {/* <label for="remember">Remember Me</label> */}
          {/* <p>Forgot Password? <a href='#'>Click Here</a></p> */}
          <p>
            Don't have account <NavLink to="/SignUp"> Resgister Now</NavLink>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
