import React, { useState } from 'react';
import styles from '../stylesheets/Top.module.scss';
import { useOutletContext } from 'react-router';
import WhyUs from './WhyUs';
import AboutUs from './AboutUs';
import Contact from './Contact';
import Donations from './Donations';

const Top = () => {
  const {whyUs, aboutUs, contact} = useOutletContext();
  return (
    <>
    {contact ? <Contact /> : null}
    {aboutUs ? <AboutUs/> : null}
    {whyUs ? <WhyUs/> : null}
    <div className={<Donations /> ? styles.topBackgroundGreen : styles.topBackgroundRed}>
        <h1>
            The Torph Times
        </h1>
    </div>
    </>
  )
}

export default Top