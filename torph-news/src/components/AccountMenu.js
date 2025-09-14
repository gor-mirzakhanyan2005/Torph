import React from 'react'
import ReactDom from 'react-dom'
import styles from "../stylesheets/AccountMenu.module.scss"
import { useAccount } from '../context/AccountContext'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router'

const AccountMenu = () => {
  const navigate = useNavigate();
  const {account, setAccount} = useAccount();
  const {session, signOut} = UserAuth();

  return ReactDom.createPortal(
    <>
        <div className={styles.accountMenuBackground}>
          <div className={styles.accountMenuBody}>
            <div className={styles.emailAndExit}>
              <h3>placeholder@phmail.com</h3>
              <button onClick={() => {
              setAccount(!account);
              document.body.style.overflow = "scroll";
            }}>🞬</button>
            </div>
            <hr/>
            <h2>Thank you for being here with us.</h2>
            <button className={styles.logoutButton} onClick={() => {
              signOut();
              navigate("/login")
            }}>Log out</button>
          </div>
        </div>
    </>,
    document.getElementById("portal")
  )
}

export default AccountMenu