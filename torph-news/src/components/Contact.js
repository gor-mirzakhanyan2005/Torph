import React from 'react'
import styles from '../stylesheets/Contact.module.scss'
import { useOutletContext } from 'react-router'

const Contact = () => {
  const {contact, setContact} = useOutletContext();
  return (
    <div className={styles.contactBg}>
        <div className={styles.contactContainer}>
            <h1>
                The Torph Times
            </h1>
            <button onClick={() => setContact(!contact)}>
                🞬
            </button>
            <h2>Contact</h2>
            <div className={styles.tooltip} onClick={() => {
                    navigator.clipboard.writeText("thetorph@startmail.com");
                    alert("Copied to clipboard!");
                }}>
                Email: thetorph@startmail.com
                <span className={styles.tooltipText}>Copy to clipboard</span>
            </div>
        </div>
    </div>
  )
}

export default Contact