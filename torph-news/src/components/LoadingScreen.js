import React from 'react'
import styles from "../stylesheets/LoadingScreen.module.scss"

const LoadingScreen = () => {
  return (
    <div className={styles.loadingScreenBg}>
        <div className={styles.loadingBody}>
            <span class={styles.loader}></span>
        </div>
    </div>
  )
}

export default LoadingScreen