import React, { useState } from 'react';
import '../signup/Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../../Firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import ReFresh from '../../Navbar';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ErrorMsg, setErrorMsg] = useState("");
  const [submitButtonDisable, setSubmitButtonDisable] = useState(false);

  const login = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMsg("Fill all fields");
      return;
    }
    setSubmitButtonDisable(true);

    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        setSubmitButtonDisable(false);
        sessionStorage.setItem("user", JSON.stringify(userCredential.user));
        toast.success("Login was successful");
        navigate("/");
        console.log("logged in");
        // ReFresh();
      })
      .catch((error) => {
        setSubmitButtonDisable(false);
        toast.error("Invalid username or password", {
          autoClose: 2000,
          pauseOnHover: false,
          closeOnClick: true
        });
        setErrorMsg("Inavlid username or password");
        console.log(error);
      })
  }

  return (
    <div className='wrapper'>
      <h1>Login</h1>
      <form action='/' method='post'>
        <input type='email' id='username' placeholder='Username/email' onChange={(event) => setEmail(event.target.value)}></input>
        <input type='password' id='password' placeholder='Password' onChange={(event) => setPassword(event.target.value)}></input>
      </form>
      <b className='errMsg' >{ErrorMsg}</b>
      <button disabled={submitButtonDisable} onClick={login}>Login</button>
      <div className='member'>Not a member?<Link to='/signup' > Sign in Here</Link>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Login;