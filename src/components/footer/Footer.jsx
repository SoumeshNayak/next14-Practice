import React from 'react'
import styles from './footer.module.css'
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>SOUM</div>
      <div className={styles.text}>
        Soum creative thought agency @ All rights reserved.
      </div>
    </div>
  )
}

export default Footer
