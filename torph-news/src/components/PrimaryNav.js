import React from 'react'
import styles from '../stylesheets/PrimaryNav.module.scss'
import { useOutletContext, useNavigate } from 'react-router';
import Donations from './Donations';


const PrimaryNav = () => {
const {whyUs, setWhyUs, aboutUs, setAboutUs, contact, setContact} = useOutletContext();
  const navigate = useNavigate();
  return (
    <>
        <div className={<Donations /> ? styles.greenNavBg : styles.redNavBg}>
            <ul>
                <li className={styles.redNavLi}>
                    <p>FIND/POST JOBS</p>
                </li>
                <li className={styles.redNavLi}>
                    <p>PLACE AN AD</p>
                </li>
                <li className={styles.redNavLi}>
                    <p onClick={() => {
                        setWhyUs(!whyUs);
                        console.log(whyUs);
                    }}>WHY US?</p>
                </li>
                <li className={styles.redNavLi}>
                    <p onClick={() => {
                        setAboutUs(!aboutUs);
                        console.log(aboutUs);
                    }}>ABOUT US</p>
                </li>
                <li className={styles.redNavLi}>
                    <p onClick={() => {
                        setContact(!contact);
                        console.log(contact);
                    }}>CONTACT</p>
                </li>
                <li className={styles.redNavLi}>
                    <p>LEGACY ARTICLES</p>
                </li>
                <li className={styles.redNavLi}>
                    <p onClick={() => {
                        navigate("/partnerships")
                    }}>PARTNERSHIPS</p>
                </li>
                <li className={styles.redNavLi}>
                    <p onClick={() => {
                        navigate("/donations")
                    }}>DONATIONS</p>
                </li>
            </ul>
        </div>
    </>
  )
}

export default PrimaryNav