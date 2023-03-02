import React from 'react'
import Footer from '../../Footer'
// import './Profile.css'
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../../Firebase/firebase'
import { ToastContainer,toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function Profile() {

  const navigate = useNavigate();
  const logout = () => {
    toast.warning("logged out");
    signOut(auth)
      .then(() => {
        
        // alert("logged out");
        console.log(auth);
        sessionStorage.removeItem("user");
        
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <>
      <div>
        {/* {auth.currentUser.displayName}
        <button onClick={fetchPost}>hi</button> */}

        <button onClick={logout}>Logout</button>
      </div>
        <ToastContainer/>
      <Footer />
    </>
  )
}

export default Profile
