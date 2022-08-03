import React from "react";
import Login from "./Login/Login";
import Registeration from "./Registeration";
import SignUps from "./Login/SignUps";

function SignUp() {
  return (
    // <div className="login-form-container">
    //   <i class="fas fa-time" id="form-close"></i>
    //   <form>
    //     <h1>Login Here</h1>
    //     <input type="email" class="box" placeholder="Enter your email" />
    //     <input type="password" class="box" placeholder="Enter your password" />
    //     <input type="submit" value="login now" class="btn" />
    //     {/* <input type="checkbox" id="remember" /> */}
    //     {/* <label for="remember">Remember Me</label> */}
    //     {/* <p>Forgot Password? <a href='#'>Click Here</a></p> */}
    //     <p>
    //       Don't have account <a href="Registeration"> Resgister Now</a>
    //     </p>
    //   </form>
    // </div>

    <>
      {/* <Login /> */}
      <SignUps />
    </>
  );
}

export default SignUp;
