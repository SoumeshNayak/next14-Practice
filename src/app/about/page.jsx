 import Image from 'next/image'
import React from 'react'
import styles from './about.module.css'
 const AboutPage = () => {
   return (
     <div className={styles.container}>
      <div className={styles.textConatiner}>
          <h2 className={styles.subTitle}> About Agency</h2>
          <h1 className={styles.title}>We Create digital ideas that are bigger,bolder,brave and better</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro necessitatibus provident neque reiciendis, molestias tempora dolorem recusandae exercitationem.!</p>
          <div className={styles.boxes}>
            <div className={styles.box}>
                <h1>10K+</h1>
                <p>year of experiance</p>
            </div>
            <div className={styles.box}>
                <h1>10K+</h1>
                <p>year of experiance</p>
            </div>
            <div className={styles.box}>
                <h1>10K+</h1>
                <p>year of experiance</p>
            </div>
          </div>
      </div>
      <div className={styles.imageConatiner}>
      <Image src='/about.png' alt='pic' fill className={styles.img} />
      </div> 
     </div>
   )
 }
 
 export default AboutPage
 