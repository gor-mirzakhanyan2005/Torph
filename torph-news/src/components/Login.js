import React from 'react';
import styles from '../stylesheets/Login.module.scss';
import { useNavigate } from 'react-router';
import {Link} from 'react-router';
import Top from './Top';
import { UserAuth } from '../context/AuthContext';
import { useState } from 'react';
import LoadingScreen from './LoadingScreen';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [loading, setLoading] = useState("");

  const {session, signInUser} = UserAuth();
  console.log(session);

  const handleSignIn = async(e) => {
    e.preventDefault();
    setLoading(true);
    if(email === "" || password === "" || repeatPassword === ""){
      alert("You must enter data into all fields!");
      return;
    }
    if(password !== repeatPassword){
      alert("Passwords must match!");
      setRepeatPassword("")
      return;
    }else{
      try{
        const result = await signInUser(email, password)

        if(result.success){
          navigate('/main')
        }
        }
      catch(error){
        console.error("There was an error:", error);
      }
      finally{
        setLoading(false);
      }
    }
  }

  return (
    <>
    {loading ? <LoadingScreen /> : null}
    <Top />
    <div className={styles.loginBackground}>
      <div className={styles.loginBox}>
      <input type="email" id="email" placeholder="Email" onChange={(e) => {
        setEmail(e.target.value)
      }}></input>
      <input type="text" id="password" placeholder="Password" onChange={(e) => {
        setPassword(e.target.value)
      }}></input>
      <input type="text" id="repeatpassword" placeholder="Repeat password" onChange={(e) => {
        setRepeatPassword(e.target.value)
      }}></input>
      <div className={styles.loginSignup}>
        <button type="submit" onClick={handleSignIn}>Sign in</button>
        <Link to="/signup">Not registered? Sign up</Link>
      </div>
      </div>
    </div>
    </>
  )
}

export default Login