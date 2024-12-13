import React from 'react'
import styles from './postCard.module.css'
import Image from 'next/image'
import Link from 'next/link'
const PostCard = ({post}) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
            <Image src="https://images.pexels.com/photos/29632969/pexels-photo-29632969/free-photo-of-autumn-hiking-adventure-in-trondelag-norway.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt='' fill className={styles.img}/>
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link className={styles.link} href={`/blog/${post.id}`}>Read More</Link>
      </div>
    </div>
  )
}

export default PostCard
