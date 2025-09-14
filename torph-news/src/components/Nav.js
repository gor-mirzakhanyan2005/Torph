import React from 'react';
import styles from '../stylesheets/Nav.module.scss';
import { useAccount } from '../context/AccountContext';
import { useContext } from 'react';
import AccountMenu from './AccountMenu';
import { useOutletContext } from 'react-router';
import WhyUs from './WhyUs';

const Nav = ({region, setRegion}) => {
  const {account, setAccount} = useAccount();
  const {whyUs} = useOutletContext();

  return (
    <>
        {account ? <AccountMenu/> : null}
        <nav className={styles.navBg}>
            <ul className={styles.navUl}>
                <li className={styles.navLi}>
                    <button className={styles.navBtn} onClick={() => {setRegion("eu")}}>
                        EUROPE
                    </button>
                </li>
                <li className={styles.navLi}>
                    <button className={styles.navBtn} onClick={() => {setRegion("asia")}}>
                        ASIA
                    </button>
                </li>
                <li className={styles.navLi}>
                    <button className={styles.navBtn} onClick={() => {setRegion("us")}}>
                        N. AMERICA
                    </button>
                </li>
                <li className={styles.navLi}>
                    <button className={styles.navBtn} onClick={() => {setRegion("brazil")}}>
                        S. AMERICA
                    </button>
                </li>
                <li className={styles.navLi}>
                    <button className={styles.navBtn} onClick={() => {setRegion("africa")}}>
                        AFRICA
                    </button>
                </li>
                <li className={styles.navLi}>
                    <button className={styles.navBtn} onClick={() => {setRegion("australia")}}>
                        OCEANIA
                    </button>
                </li>
                <li>
                    <h3 className={styles.accountButton} onClick={() => {
                        setAccount(!account);
                        document.body.style.overflow = "hidden";
                        console.log(account);
                    }}>
                        Account
                    </h3>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default Nav