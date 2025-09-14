import React from 'react';
import styles from '../stylesheets/Login.module.scss';
import { Link } from 'react-router';
import { useNavigate } from 'react-router';
import { UserAuth } from '../context/AuthContext';
import { useState } from 'react';
import Top from './Top';
import LoadingScreen from './LoadingScreen';

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [loading, setLoading] = useState("");

  const {session, signUpNewUser} = UserAuth();
  console.log(session);

  const handleSignup = async(e) => {
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
        const result = await signUpNewUser(email, password)

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
    <form onSubmit={handleSignup} className={styles.loginBackground}>
      <div className={styles.loginBox}>
      <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" placeholder="Email"></input>
      <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" placeholder="Password"></input>
      <input onChange={(e) => setRepeatPassword(e.target.value)} type="password" id="repeat password" placeholder="Repeat password"></input>
      <div className={styles.loginSignup}>
        <button type="submit" >Sign up</button>
        <Link to="/login">Already have an account? Sign in</Link>
      </div>
      </div>
    </form>
    </>
  )
}

export default SignUp