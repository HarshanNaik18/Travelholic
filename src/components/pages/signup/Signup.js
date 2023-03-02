import React, { useState } from 'react'
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../../../Firebase/firebase'
import { collection , addDoc} from 'firebase/firestore'
import { db } from '../../../Firebase/firebase'
import { ToastContainer,toast } from 'react-toastify';
function Signup() {
    const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const passwordformat = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [repassword, setRePassword] = useState("");
    const [submitButtonDisable, setSubmitButtonDisable] = useState(false);

    const signUp = async (e) => {
        e.preventDefault();

        var resName = 0;
        for (var i = 0; i < (name).length; i++) {
            if ((name).charAt(i) >= '0' && (name).charAt(i) <= '9') {
                resName = 1;
                break;
            }
        }
        if (!name || !email || !phone || !password || !repassword) {
            // setErrorMsg("Fill all fields");
            toast.warning("Fill all fields");
            return;
        }
        else if (resName !== 0) {
            // setErrorMsg("Invalid name");
            toast.warning("Invalid name");
            resName = 0;
            return;
        }
        else if (!(email).match(mailformat)) {
            // setErrorMsg("Invalid email id");
            toast.warning("Invalid email id");
            return;
        }
        else if (phone < 6000000000 || phone > 9999999999) {
            // setErrorMsg("Invalid Phone number");
            toast.warning("Invalid Phone number");
            return;
        }
        else if (!(password).match(passwordformat)) {
            // setErrorMsg("Password should contain atlest 8 charecters with captital letter, small letters and special charecter.");
            toast.warning("Password should contain atlest 8 charecters with captital letter, small letters and special charecter.");
            return;
        }
        else if (password !== repassword) {
            // setErrorMsg("Password is not matching");
            toast.warning("Password is not matching");
            return;
        }
        setSubmitButtonDisable(false);

        createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCreadential) => {
                setSubmitButtonDisable(false);
                // console.log(userCreadential);
                const user = userCreadential.user;
                await updateProfile(
                    user, {
                    displayName: name,
                    // photoURL : 
                });
                if (auth) {
                    try {
                        await addDoc(collection(db, "users"), {
                          name : name,
                          email : email,
                          phone : phone
                        });
                        toast.success("Login was successfull");
                        // console.log("Document written with ID: ", docRef.id);
                      } catch (e) {
                        console.error("Error adding document: ", e);
                      }  
                    navigate("/");
                }
            })
            .catch((error) => {
                // setErrorMsg("Already user exist");
                toast.error("Already user exist");
                console.log(error);
            });
        setSubmitButtonDisable(false);

    }

    return (
        <>
            <div className='wrapper'>
                <h1>SignUp</h1>
                <form method='post'>
                    <input type='text' id='name' placeholder='Name' onChange={(event) => setName(event.target.value)}></input>
                    <input type='email' id='username' placeholder='Username/email' onChange={(event) => setEmail(event.target.value)}></input>
                    <input type='number' id='phonenumber' placeholder='Phone Number' onChange={(event) => setPhone(event.target.value)}></input>
                    <input type='password' id='password' placeholder='Password' onChange={(event) => setPassword(event.target.value)}></input>
                    <input type='password' id='repassword' placeholder='Re-Enter Password' onChange={(event) => setRePassword(event.target.value)}></input>
                </form>

                <button onClick={signUp} disabled={submitButtonDisable} >Sign Up</button>
                <div className='member'>Already a member?<Link to="/login"> Login Here</Link>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}

export default Signup;