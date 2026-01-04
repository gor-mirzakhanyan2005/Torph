import React, { useEffect, useState } from 'react'
import styles from "../stylesheets/Partnerships.module.scss"
import supabase from '../config/supabaseClient'
import Top from './Top'
import Footer from './Footer'
import PrimaryNav from './PrimaryNav'

const PartnerShips = () => {
    const [partners, setPartners] = useState([]);

    useEffect(() => {
        const getPartners = async() => {
            const {data, error} = await supabase.from("Partners").select("*");
            setPartners(data);

        console.log(data);
        }
        getPartners();
    }, [partners])
  return (
    <>
        <Top />
        <PrimaryNav />
        <div className={styles.partnershipsBg}>
            <div className={styles.partnershipsApplyContainer}>
                <h2>It's better together</h2>
                <p>
                    Torph News collaborates with fellow newspapers and independent journalists from all over the world to seek the truth, organize charities & relief efforts, and to promote free speech. 
                </p>
                <button>
                    Apply
                </button>
            </div>

            <div className={styles.partnershipsTitleBg}>
                <h1 className={styles.parntershipsTitle}>Our Partners</h1>
                <div className={styles.partnershipsCount}>
                    <h2>We currently have {partners.length} partners</h2>
                </div>
            </div>

                <ul className={styles.partnersList}>
                    {partners.map((partner) => {
                        return (
                            <div className={styles.partnerCard}>
                                <img src={partner.logo} />
                                <div>
                                    <h2>
                                        {partner.name}
                                    </h2>
                                    <p>
                                        {partner.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </ul>
        </div>
        <Footer />
    </>
  )
}

export default PartnerShips