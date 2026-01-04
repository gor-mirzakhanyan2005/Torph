import React from 'react';
import styles from '../stylesheets/Footer.module.scss';
import { useOutletContext, useNavigate } from 'react-router';

const Footer = () => {
  const {whyUs, setWhyUs, aboutUs, setAboutUs, contact, setContact} = useOutletContext();
  const navigate = useNavigate();
  return (
    <>
        <footer className={styles.footer}>
            <h1>THE TORPH TIMES</h1>
                <ul className={styles.footerNav}>
                    <li>
                        <p>FIND/POST JOBS</p>
                    </li>
                    <li>
                        <p>PLACE AN AD</p>
                    </li>
                    <li>
                        <p onClick={() => {
                            setWhyUs(!whyUs);
                            console.log(whyUs);
                        }}>WHY US?</p>
                    </li>
                    <li>
                        <p onClick={() => {
                            setAboutUs(!aboutUs);
                            console.log(aboutUs);
                        }}>ABOUT US</p>
                    </li>
                    <li>
                        <p onClick={() => {
                            setContact(!contact);
                            console.log(contact);
                        }}>CONTACT</p>
                    </li>
                    <li>
                        <p>LEGACY ARTICLES</p>
                    </li>
                    <li>
                        <p onClick={() => {
                            navigate("/partnerships")
                        }}>PARTNERSHIPS</p>
                    </li>
                    <li>
                        <p>DONATIONS</p>
                    </li>
                </ul>
        </footer>
    </>
  )
}

export default Footer