import React from 'react'
import Top from './Top'
import styles from '../stylesheets/Donations.module.scss'
import logo from '../assets/tdlogo.png'
import Footer from './Footer'
import supabase from '../config/supabaseClient'
import { useState, useEffect } from 'react'
import PrimaryNav from './PrimaryNav'

const Donations = () => {
    const [donationCards, setDonationCards] = useState([]);

    useEffect(() => {
        const getDonationCards = async() => {
        const {data, error} = await supabase.from("DonationCardInfo").select("*");
        setDonationCards(data);
        console.log(data);
    }

    getDonationCards();
    }, [])
  return (
    <>
    <Top />
    <PrimaryNav />
    <div className={styles.donationBg}>
        <div className={styles.donationHeader}>
            <div className={styles.donationLogo}>
                <img src={logo} />
            </div>
            <div className={styles.donationCallToAction}>
                <p>Torph believes in supporting causes that aim to improve the world or help its people.</p>
                <button>Donate now</button>
            </div>
        </div>
        <div className={styles.donationCardSection}>
            <ul className={styles.donationSectionList}>
                {donationCards.map((card) => {
                    return(
                        <li>
                            <div className={styles.donationCard}>
                                <img src={card.image} />
                                    <div>
                                        <h2>
                                            {card.name}
                                        </h2>
                                        <p>
                                            {card.description}
                                        </p>
                                    </div>
                            </div>
                            <div className={styles.slider}>
                                <h2>Visit</h2>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Donations