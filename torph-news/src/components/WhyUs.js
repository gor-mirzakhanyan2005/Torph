import React from 'react'
import styles from '../stylesheets/WhyUs.module.scss'
import { useOutletContext } from 'react-router'

const WhyUs = () => {
  const {whyUs, setWhyUs} = useOutletContext();
  return (
    <div className={styles.whyUsBg}>
        <div className={styles.whyUsContainer}>
            <button onClick={() => setWhyUs(!whyUs)}>
                🞬
            </button>
            <h2>Why Us?</h2>
            <p>
                Torph News advocates for freedom of the press and fights for the right of the citizenry <br />
                to know the truth of the world. We have no filter, we will not be bought, and we <br />
                will continue to provide information as long as the Internet exists.
            </p>
            <h1>
                The Torph Times
            </h1>
        </div>
    </div>
  )
}

export default WhyUs