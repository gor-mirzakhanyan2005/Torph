import React from 'react'
import styles from "../stylesheets/AboutUs.module.scss"
import { useOutletContext } from 'react-router'

const AboutUs = () => {
  const {aboutUs, setAboutUs} = useOutletContext();
  return (
    <div className={styles.aboutUsBg}>
            <div className={styles.aboutUsContainer}>
                <button onClick={() => setAboutUs(!aboutUs)}>
                    🞬
                </button>
                <h2>About us</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Phasellus eros lectus, efficitur ut felis id, fringilla tincidunt nisl. 
                    Mauris dapibus ligula nibh, sit amet tempor arcu commodo vitae. 
                    Praesent sit amet tincidunt eros. Donec id risus nec ligula interdum rhoncus. 
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                    Nam iaculis ut magna id mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                    Phasellus pulvinar tortor ante, vel dapibus ipsum commodo semper. 
                    Etiam convallis aliquam eros, in faucibus nisl congue sit amet. 
                    Sed ornare congue ligula eu convallis. 
                    Vestibulum dolor odio, dignissim id maximus vulputate, posuere vel dui. 
                    Sed quis libero nibh. Nullam ultrices elit ac sapien venenatis laoreet.
                </p>
                <h1>
                    The Torph Times
                </h1>
            </div>
        </div>

  )
}

export default AboutUs